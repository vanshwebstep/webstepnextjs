"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import 'reactjs-popup/dist/index.css';
import Modal from './Popup';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const Packages = () => {
    const [activeTab, setActiveTab] = useState('digital marketing');

    const tabs = ['website development', 'digital marketing', 'mobile app development'];

    const packages = [
        {
            title: 'Basic',
            des: "Great for growing businesses needing more features.",
            symbol: '$',
            price: 16,
            pricedes: '/mo',
            events: [
                { title: 'Up to 5 Pages' },
                { title: 'Priority Support' },
                { title: 'Advanced SEO' },
                { title: 'Custom Assets' },
            ],
            btn: "Choose Plan",
            isPopular: false
        },
        {
            title: 'Pro',
            des: "Everything you need to scale your digital presence.",
            symbol: '$',
            price: 44,
            pricedes: '/mo',
            events: [
                { title: 'Up to 15 Pages' },
                { title: '24/7 Support' },
                { title: 'Premium SEO & Analytics' },
                { title: 'Custom UI/UX Design' },
            ],
            btn: "Choose Plan",
            isPopular: true
        }
    ];

    return (
        <section className="py-24 min-h-screen px-4 md:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto">

                {/* Heading */}
                <div className="text-center mt-12 mb-20">
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
                        style={{
                            background: "linear-gradient(135deg, #E879F9 0%, #E879F9 40%, #38BDF8 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Our Packages
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${activeTab === tab
                                ? 'bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white shadow-lg'
                                : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200'
                                }`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`relative rounded-3xl p-8 flex flex-col backdrop-blur-xl ${pkg.isPopular
                                ? 'bg-white border-2 border-pink-500 shadow-[0_20px_60px_rgba(255,31,142,0.2)]'
                                : 'bg-white border border-slate-200 shadow-lg'
                                }`}
                        >

                            {/* Popular Tag */}
                            {pkg.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white px-5 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                    <FaStar className="text-yellow-300" /> Most Popular
                                </div>
                            )}

                            {/* Title */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900">{pkg.title}</h2>
                                <p className="text-slate-500 text-sm mt-2">{pkg.des}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8 border-b border-slate-100 pb-6">
                                <div className="flex items-end gap-2">
                                    <span className="text-xl text-slate-400">{pkg.symbol}</span>
                                    <span className="text-6xl font-extrabold text-slate-900">{pkg.price}</span>
                                    <span className="text-slate-400">{pkg.pricedes}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {pkg.events.map((event, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-pink-600 mt-1" />
                                            <span className="text-slate-600 text-sm">{event.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="mt-auto flex flex-col gap-4">
                                <Modal />

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] rounded-full text-white font-bold tracking-wide uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] transition-all duration-300"
                                >
                                    {pkg.btn}
                                    <FaCheckCircle className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link href="/customize-package">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white rounded-full font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all"
                        >
                            Create Custom Package
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Packages