export async function GET() {
  const baseUrl = "https://akualis.com";
  const buildDate = new Date().toISOString();
  const locales = ["en", "fr"];
  const defaultLocale = "en";

  const pagePaths = [
    "",
    // "/concept",
    // "/constat",
    // "/team",
    // "/testimonials",
    // "/inform",
    // "/blog",
  ];

  const makeHref = (locale: string, path: string) =>
    `${baseUrl}/${locale}${path === "" ? "" : path}`;

  const renderAlternates = (path: string) =>
    locales
      .map(
        (loc) =>
          `<xhtml:link rel="alternate" hreflang="${loc}" href="${makeHref(
            loc,
            path
          )}" />`
      )
      .join("\n        ") +
    `\n        <xhtml:link rel="alternate" hreflang="x-default" href="${makeHref(
      defaultLocale,
      path
    )}" />`;

  const urls = locales
    .flatMap((locale) =>
      pagePaths.map((path) => {
        const loc = makeHref(locale, path);
        return `<url>
    <loc>${loc}</loc>
    <lastmod>${buildDate}</lastmod>
    ${renderAlternates(path)}
  </url>`;
      })
    )
    .join("\n  ");

  // add a single non-localized entry for /app (redirect route) — no hreflang alternates
  const appEntry = `<url>
    <loc>${baseUrl}/app</loc>
    <lastmod>${buildDate}</lastmod>
  </url>`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls}
  ${appEntry}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

export const runtime = "edge";
