// All copy for the site, in English (primary, served at /) and Portuguese (served at /pt/).
// Edit here, then run `node src/build.mjs` to regenerate the HTML.

export const contact = {
  email: "jeanmenezesmagalhaes@icloud.com",
  whatsappLabel: "+55 51 99327-1160",
  linkedin: "https://www.linkedin.com/in/jean-magalhaes/",
  instagram: "https://www.instagram.com/adscendo.consult/",
};

export const ui = {
  en: {
    nav: { work: "Work", story: "Our year", about: "About", cta: "Get in touch" },
    other: "Português", otherShort: "PT",
    skip: "Skip to content",
    readStory: "Read the full story",
    back: "All work",
    visit: "Visit site",
    trial: "Try it free",
    next: "Next project",
    footer: "From complexity to forward motion.",
  },
  pt: {
    nav: { work: "Trabalhos", story: "Nosso ano", about: "Sobre", cta: "Fale com a gente" },
    other: "English", otherShort: "EN",
    skip: "Pular para o conteúdo",
    readStory: "Ler a história completa",
    back: "Todos os trabalhos",
    visit: "Ver site",
    trial: "Teste grátis",
    next: "Próximo projeto",
    footer: "Da complexidade ao movimento.",
  },
};

// Optional founder photo, e.g. "/assets/jean.webp". Empty = the cloud mark.
export const founderPhoto = "";

export const home = {
  en: {
    title: "Adscendo. Websites and apps that help your business be seen",
    description: "Adscendo designs and builds websites and apps that help more people find you, trust you and choose you. See our work and how we do it.",
    h1: ["Ideas, made real.", "Designed and built."],
    sub: "Your business deserves to be seen. We design websites and apps that help more people find you, trust you and choose you.",
    ctaWork: "See our work",
    ctaTalk: "Start a project",
    hostHero: "adscendo-prospector.vercel.app",
    processTitle: "How we work.",
    processLede: "Simple, from the first conversation to launch day.",
    steps: [
      ["Listen", "We meet, learn how your business works, what gets in the way and where you want to go. Then we show you how we can help."],
      ["Build", "We design and build a first version, and you see it working on your own phone and computer."],
      ["Launch", "We adjust whatever is needed and put it live for you. You never have to touch anything technical."],
    ],
    workTitle: "Our work.",
    workLede: "Products we have designed, built and put live. Newest first.",
    storyTitle: "Our year so far.",
    storyLede: "From one product in early 2026 to a studio in October. Every step shipped.",
    doTitle: "What we build.",
    doLede: "One focus, done properly. Websites first, apps when you need more.",
    tiles: [
      { h: "Websites", p: "Beautiful, fast sites that tell your story in seconds and turn visitors into customers.", chips: ["Designed for phones", "Found on Google and AI search", "Booking and contact", "One or more languages"], dark: true },
      { h: "Apps", p: "When a website isn't enough: apps your customers open every day.", chips: ["iOS", "Web apps"] },
    ],
    aboutTitle: "A new studio. Not new to the work.",
    about: [
      "Adscendo was founded by <strong>Jean Menezes</strong>. Before it had a name, Jean spent years on digital projects for companies like McDonald's, AT&amp;T, Petronas, PagBank and Multilaser.",
      "Today the studio builds its own products, like Sidemed, and takes on a few client projects at a time. You work directly with the people designing and building, from the first call to launch.",
    ],
    sigRole: "Founder. Born in Brazil, built to operate globally.",
    contactTitle: "Let's build something.",
    contactLede: "Tell us about your business. Jean reads every message personally.",
    form: { name: "Name", email: "Email", company: "Business", optional: "optional", need: "What do you need?", needs: ["A website", "An app", "Not sure yet"], msg: "Tell us about it", msgPh: "What does your business do, and what would you like to improve?", send: "Send" },
  },
  pt: {
    title: "Adscendo. Sites e apps que fazem seu negócio ser visto",
    description: "A Adscendo desenha e constrói sites e apps que fazem mais gente te encontrar, confiar em você e te escolher. Veja nossos trabalhos e como fazemos.",
    h1: ["Ideias que saem do papel.", "Desenhadas e construídas."],
    sub: "Seu negócio merece ser visto. Criamos sites e apps que fazem mais gente te encontrar, confiar em você e te escolher.",
    ctaWork: "Ver trabalhos",
    ctaTalk: "Começar um projeto",
    hostHero: "adscendo-prospector.vercel.app",
    processTitle: "Como trabalhamos.",
    processLede: "Simples, da primeira conversa ao dia do lançamento.",
    steps: [
      ["Ouvir", "Fazemos uma reunião, entendemos como seu negócio funciona, o que atrapalha e aonde você quer chegar. Daí mostramos como podemos ajudar."],
      ["Construir", "Desenhamos e construímos uma primeira versão, e você vê tudo funcionando no seu celular e no seu computador."],
      ["Lançar", "Ajustamos o que for preciso e colocamos no ar para você. Sem você precisar mexer em nada técnico."],
    ],
    workTitle: "Nosso trabalho.",
    workLede: "Produtos que desenhamos, construímos e colocamos no ar. Do mais novo ao mais antigo.",
    storyTitle: "Nosso ano até aqui.",
    storyLede: "De um produto no início de 2026 a um estúdio em outubro. Cada passo, no ar.",
    doTitle: "O que construímos.",
    doLede: "Um foco, bem feito. Primeiro sites, e apps quando você precisar de mais.",
    tiles: [
      { h: "Sites", p: "Sites bonitos e rápidos, que contam sua história em segundos e transformam visitas em clientes.", chips: ["Pensados para o celular", "Encontrados no Google e na busca por IA", "Agendamento e contato", "Um ou mais idiomas"], dark: true },
      { h: "Apps", p: "Quando um site não basta: apps que seus clientes abrem todo dia.", chips: ["iOS", "Web apps"] },
    ],
    aboutTitle: "Um estúdio novo. Um trabalho antigo.",
    about: [
      "A Adscendo foi fundada por <strong>Jean Menezes</strong>. Antes de ter nome, o Jean passou anos em projetos digitais para empresas como McDonald's, AT&amp;T, Petronas, PagBank e Multilaser.",
      "Hoje o estúdio constrói os próprios produtos, como a Sidemed, e aceita poucos projetos de clientes por vez. Você fala direto com quem desenha e constrói, da primeira conversa ao lançamento.",
    ],
    sigRole: "Fundador. Nascido no Brasil, feito para operar no mundo.",
    contactTitle: "Vamos construir algo.",
    contactLede: "Conte sobre seu negócio. O Jean lê cada mensagem pessoalmente.",
    form: { name: "Nome", email: "Email", company: "Empresa", optional: "opcional", need: "Do que você precisa?", needs: ["Um site", "Um app", "Ainda não sei"], msg: "Conte mais", msgPh: "O que seu negócio faz, e o que você gostaria de melhorar?", send: "Enviar" },
  },
};

