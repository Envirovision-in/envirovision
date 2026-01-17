import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

// Sample blog post data (this would come from Sanity CMS in production)
const samplePosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  readTime: string;
  category: string;
}> = {
  'future-of-waste-management-india': {
    title: 'The Future of Waste Management in India',
    excerpt: 'Exploring how AI and IoT technologies are revolutionizing waste management practices across Indian cities.',
    content: `
India generates over 62 million tonnes of waste annually, with urban areas contributing significantly to this figure. As our cities grow, so does the challenge of managing this waste effectively. However, technology is emerging as a powerful ally in this battle.

## The Role of AI in Waste Segregation

Artificial Intelligence is transforming how we approach waste segregation. Smart bins equipped with AI can automatically identify and sort different types of waste - plastics, metals, glass, and organic materials. This not only improves recycling rates but also reduces the burden on waste management workers.

At EnviroVision, our Automatic Waste Segregation System (AWSS) uses advanced AI algorithms to achieve 95% accuracy in waste identification. This technology is designed specifically for Indian conditions, taking into account the diverse nature of waste generated in our cities.

## IoT and Smart Waste Management

Internet of Things (IoT) sensors are enabling real-time monitoring of waste levels in bins across cities. This data helps optimize collection routes, reducing fuel consumption and operational costs. City planners can now make data-driven decisions about waste management infrastructure.

## The Path Forward

The future of waste management in India lies in embracing these technologies while ensuring they remain affordable and accessible. With the right approach, we can transform our cities into cleaner, more sustainable spaces for future generations.
    `,
    publishedAt: '2024-01-15',
    author: 'EnviroVision Team',
    readTime: '5 min read',
    category: 'Technology',
  },
  'smart-cities-sustainable-living': {
    title: 'Smart Cities and Sustainable Living',
    excerpt: 'How smart city initiatives are creating more sustainable and livable urban environments in India.',
    content: `
India's Smart Cities Mission, launched in 2015, aims to develop 100 smart cities that provide core infrastructure, clean and sustainable environment, and quality of life to citizens. At the heart of this initiative is the concept of sustainable living.

## What Makes a City Smart and Sustainable?

A truly smart city integrates technology with sustainability. This means efficient waste management, clean energy, water conservation, and green spaces. It's about creating urban environments where technology enhances quality of life without compromising the environment.

## Key Elements of Sustainable Smart Cities

1. **Efficient Resource Management**: Smart meters and sensors help optimize water and energy usage
2. **Green Transportation**: Electric vehicles, cycling infrastructure, and efficient public transport
3. **Waste-to-Resource**: Converting waste into valuable resources like compost and energy
4. **Green Buildings**: Structures designed for minimal environmental impact

## The Role of Citizens

Smart cities are only as smart as their citizens. Active participation in waste segregation, water conservation, and sustainable practices is essential for the success of these initiatives.

At EnviroVision, we're proud to be contributing to India's smart city vision through our innovative waste management solutions.
    `,
    publishedAt: '2024-01-10',
    author: 'EnviroVision Team',
    readTime: '4 min read',
    category: 'Sustainability',
  },
};

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
  const post = samplePosts[slug];

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
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#B8FF00] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#00968e] hover:text-[#007a73] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#00968e] to-[#007a73] text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-[#718096] mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[#718096]">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-[#1A1F2E] mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.trim());
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 text-[#718096]">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[\d]+\.\s\*\*|\*\*:\s|^-\s/g, '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-[#718096] leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[#718096] font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-[#F7FAFC] hover:bg-gradient-to-r hover:from-[#B8FF00] hover:to-[#00968e] rounded-full flex items-center justify-center transition-colors group">
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
