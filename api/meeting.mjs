// /api/meeting: the contact chat books a video call on Jean's Google Calendar, without leaving the page.
//   GET   free start times for the next few working days, as UTC ISO strings: { slots: [...] }
//   POST  { start, name, email, title, fields: [[label, value], ...] } books one of them. The event gets a
//         Google Meet link and the visitor as a guest, so Google emails them the invite.
// No dependencies: plain fetch to the Calendar API (https://developers.google.com/calendar/api).
// Environment (Vercel project settings, or .env.local for src/serve.mjs):
//   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN  from `node src/google-auth.mjs`; without
//                    them GET answers 503 and the chat simply doesn't offer a meeting
//   GOOGLE_CALENDARS calendars checked for conflicts, comma-separated (default "primary"); the meeting
//                    goes on the first one

const TZ = "America/Sao_Paulo";
const DAYS = [1, 2, 3, 4, 5];           // Monday to Friday
const OPEN = 8 * 60, CLOSE = 18 * 60;   // minutes after midnight, in TZ
const LENGTH = 15, STEP = 30;           // a 15-minute call, offered every half hour
const NOTICE = 3 * 60;                  // nothing sooner than 3 hours from now
const AHEAD = 5;                        // working days on offer
const CAP = 10;                         // upcoming meetings booked from the site, at most
const SOURCE = "adscendo-site";         // tags the events this endpoint creates
const ALLOWED = /^https:\/\/(adscendo\.pro|www\.adscendo\.pro|adscendo-site(-[\w-]+)?\.vercel\.app)$|^http:\/\/localhost(:\d+)?$/;
const API = "https://www.googleapis.com/calendar/v3";

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const json = (status, body) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const calendars = () => (process.env.GOOGLE_CALENDARS || "primary").split(",").map(s => s.trim()).filter(Boolean);

// Wall-clock parts of a moment in TZ, and the moment for a wall-clock time in TZ (via TZ's offset then).
const parts = d => Object.fromEntries(new Intl.DateTimeFormat("en-US", {
  timeZone: TZ, hourCycle: "h23", weekday: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric",
}).formatToParts(d).map(p => [p.type, p.value]));
function at(y, m, d, minutes) {
  const guess = Date.UTC(y, m - 1, d, 0, minutes);
  const p = parts(new Date(guess));
  const offset = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute) - guess;
  return new Date(guess - offset);
}

// Every start time the rules allow, before looking at the calendar.
function candidates(now = new Date()) {
  const out = [], earliest = now.getTime() + NOTICE * 60e3;
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0, days = 0; days < AHEAD && i < 21; i++) {
    const p = parts(new Date(now.getTime() + i * 864e5));
    if (!DAYS.includes(week.indexOf(p.weekday))) continue;
    days++;
    for (let m = OPEN; m + LENGTH <= CLOSE; m += STEP) {
      const start = at(+p.year, +p.month, +p.day, m);
      if (start.getTime() >= earliest) out.push(start);
    }
  }
  return out;
}

async function token() {
  const { GOOGLE_CLIENT_ID: id, GOOGLE_CLIENT_SECRET: secret, GOOGLE_REFRESH_TOKEN: refresh } = process.env;
  if (!id || !secret || !refresh) return null;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: new URLSearchParams({ client_id: id, client_secret: secret, refresh_token: refresh, grant_type: "refresh_token" }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}
async function google(access, path, init = {}) {
  const res = await fetch(API + path, {
    ...init, headers: { Authorization: `Bearer ${access}`, "Content-Type": "application/json", ...init.headers },
  });
  if (!res.ok) throw new Error(`${init.method || "GET"} ${path.split("?")[0]} ${res.status}: ${await res.text()}`);
  return res.json();
}

// Start times that don't touch anything on the calendars.
async function free(access) {
  const all = candidates();
  if (!all.length) return [];
  const timeMin = all[0].toISOString(), timeMax = new Date(all.at(-1).getTime() + LENGTH * 60e3).toISOString();
  const fb = await google(access, "/freeBusy", {
    method: "POST", body: JSON.stringify({ timeMin, timeMax, items: calendars().map(id => ({ id })) }),
  });
  const busy = Object.values(fb.calendars || {}).flatMap(c => c.busy || [])
    .map(b => [Date.parse(b.start), Date.parse(b.end)]);
  return all.filter(s => {
    const a = s.getTime(), b = a + LENGTH * 60e3;
    return !busy.some(([x, y]) => x < b && a < y);
  });
}

export async function GET() {
  try {
    const access = await token();
    if (!access) return json(503, { slots: [] });
    return json(200, { slots: (await free(access)).map(d => d.toISOString()), minutes: LENGTH });
  } catch (err) {
    console.error(`[meeting] ${err}`);
    return json(502, { slots: [] });
  }
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED.test(origin)) return json(403, { success: false });

  let body;
  try { body = await request.json(); } catch { return json(400, { success: false }); }
  const name = str(body?.name, 60), email = str(body?.email, 200).toLowerCase(), start = str(body?.start, 40);
  const title = str(body?.title, 120) || `Adscendo + ${name}`;
  const fields = (Array.isArray(body?.fields) ? body.fields : []).slice(0, 12)
    .map(f => [str(f?.[0], 40), str(f?.[1], 1000)]).filter(([k, v]) => k && v);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || Number.isNaN(Date.parse(start))) return json(400, { success: false });

  try {
    const access = await token();
    if (!access) return json(503, { success: false });
    const cal = encodeURIComponent(calendars()[0]);

    // One upcoming meeting per email (a second request answers with the one already booked), and at most
    // CAP from the site at a time, so a script can't fill the calendar.
    const upcoming = (await google(access, `/calendars/${cal}/events?${new URLSearchParams({
      privateExtendedProperty: `source=${SOURCE}`, timeMin: new Date().toISOString(), singleEvents: "true", maxResults: "50",
    })}`)).items?.filter(e => e.status !== "cancelled") || [];
    const booked = upcoming.find(e => e.extendedProperties?.private?.email === email);
    if (booked) return json(409, { success: false, error: "exists", start: booked.start?.dateTime });
    if (upcoming.length >= CAP) return json(409, { success: false, error: "full" });

    // The time must still be one the rules allow and the calendar has free, checked again right now.
    const when = (await free(access)).find(d => d.getTime() === Date.parse(start));
    if (!when) return json(409, { success: false, error: "taken" });

    const event = await google(access, `/calendars/${cal}/events?conferenceDataVersion=1&sendUpdates=all`, {
      method: "POST",
      body: JSON.stringify({
        summary: title,
        description: fields.map(([k, v]) => `${k}: ${v}`).join("\n"),
        start: { dateTime: when.toISOString(), timeZone: TZ },
        end: { dateTime: new Date(when.getTime() + LENGTH * 60e3).toISOString(), timeZone: TZ },
        attendees: [{ email, displayName: name }],
        conferenceData: { createRequest: { requestId: crypto.randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } } },
        extendedProperties: { private: { source: SOURCE, email } },
        guestsCanModify: false,
      }),
    });
    return json(200, { success: true, start: when.toISOString(), meet: event.hangoutLink || "" });
  } catch (err) {
    console.error(`[meeting] ${err}\n${name} <${email}> ${start}`);
    return json(502, { success: false });
  }
}
