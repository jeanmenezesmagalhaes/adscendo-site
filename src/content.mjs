// All copy for the site, in English (primary, served at /) and Portuguese (served at /pt/).
// Edit here, then run `node src/build.mjs` to regenerate the HTML.

// Home sections with their own clean address (/how-we-work, /pt/como-trabalhamos): the home page is
// served there (vercel.json rewrites, written by build.mjs; serve.mjs locally) and site.js scrolls to
// the section. Keyed by the section's id on the home page.
export const sections = {
  build: { en: "services", pt: "servicos" },
  work: { en: "portfolio", pt: "portfolio" },
  found: { en: "seo", pt: "seo" },
  process: { en: "how-we-work", pt: "como-trabalhamos" },
  about: { en: "about", pt: "sobre" },
  faq: { en: "faq", pt: "perguntas" },
  contact: { en: "contact", pt: "contato" },
};

export const contact = {
  email: "jean@adscendo.pro",
  whatsappLabel: "+55 51 99327-1160",
  linkedin: "https://www.linkedin.com/in/jean-magalhaes/",
  instagram: "https://www.instagram.com/adscendo.pro/",
  // Adscendo's Business Profile on Google (Search and Maps), by its stable Maps id. Also in the
  // structured data's sameAs, which ties the site to the profile.
  google: "https://maps.google.com/?cid=2100136628409895635",
};

export const ui = {
  en: {
    nav: { services: "Services", work: "Portfolio", process: "How we work", about: "About", cta: "Get in touch" },
    // Drop-down under "Services" in the nav (`to`: a home section id, or "ai" for the AI page). The one
    // under "Portfolio" lists the projects, then `allWork`.
    menu: {
      services: [
        { h: "Websites", p: "Fast sites that bring in customers", to: "websites" },
        { h: "Apps", p: "For iPhone, Android and the web", to: "apps" },
        { h: "AI optimization", p: "Get recommended by ChatGPT and other AIs", to: "ai" },
      ],
      allWork: "See all work",
    },
    other: "Português", otherShort: "PT", switchTo: "Mudar para português", darkMode: "Dark mode",
    menuOpen: "Open menu", menuClose: "Close menu",
    skip: "Skip to content",
    // Strip above the nav on every page; {p} is the largest launch discount in `quote`.
    offer: { label: "Launch offer", text: "We're taking on our first clients in the US to build our portfolio, so projects are up to {p}% off.", cta: "Get a quote", close: "Close" },
    readStory: "Read the full story",
    learnMore: "Learn more",
    back: "All work",
    visit: "Visit site",
    trial: "Try it free",
    seeIt: "See it for yourself",
    download: "Download free now",
    studioStory: "Read the studio's story",
    next: "Next project",
    footer: "From complexity to forward motion.",
    backTop: "Back to top",
    privacy: "Privacy",
    googleProfile: "Business Profile",
  },
  pt: {
    nav: { services: "Serviços", work: "Portfólio", process: "Como trabalhamos", about: "Sobre", cta: "Fale com a gente" },
    menu: {
      services: [
        { h: "Sites", p: "Sites rápidos que trazem clientes", to: "websites" },
        { h: "Apps", p: "Para iPhone, Android e web", to: "apps" },
        { h: "Otimização para IA", p: "Seja indicado pelo ChatGPT e outras IAs", to: "ai" },
      ],
      allWork: "Ver todos os trabalhos",
    },
    other: "English", otherShort: "EN", switchTo: "Switch to English", darkMode: "Modo escuro",
    menuOpen: "Abrir menu", menuClose: "Fechar menu",
    skip: "Pular para o conteúdo",
    offer: { label: "Oferta de lançamento", text: "Estamos atendendo os primeiros clientes nos EUA para montar nosso portfólio, por isso os projetos têm até {p}% de desconto.", cta: "Peça um orçamento", close: "Fechar" },
    readStory: "Ler a história completa",
    learnMore: "Saiba mais",
    back: "Todos os trabalhos",
    visit: "Ver site",
    trial: "Teste grátis",
    seeIt: "Acesse e veja você mesmo",
    download: "Baixe grátis agora",
    studioStory: "Ler a história do estúdio",
    next: "Próximo projeto",
    footer: "Da complexidade ao movimento.",
    backTop: "Voltar ao topo",
    privacy: "Privacidade",
    googleProfile: "Perfil da empresa",
  },
};

// Optional founder photo, e.g. "/assets/jean.webp". Empty = the cloud mark.
export const founderPhoto = "/assets/jean.webp";

