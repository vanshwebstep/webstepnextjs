import BlogSlugClient from '@/components/Blog/BlogSlugClient';
import blog1 from '@/components/img/blog1.png';
import blog2 from '@/components/img/blog2.png';
import blog3 from '@/components/img/blog3.png';
import blog4 from '@/components/img/blog4.png';
const ALL_POSTS = {
  "best-ecommerce-platform-seo": {
    id: 1,
    title: "Which eCommerce Platform is Best for SEO in 2024?",
    category: "Technology",
    slug: "best-ecommerce-platform-seo",
    author: "Admin",
    date: "Nov 30, 2023",
    readTime: "6 min read",
    imageSrc: blog1,
    views: 1240,
    likes: 87,
    tags: ["SEO", "eCommerce", "Shopify", "Digital Marketing"],
    content: [
      { type: "lead", text: "For any eCommerce website, SEO is the single most powerful lever for sustainable growth." },
      { type: "h2", text: "Why Platform Matters for SEO" },
      { type: "p", text: "Search engines crawl your site's technical architecture, page speed, structured data, and URL patterns." },
      { type: "h2", text: "Top Contenders at a Glance" },
      { type: "list", items: ["Shopify — Best balance of usability and SEO features.", "WooCommerce — Maximum flexibility.", "BigCommerce — Enterprise-grade support."] },
      { type: "h2", text: "Our Recommendation" },
      { type: "p", text: "For most growing businesses, Shopify delivers the best ROI." },
      { type: "quote", text: "SEO is not about gaming the system.", author: "Jordan Kasteler" },
    ],
  },
  "ecommerce-vs-dropshipping": {
    id: 2,
    title: "What Is The Difference Between eCommerce And Dropshipping?",
    category: "Business",
    slug: "ecommerce-vs-dropshipping",
    imageSrc: blog2,
    author: "Admin",
    date: "Nov 30, 2023",
    readTime: "5 min read",
    views: 980,
    likes: 54,
    tags: ["eCommerce", "Dropshipping", "Business"],
    content: [
      { type: "lead", text: "eCommerce and dropshipping are often confused but they are fundamentally different models." },
      { type: "h2", text: "What is eCommerce?" },
      { type: "p", text: "eCommerce means selling products online — you manage inventory, shipping, and fulfillment yourself." },
      { type: "h2", text: "What is Dropshipping?" },
      { type: "p", text: "Dropshipping means you sell products without holding inventory. The supplier ships directly to the customer." },
      { type: "quote", text: "Dropshipping is a business model, eCommerce is the channel.", author: "TechnoScore" },
    ],
  },
  "integrate-ecommerce-website": {
    id: 3,
    title: "How to Integrate eCommerce Into Your Website?",
    category: "Development",
    slug: "integrate-ecommerce-website",
    imageSrc: blog3,
    author: "Admin",
    date: "Nov 30, 2023",
    readTime: "7 min read",
    views: 760,
    likes: 41,
    tags: ["eCommerce", "Web Development", "Integration"],
    content: [
      { type: "lead", text: "Integrating eCommerce into your existing website doesn't have to be complicated." },
      { type: "h2", text: "Choose the Right Platform" },
      { type: "p", text: "Shopify, WooCommerce, and BigCommerce all offer embeddable solutions for existing sites." },
      { type: "h2", text: "Steps to Integrate" },
      { type: "list", items: ["Pick your eCommerce platform", "Install the plugin or embed code", "Set up payment gateway", "Test checkout flow"] },
      { type: "quote", text: "Start simple, then scale.", author: "TechnoScore" },
    ],
  },
  "ai-in-ecommerce": {
    id: 4,
    title: "How To Use AI In eCommerce?",
    category: "Development",
    slug: "ai-in-ecommerce",
    imageSrc: blog4,

    author: "Admin",
    date: "Nov 30, 2023",
    readTime: "7 min read",
    views: 760,
    likes: 41,
    tags: ["eCommerce", "Web Development", "Integration"],
    content: [
      { type: "lead", text: "Integrating eCommerce into your existing website doesn't have to be complicated." },
      { type: "h2", text: "Choose the Right Platform" },
      { type: "p", text: "Shopify, WooCommerce, and BigCommerce all offer embeddable solutions for existing sites." },
      { type: "h2", text: "Steps to Integrate" },
      { type: "list", items: ["Pick your eCommerce platform", "Install the plugin or embed code", "Set up payment gateway", "Test checkout flow"] },
      { type: "quote", text: "Start simple, then scale.", author: "TechnoScore" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ALL_POSTS).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

export default function BlogSlugPage({ params }) {
  const post = ALL_POSTS[params.slug] || null;

  return <BlogSlugClient post={post} />;
}