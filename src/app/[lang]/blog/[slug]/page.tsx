import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reader } from '../../../../utils/keystatic';
import '../../../theme.scss';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Menu from '@/components/Menu';
import FooterSection from '@/sections/FooterSection';
import { getTranslations } from '@/utils/i18n';
import SocialBeaver from '@/components/blog/SocialBeaver';
import SocialLinks from '@/components/blog/SocialLinks';

export async function generateStaticParams() {
  const postsEn = await reader.collections.postsEn.list();
  const postsFr = await reader.collections.postsFr.list();
  
  return [
    ...postsEn.map((slug) => ({ slug, lang: 'en' })),
    ...postsFr.map((slug) => ({ slug, lang: 'fr' })),
  ];
}

export default async function PostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const i18n = await getTranslations(lang as 'en' | 'fr');
  
  const post = lang === 'fr'
    ? await reader.collections.postsFr.read(slug)
    : await reader.collections.postsEn.read(slug);

  if (!post) {
    notFound();
  }

  const content = await post.content();

  // Create links for the language switcher
  const relLangs: Record<string, string> = {};
  if (lang === 'fr') {
    const postFr = post as any;
    if (postFr.relatedEn) relLangs.en = `/en/blog/${postFr.relatedEn}`;
  } else {
    const postEn = post as any;
    if (postEn.relatedFr) relLangs.fr = `/fr/blog/${postEn.relatedFr}`;
  }

  return (
    <>
      <Menu t={i18n} relLangs={relLangs} />
      
      <div className="max-w-screen-xl mx-auto pt-24 min-h-screen">
        <nav className="container mx-auto px-4 py-4 max-w-3xl text-sm text-gray-500">
          <Link href={`/${lang}`} className="hover:text-accent">
            {i18n.navbar?.home || 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/blog`} className="hover:text-accent">
            {i18n.blog?.title || 'Blog'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{post.title}</span>
        </nav>

        <article className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.publishedDate && (
            <p className="text-gray-500 mb-8">
              {new Date(post.publishedDate).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          {post.coverImage && (
            <div className="mb-8 rounded-lg overflow-hidden">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-auto"
                />
            </div>
          )}
          <div className="prose lg:prose-xl">
            <MDXRemote 
              source={content} 
              components={{ 
                SocialBeaver: () => <SocialBeaver social={i18n?.footer?.socialBeaver} />,
                SocialLinks: () => <SocialLinks social={i18n?.footer?.social} />,
                PostImage: ({ src, alt, width, href, center }: any) => {
                  const img = (
                    <img
                      src={src}
                      alt={alt}
                      style={{ 
                        width: width || '100%', 
                        height: 'auto',
                        display: center ? 'block' : 'inline-block',
                        marginLeft: center ? 'auto' : '0',
                        marginRight: center ? 'auto' : '0'
                      }}
                    />
                  );
                  if (href) {
                    return <a href={href} target="_blank" rel="noopener noreferrer">{img}</a>;
                  }
                  return img;
                }
              }}
            />
          </div>
        </article>
      </div>
      <FooterSection t={i18n} />
    </>
  );
}