export const home = {
  en: {
    // Title and description name what people search for. {new} and the other prices come from `quote`.
    title: "Adscendo | Small business websites, found on Google and AI",
    description: "Adscendo designs fast websites and apps for small businesses, built to be found on Google and recommended by ChatGPT. New sites from {new} at launch.",
    h1: ["Ideas, made real.", "Designed and built."],
    sub: "Your business deserves to be seen. We build websites and apps that get it found on Google and recommended by AI.",
    ctaWork: "See our work",
    ctaTalk: "Start a project",
    hostHero: "prospector.adscendo.pro",
    demoLabel: "Live demo",
    demoText: "<strong>This is Prospector, a product we built.</strong> It finds new clients for you on the map, so you spend your time closing deals instead of searching for them.",
    warmthTitle: "Brazilian warmth. American standards.",
    warmthLede: "We bring Brazil's creativity and human touch to American businesses: work made with an artist's eye, close and full of life, delivered the way you expect.",
    processTitle: "How we work.",
    processLede: "Simple, from the first conversation to launch day.",
    steps: [
      ["Listen", "We meet, learn how your business works, what gets in the way and where you want to go. Then we show you how we can help."],
      ["Build", "We design and build a first version, and you see it working on your own phone and computer."],
      ["Launch", "We adjust whatever is needed and put it live for you. You never have to touch anything technical."],
    ],
    processCta: "Start with a conversation",
    workCta: ["Want something like this for your business?", "Let's talk"],
    aboutCta: "Talk to us",
    buildCta: "Ask for a quote",
    workTitle: "Our work.",
    workLede: "Products and websites we have designed.",
    // SEO + GEO. The two mock-ups are generic on purpose: no search engine's or AI's look or logo.
    foundTitle: "Found on Google. Recommended by AI.",
    foundLede: "Your next customer will search on Google, or just ask ChatGPT. We build your site so the answer they get is you.",
    found: [
      { eyebrow: "SEO", h: "Show up on Google", p: "Google needs to understand what you do and where you do it. We give it fast pages, clear organization and the words your customers really type.", chips: ["Google Maps and local search", "Fast pages", "Clear, organized pages", "The words your customers search for"] },
      { eyebrow: "GEO", h: "Get recommended by AI", p: "Ask ChatGPT, Gemini or Perplexity for a recommendation and they read the web, then name a few businesses. We make your site easy for them to read, trust and recommend.", chips: ["Open to AI tools", "Answers AI can quote", "Details AI understands", "A summary written for AI"] },
    ],
    foundSearch: { label: "Search", query: "family dentist austin", name: "Your Business", host: "yourbusiness.com", meta: "4.9 ★ · Open now · 1.2 mi" },
    foundAi: { label: "AI answer", ask: "Who's a good family dentist in Austin?", answer: "A great pick is <b>Your Business</b>: highly rated, open on Saturdays and known for being gentle with kids.", source: "yourbusiness.com" },
    foundNote: "Nobody can honestly promise first place. We do the work that gets you there, and show you where you stand.",
    foundCta: "Get your business found",
    foundMore: "How AI optimization works",
    storyTitle: "Our year so far.",
    storyLede: "Ideas that became products people use. All in one year.",
    doTitle: "What we build.",
    doLede: "One focus, done properly. Websites first, apps when you need more.",
    tiles: [
      { h: "Websites", p: "Beautiful, fast sites that tell your story in seconds and turn visitors into customers.", chips: ["Designed for phones", "Found on Google and AI search", "Booking and contact", "One or more languages"], dark: true, to: "websites" },
      { h: "Apps", p: "When a website isn't enough: apps your customers open every day.", chips: ["iOS", "Android", "Web apps"], to: "apps" },
    ],
    aboutTitle: "A new studio. Not new to the work.",
    about: [
      "Adscendo was founded by <strong>Jean Menezes</strong>, after years designing and building digital products for enterprise companies.",
      "Today we bring that same standard to businesses like yours. Side by side with you, we build a presence that shows who you are and earns your customers' trust.",
    ],
    sigRole: "Founder. Born in Brazil, built to operate globally.",
    // Questions a business owner asks before hiring us, each answered in its first sentence so search
    // engines and AI assistants can quote it on its own. Also the FAQPage data and llms.txt.
    faqTitle: "Questions, answered.",
    faqLede: "What business owners ask us before we start.",
    faq: [
      ["What does Adscendo do?", "Adscendo is a web design and development studio that builds websites and apps for small and mid-size businesses. Every site is designed for phones, loads fast and is set up to be found on Google and recommended by AI assistants like ChatGPT, Gemini and Perplexity."],
      ["How does a project work?", "In three steps. First we meet to learn how your business works and where you want to go. Then we design and build a first version you can try on your own phone and computer. Finally we adjust what's needed and put it live. You never have to touch anything technical."],
      ["Do you work with businesses outside the US?", "Yes. Adscendo is a Brazilian studio that works remotely with businesses in the United States, Brazil and anywhere else, in English or Portuguese. Your site can have one language or several."],
      ["How do I get started?", "Answer a few questions in the chat below. It takes less than a minute and gives you a first estimate right away. We reply within 6 hours by email, or on WhatsApp if you prefer."],
    ],
    contactTitle: "You imagine it. We build it.",
    contactLede: "Tell us about your business and what you have in mind. We design it, build it and put it live.",
  },
  pt: {
    title: "Adscendo | Criação de sites com SEO para pequenas empresas",
    description: "A Adscendo cria sites e apps rápidos para pequenas empresas, feitos para aparecer no Google e ser recomendados pelo ChatGPT. Sites novos a partir de {new}.",
    h1: ["Ideias que saem do papel.", "Desenhadas e construídas."],
    sub: "Seu negócio merece ser visto. A gente cria sites e apps para ele ser encontrado no Google e recomendado pela IA.",
    ctaWork: "Ver trabalhos",
    ctaTalk: "Começar um projeto",
    hostHero: "prospector.adscendo.pro",
    demoLabel: "Demonstração ao vivo",
    demoText: "<strong>Este é o Prospector, um produto que construímos.</strong> Ele encontra novos clientes para você no mapa, para você gastar seu tempo fechando negócios, e não procurando por eles.",
    warmthTitle: "Calor brasileiro. Padrão americano.",
    warmthLede: "Levamos a criatividade e o calor humano do Brasil para empresas americanas: um trabalho feito com olhar de artista, próximo e cheio de vida, entregue do jeito que elas esperam.",
    processTitle: "Como trabalhamos.",
    processLede: "Simples, da primeira conversa ao dia do lançamento.",
    steps: [
      ["Ouvir", "Fazemos uma reunião, entendemos como seu negócio funciona, o que atrapalha e aonde você quer chegar. Daí mostramos como podemos ajudar."],
      ["Construir", "Desenhamos e construímos uma primeira versão, e você vê tudo funcionando no seu celular e no seu computador."],
      ["Lançar", "Ajustamos o que for preciso e colocamos no ar para você. Sem você precisar mexer em nada técnico."],
    ],
    processCta: "Comece com uma conversa",
    workCta: ["Quer algo assim para o seu negócio?", "Vamos conversar"],
    aboutCta: "Fale com a gente",
    buildCta: "Peça um orçamento",
    workTitle: "Nosso trabalho.",
    workLede: "Produtos e sites que desenhamos.",
    foundTitle: "Encontrado no Google. Recomendado pela IA.",
    foundLede: "Seu próximo cliente vai pesquisar no Google, ou simplesmente perguntar ao ChatGPT. A gente prepara seu site para que a resposta seja você.",
    found: [
      { eyebrow: "SEO", h: "Apareça no Google", p: "O Google precisa entender o que você faz e onde. A gente entrega páginas rápidas, bem organizadas e com as palavras que seus clientes realmente digitam.", chips: ["Google Maps e busca local", "Páginas rápidas", "Páginas claras e organizadas", "As palavras que seus clientes buscam"] },
      { eyebrow: "GEO", h: "Seja indicado pela IA", p: "Peça uma indicação ao ChatGPT, Gemini ou Perplexity e eles leem a internet e citam alguns negócios. A gente deixa seu site fácil de eles lerem, confiarem e indicarem.", chips: ["Aberto às ferramentas de IA", "Respostas que a IA cita", "Dados que a IA entende", "Um resumo feito para a IA"] },
    ],
    foundSearch: { label: "Busca", query: "dentista porto alegre", name: "Seu Negócio", host: "seunegocio.com.br", meta: "4,9 ★ · Aberto agora · 2 km" },
    foundAi: { label: "Resposta da IA", ask: "Qual um bom dentista em Porto Alegre?", answer: "Uma ótima opção é o <b>Seu Negócio</b>: muito bem avaliado, abre aos sábados e é conhecido pelo cuidado com crianças.", source: "seunegocio.com.br" },
    foundNote: "Ninguém pode prometer o primeiro lugar com honestidade. A gente faz o trabalho que te leva até lá e mostra onde você está.",
    foundCta: "Quero ser encontrado",
    foundMore: "Como funciona a otimização para IA",
    storyTitle: "Nosso ano até aqui.",
    storyLede: "Ideias que viraram produtos que as pessoas usam. Tudo em um ano.",
    doTitle: "O que construímos.",
    doLede: "Um foco, bem feito. Primeiro sites, e apps quando você precisar de mais.",
    tiles: [
      { h: "Sites", p: "Sites bonitos e rápidos, que contam sua história em segundos e transformam visitas em clientes.", chips: ["Pensados para o celular", "Encontrados no Google e na busca por IA", "Agendamento e contato", "Um ou mais idiomas"], dark: true, to: "websites" },
      { h: "Apps", p: "Quando um site não basta: apps que seus clientes abrem todo dia.", chips: ["iOS", "Android", "Web apps"], to: "apps" },
    ],
    aboutTitle: "Um estúdio novo. Um trabalho antigo.",
    about: [
      "A Adscendo foi fundada por <strong>Jean Menezes</strong>, depois de anos desenhando e construindo produtos digitais para empresas de grande porte.",
      "Hoje levamos esse mesmo padrão para negócios como o seu. Lado a lado com você, construímos uma presença que mostra quem você é e conquista a confiança dos seus clientes.",
    ],
    sigRole: "Fundador. Nascido no Brasil, feito para operar no mundo.",
    faqTitle: "Perguntas frequentes.",
    faqLede: "O que os donos de negócio perguntam antes de começar.",
    faq: [
      ["O que a Adscendo faz?", "A Adscendo é um estúdio de design e desenvolvimento que cria sites e apps para pequenas e médias empresas. Todo site é pensado para o celular, carrega rápido e é preparado para ser encontrado no Google e recomendado por assistentes de IA como ChatGPT, Gemini e Perplexity."],
      ["Como funciona um projeto?", "Em três etapas. Primeiro fazemos uma reunião para entender como seu negócio funciona e aonde você quer chegar. Depois desenhamos e construímos uma primeira versão, que você testa no seu celular e no seu computador. Por fim, ajustamos o que for preciso e colocamos no ar. Você não precisa mexer em nada técnico."],
      ["Vocês atendem empresas no Brasil?", "Sim. A Adscendo é um estúdio brasileiro que trabalha de forma remota com empresas no Brasil, nos Estados Unidos e em qualquer lugar, em português ou inglês. Seu site pode ter um idioma ou vários."],
      ["Como eu começo?", "Responda algumas perguntas no chat abaixo. Leva menos de um minuto e já mostra uma primeira estimativa. Respondemos em até 6 horas por email, ou pelo WhatsApp se preferir."],
    ],
    contactTitle: "Você imagina. A gente constrói.",
    contactLede: "Conte sobre seu negócio e o que você tem em mente. A gente desenha, constrói e coloca no ar.",
  },
};

// The phone in the home hero: Prospector's "What the AI learned" screen, with sample numbers.
export const aiDemo = {
  en: {
    tabs: ["Map", "CRM", "AI"],
    title: "What the AI learned",
    sub: "From your last 122 leads with a result.",
    kpis: [["Expected replies", "14", "likely 11–17"], ["New clients", "3", "from 48 open leads"], ["Reply rate", "18%", "22 of 122 replied"], ["Is the AI right?", "17 / 18%", "predicted / actual"]],
    worksTitle: "What's working",
    works: [["Tone", "Friendly", "21% replied, 96 sends"], ["Best time", "Tue–Thu, 9–11 a.m.", "2× more replies"], ["Follow-up", "After 3 days", "27% of replies"]],
    whenTitle: "When replies arrive",
    when: [["1st email", 62], ["1st follow-up", 27], ["2nd follow-up", 11]],
    whoTitle: "Who replies most",
    who: [["Med spas", 26], ["Dentists", 19], ["Chiropractors", 12], ["Roofing", 8]],
    note: "Sample data",
  },
  pt: {
    tabs: ["Mapa", "CRM", "IA"],
    title: "O que a IA aprendeu",
    sub: "Dos seus últimos 122 leads com resultado.",
    kpis: [["Respostas esperadas", "14", "provavelmente 11–17"], ["Novos clientes", "3", "de 48 leads em aberto"], ["Taxa de resposta", "18%", "22 de 122 responderam"], ["A IA está acertando?", "17 / 18%", "previsto / real"]],
    worksTitle: "O que está funcionando",
    works: [["Tom", "Cordial", "21% responderam, 96 envios"], ["Melhor horário", "Ter–qui, 9h–11h", "2× mais respostas"], ["Lembrete", "Depois de 3 dias", "27% das respostas"]],
    whenTitle: "Quando as respostas chegam",
    when: [["1º email", 62], ["1º lembrete", 27], ["2º lembrete", 11]],
    whoTitle: "Quem responde mais",
    who: [["Clínicas de estética", 26], ["Dentistas", 19], ["Quiropraxia", 12], ["Telhados", 8]],
    note: "Dados de exemplo",
  },
};

