import type { Metadata } from "next";

import { BeliefsPreview } from "@/components/site/beliefs-preview";
import { EventsSection } from "@/components/site/events-section";
import { Hero } from "@/components/site/hero";
import { MinistryGrid } from "@/components/site/ministry-grid";
import { QuickInfoCards } from "@/components/site/quick-info-cards";
import { WelcomeSection } from "@/components/site/welcome-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "To Live, Love, and Look Like Jesus at Cedarville Church of the Nazarene.",
};

export default function Home() {
  return (
    <>
      <section className="bg-[color:var(--color-destructive)] px-4 py-3 text-center text-sm font-semibold tracking-[0.08em] text-white md:text-base">
        Tonight Church Bonfire is CANCELED due to inclement weather
      </section>
      <Hero />
      <QuickInfoCards />
      <WelcomeSection />
      <MinistryGrid />
      <BeliefsPreview />
      <EventsSection />
    </>
  );
}
