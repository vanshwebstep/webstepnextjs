"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight, FiBriefcase, FiStar, FiCheckCircle, FiGlobe } from 'react-icons/fi';

const reviews = [
  {
    id: 0,
    initials: 'MO',
    name: "Michael O'Malley",
    role: 'Product Lead, Velocity',
    content: "Exceptional technical depth. They didn't just build what we asked — they built what we actually needed to scale.",
    tag: 'Mobile App',
    accent: '#7C3AED',
    accentLight: '#ede9fe',
    accentText: '#5b21b6',
    avatarFrom: '#7C3AED',
    avatarTo: '#a855f7',
    barFrom: '#7C3AED',
    barTo: '#a855f7',
  },
  {
    id: 1,
    initials: 'SJ',
    name: 'Sarah Jenkins',
    role: 'Design Director, Aura',
    content: "Absolutely phenomenal. Their UI/UX design transformed our user retention metrics within months of rollout.",
    tag: 'UI/UX',
    accent: '#0891B2',
    accentLight: '#e0f2fe',
    accentText: '#0369a1',
    avatarFrom: '#0891B2',
    avatarTo: '#38bdf8',
    barFrom: '#0891B2',
    barTo: '#38bdf8',
  },
  {
    id: 2,
    initials: 'MM',
    name: 'Matt Meyer',
    role: 'CTO, TechCorp',
    content: "The communication and project management were top-tier. A true extension of our engineering team throughout.",
    tag: 'Full Stack',
    accent: '#059669',
    accentLight: '#d1fae5',
    accentText: '#065f46',
    avatarFrom: '#059669',
    avatarTo: '#34d399',
    barFrom: '#059669',
    barTo: '#34d399',
  },
  {
    id: 3,
    initials: 'RS',
    name: 'Riya Sharma',
    role: 'Creative Partner',
    content: "Precision, speed, and innovation — delivered on time, under budget, exceeding every single expectation we had.",
    tag: 'Laravel',
    accent: '#EA580C',
    accentLight: '#ffedd5',
    accentText: '#9a3412',
    avatarFrom: '#EA580C',
    avatarTo: '#fb923c',
    barFrom: '#EA580C',
    barTo: '#fb923c',
  },
];

const stats = [
  { icon: <FiBriefcase />, num: '500+', label: 'Projects Delivered', bg: '#ede9fe', color: '#7C3AED' },
  { icon: <FiStar />, num: '4.9/5', label: 'Avg Rating', bg: '#e0f2fe', color: '#0891B2' },
  { icon: <FiCheckCircle />, num: '✓', label: 'Google Certified', bg: '#d1fae5', color: '#059669' },
  { icon: <FiGlobe />, num: '40+', label: 'Countries', bg: '#ffedd5', color: '#EA580C' },
];

const Customer = () => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const total = reviews.length;

  const goTo = (i) => setCur((i + total) % total);
  const next = () => goTo(cur + 1);
  const prev = () => goTo(cur - 1);

  const startAuto = () => { timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 4000); };
  const stopAuto = () => clearInterval(timerRef.current);

  useEffect(() => { startAuto(); return stopAuto; }, []);

  const r = reviews[cur];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        .customer-section * { font-family: 'Roboto', sans-serif; }
        .tnavbtn:hover { background: #7C3AED !important; color: #fff !important; border-color: #7C3AED !important; }
        .tdot-pill { transition: all 0.25s; }
      `}</style>

      <section
        className="customer-section"
        style={{ background: '#f4f3fa', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
         <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white backdrop-blur-md border border-white/60 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-10 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
          </span>
          Success Stories 
        </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#18142e', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
              Global Client{' '}
              <span style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Success</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#8b87a8', marginTop: '0.6rem', fontWeight: 500 }}>
              Hear directly from teams we've partnered with to build, scale, and launch.
            </p>
          </div>

          {/* Slider */}
          <div
            style={{ borderRadius: '20px', border: '1.5px solid #eceaf5', background: '#f4f3fa', overflow: 'hidden' }}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            {/* Slide */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr auto',
              alignItems: 'center',
              gap: '1.4rem',
              padding: '1.8rem',
              background: `linear-gradient(180deg, #ede9fe, #FFF)`,
              position: 'relative',
              transition: 'background 0.3s',
            }}>
              {/* Left accent bar */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
                background: `linear-gradient(180deg, ${r.barFrom}, ${r.barTo})`,
                borderRadius: '4px 0 0 4px',
              }} />

              {/* Avatar */}
              <div style={{
                width: 50, height: 50, borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 900, color: '#fff', flexShrink: 0,
                background: `linear-gradient(135deg, ${r.avatarFrom}, ${r.avatarTo})`,
              }}>
                {r.initials}
              </div>

              {/* Text */}
              <div>
                <p style={{ fontSize: '14px', color: '#3d3660', lineHeight: 1.65, fontWeight: 500, fontStyle: 'italic', marginBottom: '8px' }}>
                  "{r.content}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#18142e' }}>{r.name}</span>
                  <span style={{ fontSize: '11px', color: '#c4c0d8' }}>·</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#8b87a8' }}>{r.role}</span>
                </div>
              </div>

              {/* Right: stars + tag */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} color={r.accent} />
                  ))}
                </div>
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', padding: '3px 10px', borderRadius: '100px',
                  background: r.accentLight, color: r.accentText,
                }}>
                  {r.tag}
                </span>
              </div>
            </div>

            {/* Controls bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.85rem 1.4rem',
              borderTop: '1.5px solid #eceaf5',
              background: '#fff',
            }}>
              {/* Dots */}
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="tdot-pill"
                    style={{
                      width: i === cur ? '22px' : '7px',
                      height: '7px',
                      borderRadius: i === cur ? '4px' : '50%',
                      background: i === cur ? '#7C3AED' : '#e0ddf5',
                      border: 'none', cursor: 'pointer', padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Counter */}
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#8b87a8', letterSpacing: '0.1em' }}>
                {String(cur + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              {/* Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {[{ fn: prev, icon: <FiArrowLeft size={15} /> }, { fn: next, icon: <FiArrowRight size={15} /> }].map((btn, i) => (
                  <button
                    key={i}
                    className="tnavbtn"
                    onClick={btn.fn}
                    style={{
                      width: 34, height: 34, borderRadius: '10px',
                      border: '1.5px solid #e0ddf5', background: '#fff',
                      color: '#7C3AED', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{
            marginTop: '1.2rem', background: '#fff',
            border: '1.5px solid #eceaf5', borderRadius: '20px',
            padding: '1.2rem 1.6rem',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', background: s.bg, color: s.color, flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#18142e', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b87a8', marginTop: '1px' }}>{s.label}</div>
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: '1px', height: '32px', background: '#eceaf5', flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Customer;