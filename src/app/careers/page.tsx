import Link from 'next/link';
import { ArrowRight, Briefcase, MapPin, Clock, ChevronDown } from 'lucide-react';
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2E] mb-6">
              Build the Future of Sustainability
            </h1>
            <p className="text-lg md:text-xl text-[#718096]">
              Join EnviroVision and be part of a team that&apos;s making a real difference. We&apos;re looking for passionate individuals who want to create a cleaner, greener India.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-[#F7FAFC] border border-[#E2E8F0]">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-[#1A1F2E] mb-2">Startup Culture</h3>
              <p className="text-[#718096] text-sm">Fast-paced, innovative environment</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[#F7FAFC] border border-[#E2E8F0]">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold text-[#1A1F2E] mb-2">Impact-Driven</h3>
              <p className="text-[#718096] text-sm">Work that matters for the planet</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[#F7FAFC] border border-[#E2E8F0]">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-[#1A1F2E] mb-2">Growth</h3>
              <p className="text-[#718096] text-sm">Opportunities to learn and grow</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[#F7FAFC] border border-[#E2E8F0]">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-[#1A1F2E] mb-2">Collaboration</h3>
              <p className="text-[#718096] text-sm">Work with passionate people</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[#718096]">
              Find your next opportunity with us
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#1A1F2E] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-lg text-[#718096] mb-10">
            We&apos;re always looking for talented individuals who share our passion for sustainability. Send us your resume and let&apos;s connect!
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
