import Link from 'next/link';
import { ArrowRight, Target, Globe, Lightbulb } from 'lucide-react';

const stats = [
  { num: '2024', label: 'Year Founded', desc: 'EnviroVision was founded and incubated at Chandigarh University\'s innovation centre.' },
  { num: '4', label: 'Patents Filed', desc: 'Across solid waste, water management, organic waste, and air quality — a coherent map of where we will build.' },
  { num: '11', label: 'People on the Team', desc: '3 founders and an 8-person core team spanning AI/ML, industrial design, business operations, and research.' },
  { num: '1', label: 'Product in Deployment', desc: 'EcoSarthi — our AI waste segregation system — is our first commercialised product. More are in development.' },
];

const values = [
  {
    num: '01',
    title: 'Infrastructure over awareness',
    desc: 'The world doesn\'t need more campaigns asking people to sort their waste. It needs bins that do it for them. We build infrastructure, not nudges.',
  },
  {
    num: '02',
    title: 'Data before policy',
    desc: 'You cannot manage what you cannot measure. We build the data layer that gives India ground-truth environmental intelligence for the first time.',
  },
  {
    num: '03',
    title: 'India-native, not India-adapted',
    desc: 'Indian waste is different. Indian budgets are different. Indian buildings are different. We design for India from day one — not as an afterthought.',
  },
  {
    num: '04',
    title: 'Ship, learn, iterate',
    desc: 'A working prototype beats a perfect design document. We move fast, benchmark everything, and let data — not gut feel — drive every decision.',
  },
];

const founders = [
  {
    name: 'Sayantani Nandy',
    role: 'CEO & Co-Founder',
    bio: 'Serial entrepreneur who previously raised over $10 million for Soliyarn. Sayantani leads company strategy, fundraising, and investor relations — bringing operational discipline from scaling a company in a hard market.',
    tags: ['Strategy', 'Fundraising', 'Partnerships'],
  },
  {
    name: 'Diotima Bose',
    role: 'CSO & Co-Founder ',
    bio: 'PhD candidate in Environmental Science, based in the US. Original patent holder and the scientific backbone of EnviroVision — Diotima defines the waste classification framework, IP strategy, and the ESG methodology that makes our data credible.',
    tags: ['Environmental Science', 'IP & Patents', 'ESG'],
  },
  {
    name: 'Mallar Das',
    role: 'CTO & Co-Founder',
    bio: 'India-based engineer who owns the full technical stack — from hardware design and sensor integration to AI model training, cloud backend, and firmware. Prior startup experience building hardware-software integrated products from scratch.',
    tags: ['Hardware', 'AI/ML', 'Cloud'],
  },
];

