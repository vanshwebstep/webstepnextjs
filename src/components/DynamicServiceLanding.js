"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiLayers,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { fetchServicePage, submitLead } from "@/lib/contentApi";
import { THANK_YOU_ROUTE } from "@/lib/routes";

const iconMap = {
  users: FiUsers,
  code: FiCode,
  shield: FiShield,
  trend: FiTrendingUp,
  layers: FiLayers,
  clock: FiClock,
  star: FiStar,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const pickIcon = (name) => iconMap[name] || FiCheckCircle;

function cx(...items) {
  return items.filter(Boolean).join(" ");
}

function splitHeroTitle(title = "") {
  const words = title.trim().split(/\s+/);
  if (words.length <= 3) {
    return { lead: title, accent: "" };
  }
  return {
    lead: words.slice(0, -2).join(" "),
    accent: words.slice(-2).join(" "),
  };
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <p className={cx("text-xs font-black uppercase tracking-[0.26em]", light ? "text-pink-300" : "text-pink-600")}>{eyebrow}</p>
      <h2 className={cx("mt-4 text-3xl sm:text-5xl font-black tracking-tight", light ? "text-white" : "text-slate-950")}>{title}</h2>
      {text && <p className={cx("mt-5 max-w-2xl text-base leading-8", light ? "text-slate-300" : "text-slate-600")}>{text}</p>}
    </motion.div>
  );
}

