import BlogSlugClient from '@/components/Blog/BlogSlugClient';
import { assetImage } from "@/lib/assets";
const blog1 = assetImage("blog1.png");
const blog2 = assetImage("blog2.png");
const blog3 = assetImage("blog3.png");
const blog4 = assetImage("blog4.png");

const ALL_POSTS = {

  // ── Blog 1 ──────────────────────────────────────────────────────────────
  "best-ecommerce-platform-seo": {
    id: 1,
    title: "Which eCommerce Platform is Best for SEO in 2025?",
    category: "E-Commerce",
    slug: "best-ecommerce-platform-seo",
    author: "Webstep Team",
    date: "Mar 15, 2025",
    readTime: "6 min read",
    imageSrc: blog1,
    views: 1240,
    likes: 87,
    tags: ["SEO", "Shopify", "WordPress", "eCommerce", "Laravel"],
    content: [
      {
        type: "lead",
        text: "For any eCommerce website, SEO is the single most powerful lever for sustainable growth. Unlike paid ads, organic traffic compounds over time — making platform choice a long-term strategic decision.",
      },
      { type: "h2", text: "Why Platform Choice Matters for SEO" },
      {
        type: "p",
        text: "Search engines crawl your site's technical architecture, page speed, structured data, and URL patterns. Different platforms handle each of these uniquely — choosing the wrong one puts you at a structural disadvantage before you write a single word of content.",
      },
      { type: "h2", text: "Top Contenders at a Glance" },
      {
        type: "list",
        items: [
          "Shopify — Best out-of-the-box SEO with fast hosting and clean URL structures.",
          "WordPress + WooCommerce — Maximum flexibility for technical SEO customisation.",
          "Custom Laravel Store — Full control over every SEO element, ideal for scale.",
          "BigCommerce — Enterprise-grade structured data support.",
          "Squarespace — Clean markup but limited for advanced SEO strategies.",
        ],
      },
      { type: "h2", text: "Our Recommendation" },
      {
        type: "p",
        text: "For most growing businesses, Shopify delivers the best balance of speed and SEO out of the box. WordPress with WooCommerce wins when you need granular control. At serious scale, a custom Laravel store gives you full ownership over every technical detail. At Webstep Solutions, we've built all three — and we tailor our recommendation to your specific business goals.",
      },
      {
        type: "quote",
        text: "SEO is not about gaming the system. It is about learning how to play by the rules.",
        author: "Jordan Kasteler",
      },
      {
        type: "p",
        text: "Webstep Solutions has helped 300+ clients build and optimise their eCommerce stores across Shopify, WordPress, and Laravel. Our process starts with a full technical SEO audit and typically delivers a 40–120% increase in organic sessions within six months.",
      },
    ],
  },

  // ── Blog 2 ──────────────────────────────────────────────────────────────
  "shopify-vs-laravel-ecommerce": {
    id: 2,
    title: "Shopify vs Custom Laravel Store — What's Right for Your Business?",
    category: "E-Commerce",
    slug: "shopify-vs-laravel-ecommerce",
    imageSrc: blog2,
    author: "Webstep Team",
    date: "Apr 02, 2025",
    readTime: "7 min read",
    views: 940,
    likes: 62,
    tags: ["Shopify", "Laravel", "eCommerce", "Web Development"],
    content: [
      {
        type: "lead",
        text: "Shopify gets you live in days. Laravel gives you total control. Choosing between them isn't about which is better — it's about which is right for your business model and growth stage.",
      },
      { type: "h2", text: "When Shopify Wins" },
      {
        type: "p",
        text: "Shopify is ideal when you need to launch fast, don't have in-house developers, and your product catalog fits standard eCommerce patterns. Themes, payments, and shipping are handled out of the box — so your team can focus on marketing and sales.",
      },
      { type: "h2", text: "When Laravel Wins" },
      {
        type: "p",
        text: "A custom Laravel store makes sense when you have complex business logic, need deep third-party integrations, or want to own your infrastructure entirely. You're not paying monthly platform fees, and there are zero limits on what you can build.",
      },
      { type: "h2", text: "Key Differences at a Glance" },
      {
        type: "list",
        items: [
          "Launch speed — Shopify wins (days vs weeks).",
          "Customisation — Laravel wins (no restrictions).",
          "Monthly cost — Laravel wins long-term (no platform fees).",
          "Maintenance — Shopify wins (managed hosting, automatic updates).",
          "Scalability — Laravel wins for complex, high-volume stores.",
        ],
      },
      {
        type: "quote",
        text: "The best platform is the one that fits your business — not the one with the most features.",
        author: "Webstep Solutions",
      },
      {
        type: "p",
        text: "At Webstep Solutions, we've built 100+ stores on both platforms. We help you make the right call from day one — so you're not migrating two years later.",
      },
    ],
  },

  // ── Blog 3 ──────────────────────────────────────────────────────────────
  "ai-chatbots-customer-support-2025": {
    id: 3,
    title: "How AI Chatbots Are Transforming Customer Support in 2025",
    category: "AI Integration",
    slug: "ai-chatbots-customer-support-2025",
    imageSrc: blog3,
    author: "Webstep Team",
    date: "May 10, 2025",
    readTime: "6 min read",
    views: 760,
    likes: 51,
    tags: ["AI", "Chatbots", "Customer Support", "Automation"],
    content: [
      {
        type: "lead",
        text: "AI chatbots have moved from novelty to necessity. In 2025, businesses that haven't integrated conversational AI into their support workflows are already behind.",
      },
      { type: "h2", text: "What Modern AI Chatbots Can Do" },
      {
        type: "p",
        text: "Today's AI chatbots go far beyond scripted FAQ responses. They can qualify leads, process orders, handle returns, escalate complex issues to humans, and even follow up via email — all without human intervention.",
      },
      { type: "h2", text: "Real Business Impact" },
      {
        type: "list",
        items: [
          "70% reduction in first-response time for support tickets.",
          "24/7 availability — no missed leads during off-hours.",
          "Consistent, on-brand responses at any volume.",
          "Seamless handoff to human agents when needed.",
          "Integration with CRM, helpdesk, and eCommerce platforms.",
        ],
      },
      { type: "h2", text: "How Webstep Builds AI Integrations" },
      {
        type: "p",
        text: "We don't just drop a generic chatbot widget on your site. We map your customer journeys, train the model on your actual business data, and integrate it directly into your existing stack — whether that's Shopify, WordPress, a custom Laravel app, or a React frontend.",
      },
      {
        type: "quote",
        text: "The goal isn't to replace your team. It's to give them superpowers.",
        author: "Webstep Solutions",
      },
      {
        type: "p",
        text: "Webstep Solutions has delivered AI chatbot integrations for clients across retail, healthcare, and SaaS. If you're ready to automate intelligently, we'd love to show you what's possible.",
      },
    ],
  },

  // ── Blog 4 ──────────────────────────────────────────────────────────────
  "react-vs-nextjs-2025": {
    id: 4,
    title: "React vs Next.js in 2025 — Which Should You Build With?",
    category: "Web Development",
    slug: "react-vs-nextjs-2025",
    imageSrc: blog4,
    author: "Webstep Team",
    date: "Mar 15, 2025",
    readTime: "7 min read",
    views: 1280,
    likes: 94,
    tags: ["React", "Next.js", "Web Development", "Frontend"],
    content: [
      {
        type: "lead",
        text: "React and Next.js are both excellent — but they solve different problems. Picking the wrong one for your project adds unnecessary complexity and cost down the line.",
      },
      { type: "h2", text: "React: Pure UI, Total Freedom" },
      {
        type: "p",
        text: "React is a UI library — it handles the view layer and nothing else. Routing, data fetching, SSR, and deployment are all your responsibility. That freedom is powerful for highly custom apps, but it means more decisions upfront.",
      },
      { type: "h2", text: "Next.js: React with a Framework" },
      {
        type: "p",
        text: "Next.js builds on top of React and adds everything React leaves out: file-based routing, server-side rendering, static generation, API routes, image optimisation, and edge deployment. For most web projects, this is exactly what you need.",
      },
      { type: "h2", text: "When to Use Each" },
      {
        type: "list",
        items: [
          "Use React for SPAs, dashboards, and internal tools where SEO doesn't matter.",
          "Use Next.js for marketing sites, eCommerce, blogs, and any public-facing product.",
          "Use Next.js if you need SSR or SSG for performance and SEO.",
          "Use React if you're embedding into an existing backend (Rails, Laravel, etc.).",
          "Use Next.js for new greenfield projects — the defaults are sensible and fast.",
        ],
      },
      {
        type: "quote",
        text: "Next.js doesn't replace React. It just removes all the reasons not to use it.",
        author: "Webstep Solutions",
      },
      {
        type: "p",
        text: "At Webstep Solutions, we build with both daily — React for complex SPAs and internal tooling, Next.js for everything customer-facing. Reach out if you'd like our take on your specific project.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ALL_POSTS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const post = ALL_POSTS[slug] || null;
  return <BlogSlugClient post={post} />;
}
