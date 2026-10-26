export const instant = false;

async function getPosts() {
  const res = await fetch(`${process.env.WP_API_URL}/posts?_embed&per_page=12`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const strip = (html = "") => html.replace(/<[^>]+>/g, "").trim();

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold tracking-widest">PUSHKAR BLOG</a>
          <span className="text-sm text-gray-400">Next.js + WordPress REST API</span>
        </div>
      </header>

      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Stories & Updates</h1>
        <p className="mt-3 text-emerald-50 max-w-xl mx-auto">
          A headless blog: content is written in WordPress and served by a Next.js frontend.
        </p>
      </section>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <h2 className="text-2xl font-bold mb-6">Latest posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p: any) => {
            const img =
  p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
  p.jetpack_featured_media_url;
            const excerpt = strip(p.excerpt.rendered);
            return (
              <a
                key={p.id}
                href={`/posts/${p.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
              >
                {img && <img src={img} alt="" className="w-full h-48 object-cover" />}
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </span>
                  <h3
                    className="mt-3 text-xl font-semibold group-hover:text-emerald-600"
                    dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                  />
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {excerpt || "Click to read more."}
                  </p>
                  <span className="inline-block mt-4 text-emerald-600 font-semibold">
                    Read more →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <footer className="bg-black text-gray-400 text-sm text-center py-6">
        © 2026 Pushkar Pawar · Built with Next.js and WordPress REST API
      </footer>
    </div>
  );
}