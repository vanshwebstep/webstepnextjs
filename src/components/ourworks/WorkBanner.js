import React from 'react';
import QuoteForm from '../QuoteForm';
import Lists from '../Lists';
import AnimatedSection from '../AnimatedSection';

const WorkBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 px-6 overflow-hidden font-roboto">

      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl 
    bg-white/50 backdrop-blur-xl border border-white/60 
    text-[#FF1F8E] font-semibold text-[11px] tracking-[0.35em] uppercase 
    shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-6 
    hover:scale-105 transition-all duration-300 cursor-default">

                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF1F8E]"></span>
                  </span>

                  Our Portfolio
                </div>
                {/* Heading */}
                <h1 className="relative text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-6">

                  <span className="block text-slate-900">
                    Crafting Digital
                  </span>

                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Masterpieces
                    <span className="absolute left-0 -bottom-2 w-full h-[6px] rounded-full 
        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
        blur-sm opacity-70 animate-pulse"></span>
                  </span>
                </h1>

                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                  Twenty years in business has yielded hundreds of client partnerships, each with their own challenges, each uniquely rewarding. TechnoScore is dedicated to helping our clients overcome complex business problems with exceptional technological solutions.
                </p>

                <div className="relative w-20 h-1.5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  <div className="absolute inset-0 blur-md opacity-70 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
                </div>
              </div>

              <Lists />
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">

              <div className=" relative p-[2px] rounded-[3rem] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_20px_60px_rgba(236,72,153,0.25)] mt-20">
                <div className="rounded-[3rem] backdrop-blur-xl bg-white/90 p-10 md:p-10">

                  <div className="relative z-10">
                    <QuoteForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorkBanner;
