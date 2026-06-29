"use client";
import React, { useState } from "react";
import { FaLock, FaPaperPlane } from "react-icons/fa";
import { submitLead } from "@/lib/contentApi";

const ContactForm = ({ light = false }) => {
    const [status, setStatus] = useState({ type: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const inputClasses = light 
        ? "w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF1F8E] transition-all duration-300 shadow-sm"
        : "w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 → placeholder:text-slate-500 focus:outline-none focus:border-[#FF1F8E] transition-all duration-300 shadow-[0_0_15px_rgba(255,31,142,0.1)] focus:shadow-[0_0_20px_rgba(255,31,142,0.3)] backdrop-blur-md";

    const labelClasses = light ? "text-slate-500" : "text-slate-500";
    const subTextClasses = light ? "text-slate-400" : "text-slate-500";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        setSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            await submitLead({
                source: "contact-form",
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                location: formData.get("location"),
                message: formData.get("project_details"),
            });
            form.reset();
            setStatus({ type: "success", message: "Message sent successfully. We will contact you shortly." });
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Full Name*"
                        required
                        className={inputClasses}
                    />
                </div>
                <div className="group">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number*"
                        required
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                        className={inputClasses}
                    />
                </div>
                <div className="group">
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Location"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="group">
                <textarea
                    name="project_details"
                    id="Project"
                    placeholder="Project Details*"
                    required
                    className={`${inputClasses} min-h-[160px] resize-y`}
                ></textarea>
            </div>

            <div className="flex flex-col gap-6 pt-0">
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                className={`peer appearance-none w-5 h-5 border border-slate-200 rounded ${light ? 'bg-white' : 'bg-white/5'} checked:bg-[#FF1F8E] checked:border-[#FF1F8E] transition-all cursor-pointer`}
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={`text-sm ${labelClasses} text-[#000] group-hover:opacity-100 transition-opacity`}>
                            I agree to the <a href="#" className="text-[#FF1F8E] hover:underline font-bold">Privacy Policy</a>
                        </span>
                    </label>

                    <div className={`flex items-center gap-2 ${subTextClasses}`}>
                        <FaLock className="text-xs" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">We guarantee the protection of your data</span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] rounded-full text-white font-bold tracking-[0.2em] uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                    <span className="relative z-10">{submitting ? "Sending..." : "Send Message"}</span>
                    <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                </button>

                {status.message && (
                    <p className={`text-sm font-semibold ${status.type === "success" ? "text-emerald-600" : "text-red-500"}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
