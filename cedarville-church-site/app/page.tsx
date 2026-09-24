import type { Metadata } from "next";
import Image from "next/image";

import { BeliefsPreview } from "@/components/site/beliefs-preview";
import { EventsSection } from "@/components/site/events-section";
import { Hero } from "@/components/site/hero";
import { MinistryGrid } from "@/components/site/ministry-grid";
import { QuickInfoCards } from "@/components/site/quick-info-cards";
import { TemporarySiteBanner } from "@/components/site/temporary-site-banner";
import { WelcomeSection } from "@/components/site/welcome-section";
import { homePageTemporaryBanner } from "@/lib/site-data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Home",
  description:
    "To Live, Love, and Look Like Jesus at Cedarville Church of the Nazarene.",
};

export default function Home() {
  return (
    <>
      <TemporarySiteBanner banner={homePageTemporaryBanner} />
      <Hero />
      <QuickInfoCards />
      <section className="mx-auto w-full max-w-7xl px-4 py-4 md:px-8 md:py-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
          <Image
            src="/images/WorshipService.png"
            alt="Worship service at Cedarville Church of the Nazarene"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      <WelcomeSection />
      <MinistryGrid />
      <BeliefsPreview />
      <EventsSection />
    </>
  );
}
