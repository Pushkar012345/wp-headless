# Pushkar Blog – Headless WordPress + Next.js

A headless blog where content is written in **WordPress** and served by a **Next.js** frontend through the **WordPress REST API**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-10b981?style=for-the-badge)](https://YOUR-VERCEL-LINK.vercel.app)

> Replace `YOUR-VERCEL-LINK` with your Vercel URL.

## Features

- Blog home page with post cards (featured image, date, excerpt)
- Individual post pages at `/posts/[slug]`
- Content managed in WordPress, no code changes needed to publish
- Responsive layout built with Tailwind CSS
- Configuration through environment variables

## Tech Stack

| Area | Technology |
|------|------------|
| Frontend | Next.js 16 (App Router), React |
| Styling | Tailwind CSS |
| CMS | WordPress (REST API) |
| Hosting | Vercel |

## How It Works

1. Posts are written in the WordPress dashboard.
2. WordPress exposes them as JSON at `/wp-json/wp/v2/posts`.
3. Next.js fetches this JSON on the server and renders the pages.

## Getting Started

```bash
git clone https://github.com/Pushkar012345/wp-headless.git
cd wp-headless
npm install
```

Create a `.env.local` file:

```
WP_API_URL=https://public-api.wordpress.com/wp/v2/sites/YOUR-SITE.wordpress.com
```

For a self-hosted or local WordPress site, use `http://your-site.local/wp-json/wp/v2`.

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
app/
  page.tsx                  # Blog home: list of posts
  posts/[slug]/page.js      # Single post page
```

## Related Work

- WordPress custom plugin with a shortcode (`[diwali_banner]`) built and tested on a local WordPress site.
- A headless Shopify storefront built with Next.js and the Storefront API.

## Author

**Pushkar Pawar**
[GitHub](https://github.com/Pushkar012345) · [LinkedIn](https://www.linkedin.com/in/pushkarpawar314/)