// Milestones for the home timeline, oldest first. `now` highlights a row.
export const timeline = [
  { en: ["Early 2026", "Sidemed starts as a web prototype of a health passport."], pt: ["Início de 2026", "A Sidemed começa como um protótipo web de passaporte de saúde."], slug: "sidemed" },
  { en: ["June", "The Sidemed product spec, a new landing page and a 28-screen prototype."], pt: ["Junho", "A especificação do produto Sidemed, uma nova landing page e um protótipo de 28 telas."], slug: "sidemed" },
  { en: ["July–August", "The native Sidemed iOS app, in three languages."], pt: ["Julho–agosto", "O app nativo da Sidemed para iOS, em três idiomas."], slug: "sidemed" },
  { en: ["September", "Sidemed's new website goes live, with links to both app stores."], pt: ["Setembro", "O novo site da Sidemed entra no ar, com links para as duas lojas."], slug: "sidemed" },
  { en: ["October 20", "Minha companhia: first prototype, validated with a user the same day."], pt: ["20 de outubro", "Minha companhia: primeiro protótipo, validado com uma usuária no mesmo dia."], slug: "minha-companhia" },
  { en: ["October 25", "Reels Autopilot's first version. Multi-user a day later."], pt: ["25 de outubro", "A primeira versão do Reels Autopilot. Multiusuário no dia seguinte."], slug: "reels-autopilot" },
  { en: ["October 27", "Adscendo is founded."], pt: ["27 de outubro", "A Adscendo é fundada."], slug: "adscendo" },
  { en: ["October 27", "Prospector, the studio's first product, is built the same day."], pt: ["27 de outubro", "O Prospector, primeiro produto do estúdio, é construído no mesmo dia."], slug: "prospector" },
  { en: ["October 28", "Adscendo's first website goes live."], pt: ["28 de outubro", "O primeiro site da Adscendo entra no ar."], slug: "adscendo" },
  { en: ["Today", "Sidemed is in 17 countries."], pt: ["Hoje", "A Sidemed está em 17 países."], slug: "sidemed", now: true },
];

const img = (src, w, h) => ({ src: `/assets/work/${src}`, w, h });