const advisors = [
  { name: 'Subrata Bose', role: 'Strategic & Financial Advisor', desc: 'Corporate structuring, funding strategy, and investor network.' },
  { name: 'Dr. Somraj Guha', role: 'Org Management Advisor', desc: 'Team structure, process design, and pharma research background.' },
  { name: 'Dr. Gurmeet Kaur', role: 'CU Faculty Mentor', desc: 'Campus access, academic credibility, and student team pipeline.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 bg-[#1A1F2E] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-60 h-60 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We didn&apos;t start with a product.<br />We started with a <span className="text-[#00968e]">problem.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              India generates over 160,000 tonnes of waste every day. Less than 30% is properly sorted. The rest — contaminated, lost, landfilled. We are here to fix that, one bin at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                How We Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-8">
                A problem too big to walk past.
              </h2>
              <div className="space-y-5 text-[#718096] text-base leading-relaxed">
                <p>
                  EnviroVision began not in a boardroom, but in a university research lab. Our co-founder and Chief Science Officer, Diotima Bose, was deep into her PhD in Environmental Science when she encountered a question that wouldn&apos;t let her go: <strong className="text-[#1A1F2E]">why, despite decades of awareness campaigns, does India still lose over ₹1 lakh crore every year in recyclable material?</strong>
                </p>
                <p>
                  The answer wasn&apos;t apathy. It wasn&apos;t a lack of education. The answer was infrastructure — or more precisely, the absence of it. India had no affordable, automated system to sort waste at the point it was generated. Every solution either required people to change their behaviour, or cost so much it was only viable for wealthy Western cities.
                </p>
                <div className="border-l-4 border-[#00968e] pl-6 py-2 bg-[#F7FAFC] rounded-r-xl my-6">
                  <p className="text-lg font-semibold text-[#1A1F2E] italic leading-snug">
                    &ldquo;Most startups build a product and hope it becomes valuable. We inverted this. We started with the IP — then built the product that commercialises it.&rdquo;
                  </p>
                </div>
                <p>
                  So Diotima filed a patent. Not a business plan — a patent. A mechanical sorting mechanism that could sit inside a single bin and automatically separate metallic from non-metallic waste, with no human input required. That patent became the foundation of everything EnviroVision is building today.
                </p>
                <p>
                  Alongside her, Sayantani Nandy — a serial entrepreneur who had previously raised over $10 million for Soliyarn — saw what the technology could become at scale. And Mallar Das, a hardware and software engineer with full-stack embedded systems experience, joined to turn the patent into a real product that could be deployed, measured, and scaled.
                </p>
                <p>
                  Three founders. Three disciplines. One shared belief: <strong className="text-[#1A1F2E]">India&apos;s environmental challenges are infrastructure problems, not behaviour problems.</strong> Fix the infrastructure, and everything else follows.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#F7FAFC] border border-[#E2E8F0] rounded-2xl p-6">
                  <div className="text-4xl font-bold text-[#00968e] mb-1">{stat.num}</div>
                  <div className="font-semibold text-[#1A1F2E] mb-2">{stat.label}</div>
                  <div className="text-[#718096] text-sm leading-relaxed">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              Mission & Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Automated, not aspirational.
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              We don&apos;t ask people to change their habits. We build the systems that remove the need to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Target, title: 'Our Mission', desc: 'To build technology that makes environmental responsibility automatic — eliminating the friction between intention and action for every Indian city, company, and community.' },
              { Icon: Globe, title: 'Our Vision', desc: 'A future where India\'s cities are clean, measurable, and self-sustaining — where every tonne of waste that can be recovered is recovered, automatically, and the data proves it.' },
              { Icon: Lightbulb, title: 'Our Mantra', desc: 'Innovate, Inspire, Impact. Every product we build starts with proprietary IP, generates real-world data, and compounds into a stronger platform with every deployment.' },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-2xl flex items-center justify-center mb-5">
                  <card.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2E] mb-3">{card.title}</h3>
                <p className="text-[#718096] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              The principles that guide us.
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              These aren&apos;t values we put on a wall. They&apos;re the decisions we make every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((val) => (
              <div key={val.num} className="flex gap-6 items-start p-6 border border-[#E2E8F0] rounded-xl bg-[#F7FAFC]">
                <div className="text-3xl font-bold text-[#E2E8F0] flex-shrink-0 leading-none w-10">{val.num}</div>
                <div>
                  <h3 className="font-bold text-[#1A1F2E] mb-2">{val.title}</h3>
                  <p className="text-[#718096] text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">
              Founders built to go the distance.
            </h2>
            <p className="text-lg text-[#718096]">Three co-founders. Three disciplines. One mission.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-xl transition-all p-6">
                <h3 className="text-xl font-bold text-[#1A1F2E] mb-1">{founder.name}</h3>
                <div className="text-xs font-semibold text-[#00968e] uppercase tracking-wider mb-3">{founder.role}</div>
                <p className="text-[#718096] text-sm leading-relaxed mb-4">{founder.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span key={tag} className="bg-[#e8f5ed] text-[#00968e] text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-6">
              Advisors
            </span>
            <div className="grid md:grid-cols-3 gap-5">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                  <h3 className="font-bold text-[#1A1F2E] mb-1">{advisor.name}</h3>
                  <div className="text-xs font-semibold text-[#00968e] mb-3">{advisor.role}</div>
                  <p className="text-[#718096] text-sm leading-relaxed">{advisor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#00968e] to-[#007a73] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            If this problem excites you,{' '}
            <span className="opacity-80">you belong here.</span>
          </h2>
          <p className="text-lg opacity-90 mb-10">
            We are not looking for employees. We are looking for people who see the same problem we see and want to spend years solving it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#007a73] hover:bg-[#F7FAFC] px-8 py-4 rounded-full font-semibold transition-all"
            >
              See Open Roles
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