// The contact chat: a short scripted conversation (no AI) that ends with a first estimate and a message
// ready to send on WhatsApp or by email. Prices in US dollars: regular price and launch discount (%).
export const quote = {
  new: { regular: 800, off: 50 },      // no website yet: built from scratch
  redo: { regular: 1200, off: 30 },    // has a website, no integrations: we already have most of the content
  complex: { regular: 2000, off: 5 },  // has a website that connects to other tools
};
export const chat = {
  en: {
    title: "Project chat", status: "Takes less than a minute",
    greet: "Hi! Let's see what we can build for you.",
    askName: "What's your name?", namePh: "Your name",
    askSite: "Nice to meet you, {name}. Do you already have a website?",
    yes: "Yes", no: "No", notSure: "Not sure", skip: "Skip",
    askLink: "Great. What's the address?", linkPh: "yourbusiness.com",
    askTools: "Does it connect to other tools, like online booking, payments or a CRM?",
    estimate: "Here's a first estimate. It's only a starting point: we look at your project more carefully before giving you a final price.",
    tiers: { new: "A new website, from scratch", redo: "A new version of your website", complex: "A new website, with your integrations" },
    off: "{p}% off", launch: "launch discount",
    fine: "Estimate only. Final price after a closer look at your project.",
    maybeMore: "If it connects to other tools, it starts at {price}.",
    askEmail: "What's your email? We'll send the details there.", emailPh: "you@yourbusiness.com", emailDomains: ["gmail.com", "icloud.com", "outlook.com"],
    askPhone: "And a WhatsApp number, if you'd rather chat there?", phonePh: "+1 555 123 4567",
    askMore: "Anything else we should know? A goal, a deadline, an idea.", morePh: "Optional",
    askMeet: "Want to talk this week? Grab 15 minutes on a video call with Jean.", meetYes: "Pick a time", meetNo: "Not now",
    pickDay: "Which day works for you?", pickTime: "And what time?", otherDay: "Another day", today: "Today", tomorrow: "Tomorrow",
    booked: "Booked for {when}. The invite with the Google Meet link is on its way to {email}.",
    bookedBye: "See you then! If anything changes, reply to the invite or message us on WhatsApp.",
    already: "You already have a call with us on {when}. See you then!",
    taken: "Someone just took that time. Here's what's still open.",
    bookFailed: "I couldn't book it right now. Jean will email you a few times instead.",
    meetTitle: "Adscendo + {name}", subjectMeet: "Call booked: {name}",
    ready: "All set, {name}. Hit send and you'll hear from us within 6 hours.",
    sent: "Sent! Thanks, {name}. You'll hear from us within 6 hours.",
    sending: "Sending…",
    hurry: "In a hurry? Skip the wait and message us on WhatsApp.",
    failed: "That didn't go through. Message us on WhatsApp and we'll take it from there.",
    failedMail: "That didn't go through. Send it by email and we'll take it from there.",
    sendWa: "Message us on WhatsApp", sendEmail: "Send by email", restart: "Start over", close: "Close chat", send: "Send",
    bad: { name: "Just your name, please.", link: "That address doesn't look right.", email: "That email doesn't look right.", phone: "Use digits, with the country code." },
    labels: { name: "Name", site: "Website", tools: "Integrations", estimate: "Estimate", email: "Email", phone: "WhatsApp", notes: "Notes", meeting: "Call", none: "None yet" },
    subject: "New project: {name}",
  },
  pt: {
    title: "Conversa sobre o projeto", status: "Leva menos de um minuto",
    greet: "Oi! Vamos ver o que podemos construir para você.",
    askName: "Qual é o seu nome?", namePh: "Seu nome",
    askSite: "Prazer, {name}. Você já tem um site?",
    yes: "Sim", no: "Não", notSure: "Não sei", skip: "Pular",
    askLink: "Ótimo. Qual é o endereço?", linkPh: "seunegocio.com.br",
    askTools: "Ele se conecta com outras ferramentas, como agendamento online, pagamentos ou um CRM?",
    estimate: "Aqui vai uma primeira estimativa. É só um ponto de partida: avaliamos seu projeto com mais calma antes de passar o valor final.",
    tiers: { new: "Um site novo, do zero", redo: "Uma nova versão do seu site", complex: "Um site novo, com as suas integrações" },
    off: "{p}% de desconto", launch: "lançamento",
    fine: "Apenas uma estimativa. O valor final sai depois de avaliarmos seu projeto com calma.",
    maybeMore: "Se ele se conectar com outras ferramentas, começa em {price}.",
    askEmail: "Qual é o seu email? Mandamos os detalhes por lá.", emailPh: "voce@seunegocio.com.br", emailDomains: ["gmail.com", "hotmail.com", "outlook.com"],
    askPhone: "E um WhatsApp, se preferir conversar por lá?", phonePh: "+55 11 91234-5678",
    askMore: "Mais alguma coisa que devemos saber? Um objetivo, um prazo, uma ideia.", morePh: "Opcional",
    askMeet: "Quer conversar ainda esta semana? Marque 15 minutos por vídeo com o Jean.", meetYes: "Escolher horário", meetNo: "Agora não",
    pickDay: "Qual dia fica melhor para você?", pickTime: "E qual horário?", otherDay: "Outro dia", today: "Hoje", tomorrow: "Amanhã",
    booked: "Marcado para {when}. O convite com o link do Google Meet está a caminho de {email}.",
    bookedBye: "Até lá! Se algo mudar, é só responder o convite ou chamar a gente no WhatsApp.",
    already: "Você já tem uma conversa marcada para {when}. Até lá!",
    taken: "Esse horário acabou de ser ocupado. Veja o que ainda está livre.",
    bookFailed: "Não consegui marcar agora. O Jean manda alguns horários por email.",
    meetTitle: "Adscendo + {name}", subjectMeet: "Chamada marcada: {name}",
    ready: "Tudo certo, {name}. Clique em enviar e você recebe uma resposta em até 6 horas.",
    sent: "Enviado! Obrigado, {name}. Você recebe uma resposta em até 6 horas.",
    sending: "Enviando…",
    hurry: "Com pressa? Pule a espera e fale com a gente no WhatsApp.",
    failed: "Não deu certo. Mande uma mensagem no WhatsApp e a gente segue por lá.",
    failedMail: "Não deu certo. Envie por email e a gente segue por lá.",
    sendWa: "Falar no WhatsApp", sendEmail: "Enviar por email", restart: "Recomeçar", close: "Fechar chat", send: "Enviar",
    bad: { name: "Só o seu nome, por favor.", link: "Esse endereço não parece certo.", email: "Esse email não parece certo.", phone: "Use números, com o código do país." },
    labels: { name: "Nome", site: "Site", tools: "Integrações", estimate: "Estimativa", email: "Email", phone: "WhatsApp", notes: "Observações", meeting: "Chamada", none: "Ainda não tem" },
    subject: "Novo projeto: {name}",
  },
};

