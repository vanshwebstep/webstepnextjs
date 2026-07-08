import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";
import { assetImage } from "@/lib/assets";
const MarketingTeam = dynamic(() => import('../MarketingTeam'));

const teamImage = assetImage("dummyuser.jpg");

const departments = [
  {
    title: "Product Strategy",
    text: "Discovery, technical planning, roadmap clarity, and delivery priorities before a build starts.",
    icon: FiLayers,
  },
  {
    title: "Web Engineering",
    text: "React, Next.js, PHP, Laravel, WordPress, Shopify, and custom web application development.",
    icon: FiCode,
  },
  {
    title: "Mobile Apps",
    text: "Mobile-first product builds, app interfaces, API integration, and release-ready implementation.",
    icon: FiSmartphone,
  },
  {
    title: "UI/UX Design",
    text: "Clear interfaces, conversion-focused pages, design systems, and polished user journeys.",
    icon: FiPenTool,
  },
  {
    title: "Digital Growth",
    text: "SEO, content direction, campaign pages, analytics, and growth-focused marketing support.",
    icon: FiTrendingUp,
  },
  {
    title: "Quality Assurance",
    text: "Functional checks, responsive testing, launch reviews, and practical regression coverage.",
    icon: FiShield,
  },
];

const leaders = [
  {
    name: "Project Strategy Team",
    role: "Planning and delivery ownership",
    focus: "Scopes the work, coordinates milestones, and keeps communication clear.",
  },
  {
    name: "Design Team",
    role: "UI, UX, and brand experience",
    focus: "Turns business goals into clean, usable screens and conversion paths.",
  },
  {
    name: "Development Team",
    role: "Frontend, backend, and CMS builds",
    focus: "Builds reliable websites, apps, integrations, and custom software.",
  },
  {
    name: "Growth Team",
    role: "SEO and campaign execution",
    focus: "Supports launches with visibility, content, and measurable growth work.",
  },
];

const stats = [
  ["12+", "Years of delivery experience"],
  ["150+", "Projects supported"],
  ["24h", "Typical response rhythm"],
  ["6", "Core delivery functions"],
];

export default function OurTeamPage() {
  return (
    <main className="bg-white pt-36 text-slate-950 md:pt-40">
      <section className="border-b border-slate-200 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FF1F8E]">Our Team</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              A focused team for strategy, design, development, and growth.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Webstep brings product thinkers, designers, developers, QA, and growth specialists together so every
              project moves from idea to launch with clear ownership.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF1F8E] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_16px_34px_rgba(255,31,142,0.22)] transition hover:bg-[#D91676]"
              >
                Talk to our team <FiArrowRight />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-800 transition hover:border-pink-200 hover:text-[#FF1F8E]"
              >
                View work
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="overflow-hidden rounded-[22px] bg-white">
              <Image src={teamImage} alt="Webstep team" className="h-[360px] w-full object-cover" priority />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-5">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-black text-[#FF1F8E]">{value}</div>
                  <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <MarketingTeam />

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FF1F8E]">What we cover</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Specialists where the project actually needs them.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-200">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-[#FF1F8E]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-200">Delivery model</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                One team, clear roles, practical execution.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Every engagement is handled with the right mix of planning, design, development, QA, and growth support.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {leaders.map((person) => (
                <article key={person.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-pink-200">
                    <FiCheckCircle size={18} />
                  </div>
                  <h3 className="text-lg font-black">{person.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-pink-200">{person.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{person.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-[28px] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FF1F8E]">Start a project</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Need the right people on your build?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Share your requirement and we will map the right team structure for your timeline and budget.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#FF1F8E]"
          >
            Contact us <FiSearch />
          </Link>
        </div>
      </section>


    </main>
  );
}
