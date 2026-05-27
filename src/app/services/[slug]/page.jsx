// app/services/[slug]/page.jsx

import ServiceDetailPage from "@/components/Servicedetailpage";


const services = [
  "web-development",
  "seo",
  "digital-marketing",
  "app-development",
  "mobile-app-development",
  "branding",
  "ecommerce",
  "psd-to-html",
  "sketch-to-html",
  "email-templates",
  "mobile-app-developmenet",
  "ui-ux-designing",
  "full-stack-development",
  "software-testing",
  "laravel-development",
  "nodejs-development",
  "php-development",
  "wordpress-website",
  "ui-ux",
  "social-media",
  "email-marketing",
  "branding"


];

export async function generateStaticParams() {
  return services.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServiceDetailPage serviceSlug={slug} />;
}