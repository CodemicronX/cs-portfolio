import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function siteMetadata(siteUrl: string | undefined): Plugin {
  const url = siteUrl ? new URL(siteUrl) : undefined
  if (url && (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash)) {
    throw new Error('SITE_URL must be an HTTPS deployment URL without credentials, a query, or a fragment.')
  }

  if (url && !url.pathname.endsWith('/')) url.pathname += '/'
  const canonical = url?.href
  const image = url && new URL('images/social-preview.png', url).href
  const imageAlt = 'Kasymov Aidar · Computer Science Portfolio, with a blue orbital wireframe illustration.'

  return {
    name: 'site-metadata',
    apply: 'build',
    transformIndexHtml() {
      if (!canonical || !image) return []
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
        { tag: 'meta', attrs: { property: 'og:url', content: canonical } },
        { tag: 'meta', attrs: { property: 'og:image', content: image } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: imageAlt } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
        { tag: 'meta', attrs: { name: 'twitter:image:alt', content: imageAlt } },
      ]
    },
    generateBundle() {
      const sitemap = url && new URL('sitemap.xml', url).href
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${sitemap ? `Sitemap: ${sitemap}\n` : ''}`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${canonical ? `\n  <url><loc>${canonical.replaceAll('&', '&amp;')}</loc></url>\n` : ''}</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  base: '/cs-portfolio/',
  plugins: [react(), tailwindcss(), siteMetadata(process.env.SITE_URL)],
})
