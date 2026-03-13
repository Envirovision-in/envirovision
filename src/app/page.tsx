'use client';

import Link from 'next/link';
import { ArrowRight, Building2, HomeIcon, Landmark, GraduationCap, Layers, BarChart3, Zap, TrendingDown, Package, Scan, Filter, FileCheck, Shuffle } from 'lucide-react';

const ecoFeatures = [
  {
    Icon: Layers,
    title: 'AI-Powered Auto-Sorting',
    desc: 'Classifies wet organic, dry paper, plastic, glass, metal, and e-waste with 98% hybrid accuracy — trained on Indian waste streams, not Western datasets.',
  },
  {
    Icon: BarChart3,
    title: 'BRSR-Ready ESG Dashboard',
    desc: 'Every sort is logged. Auto-generated monthly reports match the SEBI BRSR waste disclosure format exactly — audit-ready from day one.',
  },
  {
    Icon: Zap,
    title: 'Offline-First, Edge AI',
    desc: 'All classification runs on-device. Works without internet in any building. Cloud syncs for dashboard and reporting, not core function.',
  },
  {
    Icon: TrendingDown,
    title: '3× Cheaper Than Alternatives',
    desc: 'Priced for Indian budgets. No expensive imports. Manufactured in India for India\'s waste streams and operating conditions.',
  },
];

const techSpecs = [
  { label: 'AI Vision', detail: 'MobileNetV3, edge inference' },
  { label: '4-Sensor Array', detail: 'weight, moisture, NIR, metal' },
  { label: 'Auto-Compression', detail: 'halves bin pickup frequency' },
  { label: 'Offline-Capable', detail: 'works without internet' },
  { label: 'Cloud Dashboard', detail: 'real-time ESG data portal' },
  { label: 'Multilingual UI', detail: 'Hindi, English, regional' },
];

const howItWorks = [
  { step: '01', Icon: Package, title: 'Drop Any Waste', desc: 'User places waste on the intake platform. No sorting, no labels, no decision required. One bin for everything.' },
  { step: '02', Icon: Scan, title: 'AI Identifies Material', desc: 'AI camera and 4-sensor array classify waste type in under 2 seconds — wet, dry, recyclable, e-waste, or reject.' },
  { step: '03', Icon: Filter, title: 'Automatic Sorting', desc: 'Servo actuators route waste to the correct internal bin. Plastic and paper are compressed to halve pickup frequency.' },
  { step: '04', Icon: BarChart3, title: 'ESG Data Generated', desc: 'Every sort event is logged. Fill level alerts go to housekeeping. BRSR-formatted waste reports auto-generated monthly.' },
];

const whyCards = [
  {
    label: 'For Corporates',
    title: 'BRSR Compliance, Automated',
    desc: 'SEBI mandates waste data reporting for 1,000+ listed companies. EcoSarthi generates audit-ready BRSR waste reports automatically — no guesswork, no manual data entry.',
  },
  {
    label: 'For Operations',
    title: 'Measurable ROI from Day One',
    desc: 'Compression technology halves bin pickup frequency. Smart fill-level alerts mean no overflow. Sorted waste connects to verified recycler partners — turning a cost into a revenue stream.',
  },
  {
    label: 'For India',
    title: 'India-Native, Not India-Adapted',
    desc: 'Trained on Indian waste streams, not Western datasets. Priced for Indian budgets. Built to work offline in any Indian building. 3× cheaper than imported alternatives.',
  },
];

const serveCards = [
  { icon: Building2, title: 'Corporate Offices', desc: 'BRSR-mandated companies get automated waste data and audit-ready reports without changing a single habit.' },
  { icon: HomeIcon, title: 'Housing Societies', desc: 'Smart waste systems for smarter living — with sorted recyclables generating a revenue share for the community.' },
  { icon: GraduationCap, title: 'Universities & Campuses', desc: 'High-footfall environments that benefit from automated sorting, ESG reporting, and student engagement.' },
  { icon: Landmark, title: 'Government & Smart Cities', desc: 'Aligned with Swachh Bharat, Smart Cities Mission, and AMRUT 2.0. Scalable from one building to an entire city.' },
];

