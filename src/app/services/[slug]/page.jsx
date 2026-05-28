// app/services/[slug]/page.jsx

import ServiceDetailPage from "@/components/Servicedetailpage";

// ─── All valid slugs (deduplicated + typo fixed) ──────────────────────────────
const services = [
  // General / marketing
  "web-development",
  "app-development",
  "ecommerce",
  "ui-ux",
  "seo",
  "social-media",
  "email-marketing",
  "branding",

  // Design-to-code
  "psd-to-html",
  "sketch-to-html",
  "email-templates",

  // Dev stack
  "mobile-app-development",   // fixed: was "mobile-app-developmenet" (typo)
  "ui-ux-designing",
  "full-stack-development",
  "software-testing",
  "laravel-development",
  "nodejs-development",
  "php-development",
  "wordpress-website",
];

// Pre-generates static HTML for every slug at build time (Next.js App Router)
export async function generateStaticParams() {
  return services.map((slug) => ({ slug }));
}

// Page metadata (optional but good practice)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | Services`,
    description: `Learn more about our ${title} service.`,
  };
}

// The page itself — passes slug down to the detail component
export default async function Page({ params }) {
  const { slug } = await params;
  return <ServiceDetailPage serviceSlug={slug} />;
}