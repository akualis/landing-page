import { reader } from "@/utils/keystatic";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://akualis.com";
  const buildDate = new Date().toISOString();
  const locales = ["en", "fr"];
  const defaultLocale = "en";

  const pagePaths = [
    "",
    "/blog",
    "/app",
    // "/concept",
    // "/constat",
    // "/team",
    // "/testimonials",
    // "/inform",
  ];

  const makeHref = (locale: string, path: string) =>
    `${baseUrl}/${locale}${path === "" ? "" : path}`;

  const renderAlternates = (path: string) => {
    const alternates = locales.map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${makeHref(loc, path)}" />`
    );
    alternates.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${makeHref(defaultLocale, path)}" />`
    );
    return alternates.join("\n");
  };

  const staticUrls = locales
    .flatMap((locale) =>
      pagePaths.map((path) => {
        const loc = makeHref(locale, path);
        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${buildDate}</lastmod>
${renderAlternates(path)}
  </url>`;
      })
    )
    .join("\n");

  // Fetch posts
  const postsEn = await reader.collections.postsEn.all();
  const postsFr = await reader.collections.postsFr.all();

  const getPostUrl = (locale: string, slug: string) => `${baseUrl}/${locale}/blog/${slug}`;

  const blogUrlsEn = postsEn.map((post) => {
    const loc = getPostUrl("en", post.slug);
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="en" href="${loc}" />`
    ];
    
    if (post.entry.relatedFr) {
      alternates.push(`    <xhtml:link rel="alternate" hreflang="fr" href="${getPostUrl("fr", post.entry.relatedFr)}" />`);
    }
    
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`);

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${post.entry.publishedDate ? new Date(post.entry.publishedDate).toISOString() : buildDate}</lastmod>
${alternates.join("\n")}
  </url>`;
  });

  const blogUrlsFr = postsFr.map((post) => {
    const loc = getPostUrl("fr", post.slug);
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="fr" href="${loc}" />`
    ];
    
    if (post.entry.relatedEn) {
      alternates.push(`    <xhtml:link rel="alternate" hreflang="en" href="${getPostUrl("en", post.entry.relatedEn)}" />`);
    }
    
    const xDefault = post.entry.relatedEn ? getPostUrl("en", post.entry.relatedEn) : loc;
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />`);

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${post.entry.publishedDate ? new Date(post.entry.publishedDate).toISOString() : buildDate}</lastmod>
${alternates.join("\n")}
  </url>`;
  });

  const dynamicUrls = [...blogUrlsEn, ...blogUrlsFr].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${dynamicUrls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

export const runtime = "nodejs"; // createReader requires nodejs runtime usually, or at least fs access if it's local

