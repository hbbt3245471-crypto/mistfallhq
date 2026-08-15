# Mistfall HQ

Unofficial English fan guides for **Mistfall Hunter**.

This is not affiliated with Bellring Games or Skystone Games. There is no Codes page, no ads, and no analytics IDs.

## Local development

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## How to add a page

MDX files in `content/en/` become routes automatically.

1. Add `content/en/your-slug.mdx` with frontmatter:

   ```mdx
   ---
   title: "Mistfall Hunter Your Topic"
   description: "One sentence that can stand as the search snippet."
   keyword: "mistfall hunter your topic"
   ---

   Body starts here. Do not add a second H1; the title from frontmatter is the page H1.
   ```

2. Restart or rebuild. The page is live at `/your-slug`.
3. Optional: add a header link in `site.config.ts` (`nav`) and a card in `guides` if it should appear on the homepage.

Reserved React routes (not MDX): `/`, `/about`, `/privacy`, `/contact`.

Site name, official links, nav, theme CSS variables, and SEO defaults live in `site.config.ts`.

## Deploy on Vercel (free)

1. Push this folder to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com/new). The Next.js preset is enough.
3. Deploy on the Hobby (free) plan. Build command is `npm run build`.
4. Later, attach the custom domain **mistfallhq.wiki** in the Vercel project domain settings (add the domain, then set the DNS records Vercel shows).

## Official links

- [mistfallhunter.com](https://mistfallhunter.com/)
- [Steam store](https://store.steampowered.com/app/3282300/Mistfall_Hunter/)
