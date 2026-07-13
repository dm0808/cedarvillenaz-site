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
        image="/images/Children/IMG_5780.JPG"
        imageClassName="object-cover object-[center_34%] scale-[1.04]"
        overlayClassName="absolute inset-0 bg-[linear-gradient(110deg,rgba(14,36,51,0.86),rgba(14,36,51,0.52),rgba(71,107,69,0.34))]"
      />
      <MinistryGrid />
    </>
  );
}
