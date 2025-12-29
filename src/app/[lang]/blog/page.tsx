import Link from 'next/link';
import '../../theme.scss';
import { reader } from '../../../utils/keystatic';
import Menu from '@/components/Menu';
import FooterSection from '@/sections/FooterSection';
import Banner from '@/components/Banner';
import { InformSection } from '@/sections/InformSection';
import { getTranslations } from '@/utils/i18n';

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');
  
  const posts = lang === 'fr' 
    ? await reader.collections.postsFr.all()
    : await reader.collections.postsEn.all();

    // Add this sorting logic:
    const sortedPosts = [...posts].sort((a, b) => {
      const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0;
      const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0;
      return dateB - dateA; // Newest first
    });

  // Customize Banner props for Blog
  const blogBannerProps = {
    ...i18n.hero,
    title: i18n.blog?.title,
    subtitle: i18n.blog?.subtitle,
  };

  return (
    <>
      <Menu t={i18n} sticky={true} />
      <Banner t={blogBannerProps} />
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="block group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.entry.coverImage && (
                    <div className="aspect-video relative bg-gray-100">
                     <img
                        src={post.entry.coverImage}
                        alt={post.entry.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                )}
                <div className="p-4">
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600">
                    {post.entry.title}
                  </h4>
                  {post.entry.publishedDate && (
                    <p className="text-gray-500 text-sm">
                      {new Date(post.entry.publishedDate).toLocaleDateString(lang, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <InformSection t={i18n.inform} />
      <FooterSection t={i18n} />
    </>
  );
}