const pipeline = [
  { color: 'bg-[#00968e]', name: 'Solid Waste — EcoSarthi', timing: 'Now', timingColor: 'text-[#00968e]' },
  { color: 'bg-blue-400', name: 'Water Management', timing: 'Coming Soon', timingColor: 'text-blue-400' },
  { color: 'bg-white/25', name: 'Organic Waste & AgriTech', timing: 'Pipeline', timingColor: 'text-white/40' },
  { color: 'bg-white/25', name: 'Air Quality', timing: 'Pipeline', timingColor: 'text-white/40' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1A1F2E] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#007a73] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block bg-[#00968e]/20 border border-[#00968e]/40 text-[#00968e] font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                India&apos;s Environmental Infrastructure Company
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Building the<br />infrastructure<br />India&apos;s cities<br /><span className="text-[#00968e]">need now.</span>
              </h1>
              <p className="text-lg text-white/65 mb-8 max-w-xl leading-relaxed">
                EnviroVision is on a mission to make environmental responsibility automatic — starting with EcoSarthi, our AI-powered waste segregation system built for India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={() => scrollTo('product')}
                  className="inline-flex items-center justify-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
                >
                  See EcoSarthi
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition-all"
                >
                  Our Mission
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {['4 Patents Filed', 'CU Incubated', '98% Accuracy Target'].map((badge) => (
                  <span key={badge} className="bg-white/7 border border-white/15 text-white/75 text-xs font-medium px-3 py-1.5 rounded-full">{badge}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 animate-slide-in-right">
              <div className="bg-white/7 border border-white/12 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#00968e] mb-1">₹1L Cr+</div>
                <div className="text-white/55 text-sm">lost every year in recyclable material due to poor waste segregation in India</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-[#00968e] mb-1">&lt;30%</div>
                  <div className="text-white/50 text-xs">waste properly segregated at source</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-3xl font-bold text-[#00968e] mb-1">1,000+</div>
                  <div className="text-white/50 text-xs">firms legally required to report waste data (SEBI BRSR)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-5 leading-tight">
                We build technology that makes environmental responsibility automatic.
              </h2>
              <p className="text-lg text-[#718096] mb-8 leading-relaxed">
                EnviroVision is a deep-tech startup on a mission to build India&apos;s environmental infrastructure — starting with smart waste management and expanding across the full spectrum of India&apos;s environmental challenges.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "To align with India's bold sustainability and Smart Cities goals",
                  "To give companies the data they need to meet SEBI BRSR compliance requirements",
                  "To build affordable, India-native solutions — not adapted Western imports",
                  "To ensure future generations inherit a measurably cleaner India",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-[#718096]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1A1F2E] hover:bg-[#2D3748] text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#1A1F2E] rounded-2xl p-10 flex flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                {['Innovate', 'Inspire', 'Impact'].map((chip) => (
                  <span key={chip} className="bg-[#00968e]/20 border border-[#00968e]/40 text-[#00968e] text-sm font-semibold px-4 py-1.5 rounded-full">{chip}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Deep Tech', 'India-First', 'Patent-Backed'].map((chip) => (
                  <span key={chip} className="bg-white/8 border border-white/15 text-white/70 text-sm font-medium px-4 py-1.5 rounded-full">{chip}</span>
                ))}
              </div>
              <div className="border-l-4 border-[#00968e] pl-5 mt-2">
                <p className="text-white font-semibold text-lg italic leading-snug">
                  &ldquo;The root cause of India&apos;s waste crisis isn&apos;t behaviour. It&apos;s infrastructure. We fix the infrastructure.&rdquo;
                </p>
                <p className="text-white/40 text-xs mt-2">— EnviroVision founding principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EcoSarthi Product */}
      <section id="product" className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-8">
            Our Flagship Product
          </span>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold text-[#00968e] leading-none mb-1">EcoSarthi</h2>
              <p className="text-sm text-[#718096] italic mb-5">Smart AI Waste Segregation — Built for India</p>
              <p className="text-[#718096] text-base leading-relaxed mb-8">
                EcoSarthi is India&apos;s first AI-powered smart waste bin that automatically sorts waste at the point of disposal — so your office, campus, or housing society gets verified ESG data without anyone lifting a finger. No behaviour change required. The machine does the work.
              </p>
              <ul className="space-y-4 mb-8">
                {ecoFeatures.map((f) => (
                  <li key={f.title} className="flex items-start gap-4 p-4 bg-white border border-[#E2E8F0] rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-lg flex items-center justify-center flex-shrink-0">
                      <f.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[#1A1F2E] mb-1">{f.title}</strong>
                      <span className="text-xs text-[#718096] leading-relaxed">{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                Request a Pilot
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#1A1F2E] rounded-2xl p-8 sticky top-24">
              {/* Accuracy circle */}
              <div className="text-center mb-8">
                <div className="w-28 h-28 rounded-full border-4 border-[#00968e] mx-auto mb-4 flex items-center justify-center shadow-[0_0_32px_rgba(0,150,142,0.3)]">
                  <div>
                    <div className="text-2xl font-bold text-[#00968e] leading-none">98%</div>
                    <div className="text-[8px] text-[#00968e] tracking-widest">TARGET</div>
                  </div>
                </div>
                <div className="text-white/50 text-xs">Hybrid AI + Sensor Accuracy</div>
              </div>
              <ul className="space-y-3 mb-6">
                {techSpecs.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-sm text-white/60 pb-3 border-b border-white/7 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00968e] flex-shrink-0"></span>
                    <strong className="text-white/90 font-medium">{s.label}</strong>
                    <span>—</span>
                    <span>{s.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-3">Designed For</div>
                <div className="flex flex-wrap gap-2">
                  {['Corporate Offices', 'Universities', 'Housing Societies', 'Smart Cities'].map((tag) => (
                    <span key={tag} className="bg-[#00968e]/15 border border-[#00968e]/30 text-[#00968e] text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Where AI Meets Ecology
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              From a single item dropped in the bin to a verified ESG report — EcoSarthi handles the entire pipeline automatically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((card) => (
              <div key={card.step} className="relative bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl p-6">
                <span className="absolute top-4 right-4 text-xs font-bold text-[#00968e] tracking-widest opacity-60">{card.step}</span>
                <div className="w-12 h-12 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-xl flex items-center justify-center mb-4">
                  <card.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#1A1F2E] mb-2">{card.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EcoSarthi */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Why EcoSarthi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Built different. Built for India.
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Most smart bins are imported and built for Western conditions. EcoSarthi is India-native from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white border border-[#E2E8F0] rounded-xl p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00968e] mb-3">{card.label}</div>
                <h3 className="text-lg font-bold text-[#1A1F2E] mb-3">{card.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Solutions designed for the communities shaping India&apos;s future.
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              EcoSarthi is built for diverse sectors — wherever waste is generated and ESG data is needed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serveCards.map((card) => (
              <div key={card.title} className="bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] flex items-center justify-center">
                  <card.icon className="w-14 h-14 text-white" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1A1F2E] mb-2">{card.title}</h3>
                  <p className="text-[#718096] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1F2E] rounded-2xl p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#00968e] font-semibold text-xs uppercase tracking-widest mb-4">
                  Beyond EcoSarthi
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  One platform.<br />India&apos;s full environmental stack.
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  EcoSarthi is the first of several products we are building to address India&apos;s environmental challenges. Water, air, organic waste — the same approach: patent-backed IP, built for India, affordable at scale. More details coming soon.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {pipeline.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.color}`}></span>
                    <span className="text-white font-medium text-sm flex-1">{item.name}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.timingColor}`}>{item.timing}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-[#1A1F2E]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the <span className="text-[#00968e]">Green Revolution.</span>
          </h2>
          <p className="text-lg text-[#718096] mb-10 max-w-lg mx-auto">
            We are here to help. Leave us a message and we&apos;ll get back to you with details as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
