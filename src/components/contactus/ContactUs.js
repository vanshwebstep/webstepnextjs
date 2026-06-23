"use client";
import React from 'react'
import ContactForm from './ContactForm'
import { FaMobile, FaMapMarkerAlt, FaGlobe, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from '../AnimatedSection';
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section className="bg-white font-roboto">

            {/* Hero Banner Section */}
            <div className="relative py-20 lg:py-28 overflow-hidden bg-white">

                {/* Subtle Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#ec4899 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                {/* Soft Gradient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto relative z-10 pt-10 px-6">
                    <AnimatedSection delay={0.1} direction="up">
                        <div className="text-center max-w-3xl mx-auto">



                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-10 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
                                </span>
                                Get In Touch
                            </div>

                            <h1
                                className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-4"
                            >
                                CONTACT {/* Let's Start Your{" "}<br /> */}
                                <span style={{
                                    background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>              US
                                </span>
                            </h1>


                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6">
                                Have a groundbreaking idea? We're here to turn it into reality. Reach out and let's start building the future together.
                            </p>

                        </div>
                    </AnimatedSection>
                </div>
            </div>
            <div className="container mx-auto relative z-10 px-6 -mt-16 lg:-mt-24 pb-20">

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-4 space-y-6">

                        <AnimatedSection delay={0.2} direction="left">

                            {/* GLASS CARD */}
                            <div className="relative p-8 rounded-[2.5rem] backdrop-blur-xl bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-pink-700">

                                {/* Gradient Border */}
                                <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(236,72,153,0.15), transparent 40%, rgba(168,85,247,0.15))",
                                        maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        padding: "1px"
                                    }}
                                />

                                {/* ADDRESS */}
                                <div className="flex items-start gap-5 mb-6 hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 relative">
                                        <div className="absolute inset-0 bg-pink-500/20 blur-md rounded-2xl"></div>
                                        <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center text-pink-600 shadow-md">
                                            <FaMapMarkerAlt size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm mb-2">Our HQ</h4>
                                        <p className="text-slate-500 text-sm">
                                            E-45 Industrial Area Phase-8, Mohali, Punjab
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-200 mb-6" />

                                {/* PHONE */}
                                <div className="flex items-start gap-5 mb-6 hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 relative">
                                        <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-2xl"></div>
                                        <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center text-orange-600 shadow-md">
                                            <FaMobile size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm mb-2">Call Us</h4>
                                        <p className="text-slate-500 font-bold text-sm">
                                            +91 79739-38927
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-200 mb-6" />

                                {/* EMAIL */}
                                <div className="flex items-start gap-5 hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 relative">
                                        <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl"></div>
                                        <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center text-blue-600 shadow-md">
                                            <FaEnvelope size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm mb-2">Email</h4>
                                        <p className="text-slate-500 text-sm">
                                            info@webstepsolutions.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PREMIUM CTA CARD */}
                            <motion.div
                                whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 120 }}
                                className="relative rounded-[28px] p-10 mt-6 overflow-hidden cursor-pointer group"
                                style={{
                                    background: "#0a0a0f",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                }}
                            >
                                {/* Glow Orbs */}
                                <div className="absolute -top-16 -left-10 w-56 h-56 bg-pink-500/30 blur-[100px] rounded-full" />
                                <div className="absolute -bottom-20 -right-12 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full" />

                                <div className="relative z-10">
                                    <h3 className="text-white font-extrabold text-[28px] leading-tight mb-3">
                                        Ready for <br />
                                        <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                                            global impact?
                                        </span>
                                    </h3>

                                    <p className="text-sm text-white/50 mb-6">
                                        Join businesses scaling worldwide with our software.
                                    </p>
                                    <div className="flex gap-6 mb-7">
                                        {[
                                            { num: "500+", label: "Businesses" },
                                            { num: "40+", label: "Countries" },
                                            { num: "99.9%", label: "Uptime" },
                                        ].map((stat, i) => (
                                            <div key={stat.label} className="flex gap-6">
                                                <div>
                                                    <div
                                                        className="text-white font-extrabold text-[22px] leading-none tracking-tight"
                                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                                    >
                                                        {stat.num}
                                                    </div>
                                                    <div
                                                        className="text-[11px] mt-1 tracking-wide"
                                                        style={{ color: "rgba(255,255,255,0.35)" }}
                                                    >
                                                        {stat.label}
                                                    </div>
                                                </div>
                                                {i < 2 && (
                                                    <div
                                                        className="self-stretch"
                                                        style={{
                                                            width: "0.5px",
                                                            background: "rgba(255,255,255,0.1)",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-white text-sm font-bold">
                                                Start scaling today
                                            </div>
                                            <div className="text-xs text-white/40">
                                                No setup fees
                                            </div>
                                        </div>

                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/20 border border-pink-400">
                                            ➜
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </AnimatedSection>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-8 space-y-8">

                        <AnimatedSection delay={0.3} direction="right">
                            <div className="pb-20 md:pb-24 relative z-10 md:px-6 overflow-hidden bg-white">

                                {/* Ambient blobs */}

                                {/* ✨ Inner Card */}
                                <div className="relative p-[1px] rounded-[3rem] overflow-hidden">



                                    {/* ✨ Inner Clean Card */}
                                    <div className="relative p-[2px] rounded-[3rem] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_20px_60px_rgba(236,72,153,0.25)]">
                                        <div className="rounded-[3rem] backdrop-blur-xl bg-white/90 p-6 md:p-10">
                                            <div className="mb-10">
                                                <h2 className="text-[clamp(2rem,3vw,3rem)] font-extrabold tracking-tight leading-[1.1]">
                                                    <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                                        Send us a Message
                                                    </span>
                                                </h2>
                                                <p className="text-slate-400 text-sm mt-2">
                                                    We’ll get back to you within 24 hours.
                                                </p>
                                            </div>

                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </AnimatedSection>
                    </div>

                </div>

                {/* MAP SECTION */}
                <div className="mt-8 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-[450px] relative group">

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.386069539025!2d76.65618091838071!3d30.698388701971332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1712668532890!5m2!1sen!2sin"
                        className="w-full h-full border-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />

                    {/* LOCATION BADGE */}
                    <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <span className="block font-bold text-xs text-slate-900">
                                Visit Our Studio
                            </span>
                            <span className="text-xs text-slate-500">
                                Phase 8, Mohali
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactUs
