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
    nav: { work: "Work", story: "Timeline", about: "About", cta: "Get in touch" },
    other: "Português", otherShort: "PT",
    skip: "Skip to content",
    readStory: "Read the story",
    back: "All work",
    visit: "Visit site",
    next: "Next project",
    footer: "From complexity to forward motion.",
  },
  pt: {
    nav: { work: "Trabalhos", story: "Linha do tempo", about: "Sobre", cta: "Fale comigo" },
    other: "English", otherShort: "EN",
    skip: "Pular para o conteúdo",
    readStory: "Ler a história",
    back: "Todos os trabalhos",
    visit: "Ver site",
    next: "Próximo projeto",
    footer: "Da complexidade ao movimento.",
  },
};

export const home = {
  en: {
    title: "Adscendo. Jean Menezes, product design and engineering",
    description: "Adscendo is the consultancy of Jean Menezes. Websites, apps and internal systems, designed and built from the first sketch to launch. See the work and the story behind each project.",
    h1: ["Ideas, made real.", "Designed and built."],
    sub: "Adscendo is the consultancy of Jean Menezes. Websites, apps and internal systems, from the first sketch to the day they go live.",
    ctaWork: "See the work",
    ctaTalk: "Start a project",
    workTitle: "Selected work.",
    workLede: "Four projects, four stories. Each one started with a problem worth solving.",
    storyTitle: "2026, so far.",
    storyLede: "A health passport, a marketplace, an autopilot for video, and a studio. In that order.",
    doTitle: "What I build.",
    doLede: "One person from strategy to code, so nothing gets lost between the idea and the screen.",
    tiles: [
      { h: "Websites", p: "Fast, beautiful sites that explain what you do in seconds and turn visitors into conversations.", chips: ["Marketing sites", "Landing pages", "SEO and AI search", "Two or more languages"] },
      { h: "Apps", p: "Products people open every day. Designed in prototypes first, then built for iOS and the web.", chips: ["iOS (SwiftUI)", "Web apps", "Prototypes", "Design systems"] },
      { h: "Internal systems", p: "The tools that run the business behind the scenes, with automation and AI where it actually helps.", chips: ["Dashboards", "CRMs", "Automations", "AI pipelines"], dark: true },
    ],
    aboutTitle: "A new studio. Not new to the work.",
    about: [
      "Adscendo is the consultancy of <strong>Jean Menezes</strong>. Before it had a name, Jean spent years on digital projects for companies like McDonald's, AT&amp;T, Petronas, PagBank and Multilaser.",
      "Today he designs and builds his own products, like Sidemed, and takes on a few client projects at a time. You work directly with the person designing and building, from the first call to launch.",
    ],
    sigRole: "Founder. Born in Brazil, built to operate globally.",
    contactTitle: "Let's build something.",
    contactLede: "Tell me about your idea or your business. I read every message personally.",
    form: { name: "Name", email: "Email", company: "Company", optional: "optional", need: "What do you need?", needs: ["A website", "An app", "An internal system", "Not sure yet"], msg: "Tell me about it", msgPh: "What are you building, and who is it for?", send: "Send" },
  },
  pt: {
    title: "Adscendo. Jean Menezes, design e engenharia de produto",
    description: "Adscendo é a consultoria de Jean Menezes. Sites, apps e sistemas internos, desenhados e construídos do primeiro rascunho ao lançamento. Veja os trabalhos e a história de cada projeto.",
    h1: ["Ideias que saem do papel.", "Desenhadas e construídas."],
    sub: "Adscendo é a consultoria de Jean Menezes. Sites, apps e sistemas internos, do primeiro rascunho ao dia em que entram no ar.",
    ctaWork: "Ver os trabalhos",
    ctaTalk: "Começar um projeto",
    workTitle: "Trabalhos.",
    workLede: "Quatro projetos, quatro histórias. Cada um começou com um problema que valia resolver.",
    storyTitle: "2026, até aqui.",
    storyLede: "Um passaporte de saúde, um marketplace, um piloto automático para vídeos e um estúdio. Nessa ordem.",
    doTitle: "O que eu construo.",
    doLede: "Uma pessoa da estratégia ao código, para nada se perder entre a ideia e a tela.",
    tiles: [
      { h: "Sites", p: "Sites rápidos e bonitos, que explicam o que você faz em segundos e transformam visitas em conversas.", chips: ["Sites institucionais", "Landing pages", "SEO e busca por IA", "Dois ou mais idiomas"] },
      { h: "Apps", p: "Produtos que as pessoas abrem todo dia. Primeiro em protótipo, depois construídos para iOS e web.", chips: ["iOS (SwiftUI)", "Web apps", "Protótipos", "Design systems"] },
      { h: "Sistemas internos", p: "As ferramentas que fazem o negócio rodar por trás, com automação e IA onde elas ajudam de verdade.", chips: ["Painéis", "CRMs", "Automações", "Pipelines de IA"], dark: true },
    ],
    aboutTitle: "Um estúdio novo. Um trabalho antigo.",
    about: [
      "Adscendo é a consultoria de <strong>Jean Menezes</strong>. Antes de ter nome, o Jean passou anos em projetos digitais para empresas como McDonald's, AT&amp;T, Petronas, PagBank e Multilaser.",
      "Hoje ele desenha e constrói os próprios produtos, como a Sidemed, e aceita poucos projetos de clientes por vez. Você fala direto com quem desenha e constrói, da primeira conversa ao lançamento.",
    ],
    sigRole: "Fundador. Nascido no Brasil, feito para operar no mundo.",
    contactTitle: "Vamos construir algo.",
    contactLede: "Conte sobre sua ideia ou seu negócio. Eu leio cada mensagem pessoalmente.",
    form: { name: "Nome", email: "Email", company: "Empresa", optional: "opcional", need: "Do que você precisa?", needs: ["Um site", "Um app", "Um sistema interno", "Ainda não sei"], msg: "Conte mais", msgPh: "O que você está construindo, e para quem?", send: "Enviar" },
  },
};

