import type { Metadata } from "next";

import { BeliefsPreview } from "@/components/site/beliefs-preview";
import { EventsSection } from "@/components/site/events-section";
import { Hero } from "@/components/site/hero";
import { MinistryGrid } from "@/components/site/ministry-grid";
import { QuickInfoCards } from "@/components/site/quick-info-cards";
import { WelcomeSection } from "@/components/site/welcome-section";
import { GOOGLE_CALENDAR_TIME_ZONE } from "@/lib/calendar";

export const revalidate = 60;

const BONFIRE_BANNER_LAST_DAY = "2026-08-14";

function shouldShowBonfireBanner() {
  const currentDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: GOOGLE_CALENDAR_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  return currentDate <= BONFIRE_BANNER_LAST_DAY;
}

export const metadata: Metadata = {
  title: "Home",
  description:
    "To Live, Love, and Look Like Jesus at Cedarville Church of the Nazarene.",
};

export default function Home() {
  const showBonfireBanner = shouldShowBonfireBanner();

  return (
    <>
      {showBonfireBanner ? (
        <section className="bg-[#b91c1c] px-4 py-3 text-center text-sm font-semibold tracking-[0.04em] text-white md:text-base">
          Tonight&apos;s Church Bonfire is canceled due to inclement weather
        </section>
      ) : null}
      <Hero />
      <QuickInfoCards />
      <WelcomeSection />
      <MinistryGrid />
      <BeliefsPreview />
      <EventsSection />
    </>
  );
}
