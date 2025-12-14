import { reader } from '../../../../utils/keystatic';
import '../../../theme.scss';
import { DocumentRenderer } from '@keystatic/core/renderer';
import Menu from '@/components/Menu';
import FooterSection from '@/sections/FooterSection';
import { getTranslations } from '@/utils/i18n';

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
    return <div>Post not found</div>;
  }

  const content = await post.content();

  return (
    <>
      <Menu t={i18n} />
      <div className="max-w-screen-xl mx-auto pt-24 min-h-screen">
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
            <DocumentRenderer document={content} />
          </div>
        </article>
      </div>
      <FooterSection t={i18n} />
    </>
  );
}
