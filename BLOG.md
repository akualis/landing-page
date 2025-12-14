# Keystatic Blog Integration Walkthrough

I have successfully integrated Keystatic and MDX into your Next.js application. This allows you to manage your blog content without a database, while providing a user-friendly admin interface for your colleague.

## Features
- **No Database**: Content is stored as `.mdoc` files in `src/content/posts/en` and `src/content/posts/fr`.
- **Admin UI**: A nice dashboard at `/keystatic` to manage posts.
- **GitHub Integration**: In production, changes made in the Admin UI are automatically committed to your GitHub repository (`akualis/landing-page`).
- **MDX Support**: Write content using Markdown and React components.
- **i18n Support**:
    - English posts: `src/content/posts/en` -> `/en/blog`
    - French posts: `src/content/posts/fr` -> `/fr/blog`

## How to Use

### 1. Local Development
1.  Run the development server:
    ```bash
    npm run dev
    ```
2.  Visit the Admin UI at `http://localhost:3000/keystatic`.
3.  Select **Posts (EN)** or **Posts (FR)** to create content for the specific language.
4.  **Linking Posts**: You can link an English post to a French post using the "French Version" dropdown (and vice versa).
5.  Changes will be saved to `src/content/posts/en` or `src/content/posts/fr`.
6.  View the blog at `http://localhost:3000/en/blog` or `http://localhost:3000/fr/blog`.

> **Note on Scalability**: The current "Relationship" setup is optimized for 2 languages (EN/FR). If you plan to add more languages (e.g., Spanish, German), it is recommended to switch to a "Translation ID" approach where all versions of a post share a common text ID, rather than linking them individually.

### 2. Production (App Engine)
1.  Deploy your app as usual.
2.  Visit `https://your-domain.com/keystatic`.
3.  You will be prompted to sign in with GitHub.
4.  **Important**: You need to configure a GitHub App for Keystatic to work in production.
    - Follow the [Keystatic GitHub App Guide](https://keystatic.com/docs/github-mode#configuring-your-github-app).
    - You will need to set `KEYSTATIC_GITHUB_CLIENT_ID` and `KEYSTATIC_GITHUB_CLIENT_SECRET` environment variables in your App Engine configuration (`app.yaml` or secrets).

## Files Created
- `keystatic.config.ts`: Main configuration.
- `src/app/keystatic/*`: Admin UI routes.
- `src/app/api/keystatic/*`: API routes.
- `src/app/[lang]/blog/*`: Blog front-end pages.
- `src/utils/keystatic.ts`: Helper for reading content.
- `src/content/posts/*`: Where your blog posts live.

## Next Steps
- **Style the Blog**: I've added basic styling using `@tailwindcss/typography`. You can customize it further in `src/app/[lang]/blog/page.tsx` and `src/app/[lang]/blog/[slug]/page.tsx`.
- **Configure GitHub App**: Set up the GitHub App and environment variables for production.
