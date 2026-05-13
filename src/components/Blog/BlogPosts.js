"use client";
import React from 'react';
import blog1 from '@/components/img/blog1.png';
import blog2 from '@/components/img/blog2.png';
import blog3 from '@/components/img/blog3.png';
import blog4 from '@/components/img/blog4.png';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { FaCalendarAlt, FaUser, FaEye, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const BlogPosts = () => {
  const router = useRouter();
  const blogPostsData = [
    {
      id: 1,
      title: "Which eCommerce Platform is Best for SEO?",
      slug: "best-ecommerce-platform-seo",
      imageSrc: blog1,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    {
      id: 2,
      title: "What Is The Difference Between eCommerce And Dropshipping?",
      slug: "ecommerce-vs-dropshipping",
      imageSrc: blog2,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    {
      id: 3,
      title: "How to Integrate eCommerce Into Your Website?",
      slug: "integrate-ecommerce-website",
      imageSrc: blog3,
      description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
      author: "admin",
      date: "Nov 30, 2023",
      views: 30
    },
    // {
    //   id: 4,
    //   title: "How To Use AI In eCommerce?",
    // slug: "ai-in-ecommerce",
    //   imageSrc: blog4,
    //   description: "For any eCommerce website, SEO is very important for business development. We need SEO to generate traffic or sales....",
    //   author: "admin",
    //   date: "Nov 30, 2023",
    //   views: 30
    // },
  ];

  return (
    <section id="postblogs" className="py-24  relative z-10 px-6 font-roboto overflow-hidden " style={{
      background:
        "linear-gradient(160deg, #f0fdf9 0%, #ecfdf5 30%, #f0fdfa 60%, #f7fffe 100%)",
    }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto ">
        <AnimatedSection delay={0} direction="up" className="text-center mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
            </span>
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 capitalize tracking-tight">
            Our <span style={{
              background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Latest Blogs</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Latest Technological Trends & Insights + Actionable Advice to stay ahead in the digital landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogPostsData.map((post, index) => (
            <AnimatedSection key={post.id} delay={0.1 * index} direction="up" className="h-full">

              <div className="group relative flex flex-col rounded-[2.5rem] overflow-hidden 
        bg-white/70 backdrop-blur-xl border border-white/40 
        shadow-[0_20px_80px_rgba(0,0,0,0.08)] 
        hover:shadow-[0_30px_100px_rgba(236,72,153,0.15)] 
        transition-all duration-500 h-full hover:-translate-y-3">

                {/* 🔮 Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.15), transparent 60%)"
                  }}
                />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90" />

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-pink-600 tracking-wider shadow">
                      Technology
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">

                  {/* Meta */}
                  <div className="flex items-center gap-6 mb-5 text-xs font-semibold text-slate-400 tracking-wide">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-pink-500 text-sm" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEye className="text-orange-500 text-sm" />
                      <span>{post.views} Views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug 
            group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center shadow-sm">
                        <FaUser className="text-lg text-pink-500" />
                      </div>
                      <span className="text-medium font-bold text-slate-900 tracking-wide">
                        {post.author}
                      </span>
                    </div>

                    <button onClick={() => router.push(`/blog/${post.slug}`)} className="flex items-center gap-2 text-pink-600 text-medium font-extrabold tracking-wider group/link">
                      Read More
                      <FaArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </button>

                  </div>
                </div>
              </div>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
