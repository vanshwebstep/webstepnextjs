"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaLock, FaPaperPlane, FaHeadset } from 'react-icons/fa';
import { submitLead } from "@/lib/contentApi";
import { THANK_YOU_ROUTE } from "@/lib/routes";

const ExpertsForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await submitLead({
        source: "experts-form",
        name: formData.get("fname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("Describe"),
      });
      form.reset();
      router.push(THANK_YOU_ROUTE);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
     
        {/* Decorative inner glow */}
   <div className="flex flex-col h-full">
        <div className="mb-8">
          <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 mx-auto shadow-sm border border-pink-100/50  mb-6 group-hover:scale-110 transition-transform duration-500">
            <FaHeadset size={22} />
          </div>
          <h5 className="text-4xl font-black text-slate-900 text-center mb-2 capitalize tracking-tight">

            Consult Our <span
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >Experts</span>
          </h5>
          <p className="text-slate-500 text-medium font-medium"> Strategic technology advisory for your next digital breakthrough.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Full Name"
              required
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Business Email"
              required
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Direct Line"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 shadow-sm"
            />
          </div>
          <div className="group">
            <textarea
              name="Describe"
              id="requirement"
              placeholder="Tell us about your project goals"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-all duration-300 min-h-[120px] resize-none shadow-sm"
            ></textarea>
          </div>

          <div className="pt-2">
            <button disabled={submitting} className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r  from-[#FF1F8E] to-[#FF0055] rounded-2xl text-white font-bold tracking-[0.2em] capitalize overflow-hidden shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300 disabled:opacity-70">
              <span className="relative z-10">{submitting ? "Submitting..." : "Initiate Discussion"}</span>
              <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
            </button>

            {status.message && (
              <p className={`mt-4 text-sm font-semibold ${status.type === "success" ? "text-emerald-600" : "text-red-500"}`}>
                {status.message}
              </p>
            )}

            <div className="flex items-center justify-center gap-2 mt-6 text-slate-500">
              <FaLock className="text-[10px]" />
              <span className="text-[12px] capitalize tracking-widest font-bold">End-to-End Encryption</span>
            </div>
          </div>
        </form>
      </div>

   
    </>
  );
};

export default ExpertsForm;
