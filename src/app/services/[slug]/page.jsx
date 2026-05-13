"use client";
import { use } from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function Page({ params }) {
  const { slug } = use(params);
  console.log("Slug:", slug);
  return <ServiceDetailPage serviceSlug={slug} />;
}