// The AI optimization page, at /ai and /pt/ia: a new website sold together with GEO. Linked from the home
// SEO section. Prices come from `quote`; the before/after mock-ups are generic, like the home ones (the
// "after" one is the home's `foundAi`). The free AI check is offered on WhatsApp, with `waText` prefilled.
export const aiPage = {
  en: {
    slug: "ai",
    name: "AI optimization",
    title: "Websites built for AI search: ChatGPT, Gemini and Perplexity | Adscendo",
    description: "A new website built so ChatGPT, Gemini and Perplexity can read, trust and recommend your business. AI optimization included, from {new} at launch.",
    eyebrow: "New website + AI optimization",
    h1: "Be the answer AI gives.",
    lede: "More and more customers ask ChatGPT before they search on Google. We build you a new website made for AI to read, trust and recommend.",
    ctaCheck: "Get a free AI check",
    ctaPrices: "See prices",
    waText: "Hi Jean, I'd like a free AI check for my business. My website is: ",
    before: { label: "Before", answer: "Three popular options are <b>Practice A</b>, <b>Practice B</b> and <b>Practice C</b>.", source: "3 other websites" },
    after: "After",
    howTitle: "How AI picks who to recommend.",
    howLede: "ChatGPT, Gemini and Perplexity read the web, then name a few businesses. To be one of them, your site has to pass three tests.",
    how: [
      ["Read", "AI tools visit websites to read them, a bit like a person would. If your site turns them away or is hard to read, they move on to the next one."],
      ["Trust", "They check that you are real: the same name, address and phone everywhere, reviews, and who runs the business."],
      ["Quote", "They pick sentences that answer the question directly. A site that answers what your customers ask, in plain words, gets quoted."],
    ],
    whyTitle: "Why it comes with a new website.",
    whyLede: "Most small business sites were made before anyone asked AI for a recommendation. They tend to fail in the same three ways.",
    why: [
      ["Closed to AI", "Many sites turn AI tools away without the owner knowing, because of a setting nobody remembers turning on."],
      ["Hard to read", "On many sites the important words are inside pictures, behind pop-ups or slow to appear. People can see them. AI often can't."],
      ["Nothing to quote", "The site never says clearly what you do, where and for whom, and doesn't answer the questions customers really ask."],
    ],
    whyNote: "Patching an old site piece by piece usually costs more and works worse. So we build the new one with AI optimization inside from day one.",
    incTitle: "What's included.",
    incLede: "One project, one price: a new website, and everything AI needs to recommend it.",
    inc: [
      { h: "A new website", p: "Fast, beautiful and made for phones. It tells your story in seconds and turns visits into calls, bookings and messages.", chips: ["Designed for phones", "Fast loading", "Booking and contact", "One or more languages", "Ready for Google"] },
      { h: "AI optimization", p: "What ChatGPT, Gemini and Perplexity look for when they decide who to recommend.", chips: ["Open to AI tools", "A summary of your business written for AI", "Your details in a format AI understands", "Answers to your customers' questions", "A page for each service", "Your experience and reviews", "Same details on Google, Bing and Apple Maps"] },
    ],
    pricesTitle: "Prices.",
    pricesLede: "AI optimization is included in every website.",
    included: "AI optimization included",
    regular: "{price} regular · {off}% launch discount",
    honest: "Nobody can honestly guarantee that an AI will recommend you: answers change with each question and each person. We guarantee that AI can read, understand and trust your site, and we show you where you stand.",
    faqTitle: "Questions about AI optimization.",
    faq: [
      ["What is AI optimization?", "It's the work that makes your website easy for AI assistants like ChatGPT, Gemini and Perplexity to read, trust and recommend. Being found on Google gets you on a list of links. Being recommended by AI gets your name in the answer. You may also see it called GEO."],
      ["Why do you sell it with a new website?", "Because most of what AI needs is built into the site itself: how the pages load, how they are organized and what they say. Fixing that on an old site usually costs more and works worse than building a new one the right way, so we do both in one project, for one price."],
      ["Can you guarantee ChatGPT will recommend my business?", "No, and be careful with anyone who does. AI answers change with each question, each person and each day. We guarantee that AI can read, understand and trust your site, and we show you where you stand before and after launch."],
      ["How long until AI starts mentioning my business?", "It varies. AI tools that look things up online as they answer, like ChatGPT, Perplexity and Google's AI answers, can find a new site within a few weeks. What they already \"know\" changes more slowly, over months. We ask the same questions at launch and again later, so you see what changed."],
      ["What is the free AI check?", "We ask ChatGPT, Gemini and Perplexity the questions your customers ask, look at how your website is built and send you one page with what we found. It is free, and you don't have to hire us."],
      ["My website is new and I like it. Can you do only the AI part?", "Sometimes. If your site is recent and well built, we can add AI optimization to it. Send us the address and we'll tell you honestly whether it's worth it."],
    ],
    ctaTitle: "Is AI recommending you?",
    ctaText: "Send us your website. We ask ChatGPT, Gemini and Perplexity what your customers ask, and show you what they answer. Free, on one page.",
    ctaProject: "Start a project",
  },
  pt: {
    slug: "ia",
    name: "Otimização para IA",
    title: "Site otimizado para IA: ChatGPT, Gemini e Perplexity | Adscendo",
    description: "Um site novo feito para o ChatGPT, o Gemini e o Perplexity lerem, confiarem e recomendarem seu negócio. Otimização para IA inclusa, a partir de {new}.",
    eyebrow: "Site novo + otimização para IA",
    h1: "Seja a resposta da IA.",
    lede: "Cada vez mais clientes perguntam ao ChatGPT antes de pesquisar no Google. A gente cria um site novo, feito para a IA ler, confiar e indicar você.",
    ctaCheck: "Quero o teste grátis",
    ctaPrices: "Ver preços",
    waText: "Oi Jean, quero o teste grátis de IA para o meu negócio. Meu site é: ",
    before: { label: "Antes", answer: "Três opções conhecidas são a <b>Clínica A</b>, a <b>Clínica B</b> e a <b>Clínica C</b>.", source: "3 outros sites" },
    after: "Depois",
    howTitle: "Como a IA escolhe quem indicar.",
    howLede: "O ChatGPT, o Gemini e o Perplexity leem a internet e citam alguns negócios. Para ser um deles, seu site precisa passar em três testes.",
    how: [
      ["Ler", "As ferramentas de IA visitam os sites para ler, mais ou menos como uma pessoa faria. Se o seu site barra a entrada delas ou é difícil de ler, elas passam para o próximo."],
      ["Confiar", "Elas conferem se você existe de verdade: o mesmo nome, endereço e telefone em todo lugar, avaliações, e quem está à frente do negócio."],
      ["Citar", "Elas escolhem frases que respondem a pergunta de forma direta. Um site que responde o que seus clientes perguntam, com palavras simples, é citado."],
    ],
    whyTitle: "Por que vem junto com um site novo.",
    whyLede: "A maioria dos sites de pequenas empresas foi feita antes de alguém pedir indicação a uma IA. E eles costumam falhar nos mesmos três pontos.",
    why: [
      ["Fechado para a IA", "Muitos sites barram as ferramentas de IA sem o dono saber, por causa de uma configuração que ninguém lembra de ter ligado."],
      ["Difícil de ler", "Em muitos sites as informações importantes estão dentro de imagens, atrás de pop-ups ou demoram para aparecer. As pessoas veem. A IA muitas vezes não."],
      ["Nada para citar", "O site não diz com clareza o que você faz, onde e para quem, e não responde as perguntas que os clientes realmente fazem."],
    ],
    whyNote: "Remendar um site antigo aos poucos costuma custar mais e funcionar pior. Por isso construímos o novo já com a otimização para IA desde o primeiro dia.",
    incTitle: "O que está incluso.",
    incLede: "Um projeto, um preço: um site novo, e tudo o que a IA precisa para indicá-lo.",
    inc: [
      { h: "Um site novo", p: "Rápido, bonito e pensado para o celular. Conta sua história em segundos e transforma visitas em ligações, agendamentos e mensagens.", chips: ["Pensado para o celular", "Carrega rápido", "Agendamento e contato", "Um ou mais idiomas", "Pronto para o Google"] },
      { h: "Otimização para IA", p: "O que o ChatGPT, o Gemini e o Perplexity procuram na hora de decidir quem indicar.", chips: ["Aberto às ferramentas de IA", "Um resumo do seu negócio feito para a IA", "Seus dados num formato que a IA entende", "Respostas para as perguntas dos seus clientes", "Uma página para cada serviço", "Sua experiência e avaliações", "Mesmos dados no Google, Bing e Apple Maps"] },
    ],
    pricesTitle: "Preços.",
    pricesLede: "A otimização para IA vem inclusa em todo site.",
    included: "Otimização para IA inclusa",
    regular: "{price} preço cheio · {off}% de desconto de lançamento",
    honest: "Ninguém pode garantir com honestidade que uma IA vai indicar você: as respostas mudam a cada pergunta e a cada pessoa. A gente garante que a IA consegue ler, entender e confiar no seu site, e mostra onde você está.",
    faqTitle: "Perguntas sobre otimização para IA.",
    faq: [
      ["O que é otimização para IA?", "É o trabalho que deixa seu site fácil para assistentes de IA como ChatGPT, Gemini e Perplexity lerem, confiarem e indicarem. Aparecer no Google coloca você numa lista de links. Ser indicado pela IA coloca seu nome na resposta. Você também pode ver isso com o nome de GEO."],
      ["Por que vocês vendem junto com um site novo?", "Porque quase tudo o que a IA precisa está no próprio site: como as páginas carregam, como estão organizadas e o que dizem. Corrigir isso num site antigo costuma custar mais e funcionar pior do que construir um novo do jeito certo, então fazemos as duas coisas num projeto só, por um preço só."],
      ["Vocês garantem que o ChatGPT vai indicar meu negócio?", "Não, e desconfie de quem garante. As respostas da IA mudam a cada pergunta, a cada pessoa e a cada dia. A gente garante que a IA consegue ler, entender e confiar no seu site, e mostra onde você está antes e depois do lançamento."],
      ["Quanto tempo até a IA começar a citar meu negócio?", "Depende. As ferramentas de IA que pesquisam na internet na hora de responder, como o ChatGPT, o Perplexity e as respostas de IA do Google, podem encontrar um site novo em poucas semanas. O que elas já \"sabem\" muda mais devagar, ao longo de meses. Fazemos as mesmas perguntas no lançamento e de novo depois, para você ver o que mudou."],
      ["O que é o teste grátis de IA?", "Perguntamos ao ChatGPT, ao Gemini e ao Perplexity o que seus clientes perguntam, olhamos como seu site é feito e mandamos uma página com o que encontramos. É grátis, e você não precisa contratar a gente."],
      ["Meu site é novo e eu gosto dele. Dá para fazer só a parte de IA?", "Às vezes. Se o seu site é recente e bem feito, podemos adicionar a otimização para IA nele. Mande o endereço e dizemos com sinceridade se vale a pena."],
    ],
    ctaTitle: "A IA está indicando você?",
    ctaText: "Mande o endereço do seu site. A gente pergunta ao ChatGPT, ao Gemini e ao Perplexity o que seus clientes perguntam, e mostra o que eles respondem. Grátis, em uma página.",
    ctaProject: "Começar um projeto",
  },
};

