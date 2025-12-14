import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? { kind: 'github', repo: 'akualis/landing-page' }
      : { kind: 'local' },
  collections: {
    postsEn: collection({
      label: '🇬🇧 Posts',
      slugField: 'title',
      path: 'src/content/posts/en/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        relatedFr: fields.relationship({
          label: 'French Version',
          collection: 'postsFr',
        }),
        coverImage: fields.image({
            label: 'Cover Image',
            directory: 'public/images/posts',
            publicPath: '/images/posts',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts/content',
            publicPath: '/images/posts/content',
          },
        })
      },
    }),
    postsFr: collection({
      label: '🇫🇷 Posts',
      slugField: 'title',
      path: 'src/content/posts/fr/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        relatedEn: fields.relationship({
          label: 'English Version',
          collection: 'postsEn',
        }),
        coverImage: fields.image({
            label: 'Cover Image',
            directory: 'public/images/posts',
            publicPath: '/images/posts',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts/content',
            publicPath: '/images/posts/content',
          },
        }),
      },
    }),
  },
});
