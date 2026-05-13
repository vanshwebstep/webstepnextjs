"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../Banner';
import ConverstionService from '../ConverstionService';
import Services from '../Services';
import OurExpertize from '../OurExpertize';
import Process from '../Process';
import ServicesPage from '../ServicesPage';
import Design from '../Design';
import Customer from '../Customer';
import Experience from '../Experience';
import MarketingTeam from '../MarketingTeam';
import FormSection from '../FormSection';
import HomePage from '../fullHomePage';

const AnimatedSection = ({ children, delay = 0, className = "", direction = "up" }) => {
  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -100, y: 0 };
      case 'right': return { opacity: 0, x: 100, y: 0 };
      case 'down': return { opacity: 0, y: -100, x: 0 };
      case 'up':
      default: return { opacity: 0, y: 100, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // custom easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );


};

const Home = () => {
  return (
    <main className="relative bg-white text-slate-900 min-h-screen overflow-hidden font-roboto">
      {/* Site-wide Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-[#FF1F8E]/5 rounded-full blur-[250px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-[#D400CC]/5 rounded-full blur-[250px]" />
      </div>

      <div className="relative z-10">
        <AnimatedSection delay={0} direction="down">
          <Banner />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="left">
          <ConverstionService />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <Services />
        </AnimatedSection>

       

        <AnimatedSection delay={0.2} direction="left">
          <Process />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <ServicesPage />
        </AnimatedSection>

        {/* <AnimatedSection delay={0.2} direction="up">
          <Design />
        </AnimatedSection> */}

        <AnimatedSection delay={0.2} direction="left">
          <Customer />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <Experience />
        </AnimatedSection>
 <AnimatedSection delay={0.2} direction="up">
          <OurExpertize />
        </AnimatedSection>
        <AnimatedSection delay={0.2} direction="up">
          <MarketingTeam />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <FormSection />
        </AnimatedSection>

         {/* <AnimatedSection delay={0.2} direction="up">
          <HomePage />
        </AnimatedSection> */}
      </div>
    </main>
  );
};

export default Home;