function LeadForm({ slug, page, variant }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      await submitLead({
        source: `${slug}-page`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: `${page.title} inquiry\n${form.message}`,
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      router.push(THANK_YOU_ROUTE);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100";

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={cx(
        "grid gap-4 rounded-[28px] border p-6 sm:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)]",
        variant === "dark" ? "border-white/10 bg-white text-slate-950" : "border-slate-200 bg-slate-50"
      )}
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-pink-600">Start here</p>
        <h3 className="mt-2 text-2xl font-black text-slate-950">Request a consultation</h3>
      </div>
      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className={inputClass} />
      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className={inputClass} />
      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className={inputClass} />
      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need" rows={4} className={`${inputClass} resize-none`} />
      <button disabled={submitting} className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF1F8E] via-[#A855F7] to-[#38BDF8] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_16px_36px_rgba(168,85,247,0.25)] transition hover:-translate-y-0.5 disabled:opacity-70">
        {submitting ? "Submitting..." : "Request Consultation"} <FiArrowRight />
      </button>
      {status.message && <p className={cx("text-sm font-bold", status.type === "success" ? "text-emerald-600" : "text-red-500")}>{status.message}</p>}
    </motion.form>
  );
}

function ServiceHero({ hero, metrics, variant }) {
  const isHire = variant === "hire";
  const Icon = isHire ? FiBriefcase : FiBookOpen;
  const { lead, accent } = splitHeroTitle(hero.title);
  const portfolioHref = isHire ? "/works" : "/case-study";

  return (
    <section className="relative z-10 mt-20 overflow-hidden bg-white px-6 py-16 font-roboto sm:pt-28 sm:pb-20 lg:py-[8.5rem]">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/2 rounded-full bg-pink-50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/2 rounded-full bg-orange-50 blur-[120px] pointer-events-none" />
      <div className="container relative z-10 mx-auto">
      <div className="grid items-center gap-16 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex cursor-default items-center gap-3 rounded-2xl border border-white/60 bg-white/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#FF1F8E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF1F8E] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF1F8E]" />
            </span>
            <Icon /> {hero.eyebrow}
          </motion.div>
          <motion.h1 variants={fadeUp} className="relative max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-tight text-slate-900 sm:text-6xl lg:text-8xl">
            <span className="block">{lead}</span>
            {accent && (
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {accent}
                <span className="absolute left-0 -bottom-2 h-[6px] w-full animate-pulse rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-70 blur-sm" />
              </span>
            )}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">{metric.label}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contactus" className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF1F8E] via-[#A855F7] to-[#38BDF8] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_16px_36px_rgba(168,85,247,0.25)] transition hover:-translate-y-0.5">
                {hero.primaryCta || (isHire ? "Hire Developers" : "Apply Now")} <FiArrowRight />
              </Link>
              <Link href={portfolioHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black uppercase tracking-widest text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-200">
                {hero.secondaryCta || (isHire ? "View Portfolio" : "See Work")}
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-[0_0_18px_rgba(168,85,247,0.35)]" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative">
          <div className="relative rounded-[3rem] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] shadow-[0_20px_60px_rgba(236,72,153,0.25)]">
            <div className="rounded-[3rem] bg-white/90 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">{isHire ? "Team Console" : "Learning Lab"}</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">{hero.panelTitle}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                {isHire ? <FiUsers /> : <FiLayers />}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="text-2xl font-black text-slate-950">{metric.value}</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-slate-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {(hero.panelItems || []).map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold leading-6 text-slate-700"
                >
                  <FiCheckCircle className="mt-1 flex-shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

function TrainingBody({ page, sections, process, pricing, proof, faqs, slug }) {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Curriculum Tracks" title="A practical program with real delivery habits" text="Students learn by shipping polished work, reviewing mistakes, and repeating the workflow used inside a software team." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => {
              const Icon = pickIcon(section.icon);
              return (
                <motion.article key={section.title} variants={fadeUp} className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black text-slate-100">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(section.points || []).map((point) => (
                      <span key={point} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">{point}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <SectionIntro eyebrow="Training Journey" title={page.processTitle} text={page.processIntro} light />
          <div className="relative">
            <div className="absolute left-4 top-3 hidden h-[calc(100%-24px)] w-px bg-white/15 sm:block" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4">
              {process.map((step, index) => (
                <motion.div key={step.title} variants={fadeUp} className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:ml-12">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-sm font-black sm:absolute sm:-left-[66px] sm:top-5">0{index + 1}</div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PricingAndLead page={page} pricing={pricing} proof={proof} faqs={faqs} slug={slug} variant="light" />
    </>
  );
}

function HireBody({ page, sections, process, pricing, proof, faqs, slug }) {
  const featured = sections.slice(0, 3);
  const rest = sections.slice(3);

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Dedicated Team Models" title="Build a focused delivery pod around your roadmap" text="Pick a developer, add QA and delivery support, then scale the team as product velocity grows." />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-5 lg:grid-cols-3">
            {featured.map((section) => {
              const Icon = pickIcon(section.icon);
              return (
                <motion.article key={section.title} variants={fadeUp} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 p-3 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-950">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                  <ul className="mt-6 space-y-3">
                    {(section.points || []).map((point) => (
                      <li key={point} className="flex gap-3 text-sm font-bold text-slate-700">
                        <FiCheckCircle className="mt-0.5 flex-shrink-0 text-pink-500" /> {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 grid gap-4 md:grid-cols-3">
            {rest.map((section) => (
              <motion.div key={section.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{section.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{section.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionIntro eyebrow="Hiring Workflow" title={page.processTitle} text={page.processIntro} light />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <motion.div key={step.title} variants={fadeUp} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-black text-sky-200">STEP 0{index + 1}</span>
                    <FiArrowRight className="text-white/40" />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PricingAndLead page={page} pricing={pricing} proof={proof} faqs={faqs} slug={slug} variant="dark" />
    </>
  );
}

function PricingAndLead({ page, pricing, proof, faqs, slug, variant }) {
  const dark = variant === "dark";

  return (
    <>
      <section className={cx("py-20", dark ? "bg-slate-100" : "bg-slate-50")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionIntro eyebrow="Engagement Options" title={page.pricingTitle} text={page.pricingIntro} />
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-4">
                {proof.map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700">
                    <FiCheckCircle className="flex-shrink-0 text-emerald-500" /> {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {pricing.map((plan) => (
                <motion.article key={plan.title} variants={fadeUp} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-slate-950">{plan.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{plan.description}</p>
                    </div>
                    <div className="rounded-full bg-pink-50 px-4 py-2 text-sm font-black text-pink-600">{plan.price}</div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(plan.items || []).map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">{item}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className={cx("py-20", dark ? "bg-slate-950 text-white" : "bg-white text-slate-950")}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionIntro eyebrow="FAQ" title="Questions before you start?" text="The important details are covered here, and the rest can be mapped on a short consultation call." light={dark} />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <motion.div key={faq.q} variants={fadeUp} className={cx("rounded-2xl border p-5", dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-slate-50")}>
                  <h3 className="font-black">{faq.q}</h3>
                  <p className={cx("mt-2 text-sm leading-7", dark ? "text-slate-300" : "text-slate-600")}>{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <LeadForm slug={slug} page={page} variant={dark ? "dark" : "light"} />
        </div>
      </section>
    </>
  );
}

export default function DynamicServiceLanding({ slug, fallback }) {
  const [page, setPage] = useState(fallback);

  useEffect(() => {
    fetchServicePage(slug, fallback).then(setPage);
  }, [slug, fallback]);

  const data = useMemo(() => ({
    hero: page.hero || {},
    metrics: page.metrics || [],
    sections: page.sections || [],
    process: page.process || [],
    pricing: page.pricing || [],
    faqs: page.faqs || [],
    proof: page.proof || [],
  }), [page]);

  const isHire = slug === "hire-full-time-developers";

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <ServiceHero hero={data.hero} metrics={data.metrics} variant={isHire ? "hire" : "training"} />
      {isHire ? (
        <HireBody page={page} sections={data.sections} process={data.process} pricing={data.pricing} proof={data.proof} faqs={data.faqs} slug={slug} />
      ) : (
        <TrainingBody page={page} sections={data.sections} process={data.process} pricing={data.pricing} proof={data.proof} faqs={data.faqs} slug={slug} />
      )}
    </main>
  );
}
