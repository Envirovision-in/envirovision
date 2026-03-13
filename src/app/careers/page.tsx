import Link from 'next/link';
import { ArrowRight, Briefcase, MapPin, Clock, ChevronDown, Rocket, FileText, ShieldCheck, BarChart3, Award, Sprout, Lock, Globe } from 'lucide-react';
import { getCareers } from '@/lib/sanity';

// Revalidate every 60 seconds to pick up new content
export const revalidate = 60;

function getTypeLabel(type: string) {
  const labels: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'internship': 'Internship',
    'contract': 'Contract',
    'co-founder': 'Co-founder',
  };
  return labels[type] || type;
}

function isCoFounderRole(type: string) {
  return type === 'co-founder' || type === 'full-time';
}

interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  desiredExperience?: string[];
}

export default async function CareersPage() {
  let careers: Career[] = [];

  try {
    careers = await getCareers() || [];
  } catch {
    careers = [];
  }

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
                { Icon: ShieldCheck, title: 'Own your layer', desc: 'You own your workstream entirely. Raise blockers early — don\'t wait for a meeting.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[#718096]">
              We have a world-class mission, a working product, and 4 patents. What we need now are people to build the brand and prove the market.
            </p>
          </div>

          {careers.length > 0 ? (
            <div className="space-y-6">
              {careers.map((job) => (
                <div key={job._id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-[#E2E8F0]">
                  <details className="group">
                    <summary className="cursor-pointer p-6 lg:p-8 list-none">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-[#00968e]">{job.title}</h3>
                            {isCoFounderRole(job.type) && (
                              <span className="px-3 py-1 bg-gradient-to-r from-[#00968e] to-[#007a73] text-white text-xs font-semibold rounded-full">
                                Co-founder Opportunity
                              </span>
                            )}
                          </div>
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
                              {getTypeLabel(job.type)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#718096] text-sm group-open:hidden">View Details</span>
                          <span className="text-[#718096] text-sm hidden group-open:inline">Hide Details</span>
                          <ChevronDown className="w-5 h-5 text-[#718096] transition-transform group-open:rotate-180" />
                        </div>
                      </div>
                    </summary>

                    <div className="px-6 lg:px-8 pb-8 border-t border-[#E2E8F0]">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-semibold text-[#1A1F2E] mb-2">Role Overview</h4>
                          <p className="text-[#718096]">{job.description}</p>
                          {isCoFounderRole(job.type) && (
                            <p className="text-[#00968e] font-medium mt-2 italic">
                              Open to full-time or co-founder role for the right candidate
                            </p>
                          )}
                        </div>

                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[#1A1F2E] mb-2">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-[#718096]">
                                  <span className="text-[#00968e] mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[#1A1F2E] mb-2">Required Skills</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-[#718096]">
                                  <span className="text-[#00968e] mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.desiredExperience && job.desiredExperience.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-[#1A1F2E] mb-2">Desired Experience</h4>
                            <ul className="space-y-2">
                              {job.desiredExperience.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-[#718096]">
                                  <span className="text-[#00968e] mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-[#00968e] hover:bg-[#007a73] text-white px-6 py-3 rounded-full font-semibold transition-all"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0]">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#1A1F2E] mb-2">No Open Positions</h3>
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
              { Icon: Globe, title: 'Mission That Matters', desc: 'Your work has a direct, measurable impact on India\'s environment.' },
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
