import type { Metadata } from "next";

import { MinistryGrid } from "@/components/site/ministry-grid";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore ministry opportunities for every stage of life.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        title="Ministries"
        subtitle="From children to adults, we have places to connect, grow, and serve together."
        image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1900&q=80"
      />
      <MinistryGrid />
    </>
  );
}
