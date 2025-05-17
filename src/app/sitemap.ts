import { MetadataRoute } from 'next';

// A better approach for production environments like App Engine
// where filesystem operations might be restricted
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for the website
  const baseUrl = 'https://akualis.com';

  // Use a deployment or build timestamp instead of filesystem
  // This could be updated during the build process
  const buildDate = new Date().toISOString();

  // For production, consider using a content version or Git commit hash
  // that updates only when content changes

  // Define the static routes with manually managed dates
  // In a real production scenario, these could be stored in a CMS or config file
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate, // In production, use a fixed date that updates when content changes
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    // Add more static routes as needed
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: buildDate, // Same approach here
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.8,
    // },
  ];

  // Here you would dynamically fetch blog posts
  // For MDX blog posts, store metadata including publish/update dates in frontmatter
  // const blogPosts = getAllBlogPosts();
  // const blogRoutes = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.lastModified || post.publishDate || buildDate,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  // Combine all routes
  // return [...staticRoutes, ...blogRoutes];

  // For now, return just the static routes
  return staticRoutes;
}
