"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSmartphone, FiLayout, FiServer, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaLaravel, FaNodeJs, FaPhp, FaWordpress } from 'react-icons/fa';

const servicesData = [
  {
    id: '01', icon: <FiSmartphone />,
    title: 'Mobile App Dev', fullTitle: 'Mobile App Development',
    description: 'Native & cross-platform apps that engage and delight users.',
    href: '/services/mobile-app-development', tag: 'Mobile', span: 'b1',
    accent: '#7C3AED', accentBg: '#F5F3FF', accentBorder: '#DDD6FE',
  },
  {
    id: '02', icon: <FiLayout />,
    title: 'UI/UX Designing', fullTitle: 'UI/UX Designing',
    description: 'Interfaces that blend aesthetic beauty with functional clarity.',
    href: '/services/ui-ux', tag: 'Design', span: 'b2',
    accent: '#0891B2', accentBg: '#ECFEFF', accentBorder: '#A5F3FC',
  },
  {
    id: '03', icon: <FiServer />,
    title: 'Full Stack Dev', fullTitle: 'Full Stack Development',
    description: 'Scalable backends & dynamic frontends for modern web apps.',
    href: '/services/full-stack-development', tag: 'Web', span: 'b3',
    accent: '#059669', accentBg: '#ECFDF5', accentBorder: '#A7F3D0',
  },
  {
    id: '04', icon: <FiCheckCircle />,
    title: 'Software Testing', fullTitle: 'Software Testing',
    description: 'Bug-free, flawlessly performing products across all platforms and environments.',
    href: '/services/software-testing', tag: 'QA', span: 'b4',
    accent: '#DC2626', accentBg: '#FEF2F2', accentBorder: '#FECACA',
  },
  {
    id: '05', icon: <FaLaravel />,
    title: 'Laravel Development', fullTitle: 'Laravel Development',
    description: 'Secure, feature-rich web applications built with the powerful Laravel framework.',
    href: '/services/laravel-development', tag: 'Backend', span: 'b5',
    accent: '#EA580C', accentBg: '#FFF7ED', accentBorder: '#FED7AA',
  },
  {
    id: '06', icon: <FaNodeJs />,
    title: 'Node.js Dev', fullTitle: 'Node.js Development',
    description: 'High-performance, real-time event-driven applications.',
    href: '/services/nodejs-development', tag: 'Backend', span: 'b6',
    accent: '#020202', accentBg: '#F0FDF4', accentBorder: '#BBF7D0',
  },
  {
    id: '07', icon: <FaPhp />,
    title: 'PHP Development', fullTitle: 'PHP Development',
    description: 'Custom PHP solutions for your unique business goals.',
    href: '/services/php-development', tag: 'Backend', span: 'b7',
    accent: '#7C3AED', accentBg: '#F5F3FF', accentBorder: '#DDD6FE',
  },
  {
    id: '08', icon: <FaWordpress />,
    title: 'WordPress Site', fullTitle: 'WordPress Website',
    description: 'Flexible, easy-to-manage WordPress sites.',
    href: '/services/wordpress-website', tag: 'CMS', span: 'b8',
    accent: '#0369A1', accentBg: '#F0F9FF', accentBorder: '#BAE6FD',
  },
];

// Desktop bento span styles (6-col grid)
const spanStyles = {
  b1: { gridColumn: 'span 2' },
  b2: { gridColumn: 'span 2' },
  b3: { gridColumn: 'span 2' },
  b4: { gridColumn: 'span 3' },
  b5: { gridColumn: 'span 3' },
  b6: { gridColumn: 'span 2' },
  b7: { gridColumn: 'span 2' },
  b8: { gridColumn: 'span 2' },
};

// Tablet bento span styles (4-col grid)
const spanStylesTablet = {
  b1: { gridColumn: 'span 2' },
  b2: { gridColumn: 'span 2' },
  b3: { gridColumn: 'span 2' },
  b4: { gridColumn: 'span 2' },
  b5: { gridColumn: 'span 2' },
  b6: { gridColumn: 'span 2' },
  b7: { gridColumn: 'span 2' },
  b8: { gridColumn: 'span 2' },
};

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