export const projects = [
  {
    slug: "prospector",
    url: "https://adscendo-prospector.vercel.app/",
    trial: true,
    host: "adscendo-prospector.vercel.app",
    cover: img("prospector/crm.webp", 1600, 1000),
    coverPt: img("prospector/crm.pt.webp", 1600, 1000),
    coverPhone: img("prospector/crm-m.webp", 780, 1688),
    coverPhonePt: img("prospector/crm-m.pt.webp", 780, 1688),
    en: {
      name: "Prospector",
      kind: "Our product · Sales",
      tagline: "Find the businesses that need you, and start the conversation.",
      summary: "Finds businesses on the map, analyzes each one, writes a personal email and follows every lead in a CRM. Nothing goes out without your approval.",
      description: "How Adscendo Prospector, an AI prospecting system with a map, lead analysis, personal emails and a CRM, was built in October 2026.",
      facts: [["Role", "Our product"], ["When", "October 2026"], ["Platform", "Web"], ["Status", "Live, 7-day free trial"]],
      chapters: [
        {
          h: "Finding clients was a second job.",
          p: [
            "Finding the next client meant hours on Google Maps, opening websites one by one, hunting for an email address and writing to each business by hand.",
            "Prospector was built to do that groundwork, so the time goes into the conversations that matter. It was the first thing Adscendo built, on the day the studio was founded.",
          ],
        },
        {
          h: "Start with a map.",
          p: [
            "Pick any city, type the kind of business you're after, choose a distance. A radar sweeps the circle and the businesses appear as they're found, with rating, website and phone.",
          ],
          fig: { kind: "browser", img: img("prospector/map.webp", 1600, 1000), cap: "Searching for dentists within 10 km of downtown Austin. Sample data." },
        },
        {
          h: "Every lead, analyzed.",
          p: [
            "Prospector visits each website, finds the published emails and notes what it sees: no HTTPS, slow on a phone, not updated in years, the tools already in use.",
            "What it looks for depends on what you sell. A web studio sees the website; a marketing agency sees reviews and ads; a software company sees the tools that are missing.",
          ],
          fig: { kind: "browser", img: img("prospector/lead.webp", 1600, 1000), cap: "A lead in the CRM, with what the analysis found. Sample data." },
        },
        {
          h: "An email that sounds like you.",
          p: [
            "The AI writes a short, personal first email that mentions what it actually found, in the language of the business's location. Then it follows up, and every lead moves through the CRM from first email to meeting.",
            "One rule never bends: <strong>nothing is sent without your explicit approval</strong>. Even on autopilot, it stays inside the limits you set: a do-not-contact list, a daily cap, a sending window and at most three emails per business.",
          ],
          fig: { kind: "browser", img: img("prospector/email.webp", 1600, 1000), cap: "A first email, written from the analysis and ready for review. Sample data." },
        },
        {
          h: "From our Mac to anyone.",
          p: [
            "Prospector started on Jean's Mac, for Adscendo's own outreach. Within two days it was online for anyone: sign in with Google, connect Gmail or Outlook with permission to send only (no password, no access to your inbox), and start with a 7-day free trial.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("prospector/crm.webp", 1600, 1000) }, { kind: "phone", img: img("prospector/crm-m.webp", 780, 1688) }], cap: "The CRM on a computer and on a phone. Sample data." },
        },
      ],
    },
    pt: {
      name: "Prospector",
      kind: "Nosso produto · Vendas",
      tagline: "Encontre as empresas que precisam de você, e comece a conversa.",
      summary: "Acha empresas no mapa, analisa cada uma, escreve um email pessoal e acompanha cada lead num CRM. Nada sai sem a sua aprovação.",
      description: "Como o Adscendo Prospector, um sistema de prospecção com IA, com mapa, análise de leads, emails pessoais e CRM, foi construído em outubro de 2026.",
      facts: [["Papel", "Nosso produto"], ["Quando", "Outubro de 2026"], ["Plataforma", "Web"], ["Status", "No ar, 7 dias grátis"]],
      chapters: [
        {
          h: "Achar cliente era um segundo emprego.",
          p: [
            "Encontrar o próximo cliente significava horas no Google Maps, abrindo sites um por um, caçando um email e escrevendo para cada empresa na mão.",
            "O Prospector foi construído para fazer esse trabalho de base, para o tempo ir para as conversas que importam. Foi a primeira coisa que a Adscendo construiu, no dia em que o estúdio foi fundado.",
          ],
        },
        {
          h: "Comece pelo mapa.",
          p: [
            "Escolha uma cidade, digite o tipo de negócio que você procura e a distância. Um radar varre o círculo e as empresas aparecem conforme são encontradas, com nota, site e telefone.",
          ],
          fig: { kind: "browser", img: img("prospector/map.pt.webp", 1600, 1000), cap: "Buscando dentistas num raio de 10 km do centro de Austin. Dados de exemplo." },
        },
        {
          h: "Cada lead, analisado.",
          p: [
            "O Prospector visita cada site, acha os emails publicados e anota o que vê: sem HTTPS, lento no celular, sem atualização há anos, as ferramentas que a empresa já usa.",
            "O que ele procura depende do que você vende. Um estúdio de sites olha o site; uma agência de marketing olha avaliações e anúncios; uma empresa de software olha as ferramentas que faltam.",
          ],
          fig: { kind: "browser", img: img("prospector/lead.pt.webp", 1600, 1000), cap: "Um lead no CRM, com o que a análise encontrou. Dados de exemplo." },
        },
        {
          h: "Um email com a sua cara.",
          p: [
            "A IA escreve um primeiro email curto e pessoal, que cita o que ela realmente encontrou, na língua do lugar de cada empresa. Depois faz o acompanhamento, e cada lead anda no CRM do primeiro email até a reunião.",
            "Uma regra nunca muda: <strong>nada é enviado sem a sua aprovação explícita</strong>. Mesmo no piloto automático, ele fica dentro dos limites que você define: lista de não contatar, limite diário, janela de envio e no máximo três emails por empresa.",
          ],
          fig: { kind: "browser", img: img("prospector/email.pt.webp", 1600, 1000), cap: "Um primeiro email, escrito a partir da análise e pronto para revisão. Dados de exemplo." },
        },
        {
          h: "Do nosso Mac para qualquer pessoa.",
          p: [
            "O Prospector começou no Mac do Jean, para a prospecção da própria Adscendo. Em dois dias estava online para qualquer pessoa: entra com Google, conecta Gmail ou Outlook com permissão só para enviar (sem senha, sem acesso à sua caixa de entrada) e começa com 7 dias grátis.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("prospector/crm.pt.webp", 1600, 1000) }, { kind: "phone", img: img("prospector/crm-m.pt.webp", 780, 1688) }], cap: "O CRM no computador e no celular. Dados de exemplo." },
        },
      ],
    },
  },
  {
    slug: "reels-autopilot",
    url: "https://reels-autopilot-bay.vercel.app/",
    host: "reels-autopilot-bay.vercel.app",
    cover: img("reels-autopilot/board.webp", 1440, 900),
    coverPhone: img("reels-autopilot/mobile.webp", 390, 844),
    phoneBar: "#000",
    en: {
      name: "Reels Autopilot",
      kind: "Own tool · Internal system",
      tagline: "Drop a raw video. Read what worked.",
      summary: "Raw recordings become edited versions, posted as Instagram Trial Reels and measured, without anyone managing the process.",
      description: "How Reels Autopilot turns raw recordings into edited, tested and measured Instagram Trial Reels, built in October 2026.",
      facts: [["Role", "Product, design and build"], ["When", "October 2026"], ["Platform", "Web, Mac, Instagram"], ["Status", "In use"]],
      chapters: [
        {
          h: "Recording was the easy part.",
          p: [
            "Jean records short videos about entrepreneurship, technology and Sidemed. Editing each one, trying different versions, posting at the right time and remembering what worked took far longer than recording.",
            "So the goal became simple: drop a video and do nothing else until it's time to read the results.",
          ],
        },
        {
          h: "Edit, post, measure, learn.",
          p: ["Raw video goes in a folder on the Mac. From there, the system runs on its own."],
          list: [
            ["Edit", "Claude edits five or more versions of each video, following the instructions you give."],
            ["Post", "Each version goes out as an Instagram Trial Reel, shown only to non-followers, at different times between 8 a.m. and 10 p.m."],
            ["Measure", "Views, reach, likes, comments, shares, saves and average watch time for every version."],
            ["Learn", "Every morning at 5:30 an analysis writes what to do next, in the editing and in the next script."],
          ],
        },
        {
          h: "Only what is essential.",
          p: [
            "The system works without the dashboard. The dashboard only answers three questions: is it running, what's next, and what worked.",
            "One board, from planned to published. Click a piece of content to see each version, edit a caption or redo it with new instructions. Light and dark, in Portuguese, English and Spanish.",
          ],
          fig: { kind: "browser", img: img("reels-autopilot/board.webp", 1440, 900), cap: "The board: planned, editing, queued and published. The first-run examples show how it works." },
        },
        {
          h: "From one user to many.",
          p: [
            "A day after the first version, Reels Autopilot became multi-user: Google sign-in, a waitlist, and a separate workspace for each person.",
            "Everyone connects their own Instagram and their own Claude or ChatGPT subscription, so editing runs on their Mac under their own account. Tokens and keys never reach the page.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("reels-autopilot/new.webp", 1440, 905) }, { kind: "phone", img: img("reels-autopilot/mobile.webp", 390, 844) }], cap: "Sending a new video, and the first-run checklist on a phone in dark mode." },
        },
      ],
    },
    pt: {
      name: "Reels Autopilot",
      kind: "Ferramenta própria · Sistema interno",
      tagline: "Solte um vídeo cru. Leia o que funcionou.",
      summary: "Gravações cruas viram versões editadas, postadas como Trial Reels no Instagram e medidas, sem ninguém gerenciar o processo.",
      description: "Como o Reels Autopilot transforma gravações cruas em Trial Reels editados, testados e medidos no Instagram, construído em outubro de 2026.",
      facts: [["Papel", "Produto, design e desenvolvimento"], ["Quando", "Outubro de 2026"], ["Plataforma", "Web, Mac, Instagram"], ["Status", "Em uso"]],
      chapters: [
        {
          h: "Gravar era a parte fácil.",
          p: [
            "O Jean grava vídeos curtos sobre empreendedorismo, tecnologia e a Sidemed. Editar cada um, testar versões, postar na hora certa e lembrar o que funcionou levava muito mais tempo que gravar.",
            "Então o objetivo ficou simples: soltar o vídeo e não fazer mais nada até a hora de ler os resultados.",
          ],
        },
        {
          h: "Editar, postar, medir, aprender.",
          p: ["O vídeo cru vai para uma pasta no Mac. Dali em diante, o sistema anda sozinho."],
          list: [
            ["Editar", "O Claude edita cinco ou mais versões de cada vídeo, seguindo as instruções que você dá."],
            ["Postar", "Cada versão sai como Trial Reel no Instagram, mostrado só para quem não segue, em horários diferentes entre 8h e 22h."],
            ["Medir", "Views, alcance, curtidas, comentários, compartilhamentos, salvamentos e tempo médio assistido de cada versão."],
            ["Aprender", "Todo dia às 5h30 uma análise escreve o que fazer a seguir, na edição e no próximo roteiro."],
          ],
        },
        {
          h: "Só o essencial.",
          p: [
            "O sistema funciona sem o painel. O painel só responde três perguntas: está rodando, o que vem a seguir e o que funcionou.",
            "Um quadro, do planejado ao publicado. Clique num conteúdo para ver cada versão, editar a legenda ou refazer com novas instruções. Claro e escuro, em português, inglês e espanhol.",
          ],
          fig: { kind: "browser", img: img("reels-autopilot/board.webp", 1440, 900), cap: "O quadro: planejado, em edição, na fila e publicado. Os exemplos do primeiro acesso mostram como funciona." },
        },
        {
          h: "De um usuário para muitos.",
          p: [
            "Um dia depois da primeira versão, o Reels Autopilot virou multiusuário: login com Google, lista de espera e um painel separado para cada pessoa.",
            "Cada um conecta o próprio Instagram e a própria assinatura do Claude ou do ChatGPT, então a edição roda no Mac da pessoa, na conta dela. Tokens e chaves nunca chegam à página.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("reels-autopilot/new.webp", 1440, 905) }, { kind: "phone", img: img("reels-autopilot/mobile.webp", 390, 844) }], cap: "Envio de um vídeo novo, e o passo a passo do primeiro acesso no celular, no modo escuro." },
        },
      ],
    },
  },
  {
    slug: "minha-companhia",
    url: "https://minhacompanhia.com.br/",
    host: "minhacompanhia.com.br",
    cover: img("minha-companhia/home.webp", 1440, 900),
    coverPhone: img("minha-companhia/home-m.webp", 780, 1688),
    en: {
      name: "Minha companhia",
      kind: "Client project · Marketplace",
      tagline: "A marketplace where families book verified professionals to accompany their parents.",
      summary: "Families book verified professionals to go with their elderly parents to appointments, the bank or the market.",
      description: "How Minha companhia, a Brazilian marketplace for families of older adults, went from a screens-only brief to a live product in October 2026.",
      facts: [["Role", "Product design and build"], ["When", "October 2026"], ["Platform", "Web, phone and desktop"], ["Status", "Live, in validation"]],
      chapters: [
        {
          h: "A brief for screens only.",
          p: [
            "The client wanted a platform where families hire someone to accompany an elderly mother or father on a task: a doctor's appointment, an exam, the bank, the market, a walk.",
            "The first contract was deliberately small. Screens only, no working system yet, to validate the presentation, the content and the order of the hiring flow before building anything. The working name was <em>Filha de Aluguel</em>, Portuguese for “daughter for hire.”",
          ],
        },
        {
          h: "Designed for the daughter.",
          p: [
            "The person who decides is usually the daughter. She is busy, often far away, and deciding on her phone. On October 20 the prototype was tested with a user, and the verdict was clear: the home page has to say at once that this is a marketplace where she picks and hires a professional.",
            "The search came out of that session working for real, with filters by city, task, time and price that live in the URL.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/search.webp", 1440, 900), cap: "Search across Brazil: city, task, date, schedule and hourly rate." },
        },
        {
          h: "Words carry weight.",
          p: [
            "In Portuguese, the obvious word for a companion, <em>acompanhante</em>, also means escort. So it is never used. The service is “accompanying on tasks,” and the person is “a verified professional.”",
            "The product got a new name to match the tone: <strong>Minha companhia</strong>, “my company,” as in someone keeping you company. Warm, respectful, and never talking down to the older person.",
          ],
          fig: { kind: "phones", imgs: [img("minha-companhia/home-m.webp", 780, 1688), img("minha-companhia/portfolio-m.webp", 780, 1688)], cap: "Home and a professional's public portfolio, on a phone." },
        },
        {
          h: "Trust, built into the flow.",
          p: ["When a stranger accompanies your mother, trust can't be a badge. It has to be in every step."],
          list: [
            ["Monthly verification", "Documents are reviewed every month, with the last and next review dates on the profile."],
            ["Honest quotes", "Hourly rate, minimum hours, and whether a car is included, all visible before hiring."],
            ["Blind reviews, both ways", "Family and professional rate each other, and neither sees the other's score until both have rated or 14 days pass."],
            ["Payment held until the review", "The money only goes to the professional after the family rates the visit."],
          ],
        },
        {
          h: "From prototype to product.",
          p: [
            "Within a week, the static prototype gained a real backend: accounts, service requests, two-way reviews and social sign-in. Each professional has a public portfolio she can share as her own page.",
            "Minha companhia is live at minhacompanhia.com.br, covering all of Brazil, while the rest of the flow is validated.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/portfolio.webp", 1440, 900), cap: "A professional's public portfolio, made to be shared as a link." },
        },
      ],
    },
    pt: {
      name: "Minha companhia",
      kind: "Projeto de cliente · Marketplace",
      tagline: "Um marketplace onde a família contrata profissionais verificadas para acompanhar os pais.",
      summary: "A família contrata profissionais verificadas para acompanhar os pais idosos na consulta, no banco ou no mercado.",
      description: "Como a Minha companhia, um marketplace para famílias de pessoas idosas, saiu de um briefing só de telas para um produto no ar em outubro de 2026.",
      facts: [["Papel", "Design de produto e desenvolvimento"], ["Quando", "Outubro de 2026"], ["Plataforma", "Web, celular e computador"], ["Status", "No ar, em validação"]],
      chapters: [
        {
          h: "Um briefing só de telas.",
          p: [
            "O cliente queria uma plataforma em que a família contrata alguém para acompanhar a mãe ou o pai idoso numa tarefa: uma consulta, um exame, o banco, o mercado, um passeio.",
            "O primeiro contrato foi pequeno de propósito. Só telas, nada de sistema funcionando ainda, para validar a apresentação, o conteúdo e a ordem da contratação antes de construir qualquer coisa. O nome provisório era <em>Filha de Aluguel</em>.",
          ],
        },
        {
          h: "Desenhado para a filha.",
          p: [
            "Quem decide quase sempre é a filha. Ela não tem tempo, muitas vezes está longe e decide pelo celular. Em 20 de outubro o protótipo foi testado com uma usuária, e o veredito foi claro: a página inicial precisa dizer de cara que é um marketplace, onde ela escolhe e contrata uma profissional.",
            "A busca saiu dessa sessão funcionando de verdade, com filtros por cidade, tarefa, horário e preço que ficam na URL.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/search.webp", 1440, 900), cap: "Busca no Brasil todo: cidade, tarefa, data, horário e valor da hora." },
        },
        {
          h: "Palavras pesam.",
          p: [
            "Em português, a palavra óbvia, <em>acompanhante</em>, também quer dizer outra coisa. Por isso ela nunca aparece. O serviço é “acompanhar em tarefas”, e quem presta é “a profissional verificada”.",
            "O produto ganhou um nome à altura do tom: <strong>Minha companhia</strong>. Acolhedor, respeitoso, e sem nunca infantilizar a pessoa idosa.",
          ],
          fig: { kind: "phones", imgs: [img("minha-companhia/home-m.webp", 780, 1688), img("minha-companhia/portfolio-m.webp", 780, 1688)], cap: "A página inicial e o portfólio público de uma profissional, no celular." },
        },
        {
          h: "Confiança dentro do fluxo.",
          p: ["Quando uma desconhecida acompanha sua mãe, confiança não pode ser um selo. Ela precisa estar em cada passo."],
          list: [
            ["Verificação mensal", "Documentos revisados todo mês, com a data da última e da próxima revisão no perfil."],
            ["Orçamento honesto", "Valor da hora, tempo mínimo e se o carro está incluso, tudo visível antes de contratar."],
            ["Avaliação às cegas, nos dois sentidos", "Família e profissional se avaliam, e nenhuma vê a nota da outra até as duas avaliarem ou passarem 14 dias."],
            ["Pagamento retido até a avaliação", "O dinheiro só vai para a profissional depois que a família avalia o atendimento."],
          ],
        },
        {
          h: "Do protótipo ao produto.",
          p: [
            "Em uma semana, o protótipo estático ganhou um backend de verdade: contas, pedidos, avaliações nos dois sentidos e login social. Cada profissional tem um portfólio público, para divulgar como página própria.",
            "A Minha companhia está no ar em minhacompanhia.com.br, para o Brasil todo, enquanto o resto do fluxo é validado.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/portfolio.webp", 1440, 900), cap: "O portfólio público de uma profissional, feito para ser compartilhado como link." },
        },
      ],
    },
  },
  {
    slug: "sidemed",
    url: "https://www.sidemed.com.br/",
    host: "sidemed.com.br",
    cover: img("sidemed/site-problem.webp", 1440, 900),
    phoneBar: "#faf7f0",
    coverPhone: img("sidemed/site-m.webp", 780, 1688),
    links: [
      { href: "https://apps.apple.com/app/apple-store/id6762412760", en: "App Store", pt: "App Store" },
      { href: "https://play.google.com/store/apps/details?id=br.com.sidemed", en: "Google Play", pt: "Google Play" },
    ],
    en: {
      name: "Sidemed",
      kind: "Founder · Health",
      tagline: "A health passport that carries your medical history across borders.",
      summary: "Your medical history, organized, translated into your doctor's language and shared in seconds. Now in 17 countries.",
      description: "How Sidemed, a health passport app, went from a problem at the border to a native iOS app and a new website in 2026.",
      facts: [["Role", "Founder"], ["When", "2026"], ["Platform", "iOS, Android, web"], ["Status", "Live in 17 countries"]],
      chapters: [
        {
          h: "Your history stays behind.",
          p: [
            "Every time you cross a border, your medical history stays behind. Exams forgotten in a drawer an ocean away. Allergies and conditions that only you know about. A doctor who doesn't speak your language, often in an emergency.",
            "Sidemed started from that gap: the information that matters most is exactly the one that travels worst.",
          ],
        },
        {
          h: "Do one thing very well.",
          p: [
            "The product spec opens with a single premise: in an emergency there can be no friction. Every tap you remove from the screen can matter.",
            "Three principles guided every decision.",
          ],
          list: [
            ["Radical simplicity", "Get to the information in seconds."],
            ["Trust as the foundation", "LGPD and GDPR treated as features, not compliance."],
            ["An ecosystem, not a feature", "Every new screen makes the earlier ones more valuable."],
          ],
        },
        {
          h: "The passport is the product.",
          p: [
            "The visual concept takes the travel document literally. Warm paper, ink, Sidemed blue, and a navy card with a guilloché pattern and monospaced labels, like a real passport.",
            "Before writing app code, the whole flow was designed as a high-fidelity prototype: 28 screens, from sign-up to sharing with a doctor, ready for the team to review.",
          ],
          fig: { kind: "canvas", img: img("sidemed/app.webp", 1600, 1000), cap: "Part of the 28-screen prototype: entry, sign-in, error state and onboarding." },
        },
        {
          h: "From prototype to the stores.",
          p: [
            "The prototype became a native SwiftUI app. You tell your story, the app organizes it into a structured passport, and you share it by QR code or secure link, translated into your doctor's language. It speaks Portuguese, English and Spanish.",
            "In September a new website went live. The app screens on it are rebuilt in HTML and CSS instead of pasted as images, so they stay sharp on any display and can move. It shows the right store button for your phone.",
            "Today Sidemed is in 17 countries.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.webp", 780, 1688)], cap: "sidemed.com.br on a phone." },
        },
      ],
    },
    pt: {
      name: "Sidemed",
      kind: "Fundador · Saúde",
      tagline: "Um passaporte de saúde que leva seu histórico médico através das fronteiras.",
      summary: "Seu histórico médico organizado, traduzido para o idioma do médico e compartilhado em segundos. Hoje em 17 países.",
      description: "Como a Sidemed, um app de passaporte de saúde, saiu de um problema na fronteira para um app nativo de iOS e um site novo em 2026.",
      facts: [["Papel", "Fundador"], ["Quando", "2026"], ["Plataforma", "iOS, Android, web"], ["Status", "No ar em 17 países"]],
      chapters: [
        {
          h: "Seu histórico fica para trás.",
          p: [
            "Toda vez que você cruza uma fronteira, seu histórico médico fica para trás. Exames esquecidos numa gaveta, a um oceano de distância. Alergias e condições que só você conhece. Um médico que não fala sua língua, muitas vezes numa emergência.",
            "A Sidemed nasceu dessa lacuna: a informação que mais importa é justamente a que pior viaja.",
          ],
        },
        {
          h: "Fazer uma coisa muito bem feita.",
          p: [
            "A especificação do produto começa com uma premissa só: numa emergência, não pode haver atrito. Cada toque a menos na tela pode fazer diferença.",
            "Três princípios guiaram cada decisão.",
          ],
          list: [
            ["Simplicidade radical", "Chegar à informação em segundos."],
            ["Confiança como fundação", "LGPD e GDPR tratadas como funcionalidade, não como burocracia."],
            ["Ecossistema, não funcionalidade", "Cada tela nova aumenta o valor das anteriores."],
          ],
        },
        {
          h: "O passaporte é o produto.",
          p: [
            "O conceito visual leva o documento de viagem ao pé da letra. Papel quente, tinta, o azul Sidemed e um cartão navy com guilloché e rótulos em fonte mono, como um passaporte de verdade.",
            "Antes de escrever o código do app, o fluxo inteiro foi desenhado num protótipo de alta fidelidade: 28 telas, do cadastro ao compartilhamento com o médico, prontas para o time revisar.",
          ],
          fig: { kind: "canvas", img: img("sidemed/app.webp", 1600, 1000), cap: "Parte do protótipo de 28 telas: entrada, login, estado de erro e onboarding." },
        },
        {
          h: "Do protótipo às lojas.",
          p: [
            "O protótipo virou um app nativo em SwiftUI. Você conta sua história, o app organiza tudo num passaporte estruturado, e você compartilha por QR code ou link seguro, traduzido para o idioma do médico. Ele fala português, inglês e espanhol.",
            "Em setembro, um site novo entrou no ar. As telas do app nele são reconstruídas em HTML e CSS, não coladas como imagem, então ficam nítidas em qualquer tela e podem se mexer. E ele mostra o botão da loja certa para o seu celular.",
            "Hoje a Sidemed está em 17 países.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.webp", 780, 1688)], cap: "sidemed.com.br no celular." },
        },
      ],
    },
  },
  {
    slug: "adscendo",
    url: null,
    host: "adscendo",
    cover: img("adscendo/launch-wipe.webp", 1440, 900),
    coverPhone: img("adscendo/launch-m.webp", 780, 1688),
    en: {
      name: "Adscendo",
      kind: "The studio",
      tagline: "To rise. To move upward. To climb.",
      summary: "The consultancy that gives all this work a name. Founded on October 27, 2026, live the next day.",
      description: "The story of Adscendo, the consultancy of Jean Menezes: founded on October 27, 2026 and live on October 28.",
      facts: [["Role", "Founder"], ["Founded", "October 27, 2026"], ["Live since", "October 28, 2026"], ["Based in", "Brazil, working globally"]],
      chapters: [
        {
          h: "A name that climbs.",
          p: [
            "<em>Adscendo</em> is Latin for “I rise.” To move upward, to climb. The mark is a single line-drawn cloud, and the tagline says what the work is for: from complexity to forward motion.",
            "The visual rule is just as short. White and black, simple, in the spirit of Apple's product pages. The only color on the page belongs to the work it shows.",
          ],
        },
        {
          h: "Why a studio, and why now.",
          p: [
            "Jean spent years on digital projects for companies like McDonald's, AT&amp;T, Petronas, PagBank and Multilaser. In 2026 he started building his own products, Sidemed first, then tools like Reels Autopilot, and took on client work like Minha companhia.",
            "Adscendo gives that work a name and a home. Born in Brazil, built to operate globally.",
          ],
        },
        {
          h: "Day one: the system before the site.",
          p: [
            "Adscendo was founded on October 27, 2026, and the first thing built was not a website. It was <a href='/work/prospector'><strong>Prospector</strong></a>, an AI prospecting system: it finds businesses on the map, analyzes each one's website, writes a personal email, and follows every lead in a CRM.",
            "It has one golden rule. No email goes out without explicit approval.",
          ],
        },
        {
          h: "Day two: live.",
          p: [
            "On October 28 the first site went live. Its signature was a demonstration instead of a promise: as you scroll, a dated website turns into a modern one inside a browser frame.",
            "This portfolio grew out of it, keeping the same design language and telling the story of each project, in English and Portuguese.",
          ],
          fig: { kind: "browser", img: img("adscendo/launch-wipe.webp", 1440, 900), cap: "The launch site, mid-scroll: an illustrative dental practice before and after." },
        },
      ],
    },
    pt: {
      name: "Adscendo",
      kind: "O estúdio",
      tagline: "Subir. Mover-se para cima. Escalar.",
      summary: "A consultoria que dá nome a todo esse trabalho. Fundada em 27 de outubro de 2026, no ar no dia seguinte.",
      description: "A história da Adscendo, a consultoria de Jean Menezes: fundada em 27 de outubro de 2026 e no ar em 28 de outubro.",
      facts: [["Papel", "Fundador"], ["Fundada", "27 de outubro de 2026"], ["No ar desde", "28 de outubro de 2026"], ["Base", "Brasil, para o mundo"]],
      chapters: [
        {
          h: "Um nome que sobe.",
          p: [
            "<em>Adscendo</em> é latim para “eu subo”. Mover-se para cima, escalar. A marca é uma nuvem desenhada em uma linha só, e a frase diz para que serve o trabalho: da complexidade ao movimento.",
            "A regra visual é igualmente curta. Branco e preto, simples, no espírito das páginas de produto da Apple. A única cor da página pertence ao trabalho que ela mostra.",
          ],
        },
        {
          h: "Por que um estúdio, e por que agora.",
          p: [
            "O Jean passou anos em projetos digitais para empresas como McDonald's, AT&amp;T, Petronas, PagBank e Multilaser. Em 2026 começou a construir os próprios produtos, primeiro a Sidemed, depois ferramentas como o Reels Autopilot, e a atender clientes como a Minha companhia.",
            "A Adscendo dá nome e casa a esse trabalho. Nascida no Brasil, feita para operar no mundo.",
          ],
        },
        {
          h: "Dia um: o sistema antes do site.",
          p: [
            "A Adscendo foi fundada em 27 de outubro de 2026, e a primeira coisa construída não foi um site. Foi o <a href='/pt/work/prospector'><strong>Prospector</strong></a>, um sistema de prospecção com IA: ele acha empresas no mapa, analisa o site de cada uma, escreve um email pessoal e acompanha cada lead num CRM.",
            "Ele tem uma regra de ouro. Nenhum email sai sem aprovação explícita.",
          ],
        },
        {
          h: "Dia dois: no ar.",
          p: [
            "Em 28 de outubro o primeiro site entrou no ar. A assinatura dele era uma demonstração em vez de uma promessa: conforme você rola a página, um site antigo vira um site moderno dentro de uma janela de navegador.",
            "Este portfólio nasceu dele, com a mesma linguagem visual, contando a história de cada projeto, em inglês e português.",
          ],
          fig: { kind: "browser", img: img("adscendo/launch-wipe.webp", 1440, 900), cap: "O site de lançamento, no meio da rolagem: um consultório odontológico ilustrativo, antes e depois." },
        },
      ],
    },
  },
];
