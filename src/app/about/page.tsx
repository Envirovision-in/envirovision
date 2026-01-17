import Link from 'next/link';
import { ArrowRight, Cpu, Scaling, Wallet, Users, Lightbulb, Target, Sparkles } from 'lucide-react';

const differentiators = [
  {
    title: 'Tech-Driven Impact',
    description: 'AI, IoT, and data analytics powering every product.',
    icon: Cpu,
  },
  {
    title: 'Scalability',
    description: 'Solutions for cities of all sizes, from metros to small towns.',
    icon: Scaling,
  },
  {
    title: 'Affordability',
    description: "Sustainable living that doesn't break the bank.",
    icon: Wallet,
  },
  {
    title: 'Community-Centric',
    description: 'Innovations designed for people, by people.',
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#007a73] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2E] mb-6">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl text-[#718096] leading-relaxed">
              To revolutionize sustainability in India by harnessing cutting-edge technology to combat pollution, transform waste, and protect natural resources—creating a cleaner, greener, and healthier future for generations to come. At EnviroVision, we aspire to make eco-friendly living accessible, impactful, and a way of life for every individual and community.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A1F2E] hover:bg-[#2D3748] text-white px-8 py-4 rounded-full font-semibold transition-all mt-10"
            >
              Join Our Mission
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-[#1A1F2E] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 mx-auto mb-4 text-white" />
                  <p className="text-2xl font-bold">Working Together</p>
                  <p className="text-white/80 mt-2">For a Sustainable Future</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Green Technology for a Growing Nation
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                At EnviroVision, we believe sustainability shouldn&apos;t be expensive or complex. That&apos;s why we create smart, accessible solutions that fit India&apos;s needs—helping cities grow cleaner, industries go greener, and people live better.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Lightbulb className="w-10 h-10 mx-auto mb-2 text-[#00968e]" />
                  <p className="font-semibold">Innovate</p>
                </div>
                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-[#00968e]" />
                  <p className="font-semibold">Inspire</p>
                </div>
                <div className="text-center">
                  <Target className="w-10 h-10 mx-auto mb-2 text-[#007a73]" />
                  <p className="font-semibold">Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-8">
                What Sets Us Apart?
              </h2>

              <div className="space-y-6">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1F2E] mb-1">{item.title}</h3>
                      <p className="text-[#718096]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1A1F2E] hover:bg-[#2D3748] text-white px-6 py-3 rounded-full font-semibold transition-all mt-10"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F7FAFC] to-[#E2E8F0]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-full flex items-center justify-center">
                      <Cpu className="w-20 h-20 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#007a73]/30 rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00968e]/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Every decision we make is guided by our core values and commitment to a sustainable future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-3">Environmental Stewardship</h3>
              <p className="text-[#718096]">
                We are committed to protecting and restoring our planet&apos;s natural resources for future generations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-3">Innovation First</h3>
              <p className="text-[#718096]">
                We leverage cutting-edge technology to create solutions that make sustainability accessible to all.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007a73] to-[#005f5a] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-3">Community Impact</h3>
              <p className="text-[#718096]">
                We believe in empowering communities to take charge of their environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#00968e] to-[#007a73] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Join us in our mission to create a cleaner, greener India. Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#007a73] hover:bg-[#F7FAFC] px-8 py-4 rounded-full font-semibold transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