// Milestones for the home timeline, oldest first.
export const timeline = [
  { en: ["Early 2026", "Sidemed starts as a web prototype of a health passport."], pt: ["Início de 2026", "A Sidemed começa como um protótipo web de passaporte de saúde."], slug: "sidemed" },
  { en: ["June", "The Sidemed product spec, a new landing page and a 28-screen prototype."], pt: ["Junho", "A especificação do produto Sidemed, uma nova landing page e um protótipo de 28 telas."], slug: "sidemed" },
  { en: ["July–August", "The native Sidemed iOS app, in three languages."], pt: ["Julho–agosto", "O app nativo da Sidemed para iOS, em três idiomas."], slug: "sidemed" },
  { en: ["September", "Sidemed's new website goes live, with links to both app stores."], pt: ["Setembro", "O novo site da Sidemed entra no ar, com links para as duas lojas."], slug: "sidemed" },
  { en: ["October 20", "Minha companhia: first prototype, validated with a user the same day."], pt: ["20 de outubro", "Minha companhia: primeiro protótipo, validado com uma usuária no mesmo dia."], slug: "minha-companhia" },
  { en: ["October 25", "Reels Autopilot's first version. Multi-user a day later."], pt: ["25 de outubro", "A primeira versão do Reels Autopilot. Multiusuário no dia seguinte."], slug: "reels-autopilot" },
  { en: ["October 27", "Adscendo is founded."], pt: ["27 de outubro", "A Adscendo é fundada."], slug: "adscendo" },
  { en: ["October 28", "Adscendo's first website goes live."], pt: ["28 de outubro", "O primeiro site da Adscendo entra no ar."], slug: "adscendo", now: true },
];

