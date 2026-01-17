import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { getBlogPosts, urlFor } from '@/lib/sanity';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: unknown;
  publishedAt?: string;
  author?: string;
  category?: string;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getBlogPosts() || [];
  } catch {
    posts = [];
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2E] mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg md:text-xl text-[#718096]">
              Stay informed about the latest in sustainability, green technology, and environmental innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="flex flex-col justify-center">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {posts[0].title}
                  </h2>
                  {posts[0].excerpt && (
                    <p className="text-white/90 text-lg mb-6">
                      {posts[0].excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
                    {posts[0].publishedAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(posts[0].publishedAt)}
                      </span>
                    )}
                    {posts[0].author && (
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {posts[0].author}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/blog/${posts[0].slug.current}`}
                    className="inline-flex items-center gap-2 bg-white text-[#007a73] hover:bg-[#F7FAFC] px-6 py-3 rounded-full font-semibold transition-all w-fit"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-white/10">
                  {posts[0].mainImage ? (
                    <Image
                      src={urlFor(posts[0].mainImage).width(600).height(600).url()}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">📰</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2E]">
              Latest Articles
            </h2>
          </div>

          {posts.length > 1 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] relative">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(400).height(225).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">📄</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {post.category && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#F7FAFC] text-[#00968e] text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-[#1A1F2E] mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-[#718096] mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-[#718096]">
                      {post.author && (
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishedAt)}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-1 text-[#00968e] hover:text-[#007a73] font-semibold mt-4 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0]">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-2">No Posts Yet</h3>
              <p className="text-[#718096]">
                Check back soon for articles about sustainability and green technology.
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-[#718096]">
                More articles coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-[#718096] mb-8">
            Get the latest insights on sustainability, green technology, and EnviroVision updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-[#E2E8F0] focus:border-[#00968e] focus:ring-2 focus:ring-[#00968e]/20 outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
