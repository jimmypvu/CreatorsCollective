import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

const blogPosts = [
  {
    title: "The 80/20 Rule of Content Success (And Why Most Creators Have It Backwards)",
    excerpt: "Discover how focusing on the right 20% can skyrocket your content creation success.",
    date: "2025-01-20",
    slug: "80-20-rule-content-success",
    author: "Sarah Chen",
  },
  {
    title: "The Magic of the 1% Fan: Why Your Most Engaged Followers Are Your Secret Weapon",
    excerpt: "Learn how to leverage your most engaged followers for exponential growth and success.",
    date: "2025-01-20",
    slug: "magic-of-1-percent-fan",
    author: "Sarah Chen",
  },
  {
    title: "5 Tips for Growing Your Online Presence",
    excerpt: "Learn how to expand your reach and engage with your audience effectively.",
    date: "2025-01-15",
    slug: "5-tips-for-growing-your-online-presence",
  },
  {
    title: "Maximizing Your Earnings as a Content Creator",
    excerpt: "Discover strategies to increase your revenue streams and monetize your content.",
    date: "2025-01-10",
    slug: "maximizing-your-earnings-as-a-content-creator",
  },
  {
    title: "The Power of Collaboration in Content Creation",
    excerpt: "Explore how partnering with other creators can boost your visibility and creativity.",
    date: "2025-01-05",
    slug: "the-power-of-collaboration-in-content-creation",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-12 pb-4 gradient-header">
              Our Blog
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="group relative flex flex-col space-y-2">
                  <h2 className="text-2xl font-bold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline" title={`Read ${post.title}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {post.author && <span className="font-semibold text-pink-500 text-sm opacity-80">{post.author}</span>}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="absolute inset-0 aria-hidden"
                    title={`Read ${post.title}`}
                  >
                    <span className="sr-only">Read more</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

