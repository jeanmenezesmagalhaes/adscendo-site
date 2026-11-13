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
    // Drop-down under "Services" in the nav, also the phone menu's list (`to`: a service page key,
    // "consultoria" for the AI consulting page, "ai" for the AI page or a home section id). The one under
    // "Portfolio" lists the projects, then `allWork`.
    menu: {
      services: [
        // AI consulting first. AI optimization lives inside Websites (the websites page links to it), not
        // as its own item.
        { h: "AI consulting", p: "More efficiency and profit with AI", to: "consultoria" },
        { h: "AI automation", p: "Automate the work your team repeats", to: "automation" },
        { h: "Websites", p: "Fast sites, found on Google and AI", to: "websites" },
        { h: "Apps", p: "For iPhone, Android and the web", to: "apps" },
      ],
      allWork: "See all work",
    },
    other: "Português", otherShort: "PT", switchTo: "Mudar para português", darkMode: "Dark mode",
    menuOpen: "Open menu", menuClose: "Close menu",
    skip: "Skip to content",
    // Strip above the nav on every page; {p} is the largest launch discount in `quote`.
    offer: { label: "Last launch spots", text: "Our first projects are signed, and only a few spots are left at up to {p}% off.", cta: "Claim yours", close: "Close" },
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
    // Footer card linking to the partner program (its only link on the site); {rate} is partnerPage.rate.
    partners: "Refer clients, earn {rate}%",
    googleProfile: "Business Profile",
  },
  pt: {
    nav: { services: "Serviços", work: "Portfólio", process: "Como trabalhamos", about: "Sobre", cta: "Fale com a gente" },
    menu: {
      services: [
        // AI consulting first. AI optimization lives inside Sites (the sites page links to it), not as its
        // own item.
        { h: "Consultoria de IA", p: "Mais eficiência e lucro com IA", to: "consultoria" },
        { h: "Automação com IA", p: "Automatize o trabalho que se repete", to: "automation" },
        { h: "Sites", p: "Sites rápidos, achados no Google e nas IAs", to: "websites" },
        { h: "Apps", p: "Para iPhone, Android e web", to: "apps" },
      ],
      allWork: "Ver todos os trabalhos",
    },
    other: "English", otherShort: "EN", switchTo: "Switch to English", darkMode: "Modo escuro",
    menuOpen: "Abrir menu", menuClose: "Fechar menu",
    skip: "Pular para o conteúdo",
    offer: { label: "Últimas vagas de lançamento", text: "Já fechamos os primeiros projetos e restam poucas vagas com até {p}% de desconto.", cta: "Garanta a sua", close: "Fechar" },
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
    partners: "Indique clientes e ganhe {rate}%",
    googleProfile: "Perfil da empresa",
  },
};

// The "See all work" page (/work, /pt/work): a wall of tiles, one per project in `projects`, in that order.
// h1 is for screen readers and search only; the page shows no text besides the tiles.
export const workPage = {
  en: {
    title: "Our work: products, apps and websites | Adscendo",
    description: "Every product, app and website Adscendo has designed and built, from a health passport used in 17 countries to AI tools for sales, job search and email.",
    h1: "Our work.",
  },
  pt: {
    title: "Nosso trabalho: produtos, apps e sites | Adscendo",
    description: "Produtos, apps e sites que a Adscendo desenhou e construiu, de um passaporte de saúde usado em 17 países a ferramentas de IA para vendas, vagas e email.",
    h1: "Nosso trabalho.",
  },
  // One tile per project. size: xl 4×3, tall 2×3, sq 2×2, full 6×3 (columns × rows on a computer).
  // pic: "phone" uses the project's phone screenshot (tall tiles), "wide" its computer one.
  tiles: {
    prospector: { size: "xl", pic: "wide", en: "Finds customers with AI", pt: "Encontra clientes com IA" },
    "minha-companhia": { size: "sq", pic: "phone", en: "Care for older parents", pt: "Cuidado para os pais" },
    sidemed: { size: "tall", pic: "phone", en: "Global health passport", pt: "Passaporte de saúde global" },
    adscendo: { size: "sq", pic: "wide", en: "The studio", pt: "O estúdio" },
    blip: { size: "sq", pic: "phone", en: "AI job search", pt: "Busca de vagas com IA" },
    orbit: { size: "full", pic: "wide", en: "AI productivity app", pt: "App de produtividade com IA" },
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
    // Right under the hero: AI consulting, the offer the site leads with. It links to the consulting page
    // and its projects (`consultoriaPage`).
    consult: {
      eyebrow: "AI consulting",
      title: "A more efficient business. And a more profitable one.",
      lede: "We find where AI cuts time and cost in your business, then put it to work with your team. No endless project: we start where the payoff shows up first.",
      points: [
        ["Less busywork", "Work your team does by hand today runs on its own: spreadsheets, data entry, paperwork and routine replies."],
        ["More sales, same team", "AI agents that answer, qualify leads and follow up, so your people can focus on closing."],
        ["Faster customer service", "Answers right away, at any hour, using your business's own information, with a person close by when it's needed."],
      ],
      cta: "Explore AI consulting",
      more: "See our AI projects",
    },
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
      "We work remotely from Brazil, in English or Portuguese. You talk to Jean directly, and every message gets a reply within 6 hours.",
    ],
    sigRole: "Founder. Born in Brazil, built to operate globally.",
    // Questions a business owner asks before hiring us, each answered in its first sentence so search
    // engines and AI assistants can quote it on its own. Also the FAQPage data and llms.txt.
    faqTitle: "Questions, answered.",
    faqLede: "What business owners ask us before we start.",
    faq: [
      ["What does Adscendo do?", "Adscendo is a web design and development studio that builds websites and apps for small and mid-size businesses. Every site is designed for phones, loads fast and is set up to be found on Google and recommended by AI assistants like ChatGPT, Gemini and Perplexity."],
      ["How does a project work?", "In three steps. First we meet to learn how your business works and where you want to go. Then we design and build a first version you can try on your own phone and computer. Finally we adjust what's needed and put it live. You never have to touch anything technical."],
      ["How much does a website cost?", "Our websites run from {new} to {complex} at launch prices, one price for the whole project. Our <a href=\"/website-cost\">website cost guide</a> compares builders, freelancers and agencies and explains what changes the price."],
      ["Do you work with businesses outside the US?", "Yes. Adscendo is a Brazilian studio that works remotely with businesses in the United States, Brazil and anywhere else, in English or Portuguese. Your site can have one language or several."],
      ["Who founded Adscendo, and where is it based?", "Adscendo was founded in October 2026 by Jean Menezes, a Brazilian designer and developer. Before Adscendo he spent years designing and building digital products for enterprise companies, including projects for McDonald's, AT&T, Petronas, PagBank and Multilaser. The studio is based in Brazil and works remotely with small businesses in English and Portuguese."],
      ["How do I get started?", "Answer a few questions in the chat at adscendo.pro. It takes less than a minute and gives you a first estimate right away. We reply within 6 hours by email, or on WhatsApp if you prefer."],
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
    // Right under the hero: AI consulting, the offer the site leads with. It links to the consulting page
    // and its projects (`consultoriaPage`).
    consult: {
      eyebrow: "Consultoria de IA",
      title: "Sua empresa mais eficiente. E mais rentável.",
      lede: "A gente descobre onde a inteligência artificial corta tempo e custo no seu negócio, e coloca para funcionar com a sua equipe. Sem projeto eterno: começa por onde o retorno aparece primeiro.",
      points: [
        ["Menos trabalho repetitivo", "Processos que hoje são feitos à mão passam a rodar sozinhos: planilhas, cadastros, documentos e respostas padrão."],
        ["Mais vendas com o mesmo time", "Agentes de IA que respondem, qualificam contatos e fazem o acompanhamento, para a equipe focar em fechar."],
        ["Atendimento mais rápido", "Respostas na hora, a qualquer hora, com as informações da sua empresa e um humano por perto quando precisa."],
      ],
      cta: "Conhecer a consultoria",
      more: "Ver projetos com IA",
    },
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
      "Trabalhamos de forma remota, do Brasil, em português ou inglês. Você fala direto com o Jean, e toda mensagem recebe resposta em até 6 horas.",
    ],
    sigRole: "Fundador. Nascido no Brasil, feito para operar no mundo.",
    faqTitle: "Perguntas frequentes.",
    faqLede: "O que os donos de negócio perguntam antes de começar.",
    faq: [
      ["O que a Adscendo faz?", "A Adscendo é um estúdio de design e desenvolvimento que cria sites e apps para pequenas e médias empresas. Todo site é pensado para o celular, carrega rápido e é preparado para ser encontrado no Google e recomendado por assistentes de IA como ChatGPT, Gemini e Perplexity."],
      ["Como funciona um projeto?", "Em três etapas. Primeiro fazemos uma reunião para entender como seu negócio funciona e aonde você quer chegar. Depois desenhamos e construímos uma primeira versão, que você testa no seu celular e no seu computador. Por fim, ajustamos o que for preciso e colocamos no ar. Você não precisa mexer em nada técnico."],
      ["Quanto custa um site?", "Nossos sites vão de {new} a {complex} com o desconto de lançamento, num preço só para o projeto inteiro. O guia <a href=\"/pt/quanto-custa-um-site\">quanto custa um site</a> compara plataformas, freelancers e agências e explica o que muda o preço."],
      ["Vocês atendem empresas no Brasil?", "Sim. A Adscendo é um estúdio brasileiro que trabalha de forma remota com empresas no Brasil, nos Estados Unidos e em qualquer lugar, em português ou inglês. Seu site pode ter um idioma ou vários."],
      ["Quem fundou a Adscendo, e onde ela fica?", "A Adscendo foi fundada em outubro de 2026 por Jean Menezes, designer e desenvolvedor brasileiro. Antes, ele passou anos desenhando e construindo produtos digitais para empresas de grande porte, com projetos para McDonald's, AT&T, Petronas, PagBank e Multilaser. O estúdio fica no Brasil e atende pequenas empresas de forma remota, em português e inglês."],
      ["Como eu começo?", "Responda algumas perguntas no chat em adscendo.pro/pt. Leva menos de um minuto e já mostra uma primeira estimativa. Respondemos em até 6 horas por email, ou pelo WhatsApp se preferir."],
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
    // AI consulting mode: visitors who arrive from the Meta ads (utm_source=meta) get this conversation
    // instead of the website quote. No price; it asks about the business and books a call with Jean.
    // Keys here replace the ones above; assets/chat.js decides when.
    ia: {
      title: "Consultoria de IA", status: "Leva menos de um minuto",
      greet: "Oi! Aqui é o Jean. Vamos ver onde a IA pode cortar custo e tempo na sua empresa.",
      askBiz: "Prazer, {name}. Qual é o ramo da sua empresa?", bizPh: "Ex.: clínica, contabilidade, loja, indústria",
      askTeam: "Quantas pessoas trabalham com você hoje?",
      team: [["1", "Só eu"], ["2-10", "2 a 10"], ["11-50", "11 a 50"], ["50+", "Mais de 50"]],
      askPain: "Onde a operação mais trava hoje? Atendimento, vendas, financeiro, tarefas repetitivas…", painPh: "Conte em uma ou duas frases",
      askEmail: "Qual é o seu email? Mando a confirmação por lá.",
      askPhone: "E o seu WhatsApp, para eu falar com você antes da conversa?",
      askMeet: "Quer marcar agora a sua conversa gratuita com o Jean, por vídeo?",
      ready: "Tudo certo, {name}. Clique em enviar e eu falo com você em até 6 horas.",
      sent: "Enviado! Obrigado, {name}. Eu falo com você em até 6 horas.",
      meetTitle: "Consultoria de IA: Adscendo + {name}", subjectMeet: "IA, chamada marcada: {name}",
      labels: { biz: "Ramo", team: "Equipe", pain: "Onde trava", source: "Origem" },
      subject: "Lead IA (anúncio): {name}",
    },
  },
};