function BentoBox({ service, spanStyle }) {
  const [hovered, setHovered] = useState(false);
  const isWide = service.span === 'b4' || service.span === 'b5';

  return (
    <Link href={service.href} style={{ textDecoration: 'none', ...spanStyle }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '20px',
          padding: '1.5rem',
          border: `1.5px solid ${hovered ? service.accentBorder : '#f1f5f9'}`,
          background: hovered ? service.accentBg : '#fff',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
          boxShadow: hovered ? `0 8px 30px ${service.accent}20` : 'none',
          height: '100%',
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: service.accent,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s',
        }} />

        {/* Ghost number */}
        <span style={{
          position: 'absolute',
          bottom: '-8px', right: '10px',
          fontSize: '4.5rem',
          fontWeight: 900,
          color: service.accent,
          opacity: 0.06,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {service.id}
        </span>

        {/* Icon */}
        <div style={{
          width: '42px', height: '42px',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px',
          marginBottom: '1rem',
          background: hovered ? '#fff' : service.accentBg,
          color: service.accent,
          border: `1.5px solid ${service.accentBorder}`,
          transition: 'background 0.2s',
          flexShrink: 0,
        }}>
          {service.icon}
        </div>

        {/* Tag */}
        <p style={{
          fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: service.accent, marginBottom: '4px',
          margin: '0 0 4px 0',
        }}>
          {service.tag}
        </p>

        {/* Title */}
        <h3 style={{
          fontSize: isWide ? '1.15rem' : '1rem',
          fontWeight: 700,
          color: '#0f172a',
          marginBottom: '6px',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          margin: '0 0 6px 0',
        }}>
          {service.fullTitle}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '12px',
          color: '#94a3b8',
          lineHeight: 1.6,
          fontWeight: 500,
          marginBottom: '0.8rem',
          flex: 1,
          margin: '0 0 0.8rem 0',
        }}>
          {service.description}
        </p>

        {/* Link */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: service.accent,
        }}>
          Discover
          <FiArrowRight size={11} style={{
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.2s',
          }} />
        </div>
      </div>
    </Link>
  );
}

const ServicesPage = () => {
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  const gridCols = isMobile ? 'repeat(1, 1fr)' : isTablet ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)';

  const getSpanStyle = (span) => {
    if (isMobile) return { gridColumn: 'span 1' };
    if (isTablet) return spanStylesTablet[span];
    return spanStyles[span];
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        .services-section * { font-family: 'Roboto', sans-serif; box-sizing: border-box; }
        .cta-services-btn:hover { background: #7C3AED !important; }
      `}</style>

      <section
        className="services-section"
        style={{
          background: '#fff',
          padding: isMobile ? '8rem 1rem' : isTablet ? '9rem 1.5rem' : '10rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft ambient bg */}
        <div style={{
          position: 'absolute', top: '5%', left: '50%',
          transform: 'translateX(-50%)',
          width: '700px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '12px', marginBottom: '1rem',
            }}>
              <div style={{ width: '36px', height: '2px', background: '#7C3AED' }} />
              <span style={{
                fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7C3AED',
              }}>
                Service Spectrum
              </span>
              <div style={{ width: '36px', height: '2px', background: '#7C3AED' }} />
            </div>

            <h2 style={{
              fontSize: isMobile ? '2.2rem' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              margin: 0,
            }}>
              Powerful{' '}
              <span style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Services
              </span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            gap: isMobile ? '8px' : '10px',
            marginBottom: '2.5rem',
          }}>
            {servicesData.map((s) => (
              <BentoBox key={s.id} service={s} spanStyle={getSpanStyle(s.span)} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button
                className="cta-services-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: isMobile ? '12px 24px' : '14px 36px',
                  background: '#0f172a', color: '#fff',
                  border: 'none', borderRadius: '100px',
                  fontWeight: 700, fontSize: '12px',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'background 0.2s',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}
              >
                Explore All Services <FiArrowRight size={14} />
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesPage;