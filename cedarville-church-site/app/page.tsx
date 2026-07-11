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
      <Hero />
      <QuickInfoCards />
      <WelcomeSection />
      <MinistryGrid />
      <BeliefsPreview />
      <EventsSection />
    </>
  );
}
