"use client";
import React, { useState } from 'react';
import { FaLaptopCode, FaShoppingCart, FaBriefcase, FaPaintBrush, FaSearch, FaPenNib, FaCreditCard, FaShareAlt, FaCheckCircle, FaTrash, FaGripVertical } from 'react-icons/fa';
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function CustomizePackage() {
  const [selections, setSelections] = useState({
    websiteType: null,
    pages: null,
    design: null,
    features: []
  });
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const itemAnim = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const itemHover = {
    whileHover: {
      scale: 1.04,
      y: -4,
    },
  };
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Options configuration
  const itemsData = {
    websiteType: [
      { id: 'ecommerce', title: 'E-Commerce', icon: <FaShoppingCart />, price: 500 },
      { id: 'corporate', title: 'Corporate', icon: <FaBriefcase />, price: 300 },
      { id: 'portfolio', title: 'Portfolio', icon: <FaLaptopCode />, price: 200 },
      { id: 'landing', title: 'Landing Page', icon: <FaPaintBrush />, price: 100 },
    ],
    pages: [
      { id: '1-5', title: '1 - 5 Pages', price: 0 },
      { id: '5-10', title: '5 - 10 Pages', price: 100 },
      { id: '10-20', title: '10 - 20 Pages', price: 250 },
      { id: '20+', title: '20+ Pages', price: 500 },
    ],
    design: [
      { id: 'template', title: 'Template Based', desc: 'Standard pre-made design', price: 0 },
      { id: 'custom', title: 'Custom Design', desc: 'Tailored to your brand', price: 300 },
      { id: 'premium', title: 'Premium UI/UX', desc: 'High-end interactions & animations', price: 600 },
    ],
    features: [
      { id: 'seo', title: 'SEO Setup', icon: <FaSearch />, price: 150 },
      { id: 'content', title: 'Content Writing', icon: <FaPenNib />, price: 200 },
      { id: 'payment', title: 'Payment Gateway', icon: <FaCreditCard />, price: 100 },
      { id: 'social', title: 'Social Media Integrations', icon: <FaShareAlt />, price: 50 },
    ]
  };

  const calculateTotal = () => {
    let total = 0;
    if (selections.websiteType) total += selections.websiteType.price;
    if (selections.pages) total += selections.pages.price;
    if (selections.design) total += selections.design.price;
    selections.features.forEach(f => total += f.price);
    return total;
  };

  // Drag and Drop Handlers
  const handleDragStart = (e, item, category) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ itemId: item.id, category }));
    e.dataTransfer.effectAllowed = 'copyMove';
    setTimeout(() => {
      e.target.style.opacity = '0.5';
    }, 0);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setIsDraggingOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      const { itemId, category } = data;

      const fullItem = itemsData[category].find(i => i.id === itemId);
      if (!fullItem) return;

      setSelections(prev => {
        if (category === 'features') {
          if (!prev.features.some(f => f.id === fullItem.id)) {
            return { ...prev, features: [...prev.features, fullItem] };
          }
          return prev;
        } else {
          return { ...prev, [category]: fullItem };
        }
      });
    } catch (err) {
      console.error("Drop failed", err);
    }
  };

  const removeSelection = (category, itemId = null) => {
    setSelections(prev => {
      if (category === 'features') {
        return { ...prev, features: prev.features.filter(f => f.id !== itemId) };
      }
      return { ...prev, [category]: null };
    });
  };

  const handleSubmit = () => {
    if (!selections.websiteType || !selections.pages || !selections.design) {
      alert("Please drag and drop at least a Website Type, Pages count, and Design type into your package.");
      return;
    }
    setShowForm(true);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    alert(`Request Submitted!\nTotal estimated cost: $${calculateTotal()}\nWe will contact you at ${contactInfo.email} soon.`);
    setShowForm(false);
  };

  return (
    <section className="py-20 text-slate-900 min-h-screen px-4 md:px-8 bg-slate-50">
      <div className="container mx-auto ">
        <div className="text-center my-12">


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.03em] text-slate-900"

          >
            Build Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Custom Package
            </span>
          </motion.h2>
          <p className="text-slate-500 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Drag and drop the features you need into your package box to get an instant estimate.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Available Options (Draggable) */}
          <div className="lg:w-1/2 space-y-10">
            {/* Category 1 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative p-[1px] rounded-2xl bg-gradient-to-br"
            >
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl">
                <h2 className="text-xl font-semibold mb-5 flex items-center gap-3 text-slate-900 tracking-tight">
                  <span className="bg-gradient-to-br from-pink-600 to-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg">
                    1
                  </span>
                  Website Type
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {itemsData.websiteType.map((item) => (
                    <motion.div
                      key={item.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, item, "websiteType")
                      }
                      onDragEnd={handleDragEnd}
                      {...itemHover}
                      className="group relative bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-pink-500/10 via-orange-400/10 to-purple-500/10"></div>

                      <div className="relative flex items-center gap-3">
                        <div className="text-slate-400 group-hover:text-pink-500 transition">
                          <FaGripVertical />
                        </div>

                        <div className="text-2xl text-pink-600 group-hover:scale-110 transition">
                          {item.icon}
                        </div>

                        <h3 className="font-medium text-sm text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative p-[1px] rounded-2xl "
            >
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl">
                <h2 className="text-xl font-semibold mb-5 flex items-center gap-3 text-slate-900 tracking-tight">
                  <span className="bg-gradient-to-br from-blue-600 to-indigo-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg">
                    2
                  </span>
                  Number of Pages
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {itemsData.pages.map((item) => (
                    <motion.div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, "pages")}
                      onDragEnd={handleDragEnd}
                      {...itemHover}
                      className="group bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 cursor-grab shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <FaGripVertical className="text-slate-400 group-hover:text-blue-500 transition" />
                        <h3 className="font-medium text-sm text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative p-[1px] rounded-2xl "
            >
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl">
                <h2 className="text-xl font-semibold mb-5 flex items-center gap-3 text-slate-900 tracking-tight">
                  <span className="bg-gradient-to-br from-purple-600 to-pink-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg">
                    3
                  </span>
                  Design Quality
                </h2>

                <div className="space-y-4">
                  {itemsData.design.map((item) => (
                    <motion.div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, "design")}
                      onDragEnd={handleDragEnd}
                      {...itemHover}
                      className="group bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 cursor-grab shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <FaGripVertical className="text-slate-400 group-hover:text-purple-500 transition mt-1" />

                        <div>
                          <h3 className="font-medium text-sm text-slate-800">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Category 4 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative p-[1px] rounded-2xl "
            >
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl">
                <h2 className="text-xl font-semibold mb-5 flex items-center gap-3 text-slate-900 tracking-tight">
                  <span className="bg-gradient-to-br from-green-600 to-teal-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-lg">
                    4
                  </span>
                  Additional Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {itemsData.features.map((item) => (
                    <motion.div
                      key={item.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, item, "features")
                      }
                      onDragEnd={handleDragEnd}
                      {...itemHover}
                      className="group bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 cursor-grab shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <FaGripVertical className="text-slate-400 group-hover:text-green-500 transition" />

                        <div className="text-lg text-green-600 group-hover:scale-110 transition">
                          {item.icon}
                        </div>

                        <h3 className="font-medium text-sm text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Package Dropzone or Contact Form */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">

              {!showForm ? (
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative p-[1px] rounded-3xl transition-all duration-300 ${isDraggingOver
                      ? "bg-gradient-to-r  from-[#E879F9]  to-[#38BDF8] scale-[1.02]"
                      : "bg-gradient-to-br from-slate-200 to-slate-300"
                    }`}
                >
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 min-h-[600px] flex flex-col">

                    {/* HEADER */}
                    <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-6">
                      <div>
                        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                          Your Package
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                          Drag & build your custom setup
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="block text-slate-600 text-xs uppercase tracking-wider mb-1">
                          Estimated Total
                        </span>
                        <motion.span
                          key={calculateTotal()}
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent"
                        >
                          ${calculateTotal()}
                        </motion.span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 space-y-5">

                      {/* ITEM BLOCK TEMPLATE */}
                      {[
                        {
                          key: "websiteType",
                          label: "Website Type",
                          value: selections.websiteType,
                          render: (val) => (
                            <div className="flex items-center gap-3">
                              <span className="text-pink-600">{val.icon}</span>
                              <span>{val.title}</span>
                            </div>
                          ),
                        },
                        {
                          key: "pages",
                          label: "Pages",
                          value: selections.pages,
                          render: (val) => <span>{val.title}</span>,
                        },
                        {
                          key: "design",
                          label: "Design Level",
                          value: selections.design,
                          render: (val) => <span>{val.title}</span>,
                        },
                      ].map((block) => (
                        <div
                          key={block.key}
                          className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-slate-200"
                        >
                          <div className="text-[10px] font-bold tracking-widest text-slate-400 mb-2 uppercase">
                            {block.label}
                          </div>

                          <AnimatePresence mode="wait">
                            {block.value ? (
                              <motion.div
                                key="filled"
                                variants={itemAnim}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm hover:shadow-md transition"
                              >
                                <div className="font-medium text-sm text-slate-800">
                                  {block.render(block.value)}
                                </div>

                                <button
                                  onClick={() => removeSelection(block.key)}
                                  className="text-slate-400 hover:text-red-500 transition"
                                >
                                  <FaTrash />
                                </button>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="empty"
                                variants={itemAnim}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="text-slate-400 text-sm italic py-3 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-white"
                              >
                                Drag {block.label} here
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}

                      {/* FEATURES */}
                      <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-slate-200 flex-1">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 mb-2 uppercase">
                          Extra Features
                        </div>

                        <AnimatePresence>
                          {selections.features.length > 0 ? (
                            <motion.div className="space-y-2">
                              {selections.features.map((f) => (
                                <motion.div
                                  key={f.id}
                                  variants={itemAnim}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                  className="flex justify-between items-center bg-white p-3 rounded-lg border border-pink-200 shadow-sm hover:shadow-md transition"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-pink-600">{f.icon}</span>
                                    <span className="text-sm font-medium text-slate-800">
                                      {f.title}
                                    </span>
                                  </div>

                                  <button
                                    onClick={() =>
                                      removeSelection("features", f.id)
                                    }
                                    className="text-slate-400 hover:text-red-500 transition"
                                  >
                                    <FaTrash />
                                  </button>
                                </motion.div>
                              ))}
                            </motion.div>
                          ) : (
                            <motion.div
                              variants={itemAnim}
                              initial="initial"
                              animate="animate"
                              className="text-slate-400 text-sm italic py-6 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-white"
                            >
                              <span>Drag Features here</span>
                              <span className="text-xs mt-1">(Optional)</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleSubmit}
                      className="mt-8 group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] rounded-full text-white font-bold tracking-[0.2em] uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Complete My Package <FaCheckCircle className="inline ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                    
                    </motion.button>
                   
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="relative p-[1px] rounded-3xl bg-gradient-to-br  from-[#E879F9]  to-[#38BDF8]"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 min-h-[600px] flex flex-col">

                    <div className="mb-8 border-b border-slate-100 pb-6 flex justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-slate-900">
                          Finalize Request
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                          Enter your details
                        </p>
                      </div>

                      <button
                        onClick={() => setShowForm(false)}
                        className="text-sm text-pink-600 hover:text-pink-500"
                      >
                        ← Edit
                      </button>
                    </div>

                    <form onSubmit={handleFinalSubmit} className="space-y-5 flex-1">
                      {["name", "email", "phone"].map((field) => (
                        <div key={field}>
                          <label className="block text-sm font-medium text-slate-600 mb-1 capitalize">
                            {field}
                          </label>
                          <input
                            type={field === "email" ? "email" : "text"}
                            required={field !== "phone"}
                            value={contactInfo[field]}
                            onChange={(e) =>
                              setContactInfo({
                                ...contactInfo,
                                [field]: e.target.value,
                              })
                            }
                            className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                          />
                        </div>
                      ))}

                      <textarea
                        rows="4"
                        placeholder="Additional notes..."
                        value={contactInfo.message}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            message: e.target.value,
                          })
                        }
                        className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      />

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                         className="mt-8 group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] rounded-full text-white font-bold tracking-[0.2em] uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Submit Request  <FaCheckCircle className="inline ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                    
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