const img = (src, w, h) => ({ src: `/assets/work/${src}`, w, h });

export const projects = [
  {
    slug: "sidemed",
    url: "https://www.sidemed.com.br/",
    host: "sidemed.com.br",
    cover: img("sidemed/site.webp", 1440, 900),
    coverPhone: img("sidemed/site-m.webp", 780, 1688),
    links: [
      { href: "https://apps.apple.com/app/apple-store/id6762412760", en: "App Store", pt: "App Store" },
      { href: "https://play.google.com/store/apps/details?id=br.com.sidemed", en: "Google Play", pt: "Google Play" },
    ],
    en: {
      name: "Sidemed",
      kind: "Founder · Health",
      tagline: "A health passport that carries your medical history across borders.",
      summary: "Your medical history, organized, translated into your doctor's language and shared in seconds.",
      description: "How Sidemed, a health passport app, went from a problem at the border to a native iOS app and a new website in 2026.",
      facts: [["Role", "Founder"], ["When", "2026"], ["Platform", "iOS, Android, web"], ["Status", "Live"]],
      chapters: [
        {
          h: "Your history stays behind.",
          p: [
            "Every time you cross a border, your medical history stays behind. Exams forgotten in a drawer an ocean away. Allergies and conditions that only you know about. A doctor who doesn't speak your language, often in an emergency.",
            "Sidemed started from that gap: the information that matters most is exactly the one that travels worst.",
          ],
          fig: { kind: "browser", img: img("sidemed/site-problem.webp", 1440, 900), cap: "The problem, told on the Sidemed website." },
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
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.webp", 780, 1688)], cap: "sidemed.com.br on a phone." },
        },
      ],
    },
    pt: {
      name: "Sidemed",
      kind: "Fundador · Saúde",
      tagline: "Um passaporte de saúde que leva seu histórico médico através das fronteiras.",
      summary: "Seu histórico médico organizado, traduzido para o idioma do médico e compartilhado em segundos.",
      description: "Como a Sidemed, um app de passaporte de saúde, saiu de um problema na fronteira para um app nativo de iOS e um site novo em 2026.",
      facts: [["Papel", "Fundador"], ["Quando", "2026"], ["Plataforma", "iOS, Android, web"], ["Status", "No ar"]],
      chapters: [
        {
          h: "Seu histórico fica para trás.",
          p: [
            "Toda vez que você cruza uma fronteira, seu histórico médico fica para trás. Exames esquecidos numa gaveta, a um oceano de distância. Alergias e condições que só você conhece. Um médico que não fala sua língua, muitas vezes numa emergência.",
            "A Sidemed nasceu dessa lacuna: a informação que mais importa é justamente a que pior viaja.",
          ],
          fig: { kind: "browser", img: img("sidemed/site-problem.webp", 1440, 900), cap: "O problema, contado no site da Sidemed." },
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
          ],
          fig: { kind: "phones", imgs: [img("sidemed/site-m.webp", 780, 1688)], cap: "sidemed.com.br no celular." },
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
    slug: "reels-autopilot",
    url: "https://reels-autopilot-bay.vercel.app/",
    host: "reels-autopilot-bay.vercel.app",
    cover: img("reels-autopilot/board.webp", 1440, 900),
    coverPhone: img("reels-autopilot/mobile.webp", 390, 844),
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
            "Adscendo was founded on October 27, 2026, and the first thing built was not a website. It was <strong>Adscendo Prospector</strong>, an AI prospecting system: it finds businesses on the map, analyzes each one's website, writes a personal email, and follows every lead in a CRM.",
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
            "A Adscendo foi fundada em 27 de outubro de 2026, e a primeira coisa construída não foi um site. Foi o <strong>Adscendo Prospector</strong>, um sistema de prospecção com IA: ele acha empresas no mapa, analisa o site de cada uma, escreve um email pessoal e acompanha cada lead num CRM.",
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
