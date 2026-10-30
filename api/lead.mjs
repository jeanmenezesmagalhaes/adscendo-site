// POST /api/lead: the contact chat's "Send". Emails the summary to Jean through Resend (https://resend.com).
// No dependencies. Environment (Vercel project settings, or .env.local for src/serve.mjs):
//   RESEND_API_KEY  required; without it the lead is only logged and the chat falls back to WhatsApp
//   LEAD_TO         inbox that receives the leads (default below)
//   LEAD_FROM       sender; until a domain is verified in Resend it must be onboarding@resend.dev, and then
//                   Resend only delivers to the email of the Resend account itself
// Body: { subject, replyTo, fields: [[label, value], ...] }. The visitor's email goes in Reply-To, so
// answering the email answers the lead.

const TO = "jeanmenezesmagalhaes@icloud.com";
const FROM = "Adscendo site <onboarding@resend.dev>";
const ALLOWED = /^https:\/\/(adscendo\.com|www\.adscendo\.com|adscendo-site(-[\w-]+)?\.vercel\.app)$|^http:\/\/localhost(:\d+)?$/;

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const json = (status, body) => Response.json(body, { status });

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED.test(origin)) return json(403, { success: false });

  let body;
  try { body = await request.json(); } catch { return json(400, { success: false }); }
  const subject = str(body?.subject, 150) || "New lead";
  const replyTo = str(body?.replyTo, 200);
  const fields = (Array.isArray(body?.fields) ? body.fields : []).slice(0, 12)
    .map(f => [str(f?.[0], 40), str(f?.[1], 4000)]).filter(([k, v]) => k && v);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(replyTo) || !fields.length) return json(400, { success: false });

  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="8" style="border-collapse:collapse;font:15px/1.5 -apple-system,Segoe UI,sans-serif">${
    fields.map(([k, v]) => `<tr><th align="left" valign="top" style="color:#666;font-weight:600;white-space:nowrap">${esc(k)}</th><td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join("")
  }</table>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn(`[lead] RESEND_API_KEY not set, lead not emailed:\n${subject}\n${text}`);
    return json(503, { success: false });
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || FROM, to: [process.env.LEAD_TO || TO],
        reply_to: replyTo, subject, text, html,
      }),
    });
    if (!res.ok) {
      console.error(`[lead] Resend ${res.status}: ${await res.text()}\n${subject}\n${text}`);
      return json(502, { success: false });
    }
    return json(200, { success: true });
  } catch (err) {
    console.error(`[lead] ${err}\n${subject}\n${text}`);
    return json(502, { success: false });
  }
}
