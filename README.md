# Adscendo site

Site estático da Adscendo: uma página, portfólio, oferta e contato. Sem build, sem framework.

Separado de `adscendo-prospector` em 2026-10-29.

## Rodar local

```bash
python3 -m http.server 4173
```

Abrir http://localhost:4173.

## Estrutura

```
index.html     Página inteira (HTML, CSS e JS inline)
favicon.svg
work/          Screenshots dos projetos do portfólio (.webp)
vercel.json    Cache dos screenshots e headers básicos
PRODUCT.md     Público e objetivo do site
DESIGN.md      Sistema visual
```

## Configuração

No fim de `index.html`, objeto `CONFIG`:

- `formEndpoint`: endpoint Formspree (ou similar). Vazio = formulário abre o app de email do visitante.
- `whatsapp`: número só com dígitos, formato internacional. Vazio = botão some.
- `email`: destino do formulário quando não há endpoint.

## Deploy (Vercel)

Projeto estático, sem build. Na Vercel: Framework Preset "Other", Build Command vazio, Output Directory `.`.

Via CLI:

```bash
npx vercel --prod
```
