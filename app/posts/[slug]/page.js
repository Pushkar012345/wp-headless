import { Suspense } from "react";
import { notFound } from "next/navigation";

async function PostBody({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.WP_API_URL}/posts?slug=${slug}&_embed`, {
    cache: "no-store",
  });
  const [post] = await res.json();
  if (!post) notFound();

  const img =
  p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
  p.jetpack_featured_media_url;

  return (
    <article>
      {img && <img src={img} alt="" className="w-full rounded-2xl mb-6" />}
      <h1
        className="text-4xl font-bold"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="text-sm text-gray-500 mt-2">
        {new Date(post.date).toLocaleDateString("en-IN", {
          day: "numeric", month: "long", year: "numeric",
        })}
      </p>
      <div
        className="mt-6 leading-8 text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}

export default function PostPage({ params }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <a href="/" className="font-bold tracking-widest">PUSHKAR BLOG</a>
        </div>
      </header>
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <a href="/" className="text-emerald-600 hover:underline">← All posts</a>
        <div className="mt-6">
          <Suspense fallback={<p>Loading...</p>}>
            <PostBody params={params} />
          </Suspense>
        </div>
      </main>
      <footer className="bg-black text-gray-400 text-sm text-center py-6">
        © 2026 Pushkar Pawar
      </footer>
    </div>
  );
}