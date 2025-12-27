import { config, fields, collection } from '@keystatic/core';
import { block, wrapper, inline } from '@keystatic/core/content-components';

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
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/posts/content',
              publicPath: '/images/posts/content',
            },
          },
          components: {
            SocialBeaver: block({
              label: 'Social Beaver',
              schema: {},
            }),
            SocialLinks: block({
              label: 'Social Links',
              schema: {},
            }),
            PostImage: block({
              label: 'Post Image',
              schema: {
                src: fields.text({ label: 'Image URL' }),
                alt: fields.text({ label: 'Alt text' }),
                width: fields.text({ label: 'Width (e.g. 100%)', defaultValue: '100%' }),
                href: fields.text({ label: 'Link URL (optional)' }),
                center: fields.checkbox({ label: 'Center image', defaultValue: true }),
              },
            }),
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
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/posts/content',
              publicPath: '/images/posts/content',
            },
          },
          components: {
            SocialBeaver: block({
              label: 'Social Beaver',
              schema: {},
            }),
            SocialLinks: block({
              label: 'Social Links',
              schema: {},
            }),
            PostImage: block({
              label: 'Post Image',
              schema: {
                src: fields.text({ label: 'Image URL' }),
                alt: fields.text({ label: 'Alt text' }),
                width: fields.text({ label: 'Width (e.g. 100%)', defaultValue: '100%' }),
                href: fields.text({ label: 'Link URL (optional)' }),
                center: fields.checkbox({ label: 'Center image', defaultValue: true }),
              },
            }),
          },
        })
      },
    }),
  },
});