// One page per service, at /websites and /apps (/pt/sites, /pt/apps), linked from the "Services" menu
// and the home's "What we build" tiles. `hero` is the project shown on a computer and a phone, `work` the
// projects listed further down. Websites show the prices in `quote`; apps are priced per project.
export const servicePages = {
  websites: {
    hero: "minha-companhia",
    work: ["minha-companhia", "sidemed", "adscendo"],
    prices: true,
    serviceType: "Web design",
    en: {
      slug: "websites",
      name: "Websites",
      title: "Small business website design, built to be found | Adscendo",
      description: "Custom websites for small businesses, designed for phones, fast, and built to be found on Google and recommended by AI. From {new} at launch.",
      eyebrow: "Websites",
      h1: "A website that brings you customers.",
      lede: "Beautiful, fast sites that tell your story in seconds and turn visits into calls, bookings and messages. We design it, build it and put it live for you.",
      ctaMain: "Get a quote",
      ctaSecond: "See prices",
      incTitle: "What every website includes.",
      incLede: "Nothing to add on later. Every site comes with the basics done properly.",
      inc: [
        ["Designed for phones", "Most customers will meet your business on a phone first. We design for that screen, then for the computer."],
        ["Fast", "Pages that open in a blink, even on a weak signal. Slow sites lose visitors before they read a word."],
        ["Found on Google", "Clear pages, the words your customers really type and your details where Google looks for them, Maps included."],
        ["Recommended by AI", "Built so ChatGPT, Gemini and Perplexity can read your site, trust it and name you in their answers."],
        ["Booking and contact", "A way to call, message, book or ask for a quote on every page, so a visit turns into a conversation."],
        ["One or more languages", "One language or several, each with its own address, so Google shows each customer the right one."],
      ],
      workTitle: "Websites we've built.",
      workLede: "Each one with its full story: the brief, the decisions and the site as it went live.",
      pricesTitle: "Prices.",
      pricesLede: "One price for the whole project, with a launch discount for our first clients in the US.",
      regular: "{price} regular · {off}% launch discount",
      priceChips: ["Design and build", "Google and AI setup", "Put live for you"],
      faqTitle: "Questions about websites.",
      faq: [
        ["I already have a website. Do I need a new one?", "Not always. If your site is slow, hard to use on a phone or doesn't bring in customers, a new version usually pays off, and we reuse what already works. Send us the address and we'll tell you honestly what we'd do."],
        ["Will my business show up on Google and in ChatGPT?", "We build every site to be found: fast pages, clear organization, your details in a format Google and AI understand, and words written the way your customers ask. Nobody can honestly guarantee first place, so we show you where you stand and what is improving."],
      ],
      ctaTitle: "Let's build yours.",
      ctaText: "Tell us about your business. In less than a minute you get a first estimate, and we reply within 6 hours.",
    },
    pt: {
      slug: "sites",
      name: "Sites",
      title: "Criação de sites para pequenas empresas, feitos para ser encontrados | Adscendo",
      description: "Sites sob medida para pequenas empresas, pensados para o celular, rápidos e feitos para aparecer no Google e ser recomendados pela IA. A partir de {new}.",
      eyebrow: "Sites",
      h1: "Um site que traz clientes.",
      lede: "Sites bonitos e rápidos, que contam sua história em segundos e transformam visitas em ligações, agendamentos e mensagens. A gente desenha, constrói e coloca no ar para você.",
      ctaMain: "Peça um orçamento",
      ctaSecond: "Ver preços",
      incTitle: "O que todo site inclui.",
      incLede: "Nada para adicionar depois. Todo site vem com o básico bem feito.",
      inc: [
        ["Pensado para o celular", "A maioria dos clientes conhece seu negócio primeiro pelo celular. A gente desenha para essa tela, e depois para o computador."],
        ["Rápido", "Páginas que abrem num piscar de olhos, mesmo com sinal fraco. Site lento perde visitas antes de alguém ler uma palavra."],
        ["Encontrado no Google", "Páginas claras, as palavras que seus clientes realmente digitam e seus dados onde o Google procura, inclusive no Maps."],
        ["Recomendado pela IA", "Feito para o ChatGPT, o Gemini e o Perplexity conseguirem ler seu site, confiar nele e citar você nas respostas."],
        ["Agendamento e contato", "Um jeito de ligar, mandar mensagem, agendar ou pedir orçamento em todas as páginas, para a visita virar conversa."],
        ["Um ou mais idiomas", "Um idioma ou vários, cada um com seu próprio endereço, para o Google mostrar a versão certa para cada cliente."],
      ],
      workTitle: "Sites que construímos.",
      workLede: "Cada um com a história completa: o pedido, as decisões e o site como foi ao ar.",
      pricesTitle: "Preços.",
      pricesLede: "Um preço para o projeto inteiro, com desconto de lançamento para nossos primeiros clientes nos EUA.",
      regular: "{price} cheio · {off}% de desconto de lançamento",
      priceChips: ["Design e construção", "Preparado para Google e IA", "Colocamos no ar"],
      faqTitle: "Perguntas sobre sites.",
      faq: [
        ["Eu já tenho site. Preciso de um novo?", "Nem sempre. Se o seu site é lento, ruim de usar no celular ou não traz clientes, uma nova versão costuma valer a pena, e a gente aproveita o que já funciona. Mande o endereço e a gente diz com honestidade o que faria."],
        ["Meu negócio vai aparecer no Google e no ChatGPT?", "Todo site que fazemos é feito para ser encontrado: páginas rápidas, organização clara, seus dados num formato que o Google e a IA entendem e textos escritos do jeito que seus clientes perguntam. Ninguém pode garantir o primeiro lugar com honestidade, por isso mostramos onde você está e o que está melhorando."],
      ],
      ctaTitle: "Vamos construir o seu.",
      ctaText: "Conte sobre seu negócio. Em menos de um minuto você recebe uma primeira estimativa, e a gente responde em até 6 horas.",
    },
  },
  apps: {
    hero: "sidemed",
    work: ["sidemed", "prospector", "minha-companhia"],
    prices: false,
    serviceType: "Mobile and web app development",
    en: {
      slug: "apps",
      name: "Apps",
      title: "App design and development for iPhone, Android and the web | Adscendo",
      description: "Apps for iPhone, Android and the web, designed and built by Adscendo, from the first idea to the App Store, Google Play and live online.",
      eyebrow: "Apps",
      h1: "When a website isn't enough.",
      lede: "Apps your customers open every day, for iPhone, Android and the web. We take your idea from the first sketch to the App Store and Google Play.",
      ctaMain: "Talk about your app",
      ctaSecond: "See our apps",
      incTitle: "What we build.",
      incLede: "Apps your customers use, designed and built the same way as our websites: simple, fast and made for the phone.",
      inc: [
        ["iPhone and Android", "Apps people download from the App Store and Google Play, with the look and feel they expect on their phone."],
        ["Web apps", "Tools that run in the browser, on a computer or a phone, with nothing to install. Faster to launch, and easy to share as a link."],
        ["Connected to what you use", "Sign-in, payments, booking, maps and the services you already rely on, working together in one app."],
      ],
      workTitle: "Apps we've built.",
      workLede: "A health passport used in 17 countries, our own sales tool and a marketplace for families.",
      pricesTitle: "How pricing works.",
      pricesLede: "Every app is different, so there's no price list. After a free first call, we send you a proposal with what's included and what it costs, before any work starts.",
      faqTitle: "Questions about apps.",
      faq: [
        ["iPhone, Android or web: which do I need?", "If your customers will use it often and on the go, an app in the stores makes sense. If they'll use it now and then, or at a desk, a web app is faster to launch and needs no download. We recommend what fits on the first call."],
        ["Do you publish it on the App Store and Google Play?", "Yes. We prepare everything both stores ask for and send the app for review, so it reaches your customers' phones."],
        ["Do I need a website too?", "Usually, yes. The website is where people find you on Google and in AI answers, and where they learn about the app before downloading it. We can build both in one project."],
      ],
      ctaTitle: "Have an app in mind?",
      ctaText: "Tell us what it should do and who it's for. We reply within 6 hours, and the first call is free.",
    },
    pt: {
      slug: "apps",
      name: "Apps",
      title: "Criação de apps para iPhone, Android e web | Adscendo",
      description: "Apps para iPhone, Android e web, desenhados e construídos pela Adscendo, da primeira ideia até a App Store, o Google Play e o ar.",
      eyebrow: "Apps",
      h1: "Quando um site não basta.",
      lede: "Apps que seus clientes abrem todo dia, para iPhone, Android e web. A gente leva sua ideia do primeiro rascunho até a App Store e o Google Play.",
      ctaMain: "Conversar sobre seu app",
      ctaSecond: "Ver nossos apps",
      incTitle: "O que construímos.",
      incLede: "Apps que seus clientes usam, desenhados e construídos do mesmo jeito que nossos sites: simples, rápidos e pensados para o celular.",
      inc: [
        ["iPhone e Android", "Apps que as pessoas baixam na App Store e no Google Play, com a aparência e o jeito que elas esperam no celular."],
        ["Web apps", "Ferramentas que rodam no navegador, no computador ou no celular, sem instalar nada. Mais rápidas de lançar e fáceis de compartilhar por link."],
        ["Conectado ao que você usa", "Login, pagamentos, agendamento, mapas e os serviços que você já usa, funcionando juntos num app só."],
      ],
      workTitle: "Apps que construímos.",
      workLede: "Um passaporte de saúde usado em 17 países, nossa própria ferramenta de vendas e um marketplace para famílias.",
      pricesTitle: "Como funciona o preço.",
      pricesLede: "Cada app é diferente, por isso não existe tabela de preços. Depois de uma primeira conversa gratuita, mandamos uma proposta com o que está incluído e quanto custa, antes de qualquer trabalho começar.",
      faqTitle: "Perguntas sobre apps.",
      faq: [
        ["iPhone, Android ou web: qual eu preciso?", "Se seus clientes vão usar com frequência e na rua, um app nas lojas faz sentido. Se vão usar de vez em quando, ou no computador, um web app é mais rápido de lançar e não precisa ser baixado. A gente recomenda o que faz sentido na primeira conversa."],
        ["Vocês publicam na App Store e no Google Play?", "Sim. A gente prepara tudo o que as duas lojas pedem e envia o app para aprovação, para ele chegar ao celular dos seus clientes."],
        ["Preciso de um site também?", "Normalmente, sim. O site é onde as pessoas te encontram no Google e nas respostas da IA, e onde conhecem o app antes de baixar. A gente pode fazer os dois no mesmo projeto."],
      ],
      ctaTitle: "Tem um app em mente?",
      ctaText: "Conte o que ele deve fazer e para quem. A gente responde em até 6 horas, e a primeira conversa é gratuita.",
    },
  },
};