// The AI optimization page, at /ai and /pt/ia: a new website sold together with GEO. Linked from the home
// SEO section. Prices come from `quote`; the before/after mock-ups are generic, like the home ones (the
// "after" one is the home's `foundAi`). The free AI check is offered on WhatsApp, with `waText` prefilled.
export const aiPage = {
  en: {
    slug: "ai",
    name: "AI optimization",
    title: "Websites built for AI search and ChatGPT | Adscendo",
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
    title: "Site otimizado para IA e ChatGPT | Adscendo",
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

// AI implementation consulting, at /ai-consulting and /pt/consultoria-ia, each the other's hreflang twin.
// The Portuguese page is where the Meta ads point: its main buttons open WhatsApp with `waText`, and
// `pixel: true` gives it the Meta Pixel behind the cookie banner in `cookies` (the Portuguese home, where
// /pt/contato lands, gets the same pixel and banner for the contact chat: see homePage). Without
// `waText` (English) the buttons go to the site's contact chat, plus email. `howId` and `workId` are the
// anchors of "How it works" and the projects (the home's consulting block links to the latter). `work`
// lists the projects shown as proof. Keep every claim true to the rest of the site.
export const consultoriaPage = {
  work: ["prospector", "blip", "orbit", "minha-companhia", "sidemed"],
  en: {
    slug: "ai-consulting",
    howId: "how-it-works",
    workId: "projects",
    areaServed: "United States",
    name: "AI consulting",
    title: "AI Consulting Services for Small Businesses | Adscendo",
    description: "AI consulting company for small businesses: an AI consultant finds where AI saves time, then builds the automations and AI agents. First call free.",
    ctaMain: "Talk to us",
    eyebrow: "AI consulting company",
    h1: "AI consulting that puts AI to work in your business.",
    lede: "AI consulting services for small and mid-size businesses: we find where AI saves time in customer service, sales and day-to-day operations, then handle the implementation and integration with your tools and get it working with your team.",
    ctaHow: "How it works",
    heroNote: "Prospector, our AI prospecting tool, on a computer and a phone. Sample data.",
    problemTitle: "Everyone talks about AI. Not much changes.",
    problemLede: "Maybe someone on your team uses ChatGPT now and then. But customer service, sales and the daily routine still run the same way they always have.",
    problems: [
      ["Not sure where to start", "There are too many tools and too many promises. Without looking at how your business actually runs, it's hard to tell what's worth it."],
      ["Tried it, nothing changed", "Everyone using ChatGPT their own way doesn't change a single process. AI has to be connected to the real work."],
      ["No time to experiment", "When you run the business, you don't have weeks to study tools and get it wrong. You need someone who has built this before."],
    ],
    doTitle: "What our AI consulting services include.",
    doLede: "From AI strategy to implementation: we start where the payoff comes fastest, and keep going until AI is part of the everyday work.",
    do: [
      ["Assessment", "We learn how your business runs today and show you where AI saves time or money. And where it doesn't."],
      ["Less repetitive work", "Copying data from one system to another, building spreadsheets and reports, answering the same questions over and over. If your team does it on autopilot, software can do it. See <a href=\"/ai-automation\">AI automation</a>."],
      ["AI agents for customer service", "An assistant that answers common questions on your website, by text or by email, at any hour, and hands off to someone on your team when it should. See our guide to <a href=\"/ai-agents\">AI agents for business</a>."],
      ["AI in sales and the back office", "Qualifying leads, writing the first message, organizing orders and paperwork. It's the kind of work our own Prospector does in sales."],
      ["Works with what you already use", "AI works alongside your spreadsheets, email, phone and business software, where they allow it. No need to replace everything at once."],
      ["Team training", "Your team learns the tools with examples from your own business, not a generic course."],
    ],
    howTitle: "How it works.",
    howLede: "From the first assessment to follow-up, in four steps.",
    how: [
      ["Assessment", "We talk with you and with the people who do the work, look at your processes and software, and list where AI can help."],
      ["Plan", "You get a plan: what to do first, what each change solves and what it costs, before anything gets built."],
      ["Build", "We build the automations and agents, connect them to your systems and test them on real cases from your business before they go live."],
      ["Follow-up", "We train your team, look at what changed in the daily routine and fine-tune whatever needs it in the weeks that follow."],
    ],
    howCta: "Start with an assessment",
    workTitle: "Projects we've built.",
    workLede: "Real products, in use. With AI, Prospector finds new customers and writes the first email, Blip finds jobs and tailors resumes, and Orbit brings email, calendar and tasks together on the Mac.",
    aboutTitle: "You talk to the person who builds it.",
    about: [
      "The consulting is led by <strong>Jean Menezes</strong>, founder of Adscendo. Before that, he spent years designing and building digital products for enterprise companies, with projects for McDonald's, AT&amp;T, Petronas, PagBank and Multilaser.",
      "In 2026 he created Sidemed, a health app used in 17 countries, and launched Prospector, an AI prospecting tool. The person who learns how your business works is the same person who builds the solution.",
    ],
    faqTitle: "Questions about AI consulting.",
    faq: [
      ["What is AI implementation consulting?", "AI implementation consulting means someone looks at how your business actually runs, finds the tasks AI can take over (answering common customer questions, copying data between systems, drafting sales emails), builds those automations and agents, connects them to the software you already use and trains your team. At Adscendo it is led by founder Jean Menezes."],
      ["What does an AI consultant do?", "An AI consultant looks at how your business runs, finds the tasks where AI saves time or money, and recommends what to build first. At an AI consulting company like ours, the same team then builds it, connects it to your tools and trains your people, so the plan doesn't stay on paper."],
      ["Why hire an AI consulting company instead of buying an AI tool?", "A tool only helps once it's connected to the real work. We pick the right tools for your processes, connect them to your systems and data, test them on your cases and teach your team. Sometimes the answer is a tool you already pay for."],
      ["What is an AI readiness assessment?", "It's the first step of our consulting: we look at your processes, software and data and tell you where AI is worth it now, what needs to be in place first and what to leave for later."],
      ["Do you offer AI training for employees?", "Yes. Your team learns the tools with examples from your own business, focused on what they'll use day to day, not a generic course."],
      ["Do I need to be technical to hire you?", "No. You explain how your business runs and where the work gets stuck. We handle the technical side, and your team learns only what it will use day to day."],
      ["My business is small. Does this make sense?", "Often, yes: in a small business, a few hours less of repetitive work each week already makes a difference. The assessment tells you honestly whether it's worth it and where to start."],
      ["How much does it cost?", "It depends on the size of your business and what we build, so there's no price list. After a first conversation, which is free, we send you a proposal with what's included and what it costs, before any work starts."],
      ["Will AI replace my team?", "The idea is to take repetitive work off your team's plate, so they have more time for what needs a person: taking care of customers, selling and solving problems. Where AI falls short, a person stays in charge."],
      ["What about my business data?", "We decide with you which data AI can use, give each automation access only to what it needs, and choose tools that fit the privacy rules your business has to follow."],
    ],
    ctaTitle: "Where should your business start?",
    ctaText: "Tell us what your business does and where the work gets stuck the most. Jean replies personally.",
    ctaEmail: "Prefer email",
  },
  pt: {
    slug: "consultoria-ia",
    howId: "como-funciona",
    workId: "casos",
    areaServed: "Brazil",
    pixel: true,
    name: "Consultoria de IA",
    title: "Consultoria de IA para empresas | Adscendo",
    description: "Consultoria de inteligência artificial para empresas: diagnóstico, automação de processos com IA, agentes de IA no WhatsApp e treinamento da equipe.",
    waText: "Oi Jean, vi o anúncio sobre consultoria de IA e quero entender como aplicar na minha empresa.",
    // Cookie banner: the Meta Pixel loads only after "Aceitar".
    cookies: {
      label: "Cookies",
      text: "Usamos cookies da Meta para medir quais anúncios trazem você até aqui. Eles só são ativados se você aceitar.",
      more: "Política de privacidade",
      href: "/pt/privacidade",
      deny: "Recusar",
      accept: "Aceitar",
    },
    ctaWa: "Conversar no WhatsApp",
    ctaNav: "WhatsApp",
    eyebrow: "Consultoria de IA para empresas",
    h1: "Inteligência artificial na rotina da sua empresa.",
    lede: "Consultoria e implantação de IA para pequenas e médias empresas: a gente descobre onde a inteligência artificial economiza tempo no atendimento, nas vendas e na operação, e coloca para funcionar com a sua equipe.",
    ctaHow: "Como funciona",
    heroNote: "O Prospector, nosso sistema de prospecção com IA, no computador e no celular. Dados de exemplo.",
    problemTitle: "Muito se fala de IA. Pouco muda.",
    problemLede: "Talvez alguém da equipe até use o ChatGPT de vez em quando. Mas o atendimento, as vendas e a rotina continuam do mesmo jeito.",
    problems: [
      ["Não sabe por onde começar", "São muitas ferramentas e muita promessa. Sem olhar como a empresa funciona, fica difícil saber o que vale a pena."],
      ["Testou e não deu em nada", "Cada um usando o ChatGPT do seu jeito não muda nenhum processo. A IA precisa estar ligada ao trabalho de verdade."],
      ["Sem tempo para testar", "Quem toca a empresa não tem semanas para estudar ferramentas e errar. Precisa de alguém que já construiu isso antes."],
    ],
    doTitle: "O que a consultoria faz.",
    doLede: "Começamos pelo que dá retorno mais rápido e vamos até a IA estar funcionando no dia a dia.",
    do: [
      ["Diagnóstico", "Entendemos como sua empresa funciona hoje e mostramos onde a IA economiza tempo ou dinheiro. E também onde não vale a pena."],
      ["Automação de tarefas repetitivas", "Copiar dados de um sistema para outro, montar planilhas e relatórios, responder sempre as mesmas coisas. O que a equipe faz no automático, a máquina pode fazer. Veja <a href=\"/pt/automacao-com-ia\">automação com IA</a>."],
      ["Agentes de IA para atendimento", "Um assistente que responde as dúvidas comuns no WhatsApp ou no site, a qualquer hora, e passa para uma pessoa da equipe quando o assunto pede. Veja o guia de <a href=\"/pt/agentes-de-ia\">agentes de IA para empresas</a>."],
      ["IA em vendas e no backoffice", "Qualificar contatos, escrever a primeira mensagem, organizar pedidos e documentos. É o tipo de trabalho que o nosso Prospector faz em vendas."],
      ["Integração com o que você já usa", "A IA trabalha junto com suas planilhas, seu email, seu WhatsApp e seus sistemas, quando eles permitem. Sem trocar tudo de uma vez."],
      ["Treinamento da equipe", "Sua equipe aprende a usar as ferramentas com exemplos da própria empresa, e não com um curso genérico."],
    ],
    howTitle: "Como funciona.",
    howLede: "Do primeiro diagnóstico ao acompanhamento, em quatro etapas.",
    how: [
      ["Diagnóstico", "Conversamos com você e com quem faz o trabalho, olhamos os processos e os sistemas, e listamos onde a IA pode ajudar."],
      ["Plano", "Você recebe um plano com o que fazer primeiro, o que cada mudança resolve e quanto custa, antes de qualquer implantação."],
      ["Implantação", "Construímos as automações e os agentes, ligados aos seus sistemas, e testamos com casos reais da empresa antes de colocar no ar."],
      ["Acompanhamento", "Treinamos a equipe, olhamos o que mudou na rotina e ajustamos o que for preciso nas semanas seguintes."],
    ],
    howCta: "Começar pelo diagnóstico",
    workTitle: "Projetos que construímos.",
    workLede: "Produtos reais, em uso. Com IA, o Prospector encontra clientes e escreve emails, o Blip procura vagas e adapta currículos, e o Orbit junta email, agenda e tarefas no Mac.",
    aboutTitle: "Você fala com quem constrói.",
    about: [
      "A consultoria é conduzida pelo <strong>Jean Menezes</strong>, fundador da Adscendo. Antes dela, ele passou anos desenhando e construindo produtos digitais para empresas de grande porte, e trabalhou em projetos para McDonald's, AT&amp;T, Petronas, PagBank e Multilaser.",
      "Em 2026 criou a Sidemed, um app de saúde usado em 17 países, e lançou o Prospector, um sistema de prospecção com IA. Na consultoria, quem entende o seu negócio é a mesma pessoa que constrói a solução.",
    ],
    faqTitle: "Perguntas sobre consultoria de IA.",
    faq: [
      ["O que é consultoria de implantação de IA?", "É quando alguém olha como a sua empresa funciona de verdade, encontra as tarefas que a IA pode assumir (responder perguntas comuns de clientes, copiar dados entre sistemas, escrever rascunhos de emails de vendas), constrói essas automações e agentes, conecta ao que você já usa e treina a equipe. Na Adscendo, quem conduz é o fundador, Jean Menezes."],
      ["Como usar IA na minha empresa?", "Comece pelas tarefas que se repetem e tomam mais tempo: responder clientes no WhatsApp, copiar dados entre sistemas, montar relatórios, escrever propostas. O diagnóstico mostra quais delas a IA resolve hoje e por onde vale começar."],
      ["O que faz um consultor de IA?", "Um consultor de IA entende como a empresa funciona, encontra onde a inteligência artificial economiza tempo ou dinheiro e recomenda o que fazer primeiro. Na Adscendo, quem faz o diagnóstico também implanta, liga aos seus sistemas e treina a equipe."],
      ["Por que contratar uma consultoria em vez de só assinar uma ferramenta de IA?", "Uma ferramenta só ajuda quando está ligada ao trabalho de verdade. Escolhemos as ferramentas certas para os seus processos, conectamos aos seus sistemas, testamos com casos da empresa e ensinamos a equipe. Às vezes a resposta é uma ferramenta que você já paga."],
      ["Preciso entender de tecnologia para contratar?", "Não. Você explica como a empresa funciona e onde o trabalho trava. A parte técnica fica com a gente, e a equipe aprende só o que vai usar no dia a dia."],
      ["Minha empresa é pequena. Faz sentido?", "Muitas vezes, sim: numa empresa pequena, algumas horas a menos de trabalho repetitivo por semana já fazem diferença. O diagnóstico serve para dizer com honestidade se vale a pena e por onde começar."],
      ["Quanto custa?", "Depende do tamanho da empresa e do que for implantado, por isso não existe tabela. Depois de uma primeira conversa, gratuita, mandamos uma proposta com o que está incluído e quanto custa, antes de qualquer trabalho começar."],
      ["A IA vai substituir minha equipe?", "A ideia é tirar da equipe o trabalho repetitivo, para sobrar tempo para o que precisa de uma pessoa: atender bem, vender e resolver problemas. Onde a IA não dá conta, uma pessoa continua no controle."],
      ["E os dados da minha empresa?", "Definimos com você quais dados a IA pode usar, damos a cada automação acesso só ao que ela precisa e escolhemos as ferramentas de acordo com a LGPD."],
    ],
    ctaTitle: "Por onde começar na sua empresa?",
    ctaText: "Mande uma mensagem contando o que sua empresa faz e onde o trabalho mais trava. O Jean responde pessoalmente.",
    ctaEmail: "Prefiro email",
  },
};

// AI service guides: the AI automation page (/ai-automation, /pt/automacao-com-ia) and the AI agents guide
// (/ai-agents, /pt/agentes-de-ia). Both answer what people search for before hiring (what it is, examples,
// which tasks are worth it, what it costs) and lead to the AI consulting process. Linked from the AI
// consulting page, the Services menu (automation) and each other. `service` adds a Service node to the
// structured data; every page is an Article by Jean. Dates: change `modified` only when the content changes.
export const aiGuides = {
  automation: {
    service: "AI automation",
    published: "2026-11-11", modified: "2026-11-11",
    en: {
      slug: "ai-automation",
      name: "AI automation",
      title: "AI Automation Agency for Small Businesses | Adscendo",
      description: "AI automation agency for small businesses: we find the busywork, build AI workflow automations on the tools you use and keep a person in charge.",
      eyebrow: "AI automation agency",
      h1: "AI automation for the work your team repeats every day.",
      lede: "We're a small AI automation agency. We find the tasks that eat your team's week, automate them with AI connected to the tools you already use, and keep a person in charge where it matters.",
      updated: "Updated November 11, 2026 · By Jean Menezes, founder of Adscendo",
      ctaMain: "Talk to us",
      ctaSecond: "See examples",
      sectionsId: "examples",
      sections: [
        { h: "What is AI automation?", p: [
          "AI automation is software that does repetitive work for you and uses AI for the parts that used to need a person to read, write or decide: sorting emails, pulling data out of documents, drafting replies, qualifying leads.",
          "Classic automation, including RPA (robotic process automation), follows fixed rules: if this happens, do that. AI automation also handles messy inputs, like a free-text email or a scanned invoice, and hands off to a person when it isn't sure.",
        ] },
        { h: "What an AI automation agency does", p: [
          "An agency like ours does the whole job, not just the tool:",
          [
            "Maps how the work happens today and where the time goes.",
            "Picks which tasks are worth automating first, and says which ones aren't.",
            "Builds the workflows and connects them to your email, spreadsheets, CRM, WhatsApp or business software, where they allow it.",
            "Tests them on real cases from your business before they go live.",
            "Trains your team and fine-tunes everything in the weeks after launch.",
          ],
        ] },
        { h: "Examples of AI workflow automation for small businesses", p: [
          [
            "<b>New leads.</b> An inquiry arrives, AI reads it, scores it, writes a first reply and adds it to your CRM.",
            "<b>Customer questions.</b> An AI agent answers common questions on your website, by email or on WhatsApp, and passes the rest to your team. More in our guide to <a href=\"/ai-agents\">AI agents for business</a>.",
            "<b>Documents.</b> Invoices, orders and forms read automatically and entered into your system.",
            "<b>Reports.</b> Numbers pulled from several tools into one weekly summary, without anyone copying and pasting.",
            "<b>Sales follow-up.</b> Reminders and personalized emails sent at the right time. Our own <a href=\"/work/prospector\">Prospector</a> finds businesses and writes the first email this way.",
          ],
        ] },
        { h: "Which tasks are worth automating?", p: [
          "A task is a good candidate when it shows most of these signs:",
          [
            "It happens many times a week.",
            "It's mostly copying, sorting or answering the same things.",
            "A mistake is easy to spot and fix.",
            "It takes real hours from people who could be selling or serving customers.",
          ],
          "Not worth it yet: tasks that happen once a month, or decisions that need careful judgment every time. Start where the payoff is clear, and expand from there.",
        ] },
        { h: "How we work", p: [
          "The same four steps as our <a href=\"/ai-consulting\">AI consulting</a>: an assessment of how the work happens today, a plan with what to automate first and what it costs, the build with tests on real cases, and training with follow-up once it's live.",
        ] },
        { h: "What AI automation costs", p: [
          "It depends on how many workflows you need, which tools they connect to and how much data they handle, so there's no price list. After a free first conversation, we send a proposal with the scope and the price before any work starts.",
          "AI tools also charge a monthly fee or per use. The proposal includes the expected running cost, so there are no surprises later.",
        ] },
      ],
      faqTitle: "Questions about AI automation.",
      faq: [
        ["What's the difference between AI automation and RPA?", "RPA repeats fixed steps, like a person clicking through the same screens. AI automation can also read and write: it understands an email, extracts data from a document or drafts a reply. Many good workflows combine both."],
        ["Do I need to change my software?", "Usually not. We connect automations to the tools you already use, where they allow it, and only suggest a change when a tool really gets in the way."],
        ["Will automation replace my team?", "The goal is to take repetitive work off your team's plate so they have more time for customers and sales. Where AI isn't sure, a person stays in charge."],
        ["How long until an automation is live?", "It depends on the workflow. The plan you get after the assessment has a timeline for each one, before anything gets built."],
        ["Is my business data safe?", "We decide with you which data each automation can use, give it access only to what it needs, and choose tools that fit the privacy rules your business follows."],
        ["Do you work outside the US?", "Yes. We work remotely with businesses in the United States and Brazil, in English or Portuguese."],
      ],
      ctaTitle: "What would you automate first?",
      ctaText: "Tell us which task eats most of your team's week. Jean replies personally.",
    },
    pt: {
      slug: "automacao-com-ia",
      name: "Automação com IA",
      title: "Automação de processos com IA para empresas | Adscendo",
      description: "Automação de processos com IA: mapeamos o trabalho repetitivo e automatizamos com IA ligada ao WhatsApp, ao email e aos sistemas que você já usa.",
      eyebrow: "Automação com IA",
      h1: "Automação de processos com IA para o trabalho que se repete todo dia.",
      lede: "A gente encontra as tarefas que tomam a semana da sua equipe, automatiza com inteligência artificial ligada ao que você já usa e deixa uma pessoa no controle onde importa.",
      updated: "Atualizado em 11 de novembro de 2026 · Por Jean Menezes, fundador da Adscendo",
      ctaMain: "Fale com a gente",
      ctaSecond: "Ver exemplos",
      sectionsId: "exemplos",
      sections: [
        { h: "O que é automação de processos?", p: [
          "Automação de processos é usar software para fazer, sem trabalho manual, tarefas que seguem um padrão: copiar dados de um sistema para outro, enviar mensagens, gerar relatórios, mover um pedido para a próxima etapa.",
          "A automação com IA vai além: entende textos e documentos. Ela lê um email escrito do jeito do cliente, tira os dados de uma nota fiscal ou de um PDF, escreve uma resposta e decide para onde o caso vai.",
        ] },
        { h: "Automação com IA, RPA e automação tradicional", p: [
          [
            "<b>Automação tradicional:</b> regras fixas, do tipo \"chegou um formulário, cria um cadastro\". Funciona bem quando os dados chegam sempre no mesmo formato.",
            "<b>RPA (automação robótica de processos):</b> um robô repete os cliques que uma pessoa faria nas telas de um sistema. Útil em sistemas antigos, mas quebra quando a tela muda.",
            "<b>Automação com IA:</b> entende textos, imagens e documentos que não seguem um padrão, e chama uma pessoa quando não tem certeza.",
          ],
          "Na prática, os melhores fluxos misturam as três.",
        ] },
        { h: "Exemplos de automação com IA em pequenas e médias empresas", p: [
          [
            "<b>Atendimento no WhatsApp.</b> Um agente de IA responde as dúvidas comuns a qualquer hora e passa para a equipe o que precisa de uma pessoa. Veja o guia de <a href=\"/pt/agentes-de-ia\">agentes de IA para empresas</a>.",
            "<b>Novos contatos.</b> Um pedido de orçamento chega, a IA entende o que a pessoa quer, responde e registra no seu CRM ou na sua planilha.",
            "<b>Documentos.</b> Notas, pedidos e formulários lidos automaticamente e lançados no sistema.",
            "<b>Relatórios.</b> Números de várias ferramentas reunidos num resumo semanal, sem ninguém copiar e colar.",
            "<b>Vendas.</b> Lembretes e mensagens personalizadas no momento certo. O nosso <a href=\"/pt/work/prospector\">Prospector</a> encontra empresas e escreve o primeiro email assim.",
          ],
        ] },
        { h: "Quais processos vale automatizar?", p: [
          "Um processo é bom candidato quando tem a maior parte destes sinais:",
          [
            "Acontece várias vezes por semana.",
            "É, na maior parte, copiar, organizar ou responder sempre as mesmas coisas.",
            "Um erro é fácil de perceber e corrigir.",
            "Toma horas de quem poderia estar vendendo ou atendendo.",
          ],
          "Ainda não vale: tarefas que acontecem uma vez por mês ou decisões que pedem análise cuidadosa toda vez. Comece onde o retorno é claro e vá ampliando.",
        ] },
        { h: "Como trabalhamos", p: [
          "As mesmas quatro etapas da nossa <a href=\"/pt/consultoria-ia\">consultoria de IA</a>: diagnóstico de como o trabalho acontece hoje, um plano com o que automatizar primeiro e quanto custa, a implantação com testes em casos reais, e treinamento com acompanhamento depois que está no ar.",
        ] },
        { h: "Quanto custa automatizar processos com IA", p: [
          "Depende de quantos fluxos você precisa, com quais sistemas eles se conectam e do volume de dados, por isso não existe tabela. Depois de uma primeira conversa, gratuita, mandamos uma proposta com o escopo e o preço antes de qualquer trabalho começar.",
          "As ferramentas de IA também cobram mensalidade ou por uso. A proposta já traz o custo esperado para manter tudo funcionando.",
        ] },
      ],
      faqTitle: "Perguntas sobre automação com IA.",
      faq: [
        ["Dá para automatizar o WhatsApp da empresa?", "Dá. O caminho seguro é a API oficial do WhatsApp Business (a plataforma da Meta para empresas). Soluções que imitam um celular comum arriscam o bloqueio do número."],
        ["Qual a diferença entre automação com IA e RPA?", "O RPA repete passos fixos, como uma pessoa clicando sempre nas mesmas telas. A automação com IA também lê e escreve: entende um email, tira dados de um documento ou escreve uma resposta. Muitos bons fluxos usam as duas."],
        ["Preciso trocar meus sistemas?", "Normalmente não. Ligamos as automações ao que você já usa, quando o sistema permite, e só sugerimos trocar quando uma ferramenta realmente atrapalha."],
        ["A automação vai substituir minha equipe?", "A ideia é tirar da equipe o trabalho repetitivo, para sobrar tempo para atender e vender. Onde a IA não tem certeza, uma pessoa continua no controle."],
        ["E os dados da minha empresa?", "Definimos com você quais dados cada automação pode usar, damos acesso só ao necessário e escolhemos as ferramentas de acordo com a LGPD."],
        ["Vocês atendem empresas de todo o Brasil?", "Sim. Trabalhamos de forma remota, com empresas no Brasil e nos Estados Unidos, em português ou inglês."],
      ],
      ctaTitle: "O que você automatizaria primeiro?",
      ctaText: "Conte qual tarefa mais toma o tempo da sua equipe. O Jean responde pessoalmente.",
    },
  },
  agents: {
    published: "2026-11-11", modified: "2026-11-11",
    en: {
      slug: "ai-agents",
      name: "AI agents for business",
      title: "AI Agents for Business: Uses and How to Start | Adscendo",
      description: "What AI agents for business are, what they do in customer service, sales and operations, how they differ from chatbots and how to start safely.",
      eyebrow: "Guide",
      h1: "AI agents for business: what they do and how to start.",
      lede: "An AI agent doesn't just answer questions. It takes steps: books the appointment, updates the record, sends the quote. Here is what agents can do in a small business, where they fall short and how to start without wasting money.",
      updated: "Updated November 11, 2026 · By Jean Menezes, founder of Adscendo",
      ctaMain: "Talk to us",
      ctaSecond: "What they can do",
      sectionsId: "uses",
      sections: [
        { h: "What is an AI agent?", p: [
          "An AI agent is software that uses a language model, like the ones behind ChatGPT, to work toward a goal. It reads a request, decides the next step, uses the tools you allow (a calendar, your CRM, a database, email) and acts, then reports back or hands off to a person.",
          "A chatbot answers. An agent answers and does something about it.",
        ] },
        { h: "What AI agents can do in a small business", p: [
          [
            "<b>Customer service.</b> Answer common questions on your website, by email or on WhatsApp, at any hour, and hand off to your team when a person is needed.",
            "<b>Scheduling.</b> Find a free slot, book it and send the confirmation and reminders.",
            "<b>Sales.</b> Qualify new leads, write the first message and follow up at the right time.",
            "<b>Back office.</b> Read invoices, orders and forms and enter the data into your system.",
            "<b>Internal help.</b> Answer your team's questions using your own documents and procedures.",
          ],
        ] },
        { h: "AI agent, chatbot or automation?", p: [
          [
            "<b>Chatbot:</b> answers questions, usually from a script or a knowledge base. It doesn't act in your systems.",
            "<b>Automation:</b> runs fixed steps when something happens. Reliable, but it doesn't understand messy requests. See <a href=\"/ai-automation\">AI automation</a>.",
            "<b>AI agent:</b> understands the request, chooses among the actions you allowed and carries them out. Most useful when requests vary but the possible actions are clear.",
          ],
        ] },
        { h: "Off-the-shelf platform or custom AI agent?", p: [
          "Ready-made platforms work well for simple cases, like answering questions from a help page. A custom agent makes sense when it has to connect to your own systems, follow your business rules or handle a process that's specific to you.",
          "Either way, the hard part isn't the AI model. It's deciding what the agent may do, giving it the right information and testing it on real cases.",
        ] },
        { h: "How to start without wasting money", p: [
          [
            "Pick one task with real volume, like the questions your team answers every day.",
            "Write down what the agent can and can't do, and when it must call a person.",
            "Give it access only to the data that task needs.",
            "Test it on real past cases before customers see it.",
            "Launch with a person reviewing, then measure: time saved, questions solved, handoffs.",
          ],
        ] },
        { h: "Risks to plan for", p: [
          "Language models can give confident wrong answers. Good agents limit what they talk about, cite your own information, and pass anything uncertain to a person. Tell customers they're talking to an assistant, and keep sensitive data out of tools that don't need it.",
        ] },
        { h: "How we build AI agents", p: [
          "We start with an assessment of where an agent saves the most time, then build it, connect it to your systems and test it on real cases before it goes live. It's part of our <a href=\"/ai-consulting\">AI consulting</a>, led by Jean Menezes, who also built <a href=\"/work/prospector\">Prospector</a>, an AI tool that finds businesses and writes the first email.",
        ] },
      ],
      faqTitle: "Questions about AI agents.",
      faq: [
        ["How much does an AI agent for business cost?", "Platforms charge a monthly fee, often by usage. A custom agent is a project plus the running cost of the AI tools it uses. We send a proposal with both after a free first conversation."],
        ["Can an AI agent work on WhatsApp?", "Yes, through the official WhatsApp Business Platform from Meta. Tools that imitate a regular phone number risk getting it banned."],
        ["Will my customers know they're talking to AI?", "They should. Telling them builds trust, and a good agent hands off to a person quickly when it's needed."],
        ["Do I need technical staff to run an agent?", "No. Once it's live, your team reviews conversations and adjusts answers in plain language. We handle the technical side."],
      ],
      ctaTitle: "Where would an AI agent help you most?",
      ctaText: "Tell us which questions or tasks take most of your team's day. Jean replies personally.",
    },
    pt: {
      slug: "agentes-de-ia",
      name: "Agentes de IA para empresas",
      title: "Agente de IA para empresas: o que é e como usar | Adscendo",
      description: "O que é um agente de IA, o que ele faz no atendimento, nas vendas e no WhatsApp, a diferença para um chatbot e como começar na sua empresa com segurança.",
      eyebrow: "Guia",
      h1: "Agente de IA para empresas: o que é e como usar.",
      lede: "Um agente de IA não só responde perguntas. Ele age: marca o horário, atualiza o cadastro, manda o orçamento. Veja o que um agente faz numa pequena ou média empresa, onde ele não dá conta e como começar sem desperdiçar dinheiro.",
      updated: "Atualizado em 11 de novembro de 2026 · Por Jean Menezes, fundador da Adscendo",
      ctaMain: "Fale com a gente",
      ctaSecond: "O que ele faz",
      sectionsId: "usos",
      sections: [
        { h: "O que é um agente de IA?", p: [
          "Um agente de IA é um software que usa um modelo de linguagem, como os que estão por trás do ChatGPT, para cumprir um objetivo. Ele lê o pedido, decide o próximo passo, usa as ferramentas que você liberar (agenda, CRM, planilha, email) e age, depois avisa o resultado ou passa para uma pessoa.",
          "Um chatbot responde. Um agente responde e resolve.",
        ] },
        { h: "O que um agente de IA faz numa empresa", p: [
          [
            "<b>Atendimento.</b> Responde as dúvidas comuns no WhatsApp, no site ou por email, a qualquer hora, e passa para a equipe quando precisa de uma pessoa.",
            "<b>Agendamento.</b> Encontra um horário livre, marca e manda confirmação e lembretes.",
            "<b>Vendas.</b> Qualifica novos contatos, escreve a primeira mensagem e faz o acompanhamento no momento certo.",
            "<b>Backoffice.</b> Lê notas, pedidos e formulários e lança os dados no sistema.",
            "<b>Ajuda interna.</b> Responde as dúvidas da equipe com base nos documentos e procedimentos da própria empresa.",
          ],
        ] },
        { h: "Agente de IA no WhatsApp", p: [
          "É onde a maioria dos clientes já fala com as empresas no Brasil. Um agente no WhatsApp responde na hora, entende áudios e mensagens escritas do jeito de cada um, consulta preços ou horários e chama uma pessoa da equipe quando o assunto pede.",
          "O caminho seguro é a API oficial do WhatsApp Business (a plataforma da Meta para empresas). Soluções que imitam um celular comum arriscam o bloqueio do número.",
        ] },
        { h: "Agente de IA, chatbot ou automação?", p: [
          [
            "<b>Chatbot:</b> responde perguntas, normalmente com menus ou um roteiro. Não age nos seus sistemas.",
            "<b>Automação:</b> executa passos fixos quando algo acontece. Confiável, mas não entende pedidos fora do padrão. Veja <a href=\"/pt/automacao-com-ia\">automação de processos com IA</a>.",
            "<b>Agente de IA:</b> entende o pedido, escolhe entre as ações que você liberou e executa. É mais útil quando os pedidos variam, mas as ações possíveis são claras.",
          ],
        ] },
        { h: "Plataforma pronta ou agente sob medida?", p: [
          "Plataformas prontas funcionam bem em casos simples, como responder com base numa página de perguntas frequentes. Um agente sob medida faz sentido quando ele precisa se ligar aos seus sistemas, seguir as regras do seu negócio ou cuidar de um processo que é só seu.",
          "Nos dois casos, a parte difícil não é o modelo de IA. É definir o que o agente pode fazer, dar a ele as informações certas e testar com casos reais.",
        ] },
        { h: "Como começar sem desperdiçar dinheiro", p: [
          [
            "Escolha uma tarefa com volume de verdade, como as dúvidas que a equipe responde todo dia.",
            "Escreva o que o agente pode e não pode fazer, e quando ele deve chamar uma pessoa.",
            "Dê acesso só aos dados que essa tarefa precisa.",
            "Teste com casos reais antigos antes de os clientes verem.",
            "Coloque no ar com uma pessoa revisando e meça: tempo economizado, dúvidas resolvidas, transferências.",
          ],
        ] },
        { h: "Cuidados antes de colocar no ar", p: [
          "Modelos de linguagem podem dar respostas erradas com toda a confiança. Um bom agente limita os assuntos, usa as informações da própria empresa e passa para uma pessoa tudo o que for incerto. Avise o cliente de que ele fala com um assistente e mantenha dados sensíveis longe de ferramentas que não precisam deles.",
        ] },
        { h: "Como construímos agentes de IA", p: [
          "Começamos por um diagnóstico de onde um agente economiza mais tempo, depois construímos, ligamos aos seus sistemas e testamos com casos reais antes de colocar no ar. Faz parte da nossa <a href=\"/pt/consultoria-ia\">consultoria de IA</a>, conduzida pelo Jean Menezes, que também construiu o <a href=\"/pt/work/prospector\">Prospector</a>, um sistema com IA que encontra empresas e escreve o primeiro email.",
        ] },
      ],
      faqTitle: "Perguntas sobre agentes de IA.",
      faq: [
        ["Quanto custa um agente de IA para empresa?", "Plataformas cobram mensalidade, muitas vezes pelo uso. Um agente sob medida é um projeto mais o custo de uso das ferramentas de IA. Mandamos uma proposta com os dois depois de uma primeira conversa, gratuita."],
        ["Como criar um agente de IA para a minha empresa?", "Comece por uma tarefa com volume, defina o que o agente pode fazer, dê acesso só aos dados necessários e teste com casos reais. Dá para montar sozinho numa plataforma pronta ou contratar quem construa e ligue aos seus sistemas."],
        ["O cliente vai saber que está falando com uma IA?", "Deveria. Avisar gera confiança, e um bom agente passa para uma pessoa rápido quando é preciso."],
        ["Preciso de alguém técnico para manter o agente?", "Não. Depois de pronto, a equipe revisa as conversas e ajusta as respostas em linguagem simples. A parte técnica fica com a gente."],
      ],
      ctaTitle: "Onde um agente de IA ajudaria mais na sua empresa?",
      ctaText: "Conte quais dúvidas ou tarefas mais tomam o dia da sua equipe. O Jean responde pessoalmente.",
    },
  },
};

// One page per service, at /websites and /apps (/pt/sites, /pt/apps), linked from the "Services" menu
// and the home's "What we build" tiles. `hero` is the project shown on a computer and a phone, `work` the
// projects listed further down. Websites show the prices in `quote`; apps are priced per project.
// The website cost guide (/website-cost, /pt/quanto-custa-um-site): answers "how much does a small business
// website cost" for people budgeting a site, then shows our prices (from `quote`, same tiles as the
// websites page). Market ranges are typical figures, labeled as such, never quotes. Each section's `p` holds
// paragraphs (strings) and bullet lists (arrays). Linked from the websites page and the home FAQ.
export const costPage = {
  en: {
    slug: "website-cost",
    name: "Website cost guide",
    title: "How much does a small business website cost in 2026? | Adscendo",
    description: "Small business website cost in 2026: builders, freelancers, studios and agencies compared, what changes the price and the yearly costs. Ours from {new}.",
    eyebrow: "Website cost guide",
    h1: "How much does a small business website cost?",
    lede: "Usually from a few hundred to several thousand dollars to build, plus a small yearly cost to keep it online. Where you land depends on who builds it and what the site has to do. Here is how the numbers work, with our own prices at the end.",
    updated: "Updated November 10, 2026 · By Jean Menezes, founder of Adscendo",
    ctaMain: "Get a quote",
    ctaSecond: "See our prices",
    sections: [
      { h: "How much does a website cost, by who builds it?", p: [
        "Who builds the site moves the price more than anything else:",
        [
          "<b>You, on a website builder</b> like Wix or Squarespace: roughly $200 to $600 a year in plan fees, plus the hours you put in.",
          "<b>A freelancer</b>: often $1,000 to $5,000, depending on their experience and how much they write and design for you.",
          "<b>A small studio</b>: often $1,000 to $10,000. Ours run from {new} to {complex} at launch prices.",
          "<b>An agency</b>: often $5,000 to $30,000 or more, with a team of designers, writers and developers.",
        ],
        "These are typical ranges in the US, not quotes. Two sites at the same price can include very different work, so compare what's included, not only the total.",
      ] },
      { h: "What changes the price of a website?", p: [
        "Five things decide most of what a website costs:",
        [
          "<b>How many pages.</b> A one-page site for a local service costs less than a site with a page for each service, location and team member.",
          "<b>Who writes the text and finds the photos.</b> If you hand over finished text and photos, the job is smaller. If the designer writes it, it takes longer, but it's usually written better for Google.",
          "<b>Custom design or a template.</b> A template is cheaper and faster. A custom design fits your brand and is built around what your customers need to do.",
          "<b>What the site has to do.</b> Online booking, payments, a store or a connection to your CRM each add work, and each one has to be tested.",
          "<b>How many languages.</b> Each language is close to a second site: its own text, its own pages and its own address on Google.",
        ],
      ] },
      { h: "What does a website redesign cost?", p: [
        "A redesign usually costs a bit less than a new site from the same designer, because your text, photos and pages already exist. It costs about the same when the site needs new pages, new features or a full rewrite.",
        "A good redesign keeps your address and sends old pages to the new ones, so what you've built on Google carries over.",
        "Ours is {redo} at launch prices ({redoRegular} regular), or {complex} if the site connects to booking, payments or a CRM.",
      ] },
      { h: "What does a website cost every year?", p: [
        "The build is paid once. A few smaller costs come back every year:",
        [
          "<b>Domain</b> (your address, like yourbusiness.com): about $10 to $20 a year.",
          "<b>Hosting</b> (the server that keeps the site online): from free to about $30 a month for a small business site. Website builders include it in the plan.",
          "<b>Email at your domain</b>, if you want it: billed per person, per month, by Google or Microsoft.",
          "<b>Changes after launch</b>: you make them yourself, or pay your designer by the hour or by the month.",
        ],
        "Before you sign with anyone, ask what the site will cost per month once it's live. A cheap build with an expensive monthly plan can cost more after two or three years.",
      ] },
      { h: "What our price includes", p: [
        "Every website we build comes with the same basics, in one price for the whole project:",
        [
          "Designed for phones first, then for computers.",
          "Fast pages, even on a weak signal.",
          "Set up for Google, Google Maps included, and for AI assistants like ChatGPT.",
          "A way to call, message, book or ask for a quote on every page.",
          "We put the site live for you.",
        ],
        "See <a href=\"/websites\">what's included in every website</a>, and <a href=\"/work\">everything we've built</a>.",
      ] },
      { h: "Questions to ask before you hire anyone", p: [
        [
          "Who owns the site and the domain once it's paid for?",
          "What will it cost per month after launch, and what does that include?",
          "Who writes the text, and is it written with the words customers type into Google?",
          "Can I change text and photos myself?",
          "Can I see sites you've built, live?",
        ],
        "The answers tell you more than the price does.",
      ] },
    ],
    pricesTitle: "Our prices.",
    faqTitle: "Questions about website cost.",
    faq: [
      ["How much does a basic website cost for a small business?", "A simple site with a few pages usually costs $1,000 to $5,000 from a freelancer or a small studio, or a few hundred dollars a year if you build it yourself on a website builder. Ours starts at {new} with the launch discount ({newRegular} regular)."],
      ["Is a website builder cheaper than hiring a designer?", "At first, yes. Over a few years the plan fees add up, and the hours you spend building are hours away from your business. A builder makes sense to test an idea. A designer makes sense when the site has to bring in customers."],
      ["Why do some websites cost $500 and others $20,000?", "Mostly because of the work behind them: how many pages, who writes the text, custom design or a template, and features like booking, payments or a store. Agencies also have bigger teams to pay. Compare what's included, not only the price."],
      ["How long does it take to build a small business website?", "Usually 2 to 6 weeks for a simple site, depending on how many pages it has and how quickly text and photos are ready. Ours usually take 2 to 3 weeks."],
      ["Do I pay once or every month?", "For our websites, once: one price for the whole project. The domain and hosting are separate yearly costs, usually small. Ask us and we'll tell you what they would be for your site."],
    ],
    ctaTitle: "Get your own estimate.",
    ctaText: "Tell us about your business. In less than a minute you get a first estimate, and we reply within 6 hours.",
  },
  pt: {
    slug: "quanto-custa-um-site",
    name: "Quanto custa um site",
    title: "Quanto custa um site em 2026? Guia de preços | Adscendo",
    description: "Quanto custa criar um site em 2026: plataformas, freelancers, estúdios e agências comparados, o que muda o preço e os custos anuais. O nosso, de {new}.",
    eyebrow: "Quanto custa um site",
    h1: "Quanto custa um site para pequena empresa?",
    lede: "Criar um site costuma custar de algumas centenas a alguns milhares de reais, mais um custo anual pequeno para manter no ar. O valor depende de quem faz e do que o site precisa fazer. Veja como a conta funciona, com os nossos preços no final.",
    updated: "Atualizado em 10 de novembro de 2026 · Por Jean Menezes, fundador da Adscendo",
    ctaMain: "Peça um orçamento",
    ctaSecond: "Ver nossos preços",
    sections: [
      { h: "Quanto custa um site, conforme quem faz?", p: [
        "Quem faz o site é o que mais muda o preço:",
        [
          "<b>Você mesmo, numa plataforma</b> como Wix ou WordPress.com: a mensalidade do plano, mais as horas que você dedica.",
          "<b>Um freelancer</b>: muitas vezes de R$ 1.500 a R$ 5.000, conforme a experiência e o quanto ele escreve e desenha para você.",
          "<b>Um estúdio pequeno</b>: muitas vezes de R$ 3.000 a R$ 15.000. Os nossos vão de {new} a {complex} com o desconto de lançamento.",
          "<b>Uma agência</b>: muitas vezes de R$ 10.000 a R$ 50.000 ou mais, com uma equipe de designers, redatores e desenvolvedores.",
        ],
        "São faixas comuns no Brasil, não orçamentos. Dois sites com o mesmo preço podem incluir trabalhos bem diferentes, então compare o que está incluído, não só o total.",
      ] },
      { h: "O que muda o preço de um site?", p: [
        "Cinco coisas decidem quase todo o custo de um site:",
        [
          "<b>Quantas páginas.</b> Um site de uma página para um serviço local custa menos que um site com uma página para cada serviço, unidade e pessoa da equipe.",
          "<b>Quem escreve os textos e consegue as fotos.</b> Se você entrega textos e fotos prontos, o trabalho é menor. Se quem faz o site escreve, leva mais tempo, mas o texto costuma sair melhor para o Google.",
          "<b>Design sob medida ou modelo pronto.</b> Um modelo é mais barato e mais rápido. Um design sob medida combina com a sua marca e é pensado para o que seus clientes precisam fazer.",
          "<b>O que o site precisa fazer.</b> Agendamento online, pagamentos, loja virtual ou integração com o seu CRM somam trabalho, e cada um precisa ser testado.",
          "<b>Quantos idiomas.</b> Cada idioma é quase um segundo site: textos próprios, páginas próprias e endereço próprio no Google.",
        ],
      ] },
      { h: "Quanto custa refazer um site?", p: [
        "Refazer um site costuma custar um pouco menos que um site novo com o mesmo profissional, porque textos, fotos e páginas já existem. Custa quase o mesmo quando o site precisa de páginas novas, recursos novos ou textos do zero.",
        "Uma boa reforma mantém o seu endereço e leva as páginas antigas para as novas, para você não perder o que já conquistou no Google.",
        "O nosso sai por {redo} com o desconto de lançamento ({redoRegular} cheio), ou {complex} se o site se conecta com agendamento, pagamentos ou CRM.",
      ] },
      { h: "Quanto custa manter um site por ano?", p: [
        "A criação do site é paga uma vez. Alguns custos menores voltam todo ano:",
        [
          "<b>Domínio</b> (seu endereço, como seunegocio.com.br): R$ 40 por ano no Registro.br.",
          "<b>Hospedagem</b> (o servidor que mantém o site no ar): de grátis a algumas dezenas de reais por mês para o site de uma pequena empresa. As plataformas já incluem no plano.",
          "<b>Email com o seu domínio</b>, se você quiser: cobrado por pessoa, por mês, pelo Google ou pela Microsoft.",
          "<b>Alterações depois do lançamento</b>: você mesmo faz, ou paga quem fez o site por hora ou por mês.",
        ],
        "Antes de fechar com qualquer pessoa, pergunte quanto o site vai custar por mês depois de pronto. Um site barato com mensalidade cara pode sair mais caro em dois ou três anos.",
      ] },
      { h: "O que o nosso preço inclui", p: [
        "Todo site que fazemos vem com o mesmo básico, num preço só para o projeto inteiro:",
        [
          "Pensado primeiro para o celular, depois para o computador.",
          "Páginas rápidas, mesmo com sinal fraco.",
          "Preparado para o Google, inclusive o Google Maps, e para assistentes de IA como o ChatGPT.",
          "Um jeito de ligar, mandar mensagem, agendar ou pedir orçamento em todas as páginas.",
          "A gente coloca o site no ar para você.",
        ],
        "Nossos preços são em dólar: usamos a mesma tabela para clientes no Brasil e nos Estados Unidos. Veja <a href=\"/pt/sites\">o que todo site inclui</a> e <a href=\"/pt/work\">tudo o que já construímos</a>.",
      ] },
      { h: "Perguntas para fazer antes de contratar", p: [
        [
          "De quem é o site e o domínio depois de pagos?",
          "Quanto vai custar por mês depois do lançamento, e o que está incluído?",
          "Quem escreve os textos, e eles usam as palavras que os clientes digitam no Google?",
          "Eu consigo trocar textos e fotos sozinho?",
          "Posso ver, no ar, sites que vocês já fizeram?",
        ],
        "As respostas dizem mais do que o preço.",
      ] },
    ],
    pricesTitle: "Nossos preços.",
    faqTitle: "Perguntas sobre o preço de um site.",
    faq: [
      ["Quanto custa um site simples para pequena empresa?", "Um site simples, com poucas páginas, costuma custar de R$ 1.500 a R$ 5.000 com um freelancer ou um estúdio pequeno, ou só a mensalidade se você mesmo montar numa plataforma. O nosso sai a partir de {new} com o desconto de lançamento ({newRegular} cheio)."],
      ["Montar o site sozinho numa plataforma sai mais barato?", "No começo, sim. Em alguns anos as mensalidades somam, e as horas que você passa montando o site são horas longe do negócio. Uma plataforma faz sentido para testar uma ideia. Contratar alguém faz sentido quando o site precisa trazer clientes."],
      ["Por que alguns sites custam R$ 1.000 e outros R$ 30.000?", "Principalmente pelo trabalho por trás: quantas páginas, quem escreve os textos, design sob medida ou modelo pronto, e recursos como agendamento, pagamentos ou loja. Agências também têm equipes maiores para pagar. Compare o que está incluído, não só o preço."],
      ["Quanto tempo leva para fazer um site?", "Normalmente de 2 a 6 semanas para um site simples, conforme o número de páginas e a rapidez com que textos e fotos ficam prontos. Os nossos costumam levar de 2 a 3 semanas."],
      ["Eu pago uma vez ou todo mês?", "Pelos nossos sites, uma vez: um preço para o projeto inteiro. Domínio e hospedagem são custos anuais à parte, normalmente pequenos. Pergunte e a gente diz quanto seriam para o seu site."],
    ],
    ctaTitle: "Receba a sua estimativa.",
    ctaText: "Conte sobre seu negócio. Em menos de um minuto você recebe uma primeira estimativa, e a gente responde em até 6 horas.",
  },
};

export const servicePages = {
  websites: {
    hero: "minha-companhia",
    work: ["minha-companhia", "sidemed", "adscendo"],
    prices: true,
    serviceType: "Web design",
    en: {
      slug: "websites",
      name: "Websites",
      title: "Small business website designer and web design | Adscendo",
      description: "Website designer for small businesses: custom sites designed for phones, fast, and built to be found on Google and recommended by AI. From {new} at launch.",
      eyebrow: "Small business web design",
      h1: "A website that brings you customers.",
      lede: "Websites for small businesses: beautiful, fast and built to turn visits into calls, bookings and messages. We design it, build it and put it live for you.",
      ctaMain: "Get a quote",
      ctaSecond: "See prices",
      incTitle: "What every website includes.",
      incLede: "Nothing to add on later. Every site comes with the basics done properly.",
      inc: [
        ["Designed for phones", "Most customers will meet your business on a phone first. We design for that screen, then for the computer."],
        ["Fast", "Pages that open in a blink, even on a weak signal. Slow sites lose visitors before they read a word."],
        ["Found on Google", "Clear pages, the words your customers really type and your details where Google looks for them, Maps included."],
        ["Recommended by AI", "Built so ChatGPT, Gemini and Perplexity can read your site, trust it and name you in their answers.", "ai"],
        ["Booking and contact", "A way to call, message, book or ask for a quote on every page, so a visit turns into a conversation."],
        ["One or more languages", "One language or several, each with its own address, so Google shows each customer the right one."],
      ],
      workTitle: "Websites we've built.",
      workLede: "Our own products so far, each with its full story: the idea, the decisions and the site as it went live.",
      pricesTitle: "Prices.",
      pricesLede: "Affordable, fixed prices: one price for the whole project, paid once, with a launch discount for our first clients.",
      regular: "{price} regular · {off}% launch discount",
      priceChips: ["Design and build", "Google and AI setup", "Put live for you"],
      faqTitle: "Questions about websites.",
      faq: [
        ["I already have a website. Do I need a new one?", "Not always. If your site is slow, hard to use on a phone or doesn't bring in customers, a new version usually pays off, and we reuse what already works. Send us the address and we'll tell you honestly what we'd do."],
        ["How much does a website cost?", "Ours run from {new} to {complex} at launch prices, one price for the whole project. Elsewhere it ranges from a few hundred dollars a year on a website builder to $30,000 or more at an agency. Our <a href=\"/website-cost\">website cost guide</a> explains what changes the price and what you pay every year."],
        ["How much does a website redesign cost?", "Ours is {redo} at launch prices ({redoRegular} regular), because we start from what your current site already has. If it connects to booking, payments or a CRM, it's {complex}. Our <a href=\"/website-cost\">website cost guide</a> explains what changes the price."],
        ["Why are your prices lower than most agencies'?", "Because we're a new studio, and our first clients get launch discounts of up to {newOff}%. We're also small and remote, so there's no office or account manager built into the price. You work directly with the person who designs and builds your site."],
        ["How long does it take?", "Usually 2 to 3 weeks for a new site, from the first call to launch, once we have your text and photos. Sites with booking, payments or a CRM take a little longer. You get a date before we start."],
        ["Who owns the website and the domain?", "You do. The domain is registered in your name, and once the project is paid, the site is yours. If you ever move on, we hand everything over."],
        ["Can I change text and photos after launch?", "Yes. Send us the change by email or WhatsApp and we make it for you. Changes after launch are billed per change. Besides that, you only pay the domain and hosting, usually small yearly costs."],
        ["Will my business show up on Google and in ChatGPT?", "We build every site to be found: fast pages, clear organization, your details in a format Google and AI understand, and words written the way your customers ask. Nobody can honestly guarantee first place, so we show you where you stand and what is improving."],
      ],
      aboutTitle: "Your designer, from first call to launch.",
      about: [
        "Adscendo is run by <strong>Jean Menezes</strong>, a designer and developer who spent years building digital products for large companies before opening the studio in October 2026.",
        "He answers your messages, designs your site and builds it. We work remotely from Brazil, in English or Portuguese, and reply within 6 hours.",
      ],
      ctaTitle: "Let's build yours.",
      ctaText: "Tell us about your business. In less than a minute you get a first estimate, and we reply within 6 hours.",
    },
    pt: {
      slug: "sites",
      name: "Sites",
      title: "Criação de sites para pequenas empresas | Adscendo",
      description: "Sites sob medida para pequenas empresas, pensados para o celular, rápidos e feitos para aparecer no Google e ser recomendados pela IA. A partir de {new}.",
      eyebrow: "Criação de sites",
      h1: "Um site que traz clientes.",
      lede: "Sites para pequenas empresas: bonitos, rápidos e feitos para transformar visitas em ligações, agendamentos e mensagens. A gente desenha, constrói e coloca no ar para você.",
      ctaMain: "Peça um orçamento",
      ctaSecond: "Ver preços",
      incTitle: "O que todo site inclui.",
      incLede: "Nada para adicionar depois. Todo site vem com o básico bem feito.",
      inc: [
        ["Pensado para o celular", "A maioria dos clientes conhece seu negócio primeiro pelo celular. A gente desenha para essa tela, e depois para o computador."],
        ["Rápido", "Páginas que abrem num piscar de olhos, mesmo com sinal fraco. Site lento perde visitas antes de alguém ler uma palavra."],
        ["Encontrado no Google", "Páginas claras, as palavras que seus clientes realmente digitam e seus dados onde o Google procura, inclusive no Maps."],
        ["Recomendado pela IA", "Feito para o ChatGPT, o Gemini e o Perplexity conseguirem ler seu site, confiar nele e citar você nas respostas.", "ai"],
        ["Agendamento e contato", "Um jeito de ligar, mandar mensagem, agendar ou pedir orçamento em todas as páginas, para a visita virar conversa."],
        ["Um ou mais idiomas", "Um idioma ou vários, cada um com seu próprio endereço, para o Google mostrar a versão certa para cada cliente."],
      ],
      workTitle: "Sites que construímos.",
      workLede: "Por enquanto, produtos nossos, cada um com a história completa: a ideia, as decisões e o site como foi ao ar.",
      pricesTitle: "Preços.",
      pricesLede: "Preço fixo e acessível: um valor para o projeto inteiro, pago uma vez, com desconto de lançamento para nossos primeiros clientes. Por enquanto, a tabela em dólar vale também no Brasil.",
      regular: "{price} cheio · {off}% de desconto de lançamento",
      priceChips: ["Design e construção", "Preparado para Google e IA", "Colocamos no ar"],
      faqTitle: "Perguntas sobre sites.",
      faq: [
        ["Eu já tenho site. Preciso de um novo?", "Nem sempre. Se o seu site é lento, ruim de usar no celular ou não traz clientes, uma nova versão costuma valer a pena, e a gente aproveita o que já funciona. Mande o endereço e a gente diz com honestidade o que faria."],
        ["Quanto custa um site?", "Os nossos vão de {new} a {complex} com o desconto de lançamento, num preço só para o projeto inteiro. No mercado, vai da mensalidade de uma plataforma a R$ 50.000 ou mais numa agência. O guia <a href=\"/pt/quanto-custa-um-site\">quanto custa um site</a> explica o que muda o preço e o que você paga todo ano."],
        ["Quanto custa refazer um site?", "O nosso sai por {redo} com o desconto de lançamento ({redoRegular} cheio), porque partimos do que o seu site já tem. Se ele se conecta com agendamento, pagamentos ou CRM, fica {complex}. O guia <a href=\"/pt/quanto-custa-um-site\">quanto custa um site</a> explica o que muda o preço."],
        ["Por que o preço de vocês é menor que o de muitas agências?", "Porque somos um estúdio novo, e nossos primeiros clientes têm desconto de lançamento de até {newOff}%. Também somos pequenos e remotos, sem escritório nem gerente de contas embutidos no preço. Você fala direto com quem desenha e constrói o seu site."],
        ["Quanto tempo leva?", "Normalmente de 2 a 3 semanas para um site novo, da primeira conversa ao lançamento, depois que recebemos textos e fotos. Sites com agendamento, pagamentos ou CRM levam um pouco mais. Você recebe uma data antes de começarmos."],
        ["De quem é o site e o domínio?", "Seus. O domínio fica no seu nome e, depois de pago o projeto, o site é seu. Se um dia quiser mudar de fornecedor, entregamos tudo."],
        ["Posso trocar textos e fotos depois?", "Pode. Mande a alteração por email ou WhatsApp e a gente faz para você. Alterações depois do lançamento são cobradas por alteração. Fora isso, você só paga domínio e hospedagem, custos anuais normalmente pequenos."],
        ["Meu negócio vai aparecer no Google e no ChatGPT?", "Todo site que fazemos é feito para ser encontrado: páginas rápidas, organização clara, seus dados num formato que o Google e a IA entendem e textos escritos do jeito que seus clientes perguntam. Ninguém pode garantir o primeiro lugar com honestidade, por isso mostramos onde você está e o que está melhorando."],
      ],
      aboutTitle: "Seu designer, da primeira conversa ao lançamento.",
      about: [
        "A Adscendo é conduzida por <strong>Jean Menezes</strong>, designer e desenvolvedor que passou anos construindo produtos digitais para grandes empresas antes de abrir o estúdio, em outubro de 2026.",
        "É ele quem responde suas mensagens, desenha e constrói o seu site. Trabalhamos de forma remota, do Brasil, em português ou inglês, e respondemos em até 6 horas.",
      ],
      ctaTitle: "Vamos construir o seu.",
      ctaText: "Conte sobre seu negócio. Em menos de um minuto você recebe uma primeira estimativa, e a gente responde em até 6 horas.",
    },
  },
  apps: {
    hero: "sidemed",
    work: ["sidemed", "prospector", "orbit", "blip", "minha-companhia"],
    prices: false,
    serviceType: "Mobile and web app development",
    en: {
      slug: "apps",
      name: "Apps",
      title: "App development for iPhone, Android and web | Adscendo",
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

// The partner (referral) program, at /partners and /pt/parceiros. Linked from the footer only: the rest of
// the site speaks to business owners. Led by AI consulting and implementation; websites and apps count too.
// One flat rate for every service (`rate`, percent of the closed contract). The form emails Jean through
// /api/lead; he replies with the partner materials.
export const partnerPage = {
  rate: 15,
  en: {
    slug: "partners",
    name: "Partner program",
    title: "AI referral partner program: earn 15% commission | Adscendo",
    description: "Join the Adscendo AI referral partner program: introduce small businesses that need AI and earn 15% of every contract that closes. Free to join.",
    eyebrow: "AI referral partner program",
    h1: "Every business will use AI. Refer one, earn 15%.",
    lede: "Know a business that wants to cut costs and get more done with the same team? Introduce them to us. We automate their processes with AI, and if the contract closes, you get 15% of its value.",
    ctaMain: "Become a partner",
    ctaSecond: "How it works",
    rateHeading: "Your commission and what the client gets",
    rateLabel: "Your commission",
    rateText: "of the total value of every <a href=\"/ai-consulting\">AI consulting and implementation</a> contract that closes.",
    services: ["Diagnosis", "Automation", "Support agents", "AI in sales", "Team training"],
    gainsLabel: "What the client gets",
    gainsTitle: "Lower costs. A more profitable business.",
    gains: ["Automated processes", "Lower operating costs", "A more productive team"],
    audienceTitle: "Who we work for.",
    audienceLede: "Small and mid-size businesses that want to use AI but have no tech team to build it.",
    audience: [
      ["No in-house developers", "No programmers, no IT. We play that role."],
      ["Small and mid-size", "From a small office to a company with a few teams."],
      ["Any industry", "Wherever automation makes a process faster and cheaper."],
    ],
    partnersTitle: "Who can be a partner.",
    partnersLede: "People who already serve small and mid-size businesses.",
    partners: [
      ["Accountants", "You know your clients' routine and costs."],
      ["Marketing agencies", "Your clients are already asking about AI."],
      ["Social media and marketing", "You see the client's day-to-day up close."],
      ["Consultants", "You already map where the business loses time."],
    ],
    partnersNote: "<b>Anyone can refer.</b> These are just the most common profiles. If you know a business that could gain from AI, we'd love the introduction.",
    howTitle: "How it works",
    how: [
      ["Sign up", "Fill in the form. We email you the materials."],
      ["Introduce", "Send us the business's contact."],
      ["Get paid", "Contract closed, you get 15%."],
    ],
    faqTitle: "Questions",
    faq: [
      ["Do I need to understand AI?", "No. You only make the introduction. We explain, run the diagnosis and build it. The materials show what AI can do, with real examples."],
      ["How much can I earn?", "15% of every contract that closes, for every business you refer. For example, a website with integrations costs {site} at our launch prices, so that one referral pays you {cut}."],
      ["When do I get paid?", "After the client pays. If they pay in installments, you get 15% of each one."],
      ["How do you know the referral is mine?", "Send us the contact before the client reaches out, or ask them to mention your name. We confirm every referral by email."],
      ["Who talks to the client?", "We do. You make the introduction; we handle the conversation, the diagnosis, the proposal and the work."],
      ["Do websites and apps count?", "Yes. If the business you referred needs a website or an app, the same 15% applies."],
      ["Does it cost anything to join?", "No. You fill in the form and we email you the materials."],
      ["Is this an affiliate program?", "Not quite. There are no links or cookies to track: you introduce a business to us directly, and you earn 15% when its contract closes."],
    ],
    formTitle: "Become a partner",
    formLede: "Fill this in and we'll email you the materials to present our AI consulting within one business day.",
    form: {
      name: "Name", email: "Email", phone: "WhatsApp or phone", work: "What do you do?", workHint: "e.g. accountant, marketing agency, social media manager",
      note: "Which businesses could you refer?", optional: "optional",
      send: "Send", sending: "Sending…",
      ok: "Got it! The partner materials will be in your inbox within one business day.",
      fail: "We couldn't send it right now. Email us at {email} or message us on WhatsApp.",
      subject: "New partner: {name}",
    },
  },
  pt: {
    slug: "parceiros",
    // Meta ads for the partner program land here: Meta Pixel + cookie banner, the sent form counts as Lead.
    pixel: true,
    name: "Programa de parceiros",
    title: "Programa de parceiros de IA: indique e ganhe 15% | Adscendo",
    description: "Programa de parceiros e indicação da Adscendo: indique empresas que precisam de IA e receba 15% de cada contrato fechado. Cadastro gratuito.",
    eyebrow: "Programa de parceiros de IA",
    h1: "Toda empresa vai usar IA. Indique e ganhe 15%.",
    lede: "Conhece uma empresa que quer reduzir custos e produzir mais com a mesma equipe? Apresente para a gente. Nós automatizamos os processos com IA e, se o contrato fechar, você recebe 15% do valor.",
    ctaMain: "Quero ser parceiro",
    ctaSecond: "Como funciona",
    rateHeading: "Sua comissão e o que o cliente ganha",
    rateLabel: "Sua comissão",
    rateText: "do valor total de cada contrato de <a href=\"/pt/consultoria-ia\">consultoria e implantação de IA</a> fechado.",
    services: ["Diagnóstico", "Automações", "Agentes de atendimento", "IA em vendas", "Treinamento"],
    gainsLabel: "O que o cliente ganha",
    gainsTitle: "Menos custo. Mais rentabilidade.",
    gains: ["Processos automatizados", "Custo operacional menor", "Equipe mais produtiva"],
    audienceTitle: "Para quem trabalhamos.",
    audienceLede: "Pequenas e médias empresas que querem usar IA, mas não têm uma equipe de tecnologia para isso.",
    audience: [
      ["Sem equipe de desenvolvimento", "Sem programador nem TI. A gente faz esse papel."],
      ["Pequenas e médias", "Do escritório pequeno à empresa com algumas equipes."],
      ["De qualquer setor", "Onde a automação deixa um processo mais rápido e barato."],
    ],
    partnersTitle: "Quem pode ser parceiro.",
    partnersLede: "Quem já atende pequenas e médias empresas.",
    partners: [
      ["Contadores", "Você conhece a rotina e os custos dos seus clientes."],
      ["Agências de marketing", "Seus clientes já perguntam sobre IA."],
      ["Social media e marketing", "Você vê o dia a dia do cliente de perto."],
      ["Consultores", "Você já mapeia onde a empresa perde tempo."],
    ],
    partnersNote: "<b>Qualquer pessoa pode indicar.</b> Esses são só os perfis mais comuns. Se você conhece uma empresa que pode ganhar com IA, sua indicação é muito bem-vinda.",
    howTitle: "Como funciona",
    how: [
      ["Cadastre-se", "Preencha o formulário. Enviamos os materiais por email."],
      ["Indique", "Mande o contato da empresa para a gente."],
      ["Receba", "Fechou o contrato, você recebe 15%."],
    ],
    faqTitle: "Perguntas",
    faq: [
      ["Preciso entender de IA?", "Não. Você só faz a apresentação. Quem explica, faz o diagnóstico e implanta somos nós. Os materiais mostram o que a IA consegue fazer, com exemplos reais."],
      ["Quanto eu posso ganhar?", "15% de cada contrato fechado, para cada empresa que você indicar. Por exemplo, um site com integrações custa {site} no preço de lançamento, então essa indicação rende {cut} para você."],
      ["Quando eu recebo?", "Depois que o cliente paga. Se ele pagar em parcelas, você recebe 15% de cada parcela."],
      ["Como vocês sabem que a indicação é minha?", "Mande o contato antes de o cliente falar com a gente, ou peça para ele citar seu nome. Confirmamos cada indicação por email."],
      ["Quem conversa com o cliente?", "Nós. Você faz a apresentação; a conversa, o diagnóstico, a proposta e o trabalho ficam com a gente."],
      ["Sites e apps também contam?", "Sim. Se a empresa que você indicou precisar de um site ou de um app, valem os mesmos 15%."],
      ["Tem algum custo para participar?", "Não. Você preenche o formulário e enviamos os materiais por email."],
      ["É um programa de afiliados?", "Não exatamente. Não tem link nem cookie para rastrear: você apresenta a empresa direto para a gente e recebe 15% quando o contrato fecha."],
    ],
    formTitle: "Quero ser parceiro",
    formLede: "Preencha e enviamos para o seu email, em até 1 dia útil, os materiais para apresentar a consultoria de IA.",
    form: {
      name: "Nome", email: "Email", phone: "WhatsApp", work: "O que você faz?", workHint: "Ex.: contador, agência de marketing, social media",
      note: "Que empresas você pensa em indicar?", optional: "opcional",
      send: "Enviar", sending: "Enviando…",
      ok: "Recebemos! Os materiais de parceiro chegam no seu email em até 1 dia útil.",
      fail: "Não deu para enviar agora. Escreva para {email} ou chame a gente no WhatsApp.",
      subject: "Novo parceiro: {name}",
    },
  },
};

// The privacy policy, at /privacy and /pt/privacidade (linked from the footer, and from the Google sign-in
// screen that lets the contact chat book calls on Jean's calendar). Keep it true to what the site does.
export const privacy = {
  en: {
    slug: "privacy", title: "Privacy policy", updated: "Last updated November 9, 2026",
    lede: "What this site collects, why, and what you can ask us to do with it.",
    sections: [
      { h: "Who we are", p: ["Adscendo is the web design and development studio of Jean Menezes, based in Brazil. For anything about your data, write to <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a>."] },
      { h: "What we collect", p: [
        "Only what you choose to tell us in the project chat: your name, whether you have a website and its address, your email, and, if you give them, a WhatsApp number and notes. Nothing leaves the page until you send the chat or book a call.",
        "If you book a call, we also keep the time you picked.",
        "To learn which pages people read and how they found us, we count visits with <b>Google Analytics</b> and <b>Vercel Web Analytics</b>: pages viewed, how you arrived (a search, a link, a post), your approximate country and city, and your kind of device. We also count when someone starts the chat, sends it, books a call or taps WhatsApp or email, never what was typed. Apart from the ad landing pages described below, we use no advertising cookies.",
      ] },
      { h: "How we use it", p: [
        "To reply to you about your project, and to hold the call you booked. We don't sell your data, share what you write with advertisers, or add you to a mailing list.",
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
        "Pages that receive visits from our ads on Facebook and Instagram (for now, our Portuguese AI consulting page, the Portuguese home page, where the contact chat is, and the Portuguese partner program page) also load the <b>Meta Pixel</b>, so we can see how many people arrive from an ad and how many then tap WhatsApp, send the chat, book a call or sign up as a partner (only that it happened, never what was typed). It sets cookies (such as <code>_fbp</code>, which lasts up to 90 days) and sends Meta the page you visited, your browser and your IP address, which Meta may link to your Facebook or Instagram account under the <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener\">Meta Privacy Policy</a>. You can change which ads you see in your Meta account's ad preferences. It loads only after you tap <b>Aceitar</b> (Accept) on the cookie notice; if you decline, nothing is sent to Meta. To change your choice, clear this site's data in your browser. No other page of the site loads it.",
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
    slug: "privacidade", title: "Política de privacidade", updated: "Atualizada em 9 de novembro de 2026",
    lede: "O que este site coleta, por quê, e o que você pode pedir que a gente faça com isso.",
    sections: [
      { h: "Quem somos", p: ["A Adscendo é o estúdio de design e desenvolvimento web de Jean Menezes, no Brasil. Para qualquer assunto sobre os seus dados, escreva para <a href=\"mailto:jean@adscendo.pro\">jean@adscendo.pro</a>."] },
      { h: "O que coletamos", p: [
        "Só o que você escolhe contar na conversa sobre o projeto: seu nome, se você tem site e o endereço dele, seu email e, se quiser, um WhatsApp e observações. Nada sai da página até você enviar a conversa ou marcar uma chamada.",
        "Se você marcar uma chamada, guardamos também o horário escolhido.",
        "Para saber quais páginas as pessoas leem e como nos encontraram, contamos as visitas com o <b>Google Analytics</b> e o <b>Vercel Web Analytics</b>: páginas vistas, como você chegou (uma busca, um link, um post), país e cidade aproximados e o tipo de aparelho. Também contamos quando alguém começa a conversa, envia, marca uma chamada ou toca no WhatsApp ou no email, nunca o que foi digitado. Fora das páginas de anúncio descritas abaixo, não usamos cookies de publicidade.",
      ] },
      { h: "Como usamos", p: [
        "Para responder sobre o seu projeto e para fazer a chamada que você marcou. Não vendemos seus dados, não compartilhamos o que você escreve com anunciantes e não colocamos você em lista de email.",
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
        "As páginas que recebem visitas dos nossos anúncios no Facebook e no Instagram (por enquanto, a de <a href=\"/pt/consultoria-ia\">consultoria de IA</a>, a página inicial em português, onde fica a conversa de contato, e a do <a href=\"/pt/parceiros\">programa de parceiros</a>) também carregam o <b>Pixel da Meta</b>, para sabermos quantas pessoas chegaram por um anúncio e quantas tocaram no WhatsApp, enviaram a conversa, marcaram uma chamada ou se cadastraram como parceiros (só que aconteceu, nunca o que foi digitado). Ele grava cookies (como o <code>_fbp</code>, que dura até 90 dias) e envia à Meta a página visitada, o seu navegador e o seu endereço IP, que a Meta pode associar à sua conta do Facebook ou do Instagram, conforme a <a href=\"https://www.facebook.com/privacy/policy/\" target=\"_blank\" rel=\"noopener\">Política de Privacidade da Meta</a>. Você pode mudar os anúncios que vê nas preferências de anúncios da sua conta Meta. O pixel só é carregado depois que você toca em <b>Aceitar</b> no aviso de cookies; se você recusar, nada é enviado à Meta. Para mudar a escolha, limpe os dados do site no seu navegador. Nenhuma outra página do site carrega o pixel.",
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
    cover: img("sidemed/home.webp", 1600, 1000),
    coverPt: img("sidemed/home.pt.webp", 1600, 1000),
    phoneBar: "#1957ff",
    coverPhone: img("sidemed/home-m.webp", 780, 1688),
    coverPhonePt: img("sidemed/home-m.pt.webp", 780, 1688),
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
          fig: { kind: "browser", img: img("sidemed/passport.webp", 1600, 1000), cap: "Everything a doctor needs to know, on one page." },
        },
        {
          h: "Planned for the worst moment.",
          p: ["Every decision was made for the moment Sidemed matters most: an emergency far from home, under stress, maybe with no signal."],
          list: [
            ["Seconds, not minutes", "The essentials are one tap away."],
            ["Works with no signal", "A QR code and an emergency PDF, available offline."],
            ["Private by design", "End-to-end encryption, LGPD and GDPR compliance, and access you can revoke at any time."],
          ],
          fig: { kind: "browser", img: img("sidemed/how.webp", 1600, 1000), cap: "Security is part of the product, not a footnote." },
        },
        {
          h: "Used in 17 countries.",
          p: [
            "We built Sidemed as an app for iPhone and Android, in English, Portuguese and Spanish, with a website that explains it in seconds.",
            "Today, people in 17 countries carry their health history with them.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/home-m.webp", 780, 1688)], cap: "sidemed.com.br on a phone." },
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
          fig: { kind: "browser", img: img("sidemed/passport.pt.webp", 1600, 1000), cap: "Tudo o que um médico precisa saber, numa página." },
        },
        {
          h: "Pensado para o pior momento.",
          p: ["Cada decisão foi tomada para o momento em que a Sidemed mais importa: uma emergência longe de casa, sob estresse, talvez sem sinal."],
          list: [
            ["Segundos, não minutos", "O essencial fica a um toque."],
            ["Funciona sem sinal", "QR code e PDF de emergência, disponíveis offline."],
            ["Privacidade desde o início", "Criptografia de ponta a ponta, conformidade com LGPD e GDPR, e acessos que você revoga quando quiser."],
          ],
          fig: { kind: "browser", img: img("sidemed/how.pt.webp", 1600, 1000), cap: "Segurança faz parte do produto, não é nota de rodapé." },
        },
        {
          h: "Usada em 17 países.",
          p: [
            "Construímos a Sidemed como app para iPhone e Android, em português, inglês e espanhol, com um site que explica tudo em segundos.",
            "Hoje, pessoas em 17 países levam o próprio histórico de saúde com elas.",
          ],
          fig: { kind: "phones", imgs: [img("sidemed/home-m.pt.webp", 780, 1688)], cap: "sidemed.com.br no celular." },
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
          fig: { kind: "pair", items: [{ kind: "browser", img: img("minha-companhia/home.webp", 1440, 900), host: "minhacompanhia.com.br" }, { kind: "phone", img: img("sidemed/home-m.webp", 780, 1688), bar: "#1957ff" }], cap: "Work we've shipped: Minha companhia, a marketplace for family care, and Sidemed, a health app used in 17 countries." },
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
      description: "A Adscendo é o estúdio de sites de Jean Menezes. Fazemos sites claros e rápidos que ajudam empresas americanas a ser encontradas e ganhar clientes.",
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
          fig: { kind: "pair", items: [{ kind: "browser", img: img("minha-companhia/home.webp", 1440, 900), host: "minhacompanhia.com.br" }, { kind: "phone", img: img("sidemed/home-m.pt.webp", 780, 1688), bar: "#1957ff" }], cap: "Trabalhos entregues: a Minha companhia, um marketplace de cuidado familiar, e a Sidemed, um app de saúde usado em 17 países." },
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
  {
    slug: "blip",
    tint: "#efeaf4", // card hover tone on the home page
    inWork: false, // on the work page, not on the home or the menu
    url: null,
    links: [{ href: "https://github.com/jeanmenezesmagalhaes/blip", en: "View on GitHub", pt: "Ver no GitHub" }],
    host: "localhost:8765", // Blip runs on the person's own Mac; this is its local address
    cover: img("blip/board.webp", 1600, 1000),
    coverPt: img("blip/board.pt.webp", 1600, 1000),
    coverPhone: img("blip/job-m.webp", 780, 1688),
    coverPhonePt: img("blip/job-m.pt.webp", 780, 1688),
    phoneBar: "#fff",
    en: {
      name: "Blip",
      kind: "Career",
      tagline: "Finds the jobs, tailors the resume, prepares the application. You click Send.",
      seoTitle: "Blip: AI job search with ATS-ready resumes | Adscendo",
      summary: "Finds jobs across dozens of sites, tailors your resume for each ATS, prepares the application and tracks it all on a board.",
      description: "How Blip, an open-source AI job search app that finds jobs, tailors resumes for the ATS and tracks every application, was built in November 2026.",
      facts: [["What we did", "Planned and built in-house"], ["When", "November 2026"], ["Platform", "Mac app, runs locally"], ["Status", "Open source on GitHub"]],
      chapters: [
        {
          h: "Job hunting became a second job.",
          p: [
            "Ten sites a day, reading post after post, rewriting the resume so each one gets past the ATS filter, filling in the same form again, remembering who never replied. Blip does that work for you, with AI as the engine.",
          ],
        },
        {
          h: "Every source, one board.",
          p: [
            "Blip searches dozens of sources at once: LinkedIn without logging in, company pages on Greenhouse, Lever and Ashby, remote job boards and Hacker News. Only what fits gets in: remote, with a visa, or in your country.",
            "Each job lands on a board, from found to offer.",
          ],
          fig: { kind: "browser", img: img("blip/board.webp", 1600, 1000), cap: "The board, from found to interview, with match scores and visa tags. Sample data." },
        },
        {
          h: "From 12% to 94%, without inventing anything.",
          p: [
            "Blip reads the job the way an ATS does and weighs each keyword. Then it edits your own resume file, changing as little as it can, until the job's keywords are there.",
            "It never touches names, employers, dates or numbers. Below 85%, the resume doesn't leave Blip: it asks what you have and where you used it.",
          ],
          fig: { kind: "browser", img: img("blip/job.webp", 1600, 1000), cap: "A tailored resume: 12% match with the job before, 94% after. Sample data." },
        },
        {
          h: "Everything ready. You click Send.",
          p: [
            "Blip writes the cover letter and the form answers, opens the form in Chrome, fills it in and attaches the files. You review and click <strong>Send</strong>. Nothing is automated on LinkedIn.",
            "After that, it reminds you to follow up and helps you practice for the interview for that job.",
          ],
          fig: { kind: "browser", img: img("blip/interview.webp", 1600, 1000), cap: "Interview practice for one job, with a score and what to improve. Sample data." },
        },
        {
          h: "Ask in plain words.",
          p: [
            "Type or say what you want: “find jobs in Dublin with a visa and tailor the 5 best.” The same tools work from Claude Desktop and Claude Code through an MCP server.",
            "Everything runs on your Mac. Jobs, resumes and applications stay in a local folder; only the job searches and the calls to Claude go out.",
          ],
          fig: { kind: "browser", img: img("blip/command.webp", 1600, 1000), cap: "Ask Blip: plain-language commands that act on the board. Sample data." },
        },
      ],
    },
    pt: {
      name: "Blip",
      kind: "Carreira",
      tagline: "Acha as vagas, adapta o currículo, prepara a candidatura. Você clica em Enviar.",
      seoTitle: "Blip: busca de vagas com IA e currículo para ATS | Adscendo",
      summary: "Acha vagas em dezenas de sites, adapta o currículo para o ATS de cada uma, prepara a candidatura e acompanha tudo num quadro.",
      description: "Como o Blip, app de código aberto que usa IA para achar vagas, adaptar o currículo ao ATS e acompanhar candidaturas, foi construído em novembro de 2026.",
      facts: [["O que fizemos", "Planejado e construído por nós"], ["Quando", "Novembro de 2026"], ["Plataforma", "App para Mac, roda local"], ["Status", "Código aberto no GitHub"]],
      chapters: [
        {
          h: "Procurar emprego virou um segundo emprego.",
          p: [
            "Abrir dez sites por dia, ler vaga por vaga, reescrever o currículo para cada uma passar no filtro do ATS, preencher o mesmo formulário de novo, lembrar quem não respondeu. O Blip faz esse trabalho por você, com IA como motor.",
          ],
        },
        {
          h: "Todas as fontes, um quadro.",
          p: [
            "O Blip procura em dezenas de fontes ao mesmo tempo: LinkedIn sem login, páginas das empresas no Greenhouse, Lever e Ashby, sites de vagas remotas e o Hacker News. Só entra o que serve: remota, com visto ou no seu país.",
            "Cada vaga cai num quadro, de encontrada até proposta.",
          ],
          fig: { kind: "browser", img: img("blip/board.pt.webp", 1600, 1000), cap: "O quadro, de vaga encontrada até entrevista, com match e selo de visto. Dados de exemplo." },
        },
        {
          h: "De 12% para 94%, sem inventar nada.",
          p: [
            "O Blip lê a vaga como um ATS lê e dá peso a cada palavra-chave. Depois edita o seu próprio arquivo de currículo, mudando o mínimo possível, até as palavras da vaga estarem lá.",
            "Nome, empresas, datas e números não mudam. Abaixo de 85%, o currículo não sai do Blip: ele pergunta o que você tem e onde usou.",
          ],
          fig: { kind: "browser", img: img("blip/job.pt.webp", 1600, 1000), cap: "Um currículo adaptado: 12% de match com a vaga antes, 94% depois. Dados de exemplo." },
        },
        {
          h: "Tudo pronto. Você clica em Enviar.",
          p: [
            "O Blip escreve a carta e as respostas do formulário, abre o formulário no Chrome, preenche e anexa os arquivos. Você revisa e clica em <strong>Enviar</strong>. Nada é automatizado no LinkedIn.",
            "Depois, ele avisa a hora do follow-up e treina você para a entrevista daquela vaga.",
          ],
          fig: { kind: "browser", img: img("blip/interview.pt.webp", 1600, 1000), cap: "Treino de entrevista para uma vaga, com nota e o que melhorar. Dados de exemplo." },
        },
        {
          h: "Peça com as suas palavras.",
          p: [
            "Escreva ou fale o que você quer: “procura vagas em Dublin com visto e adapta as 5 melhores.” As mesmas ferramentas funcionam no Claude Desktop e no Claude Code, por um servidor MCP.",
            "Tudo roda no seu Mac. Vagas, currículos e candidaturas ficam numa pasta local; só saem as buscas nos sites de vagas e as chamadas ao Claude.",
          ],
          fig: { kind: "browser", img: img("blip/command.pt.webp", 1600, 1000), cap: "Pedir ao Blip: ordens em linguagem natural que mexem no quadro. Dados de exemplo." },
        },
      ],
    },
  },
  {
    slug: "orbit",
    tint: "#eceef1", // card hover tone on the home page
    inWork: false, // on the work page, not on the home or the menu
    window: true, // native Mac app: shown in its own window, no browser frame or phone
    url: null,
    links: [{ href: "https://github.com/jeanmenezesmagalhaes/homebrew-orbit", en: "Install with Homebrew", pt: "Instalar pelo Homebrew" }],
    host: "Orbit",
    cover: img("orbit/home.webp", 1600, 1000), // the app is in Portuguese only, so both languages share the shots
    en: {
      name: "Orbit",
      kind: "Productivity",
      tagline: "Email, calendar and tasks in one Mac app, with an AI that drafts and never sends on its own.",
      seoTitle: "Orbit: email, calendar and AI in one Mac app | Adscendo",
      summary: "One native Mac app for every email account and calendar, tasks linked to emails, and the AI you choose.",
      description: "How Orbit, a native Mac app for email, calendar and tasks with a bring-your-own AI assistant, was planned and built in November 2026.",
      facts: [["What we did", "Planned and built in-house"], ["When", "November 2026"], ["Platform", "macOS, native"], ["Status", "Free, installed with Homebrew"]],
      chapters: [
        {
          h: "Three apps for one workday.",
          p: [
            "Email in one app, the calendar in another, tasks in a third and the AI in a browser tab. A date in an email had to be typed into the calendar by hand. A request in an email became a to-do only if you remembered it.",
            "Orbit puts all of it in one Mac app, for every account you have: Google, Microsoft, iCloud or any IMAP server.",
          ],
        },
        {
          h: "One screen to start the day.",
          p: [
            "Orbit opens on a grid of widgets: emails waiting for your reply, today's meetings, the next free hour and what's due. You choose the widgets, their order and their size.",
            "Which emails need a reply is decided by plain rules, not AI: sent to you, not automated, and not answered yet.",
          ],
          fig: { kind: "canvas", img: img("orbit/home.webp", 1600, 1000), cap: "The home screen, with replies, meetings, focus time and tasks. Sample data." },
        },
        {
          h: "Type the event the way you'd say it.",
          p: [
            "Day, week and month views, with every calendar from every account. To add something, type it: “café com Júlia sexta 16h no Café Faro” (coffee with Júlia, Friday at 4 pm).",
            "Dates, times and repeats come from Orbit's own rules, written for Portuguese, because small AI models get the day of the week wrong. The AI only suggests the title and the place, and the New event window works with no AI at all. Nothing is created until you click.",
          ],
          fig: { kind: "canvas", img: img("orbit/ask.webp", 1600, 1000), cap: "Two events typed in plain Portuguese with ⌘K, one already created. Sample data." },
        },
        {
          h: "Email that drafts, and waits for you.",
          p: [
            "One inbox for every account. Open an email and the AI proposes a reply after reading it and the conversation before it. It can also shorten, polish or make a draft more formal.",
            "It only fills in the editor. You read it, change it and send it, with 5 seconds to undo.",
          ],
          fig: { kind: "canvas", img: img("orbit/mail-reply.webp", 1600, 1000), cap: "A reply proposed by the AI, with the conversation on the side. Sample data." },
        },
        {
          h: "Tasks that remember the email.",
          p: [
            "Any email becomes a card on a kanban board, linked to the message it came from, even after the email is archived.",
            "Bring your own AI: Apple Intelligence or Ollama run free on the Mac, or use your own Claude or ChatGPT key, kept in the Keychain. An optional MCP server lets Claude or ChatGPT read your calendar and add events; deleting one always needs your click in Orbit.",
            "It's signed and notarized by Apple, and installs with one Homebrew command.",
          ],
          fig: { kind: "canvas", img: img("orbit/tasks.webp", 1600, 1000), cap: "The task board. Five of the open tasks came from emails. Sample data." },
        },
      ],
    },
    pt: {
      name: "Orbit",
      kind: "Produtividade",
      tagline: "Email, agenda e tarefas num app para Mac, com uma IA que escreve e nunca envia sozinha.",
      seoTitle: "Orbit: email, agenda e IA num app para Mac | Adscendo",
      summary: "Um app nativo para Mac com todas as contas de email e agendas, tarefas ligadas a emails e a IA que você escolher.",
      description: "Como o Orbit, um app nativo para Mac de email, agenda e tarefas, com assistente de IA à sua escolha, foi planejado e construído em novembro de 2026.",
      facts: [["O que fizemos", "Planejado e construído por nós"], ["Quando", "Novembro de 2026"], ["Plataforma", "macOS, nativo"], ["Status", "Grátis, instalado pelo Homebrew"]],
      chapters: [
        {
          h: "Três apps para um dia de trabalho.",
          p: [
            "Email num app, agenda em outro, tarefas num terceiro e a IA numa aba do navegador. A data de um email tinha de ser digitada na agenda à mão. Um pedido num email só virava tarefa se alguém lembrasse.",
            "O Orbit junta tudo num app para Mac, com todas as suas contas: Google, Microsoft, iCloud ou qualquer servidor IMAP.",
          ],
        },
        {
          h: "Uma tela para começar o dia.",
          p: [
            "O Orbit abre numa grade de widgets: emails esperando resposta, reuniões de hoje, o próximo horário livre e o que vence. Você escolhe os widgets, a ordem e o tamanho.",
            "Quais emails pedem resposta é decidido por regras simples, sem IA: enviado para você, não automático e ainda sem resposta.",
          ],
          fig: { kind: "canvas", img: img("orbit/home.webp", 1600, 1000), cap: "A tela de início, com respostas, reuniões, tempo de foco e tarefas. Dados de exemplo." },
        },
        {
          h: "Escreva o evento do jeito que você fala.",
          p: [
            "Visões de dia, semana e mês, com as agendas de todas as contas. Para marcar algo, é só escrever: “café com Júlia sexta 16h no Café Faro”.",
            "Data, hora e repetição saem de regras do próprio Orbit, em português, porque modelos de IA pequenos erram o dia da semana. A IA só sugere o título e o local, e a janela Novo evento funciona sem IA nenhuma. Nada é criado antes do seu clique.",
          ],
          fig: { kind: "canvas", img: img("orbit/ask.webp", 1600, 1000), cap: "Dois eventos escritos em português no ⌘K, um deles já criado. Dados de exemplo." },
        },
        {
          h: "Email que a IA rascunha, e espera por você.",
          p: [
            "Uma caixa de entrada para todas as contas. Abra um email e a IA propõe uma resposta depois de ler a mensagem e a conversa anterior. Ela também encurta, revisa ou deixa o texto mais formal.",
            "Ela só preenche o editor. Você lê, ajusta e envia, com 5 segundos para desfazer.",
          ],
          fig: { kind: "canvas", img: img("orbit/mail-reply.webp", 1600, 1000), cap: "Uma resposta proposta pela IA, com a conversa ao lado. Dados de exemplo." },
        },
        {
          h: "Tarefas que lembram do email.",
          p: [
            "Qualquer email vira um cartão num quadro kanban, ligado à mensagem de origem, mesmo depois que o email é arquivado.",
            "Use a IA que preferir: Apple Intelligence ou Ollama rodam grátis no Mac, ou use sua própria chave do Claude ou do ChatGPT, guardada no Keychain. Um servidor MCP opcional deixa o Claude ou o ChatGPT ler sua agenda e criar eventos; apagar um evento sempre pede o seu clique no Orbit.",
            "O app é assinado e notarizado pela Apple, e instala com um comando do Homebrew.",
          ],
          fig: { kind: "canvas", img: img("orbit/tasks.webp", 1600, 1000), cap: "O quadro de tarefas. Cinco das tarefas abertas vieram de emails. Dados de exemplo." },
        },
      ],
    },
  },
];
