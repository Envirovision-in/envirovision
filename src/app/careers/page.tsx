import Link from 'next/link';
import { ArrowRight, Briefcase, MapPin, Clock, ChevronDown, Rocket, FileText, ShieldCheck, BarChart3, Award, Sprout, Lock, Globe } from 'lucide-react';

// ─── Job listings ────────────────────────────────────────────────────────────
// Add, edit, or remove jobs here. No CMS required.
// Each section can have a string (paragraph) or string[] (bullet list) as content.

interface JobSection {
  heading: string;
  content: string | string[];
}

interface Job {
  id: string;
  title: string;
  subtitle: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  applySubject: string;
  isCoFounder?: boolean;
  sections: JobSection[];
}

const JOBS: Job[] = [
  {
    id: 'chief-story-architect',
    title: 'Chief Story Architect & Movement Builder',
    subtitle: 'Build the brand. Tell the story. Start the movement.',
    department: 'Brand & Marketing',
    location: 'Remote / Chandigarh',
    type: 'Full-time, Equity-based',
    tags: ['Brand Strategy', 'Content & Narrative', 'Marketing', 'B2B + B2C'],
    applySubject: 'Chief Story Architect Application',
    isCoFounder: true,
    sections: [
      {
        heading: 'The Problem to Solve',
        content:
          'EnviroVision has a world-class mission, 4 patents, and a product that works. What we don\'t have is a brand — no narrative framework, no content engine, no campaign architecture, no GTM story that works across investors, enterprise buyers, grant bodies, and talent. This isn\'t a contractor role executing a brief someone else wrote. You will write the brief — and then bring it to life.',
      },
      {
        heading: 'What You\'ll Build',
        content: [
          'Brand Architecture — Visual identity, tone of voice, messaging hierarchy for the company, EcoSarthi, and each audience segment',
          'Brand Narrative — The EnviroVision story, told differently for investors, enterprises, grant bodies, and talent',
          'Website & Digital Presence — Own envirovision.in as a brand experience, not just an information page',
          'Content Engine — LinkedIn, Instagram, and newsletter with a consistent weekly cadence',
          'PR & Thought Leadership — Position founders as India\'s defining cleantech voices',
          'GTM Collateral — Sales decks, one-pagers, pilot proposal kits, and investor presentations',
        ],
      },
      {
        heading: 'You\'re the One If…',
        content: [
          'You\'ve built a brand from scratch — not just managed one',
          'You think in movements, not campaigns',
          'You can write one line that makes someone stop scrolling',
          'You understand B2B sustainability AND mass consumer awareness',
          'You want to be the person who made EnviroVision famous',
        ],
      },
      {
        heading: 'Our Four Brand Pillars',
        content: [
          'Infrastructure, not awareness — We fix systems, not mindsets',
          'Dignity, not guilt — We empower, we don\'t shame',
          'Proof, not promise — Every claim is backed by data',
          'Movement, not product — We are building something people want to belong to',
        ],
      },
      {
        heading: 'Why Now',
        content:
          'EnviroVision could be India\'s defining green-tech brand. We have the mission and the IP. The brand, the story, and the movement are entirely open. Whoever builds this from scratch will create something that outlasts any campaign and defines an entire category.',
      },
    ],
  },
  {
    id: 'market-cartographer',
    title: 'India\'s First Environmental Market Cartographer',
    subtitle: 'Map the market. Prove the beachhead. Define how we win.',
    department: 'Market Research & Strategy',
    location: 'Remote / India',
    type: 'Full-time, Equity-based',
    tags: ['Market Research', 'Customer Discovery', 'ICP & GTM', 'B2B India'],
    applySubject: 'Market Cartographer Application',
    isCoFounder: true,
    sections: [
      {
        heading: 'The Problem to Solve',
        content:
          'We believe corporate offices are our beachhead — SEBI BRSR mandated, predictable waste streams, existing sustainability budget, fast decision cycles. We have a strong hypothesis. We don\'t yet have the data to prove it. Before we spend a rupee on GTM execution, we need the ICP locked — validated through real customer interviews, primary research, and competitive analysis. When we raise our Series A, someone will ask us "how did you know?" This role is that answer.',
      },
      {
        heading: 'What You\'ll Deliver',
        content: [
          '50+ Customer Interviews — Structured discovery across corporate sustainability leads, facility managers, and ESG officers',
          'ICP Finalisation Report — Data-backed: who buys, who blocks, what triggers the purchase decision, what the real objection is',
          'Competitive Landscape — Full map of what customers currently use, why they\'d switch, and where our moat lies',
          'Pricing Research — Willingness-to-pay testing across hardware and SaaS tiers across segments',
          'Bottom-Up Market Sizing — TAM/SAM/SOM built from real pipeline conversations, not macro estimates',
          'GTM Playbook — Sequenced market entry: channels, messaging, sales motion, and first 10 customer roadmap',
        ],
      },
      {
        heading: 'You\'re the One If…',
        content: [
          'You\'ve run B2B customer discovery — not just designed surveys',
          'You think in Jobs-to-be-Done frameworks, not demographics',
          'You can turn 50 interviews into one decision-ready document',
          'You are obsessed with why customers don\'t buy, not just why they do',
          'You want to work on a problem that matters for 1.4 billion people',
        ],
      },
      {
        heading: 'The Opportunity Size',
        content: [
          'India smart waste tech SAM: ₹5,000 Crore growing at 15% CAGR',
          '10M+ corporate workstations under SEBI BRSR pressure',
          'Serviceable market for Year 1–3: ₹250 Crore',
          'Zero verified customer intelligence exists today — you build it first',
        ],
      },
      {
        heading: 'Why This Matters',
        content:
          'Getting the ICP wrong at pre-seed costs 18 months and a funding round. Getting it right is a competitive moat. Your output becomes the foundation for how a ₹250 Crore+ opportunity gets unlocked — and your name will be on the slide that proved the market was real.',
      },
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#1A1F2E] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Careers at EnviroVision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re not hiring employees.<br />We&apos;re finding <span className="text-[#00968e]">co-builders.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              We are looking for people who see the same problem we see and want to spend years solving it. If fixing India&apos;s environmental infrastructure sounds like the most important work you could do right now — read on.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-8">
                Small team. Big problem. Real ownership.
              </h2>
              <div className="space-y-4 text-[#718096] text-base leading-relaxed">
                <p>
                  EnviroVision is an early-stage deep-tech startup incubated at Chandigarh University. We are a team of 11 — three founders and eight specialists — building technology that India has never had before.
                </p>
                <p>
                  At this stage, every person on the team owns something meaningful. There is no layer of management between your work and its impact. If you build the brand, you are the brand. If you map the market, the company&apos;s GTM strategy is yours.
                </p>
                <p>
                  We move fast, document our decisions, raise blockers early, and let data — not gut feel — drive everything. The people who thrive here are those who want to be the person who made something happen, not the person who was part of a team that did.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { Icon: Rocket, title: 'Default to shipping', desc: 'A working prototype beats a perfect design doc. We build, test, learn, and iterate — fast.' },
                { Icon: FileText, title: 'Document decisions', desc: 'Every architectural and strategic choice gets a written rationale. Future us will thank us.' },
                { Icon: ShieldCheck, title: 'Own your layer', desc: "You own your workstream entirely. Raise blockers early — don't wait for a meeting." },
                { Icon: BarChart3, title: 'Data beats opinion', desc: 'Benchmark everything. Accuracy claims need numbers, not feelings.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-4 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1F2E] mb-1">{item.title}</h3>
                    <p className="text-[#718096] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Open Roles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Two problems.<br />Two people who can solve them.
            </h2>
            <p className="text-lg text-[#718096]">
              We have a world-class mission, a working product, and 4 patents. What we need now are people to build the brand and prove the market.
            </p>
          </div>

          {JOBS.length > 0 ? (
            <div className="space-y-6">
              {JOBS.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-[#E2E8F0]">
                  <details className="group">
                    <summary className="cursor-pointer p-6 lg:p-8 list-none">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-[#00968e]">{job.title}</h3>
                            {job.isCoFounder && (
                              <span className="px-3 py-1 bg-gradient-to-r from-[#00968e] to-[#007a73] text-white text-xs font-semibold rounded-full">
                                Co-founder Opportunity
                              </span>
                            )}
                          </div>
                          <p className="text-[#718096] text-sm mb-3 italic">{job.subtitle}</p>
                          <div className="flex flex-wrap items-center gap-4 text-[#718096] text-sm">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {job.tags.map((tag) => (
                              <span key={tag} className="bg-[#e8f5ed] text-[#00968e] text-xs font-semibold px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[#718096] text-sm group-open:hidden">View Details</span>
                          <span className="text-[#718096] text-sm hidden group-open:inline">Hide Details</span>
                          <ChevronDown className="w-5 h-5 text-[#718096] transition-transform group-open:rotate-180" />
                        </div>
                      </div>
                    </summary>

                    <div className="px-6 lg:px-8 pb-8 border-t border-[#E2E8F0]">
                      <div className="pt-6 space-y-6">
                        {job.sections.map((section) => (
                          <div key={section.heading}>
                            <h4 className="font-semibold text-[#1A1F2E] mb-3 text-sm uppercase tracking-wide">
                              {section.heading}
                            </h4>
                            {typeof section.content === 'string' ? (
                              <p className="text-[#718096] leading-relaxed">{section.content}</p>
                            ) : (
                              <ul className="space-y-2">
                                {section.content.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[#718096]">
                                    <span className="text-[#00968e] mt-1 flex-shrink-0">→</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}

                        <a
                          href={`mailto:marketing@envirovision.in?subject=${encodeURIComponent(job.applySubject)}`}
                          className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-6 py-3 rounded-full font-semibold transition-all"
                        >
                          Apply for This Role
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-2">No Open Positions Right Now</h3>
              <p className="text-[#718096] mb-6">
                We don&apos;t have any open positions at the moment, but we&apos;re always looking for talented people.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#00968e] hover:text-[#007a73] font-semibold transition-colors"
              >
                Send us your resume
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              More than a job title.
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              We are a pre-seed startup. We can&apos;t compete with large company salaries — but we offer something most can&apos;t.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Award, title: 'Real Ownership', desc: 'Equity-based compensation. You own a piece of what you build.' },
              { Icon: Sprout, title: 'Founding Team Status', desc: 'Join as a co-builder, not an employee. Your decisions shape the company.' },
              { Icon: Lock, title: 'Access to IP', desc: 'Work directly with patent-backed technology that no one else has.' },
              { Icon: Globe, title: 'Mission That Matters', desc: "Your work has a direct, measurable impact on India's environment." },
            ].map((perk) => (
              <div key={perk.title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <perk.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#1A1F2E] mb-2">{perk.title}</h3>
                <p className="text-[#718096] text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#1A1F2E] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
            Interested?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share this. Know someone?{' '}
            <span className="text-[#00968e]">Tag them.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            The best people are rarely the ones actively looking. If you know someone who belongs here, send them this page.
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