// The privacy policy, at /privacy and /pt/privacidade (linked from the footer, and from the Google sign-in
// screen that lets the contact chat book calls on Jean's calendar). Keep it true to what the site does.
export const privacy = {
  en: {
    slug: "privacy", title: "Privacy policy", updated: "Last updated November 1, 2026",
    lede: "What this site collects, why, and what you can ask us to do with it.",
    sections: [
      { h: "Who we are", p: ["Adscendo is the web design and development studio of Jean Menezes, based in Brazil. For anything about your data, write to <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a>."] },
      { h: "What we collect", p: [
        "Only what you choose to tell us in the project chat: your name, whether you have a website and its address, your email, and, if you give them, a WhatsApp number and notes. Nothing leaves the page until you send the chat or book a call.",
        "If you book a call, we also keep the time you picked.",
        "To learn which pages people read and how they found us, we count visits with <b>Google Analytics</b> and <b>Vercel Web Analytics</b>: pages viewed, how you arrived (a search, a link, a post), your approximate country and city, and your kind of device. We also count when someone starts the chat, sends it, books a call or taps WhatsApp or email, never what was typed. We don't run ads or advertising cookies.",
      ] },
      { h: "How we use it", p: [
        "To reply to you about your project, and to hold the call you booked. We don't sell your data, share it for advertising, or add you to a mailing list.",
      ] },
      { h: "Who handles it for us", p: [
        "<b>Resend</b> delivers the chat's summary to our inbox. <b>Google Calendar</b> holds the call you book: the event goes on Jean's calendar with you as a guest, and Google emails you the invite with a Google Meet link. <b>Vercel</b> hosts the site and keeps short-lived technical logs. If you message us on WhatsApp, that conversation follows WhatsApp's own terms.",
        "Pages load fonts from Google Fonts, and the map on the home page loads from unpkg and OpenFreeMap, so those services see your IP address, as with any website.",
      ] },
      { h: "Google user data", p: [
        "The site connects to one Google account only: Jean's own. It reads when his calendar is busy, so it can offer free times, and it creates the events for calls you book. It never asks for access to your Google account and doesn't read the details of other events. Adscendo's use and transfer of information received from Google APIs adheres to the <a href=\"https://developers.google.com/terms/api-services-user-data-policy\" target=\"_blank\" rel=\"noopener\">Google API Services User Data Policy</a>, including the Limited Use requirements.",
      ] },
      { h: "On your device", p: [
        "The site remembers two small preferences in your browser: light or dark mode, and whether you closed the offer banner. They stay on your device and are never sent to us.",
        "Google Analytics sets cookies (named <code>_ga</code>) to tell a returning visit from a new one; outside Europe they last up to 14 months, and in the European Economic Area, the UK and Switzerland they are not set at all. Vercel Web Analytics uses no cookies. To opt out of Google Analytics on every site, use Google's <a href=\"https://tools.google.com/dlpage/gaoptout\" target=\"_blank\" rel=\"noopener\">opt-out add-on</a>.",
      ] },
      { h: "How long we keep it", p: [
        "As long as we're talking about your project, and after that only as long as the law requires for work we did together. You can ask us to delete it at any time.",
      ] },
      { h: "Your rights", p: [
        "You can ask to see, correct or delete your data, or to stop us using it, under Brazil's LGPD and similar laws where you live. Write to <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a> and we'll answer within 15 days.",
      ] },
      { h: "Changes", p: ["If this policy changes, we update this page and the date at the top."] },
    ],
  },
  pt: {
    slug: "privacidade", title: "Política de privacidade", updated: "Atualizada em 1º de novembro de 2026",
    lede: "O que este site coleta, por quê, e o que você pode pedir que a gente faça com isso.",
    sections: [
      { h: "Quem somos", p: ["A Adscendo é o estúdio de design e desenvolvimento web de Jean Menezes, no Brasil. Para qualquer assunto sobre os seus dados, escreva para <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a>."] },
      { h: "O que coletamos", p: [
        "Só o que você escolhe contar na conversa sobre o projeto: seu nome, se você tem site e o endereço dele, seu email e, se quiser, um WhatsApp e observações. Nada sai da página até você enviar a conversa ou marcar uma chamada.",
        "Se você marcar uma chamada, guardamos também o horário escolhido.",
        "Para saber quais páginas as pessoas leem e como nos encontraram, contamos as visitas com o <b>Google Analytics</b> e o <b>Vercel Web Analytics</b>: páginas vistas, como você chegou (uma busca, um link, um post), país e cidade aproximados e o tipo de aparelho. Também contamos quando alguém começa a conversa, envia, marca uma chamada ou toca no WhatsApp ou no email, nunca o que foi digitado. Não fazemos anúncios nem usamos cookies de publicidade.",
      ] },
      { h: "Como usamos", p: [
        "Para responder sobre o seu projeto e para fazer a chamada que você marcou. Não vendemos seus dados, não compartilhamos para publicidade e não colocamos você em lista de email.",
      ] },
      { h: "Quem cuida disso com a gente", p: [
        "A <b>Resend</b> entrega o resumo da conversa no nosso email. O <b>Google Agenda</b> guarda a chamada que você marca: o evento vai para a agenda do Jean com você como convidado, e o Google te manda o convite com o link do Google Meet. A <b>Vercel</b> hospeda o site e guarda registros técnicos por pouco tempo. Se você falar com a gente no WhatsApp, essa conversa segue os termos do próprio WhatsApp.",
        "As páginas carregam fontes do Google Fonts, e o mapa da página inicial vem do unpkg e do OpenFreeMap, então esses serviços veem o seu endereço IP, como em qualquer site.",
      ] },
      { h: "Dados de usuário do Google", p: [
        "O site se conecta a uma única conta Google: a do próprio Jean. Ele consulta quando a agenda dele está ocupada, para oferecer horários livres, e cria os eventos das chamadas que você marca. Ele nunca pede acesso à sua conta Google e não lê os detalhes de outros eventos. O uso e a transferência de informações recebidas das APIs do Google pela Adscendo seguem a <a href=\"https://developers.google.com/terms/api-services-user-data-policy\" target=\"_blank\" rel=\"noopener\">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de Uso Limitado.",
      ] },
      { h: "No seu aparelho", p: [
        "O site lembra duas pequenas preferências no seu navegador: modo claro ou escuro, e se você fechou a faixa de oferta. Elas ficam no seu aparelho e nunca são enviadas para a gente.",
        "O Google Analytics grava cookies (chamados <code>_ga</code>) para distinguir uma visita de volta de uma nova; fora da Europa eles duram até 14 meses, e no Espaço Econômico Europeu, no Reino Unido e na Suíça nem são gravados. O Vercel Web Analytics não usa cookies. Para não ser contado pelo Google Analytics em nenhum site, use o <a href=\"https://tools.google.com/dlpage/gaoptout\" target=\"_blank\" rel=\"noopener\">complemento de desativação</a> do Google.",
      ] },
      { h: "Por quanto tempo guardamos", p: [
        "Enquanto estivermos conversando sobre o seu projeto e, depois disso, só pelo tempo que a lei exigir para trabalhos que fizemos juntos. Você pode pedir a exclusão a qualquer momento.",
      ] },
      { h: "Seus direitos", p: [
        "Pela LGPD, você pode pedir para ver, corrigir ou apagar seus dados, ou para pararmos de usá-los. Escreva para <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a> e respondemos em até 15 dias.",
      ] },
      { h: "Mudanças", p: ["Se esta política mudar, atualizamos esta página e a data no topo."] },
    ],
  },
};

// Milestones for the home timeline, oldest first. `now` highlights a row.
export const timeline = [
  { en: ["2026", "We create Sidemed, a health passport now used in 17 countries."], pt: ["2026", "Criamos a Sidemed, um passaporte de saúde hoje usado em 17 países."], slug: "sidemed" },
  { en: ["October", "We launch Minha companhia, helping families across Brazil find trusted help for their parents."], pt: ["Outubro", "Lançamos a Minha companhia, que ajuda famílias do Brasil todo a encontrar apoio de confiança para os pais."], slug: "minha-companhia" },
  { en: ["October", "Adscendo opens its doors, with Prospector as its first product."], pt: ["Outubro", "A Adscendo abre as portas, com o Prospector como primeiro produto."], slug: "prospector", now: true },
];

const img = (src, w, h) => ({ src: `/assets/work/${src}`, w, h });

