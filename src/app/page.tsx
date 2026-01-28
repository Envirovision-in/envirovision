import Link from 'next/link';
import { ArrowRight, Recycle, Leaf, Droplets, Shield, Building2, Factory, Home as HomeIcon, Landmark } from 'lucide-react';

const solutions = [
  {
    title: 'Automatic Waste Segregation System',
    tagline: 'Smart Bins, Smarter Cities.',
    description: 'AI-powered waste sorting for metallic, non-metallic, glass, and plastic materials. Designed for urban spaces, industries, and housing societies.',
    icon: Recycle,
  },
  {
    title: 'Manure Production from Waste',
    tagline: 'Turn Trash into Treasure.',
    description: 'Transform organic waste into nutrient-rich compost. Ideal for agricultural and urban farming use.',
    icon: Leaf,
  },
  {
    title: 'Anti-Pollution Face Shield',
    tagline: 'Breathe Better, Live Better.',
    description: 'Advanced filtration technology to block pollutants. An easy to wear alternative for urban dwellers and industrial workers.',
    icon: Shield,
  },
  {
    title: 'Wastewater Recycling System',
    tagline: 'Every Drop Counts.',
    description: 'Reclaim, recycle, and reuse wastewater. Tailored for residential, commercial, and industrial applications.',
    icon: Droplets,
  },
];

const features = [
  {
    title: 'AI-based Waste Recognition',
    description: 'Our system uses artificial intelligence-based recognition to identify waste with 95% segregation accuracy.',
    icon: '🤖',
  },
  {
    title: 'Automatic Waste Sorting',
    description: 'The recognized waste is transported to the right fraction. Everything happens 100% automatically.',
    icon: '⚡',
  },
  {
    title: 'Compression Technology',
    description: 'Plastic and paper get compressed to decrease the volume and lower the frequency of bin emptying.',
    icon: '📦',
  },
  {
    title: 'Fill Level Monitoring',
    description: 'Fill level sensors check if the container needs emptying. You receive notifications when containers are full.',
    icon: '📊',
  },
];

const audiences = [
  {
    title: 'Urban Communities',
    description: 'Turning cities into clean, modern ecosystems.',
    icon: Building2,
  },
  {
    title: 'Housing Societies',
    description: 'Smart waste systems for smarter living.',
    icon: HomeIcon,
  },
  {
    title: 'Industries',
    description: 'Eco-friendly solutions for a sustainable bottom line.',
    icon: Factory,
  },
  {
    title: 'Government & Smart Cities',
    description: "Partnering to achieve India's environmental goals.",
    icon: Landmark,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-[#00968e] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#007a73] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                Smart Sustainability Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2E] leading-tight mb-6">
                Breathing New Life Into the{' '}
                <span className="text-[#00968e]">Environment</span>
              </h1>
              <p className="text-lg text-[#718096] mb-8 max-w-xl">
                At EnviroVision, we turn everyday waste into valuable resources, promoting cleaner cities and sustainable living. Let&apos;s turn trash into treasure—because every small change leads to a big impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7FAFC] text-[#2D3748] px-8 py-4 rounded-full font-semibold border-2 border-[#E2E8F0] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2E8F0]">
                <div className="aspect-square bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Recycle className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Smart Waste Management</p>
                    <p className="text-sm opacity-90 mt-2">AI-Powered Solutions</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#00968e] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  95% Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#00968e] to-[#007a73] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#00968e] to-[#007a73] flex items-center justify-center shadow-2xl">
                    <Leaf className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-[#718096] mb-6">
                EnviroVision is more than a company; it&apos;s a call to action. As India&apos;s cities expand, so do its environmental challenges. We are a new-age startup on a mission to tackle pollution, waste, and water management with cutting-edge, cost-effective solutions that empower communities, industries, and individuals.
              </p>
              <p className="text-xl font-semibold text-[#1A1F2E] mb-8">
                Our mantra? <span className="text-[#00968e]">Innovate, Inspire, Impact.</span>
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-[#1A1F2E]">Why We Do It:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#718096]">To align with India&apos;s bold sustainability goals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#718096]">To create scalable solutions for growing cities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#007a73] to-[#005f5a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#718096]">To ensure future generations inherit a thriving planet.</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1A1F2E] hover:bg-[#2D3748] text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Smart Solutions for a Sustainable India
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Discover our innovative range of products designed to protect and restore our environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#00968e] mb-2">{solution.title}</h3>
                  <p className="text-[#1A1F2E] font-medium mb-3">{solution.tagline}</p>
                  <p className="text-[#718096]">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Where AI Meets Ecology
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Our flagship products use state-of-the-art technology and artificial intelligence to make waste management more efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1F2E] mb-2">{feature.title}</h3>
                <p className="text-[#718096] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EnviroVision Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#00968e] to-[#007a73] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <Recycle className="w-32 h-32 text-white/50" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why EnviroVision?
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold">For Cities:</span>
                    <span className="ml-2 opacity-90">Cleaner streets, better waste management.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold">For Industries:</span>
                    <span className="ml-2 opacity-90">Smart, sustainable systems for operational efficiency.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold">For You:</span>
                    <span className="ml-2 opacity-90">Affordable solutions for a healthier, greener life.</span>
                  </div>
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#007a73] hover:bg-[#F7FAFC] px-8 py-4 rounded-full font-semibold transition-all mt-10"
              >
                Join The Green Revolution
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Our solutions are designed to serve diverse communities and sectors across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group relative bg-[#F7FAFC] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] flex items-center justify-center">
                  <audience.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6 bg-[#F7FAFC]">
                  <h3 className="font-bold text-[#1A1F2E] mb-2">{audience.title}</h3>
                  <p className="text-[#718096] text-sm">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#1A1F2E]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-lg text-[#718096] mb-10">
            We are here to help you. Leave us a message and we&apos;ll get back to you with the details as soon as possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
