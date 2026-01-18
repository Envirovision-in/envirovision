import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { getBlogPost, urlFor } from '@/lib/sanity';

// Revalidate every 60 seconds to pick up new content
export const revalidate = 60;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post = null;
  try {
    post = await getBlogPost(slug);
  } catch {
    post = null;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1F2E] mb-4">Post Not Found</h1>
          <p className="text-[#718096] mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#00968e] hover:text-[#007a73] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {post.category && (
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#00968e] to-[#007a73] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-[#718096] mb-8">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-[#718096]">
            {post.author && (
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
            )}
            {post.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {formatDate(post.publishedAt)}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:text-[#1A1F2E] prose-p:text-[#718096] prose-a:text-[#00968e] prose-strong:text-[#1A1F2E]">
              <PortableText value={post.body} />
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[#718096] font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-[#F7FAFC] hover:bg-[#00968e] rounded-full flex items-center justify-center transition-colors group">
                    <Share2 className="w-5 h-5 text-[#718096] group-hover:text-white" />
                  </button>
                </div>
              </div>
              <Link
                href="/blog"
                className="text-[#00968e] hover:text-[#007a73] font-semibold transition-colors"
              >
                More Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2E] mb-4">
            Want to Learn More?
          </h2>
          <p className="text-[#718096] mb-8">
            Get in touch with us to learn how EnviroVision can help you achieve your sustainability goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