export const projects = [
  {
    slug: "prospector",
    tint: "#e8edf4", // card hover tone on the home page
    url: "https://prospector.adscendo.pro/",
    cta: "trial",
    host: "prospector.adscendo.pro",
    cover: img("prospector/globe.webp", 1600, 1000),
    coverPt: img("prospector/globe.pt.webp", 1600, 1000),
    coverPhone: img("prospector/globe-m.webp", 780, 1688),
    coverPhonePt: img("prospector/globe-m.pt.webp", 780, 1688),
    phoneBar: "#f5f5f7",
    en: {
      name: "Prospector",
      kind: "Sales",
      tagline: "Find the businesses that need you, and start the conversation.",
      seoTitle: "Prospector: AI prospecting on a map, with a CRM | Adscendo",
      summary: "Finds businesses on the map, analyzes each one, writes a personal email and tracks every lead in a CRM.",
      description: "How Adscendo Prospector, an AI prospecting system with a map, lead analysis, personal emails and a CRM, was built in October 2026.",
      facts: [["What we did", "Planned and built in-house"], ["When", "October 2026"], ["Platform", "Web"], ["Status", "Live, 7-day free trial"]],
      chapters: [
        {
          h: "Finding clients was a second job.",
          p: [
            "Hours on Google Maps, opening sites one by one, hunting for emails, writing to each business by hand. Prospector does that groundwork for you. It was the first thing Adscendo built.",
          ],
        },
        {
          h: "Start with a map.",
          p: [
            "Pick a city, a type of business and a distance. A radar sweeps the area and the businesses appear, with rating, website and phone.",
          ],
          fig: { kind: "browser", img: img("prospector/map.webp", 1600, 1000), cap: "Searching for dentists within 10 km of downtown Austin. Sample data." },
        },
        {
          h: "Every lead, analyzed.",
          p: [
            "Prospector visits each website, finds the emails and notes what could be better: no HTTPS, slow on a phone, outdated. What it looks for depends on what you sell.",
          ],
          fig: { kind: "browser", img: img("prospector/lead.webp", 1600, 1000), cap: "A lead in the CRM, with what the analysis found. Sample data." },
        },
        {
          h: "An email that sounds like you.",
          p: [
            "The AI writes a short, personal email about what it found, in the lead's language, and follows up.",
            "Review each email before it goes, or turn on <strong>autopilot</strong> and it sends on its own, within the limits you set.",
          ],
          fig: { kind: "browser", img: img("prospector/email.webp", 1600, 1000), cap: "A first email, written from the analysis and ready for review. Sample data." },
        },
        {
          h: "From our Mac to anyone.",
          p: [
            "It started on Jean's Mac. Two days later it was online for anyone: connect your email, with permission to send only, and start a 7-day free trial.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("prospector/crm.webp", 1600, 1000) }, { kind: "phone", img: img("prospector/crm-m.webp", 780, 1688), bar: "#fff" }], cap: "The CRM on a computer and on a phone. Sample data." },
        },
      ],
    },
    pt: {
      name: "Prospector",
      kind: "Vendas",
      tagline: "Encontre as empresas que precisam de você, e comece a conversa.",
      seoTitle: "Prospector: prospecção com IA no mapa e CRM | Adscendo",
      summary: "Acha empresas no mapa, analisa cada uma, escreve um email pessoal e acompanha cada lead num CRM.",
      description: "Como o Adscendo Prospector, um sistema de prospecção com IA, com mapa, análise de leads, emails pessoais e CRM, foi construído em outubro de 2026.",
      facts: [["O que fizemos", "Planejado e construído por nós"], ["Quando", "Outubro de 2026"], ["Plataforma", "Web"], ["Status", "No ar, 7 dias grátis"]],
      chapters: [
        {
          h: "Achar cliente era um segundo emprego.",
          p: [
            "Horas no Google Maps, abrindo sites um por um, caçando emails, escrevendo para cada empresa na mão. O Prospector faz esse trabalho por você. Foi a primeira coisa que a Adscendo construiu.",
          ],
        },
        {
          h: "Comece pelo mapa.",
          p: [
            "Escolha uma cidade, um tipo de negócio e a distância. Um radar varre a área e as empresas aparecem, com nota, site e telefone.",
          ],
          fig: { kind: "browser", img: img("prospector/map.pt.webp", 1600, 1000), cap: "Buscando dentistas num raio de 10 km do centro de Austin. Dados de exemplo." },
        },
        {
          h: "Cada lead, analisado.",
          p: [
            "O Prospector visita cada site, acha os emails e anota o que pode melhorar: sem HTTPS, lento no celular, desatualizado. O que ele procura depende do que você vende.",
          ],
          fig: { kind: "browser", img: img("prospector/lead.pt.webp", 1600, 1000), cap: "Um lead no CRM, com o que a análise encontrou. Dados de exemplo." },
        },
        {
          h: "Um email com a sua cara.",
          p: [
            "A IA escreve um email curto e pessoal sobre o que encontrou, na língua de cada empresa, e faz o acompanhamento.",
            "Revise cada email antes de sair, ou ligue o <strong>piloto automático</strong> e ele envia sozinho, dentro dos limites que você define.",
          ],
          fig: { kind: "browser", img: img("prospector/email.pt.webp", 1600, 1000), cap: "Um primeiro email, escrito a partir da análise e pronto para revisão. Dados de exemplo." },
        },
        {
          h: "Do nosso Mac para qualquer pessoa.",
          p: [
            "Começou no Mac do Jean. Dois dias depois estava online para qualquer pessoa: conecte seu email, com permissão só para enviar, e comece com 7 dias grátis.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("prospector/crm.pt.webp", 1600, 1000) }, { kind: "phone", img: img("prospector/crm-m.pt.webp", 780, 1688), bar: "#fff" }], cap: "O CRM no computador e no celular. Dados de exemplo." },
        },
      ],
    },
  },
  {
    slug: "minha-companhia",
    tint: "#e5efe8", // card hover tone on the home page
    cursor: ["#f18eb2", "#0f281f"], // pointer over the work: the site's pink, its dark green on top
    cta: "seeIt",
    url: "https://minhacompanhia.com.br/",
    host: "minhacompanhia.com.br",
    cover: img("minha-companhia/home.webp", 1440, 900),
    coverPhone: img("minha-companhia/home-m.webp", 780, 1688),
    en: {
      name: "Minha companhia",
      kind: "Marketplace",
      tagline: "A marketplace where families book verified professionals to take their parents to the doctor, the bank or the market.",
      seoTitle: "Minha companhia: verified help for older parents | Adscendo",
      summary: "Families book a verified professional to take their older parents to the doctor, an exam or the bank, and bring them home.",
      description: "How Minha companhia, a Brazilian marketplace for families of older adults, went from a screens-only brief to a live product in October 2026.",
      facts: [["What we did", "Planned and built in-house"], ["When", "October 2026"], ["Platform", "Web, phone and desktop"], ["Status", "Live, in validation"]],
      chapters: [
        {
          h: "A brief for screens only.",
          p: [
            "Families needed someone they could trust to take an older parent to the doctor, an exam, the bank or the market, and bring them home. The first job was screens only, to test the idea before building anything.",
          ],
        },
        {
          h: "Designed for the daughter.",
          p: [
            "The one who decides is usually the daughter: busy, often far away, on her phone. A user test on October 20 made it clear: the home page has to say at once that this is where she picks and hires a professional.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/search.webp", 1440, 900), cap: "Search across Brazil: city, task, date, schedule and hourly rate." },
        },
        {
          h: "A warm name.",
          p: [
            "The working name was <em>Filha de Aluguel</em>, “daughter for hire.” It became <strong>Minha companhia</strong>, “my company”: someone who keeps your parents company. Warm, respectful, and never talking down to them.",
          ],
          fig: { kind: "phones", imgs: [img("minha-companhia/home-m.webp", 780, 1688), img("minha-companhia/portfolio-m.webp", 780, 1688)], cap: "Home and a professional's public portfolio, on a phone." },
        },
        {
          h: "Trust in every step.",
          p: ["Someone new is going out with your mother, so trust has to be built into every step."],
          list: [
            ["Monthly checks", "Documents reviewed every month."],
            ["Clear prices", "Hourly rate, and whether a car is included, before you book."],
            ["Two-way reviews", "Family and professional rate each other."],
            ["Paid after the visit", "The professional is paid once the family rates the visit."],
          ],
        },
        {
          h: "From prototype to product.",
          p: [
            "Within a week it had a real backend: accounts, bookings, reviews and social sign-in. It's live at minhacompanhia.com.br, across Brazil.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/portfolio.webp", 1440, 900), cap: "A professional's public portfolio, made to be shared as a link." },
        },
      ],
    },
    pt: {
      name: "Minha companhia",
      kind: "Marketplace",
      tagline: "Um marketplace onde a família contrata profissionais verificadas para levar os pais à consulta, ao banco ou ao mercado.",
      seoTitle: "Minha companhia: profissionais para acompanhar seus pais | Adscendo",
      summary: "A família contrata uma profissional verificada para levar os pais idosos à consulta, ao exame ou ao banco, e trazê-los de volta.",
      description: "Como a Minha companhia, um marketplace para famílias de pessoas idosas, saiu de um briefing só de telas para um produto no ar em outubro de 2026.",
      facts: [["O que fizemos", "Planejado e construído por nós"], ["Quando", "Outubro de 2026"], ["Plataforma", "Web, celular e computador"], ["Status", "No ar, em validação"]],
      chapters: [
        {
          h: "Um briefing só de telas.",
          p: [
            "As famílias precisavam de alguém de confiança para levar o pai ou a mãe idosa a uma consulta, um exame, o banco ou o mercado, e trazer de volta. O primeiro trabalho foi só de telas, para testar a ideia antes de construir qualquer coisa.",
          ],
        },
        {
          h: "Desenhado para a filha.",
          p: [
            "Quem decide quase sempre é a filha: sem tempo, muitas vezes longe, pelo celular. Um teste com usuária em 20 de outubro deixou claro: a página inicial precisa dizer de cara que ali ela escolhe e contrata uma profissional.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/search.webp", 1440, 900), cap: "Busca no Brasil todo: cidade, tarefa, data, horário e valor da hora." },
        },
        {
          h: "Um nome acolhedor.",
          p: [
            "O nome provisório era <em>Filha de Aluguel</em>. Virou <strong>Minha companhia</strong>: alguém que faz companhia aos seus pais. Acolhedor, respeitoso, e sem nunca infantilizar a pessoa idosa.",
          ],
          fig: { kind: "phones", imgs: [img("minha-companhia/home-m.webp", 780, 1688), img("minha-companhia/portfolio-m.webp", 780, 1688)], cap: "A página inicial e o portfólio público de uma profissional, no celular." },
        },
        {
          h: "Confiança em cada passo.",
          p: ["Uma pessoa nova vai sair com a sua mãe, então a confiança precisa estar em cada passo."],
          list: [
            ["Verificação mensal", "Documentos revisados todo mês."],
            ["Preço claro", "Valor da hora, e se o carro está incluso, antes de contratar."],
            ["Avaliação nos dois sentidos", "Família e profissional se avaliam."],
            ["Pagamento depois do atendimento", "A profissional recebe depois que a família avalia."],
          ],
        },
        {
          h: "Do protótipo ao produto.",
          p: [
            "Em uma semana ganhou um backend de verdade: contas, pedidos, avaliações e login social. Está no ar em minhacompanhia.com.br, para o Brasil todo.",
          ],
          fig: { kind: "browser", img: img("minha-companhia/portfolio.webp", 1440, 900), cap: "O portfólio público de uma profissional, feito para ser compartilhado como link." },
        },
      ],
    },
  },
  {
    slug: "sidemed",
    tint: "#f3eee3", // card hover tone on the home page
    cursor: ["#1957ff", "#ffffff"], // pointer over the work: Sidemed blue
    cta: "download",
    ctaUrl: "https://www.sidemed.com.br/app",
    url: "https://www.sidemed.com.br/",
    host: "sidemed.com.br",
    cover: img("sidemed/hero.webp", 1600, 1000),
    coverPt: img("sidemed/hero.pt.webp", 1600, 1000),
    phoneBar: "#faf7f0",
    coverPhone: img("sidemed/site-m.webp", 780, 1688),
    coverPhonePt: img("sidemed/site-m.pt.webp", 780, 1688),
    links: [
      { href: "https://apps.apple.com/app/apple-store/id6762412760", en: "App Store", pt: "App Store" },
      { href: "https://play.google.com/store/apps/details?id=br.com.sidemed", en: "Google Play", pt: "Google Play" },
    ],
    en: {
      name: "Sidemed",
      kind: "Health",
      tagline: "A health passport that carries your medical history across borders.",
      seoTitle: "Sidemed: a health passport app across borders | Adscendo",
      summary: "Your medical history, organized, translated into your doctor's language and shared in seconds. Used in 17 countries.",
      description: "How Sidemed, a health passport app now used in 17 countries, was conceived, planned and built in-house.",
      facts: [["What we did", "Planned and built in-house"], ["When", "2026"], ["Platform", "iOS, Android, web"], ["Status", "Used in 17 countries"]],
      chapters: [
        {
          h: "It started with one question.",
          p: [
            "What happens to your medical history when you cross a border? Most of it stays behind: exams in a drawer back home, allergies only you remember, and a doctor who doesn't speak your language, often in an emergency.",
            "Sidemed was created to close that gap.",
          ],
        },
        {
          h: "One passport for your health.",
          p: [
            "The idea was to use something everyone already understands: a passport. One place for your medical history, allergies, medications, vaccines, blood type and emergency contacts, ready to show any doctor in seconds.",
            "On the doctor's side, everything fits on one page, allergies first, in the doctor's own language.",
          ],
          fig: { kind: "browser", img: img("sidemed/doctor.webp", 1600, 1000), cap: "Everything a doctor needs to know, on one page." },
        },
        {
          h: "Planned for the worst moment.",
          p: ["Every decision was made for the moment Sidemed matters most: an emergency far from home, under stress, maybe with no signal."],
          list: [
            ["Seconds, not minutes", "The essentials are one tap away."],
            ["Works with no signal", "A QR code and an emergency PDF, available offline."],
            ["Private by design", "End-to-end encryption, LGPD and GDPR compliance, and access you can revoke at any time."],
          ],
          fig: { kind: "browser", img: img("sidemed/security.webp", 1600, 1000), cap: "Security is part of the product, not a footnote." },
        },
        {
          h: "Used in 17 countries.",
          p: [
            "We built Sidemed as an app for iPhone and Android, in English, Portuguese and Spanish, with a website that explains it in seconds.",
            "Today, people in 17 countries carry their health history with them.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.webp", 780, 1688)], cap: "sidemed.com.br on a phone." },
        },
      ],
    },
    pt: {
      name: "Sidemed",
      kind: "Saúde",
      tagline: "Um passaporte de saúde que leva seu histórico médico através das fronteiras.",
      seoTitle: "Sidemed: app de passaporte de saúde | Adscendo",
      summary: "Seu histórico médico organizado, traduzido para o idioma do médico e compartilhado em segundos. Usada em 17 países.",
      description: "Como a Sidemed, um app de passaporte de saúde hoje usado em 17 países, foi concebida, planejada e construída por nós.",
      facts: [["O que fizemos", "Planejado e construído por nós"], ["Quando", "2026"], ["Plataforma", "iOS, Android, web"], ["Status", "Usada em 17 países"]],
      chapters: [
        {
          h: "Começou com uma pergunta.",
          p: [
            "O que acontece com o seu histórico médico quando você cruza uma fronteira? Quase tudo fica para trás: exames numa gaveta em casa, alergias que só você lembra e um médico que não fala sua língua, muitas vezes numa emergência.",
            "A Sidemed nasceu para fechar essa lacuna.",
          ],
        },
        {
          h: "Um passaporte para a sua saúde.",
          p: [
            "A ideia foi usar algo que todo mundo já entende: um passaporte. Um só lugar para histórico médico, alergias, medicamentos, vacinas, tipo sanguíneo e contatos de emergência, pronto para mostrar a qualquer médico em segundos.",
            "Do lado do médico, tudo cabe numa página, com as alergias em primeiro lugar, no idioma dele.",
          ],
          fig: { kind: "browser", img: img("sidemed/doctor.pt.webp", 1600, 1000), cap: "Tudo o que um médico precisa saber, numa página." },
        },
        {
          h: "Pensado para o pior momento.",
          p: ["Cada decisão foi tomada para o momento em que a Sidemed mais importa: uma emergência longe de casa, sob estresse, talvez sem sinal."],
          list: [
            ["Segundos, não minutos", "O essencial fica a um toque."],
            ["Funciona sem sinal", "QR code e PDF de emergência, disponíveis offline."],
            ["Privacidade desde o início", "Criptografia de ponta a ponta, conformidade com LGPD e GDPR, e acessos que você revoga quando quiser."],
          ],
          fig: { kind: "browser", img: img("sidemed/security.pt.webp", 1600, 1000), cap: "Segurança faz parte do produto, não é nota de rodapé." },
        },
        {
          h: "Usada em 17 países.",
          p: [
            "Construímos a Sidemed como app para iPhone e Android, em português, inglês e espanhol, com um site que explica tudo em segundos.",
            "Hoje, pessoas em 17 países levam o próprio histórico de saúde com elas.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.pt.webp", 780, 1688)], cap: "sidemed.com.br no celular." },
        },
      ],
    },
  },
  {
    slug: "adscendo",
    tint: "#ececf0", // card hover tone on the home page
    inWork: false,
    url: null,
    host: "adscendo.pro",
    cover: img("adscendo/home.webp", 1440, 900),
    coverPt: img("adscendo/home.pt.webp", 1440, 900),
    coverPhone: img("adscendo/home-m.webp", 780, 1688),
    coverPhonePt: img("adscendo/home-m.pt.webp", 780, 1688),
    phoneBar: "#000",
    en: {
      name: "Adscendo",
      kind: "The studio",
      tagline: "Adscendo is Latin for “I rise.” That's exactly what we want for every client: to rise above the crowd.",
      seoTitle: "About Adscendo: websites that help you stand out",
      summary: "Who we are, and how we help American businesses stand out from the crowd.",
      description: "Adscendo is a small web studio led by Jean Menezes. We build clear, fast websites that help American businesses stand out, get found and win more customers.",
      facts: [["What we do", "Websites and apps"], ["For", "Small businesses in the US"], ["Led by", "Jean Menezes"], ["Since", "October 2026"]],
      chapters: [
        {
          h: "Your customers are comparing you.",
          p: [
            "People search on their phone, open three or four websites and call the one that looks the most trustworthy. Most small business sites look the same, so they blend into the crowd.",
          ],
        },
        {
          h: "What Adscendo is.",
          p: [
            "A small studio that builds websites, and apps when a website isn't enough, for businesses in the US.",
            "It's led by Jean Menezes, who worked on digital projects for McDonald's, AT&amp;T, Petronas, PagBank and Multilaser. You talk directly to the person building your site.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("minha-companhia/home.webp", 1440, 900), host: "minhacompanhia.com.br" }, { kind: "phone", img: img("sidemed/site-m.webp", 780, 1688), bar: "#faf7f0" }], cap: "Work we've shipped: Minha companhia, a marketplace for family care, and Sidemed, a health app used in 17 countries." },
        },
        {
          h: "How we make you stand out.",
          p: [
            "One question first: why should a customer pick you? Then we build the whole site around the answer.",
          ],
          list: [
            ["Clear in five seconds.", " What you do and why you're different, on the first screen."],
            ["Made for the phone.", " Fast and easy to use with a thumb."],
            ["Easy to find.", " Ready for Google and for AI search."],
            ["One clear next step.", " Call, book or message, one tap away."],
          ],
        },
        {
          h: "Brazilian warmth. American standards.",
          p: [
            "We're a Brazilian studio: fresh ideas and a close, human way of working, delivered to the standard American customers expect.",
          ],
        },
        {
          h: "New, and we say so.",
          p: [
            "The studio opened in October 2026, with <a href='/work/prospector'><strong>Prospector</strong></a> as its first product. Everything on this site is real work, not promises.",
          ],
        },
      ],
    },
    pt: {
      name: "Adscendo",
      kind: "O estúdio",
      tagline: "Adscendo é latim para “eu me elevo”. É exatamente o que queremos para cada cliente: se elevar acima da multidão.",
      seoTitle: "Sobre a Adscendo: sites que fazem você se destacar",
      summary: "Quem somos, e como ajudamos empresas americanas a se destacarem no meio da multidão.",
      description: "A Adscendo é um pequeno estúdio de sites liderado por Jean Menezes. Fazemos sites claros e rápidos que ajudam empresas americanas a se destacar, ser encontradas e ganhar mais clientes.",
      facts: [["O que fazemos", "Sites e apps"], ["Para", "Pequenas empresas nos EUA"], ["Liderado por", "Jean Menezes"], ["Desde", "Outubro de 2026"]],
      chapters: [
        {
          h: "Seus clientes estão comparando.",
          p: [
            "As pessoas pesquisam no celular, abrem três ou quatro sites e ligam para quem parece mais confiável. A maioria dos sites de pequenas empresas é igual, então elas se perdem na multidão.",
          ],
        },
        {
          h: "O que é a Adscendo.",
          p: [
            "Um pequeno estúdio que constrói sites, e apps quando um site não basta, para empresas nos Estados Unidos.",
            "É liderado pelo Jean Menezes, que trabalhou em projetos digitais para McDonald's, AT&amp;T, Petronas, PagBank e Multilaser. Você fala direto com quem constrói o seu site.",
          ],
          fig: { kind: "pair", items: [{ kind: "browser", img: img("minha-companhia/home.webp", 1440, 900), host: "minhacompanhia.com.br" }, { kind: "phone", img: img("sidemed/site-m.pt.webp", 780, 1688), bar: "#faf7f0" }], cap: "Trabalhos entregues: a Minha companhia, um marketplace de cuidado familiar, e a Sidemed, um app de saúde usado em 17 países." },
        },
        {
          h: "Como fazemos você se destacar.",
          p: [
            "Primeiro, uma pergunta: por que um cliente deveria escolher você? Depois construímos o site inteiro em volta da resposta.",
          ],
          list: [
            ["Claro em cinco segundos.", " O que você faz e por que é diferente, logo na primeira tela."],
            ["Feito para o celular.", " Rápido e fácil de usar com o polegar."],
            ["Fácil de encontrar.", " Preparado para o Google e para a busca por IA."],
            ["Um próximo passo claro.", " Ligar, agendar ou mandar mensagem, a um toque."],
          ],
        },
        {
          h: "Calor brasileiro. Padrão americano.",
          p: [
            "Somos um estúdio brasileiro: ideias novas e um jeito próximo e humano de trabalhar, entregues no padrão que o cliente americano espera.",
          ],
        },
        {
          h: "Somos novos, e dizemos isso.",
          p: [
            "O estúdio abriu em outubro de 2026, com o <a href='/pt/work/prospector'><strong>Prospector</strong></a> como primeiro produto. Tudo neste site é trabalho real, não promessa.",
          ],
        },
      ],
    },
  },
];
