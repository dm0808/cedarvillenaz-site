import type { Metadata } from "next";

import { CalendarMonthView } from "@/components/site/calendar-month-view";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Calendar",
  description: "See live events from Cedarville Nazarene's Google Calendar with custom month navigation and printable views.",
};

export default function CalendarPage() {
  return (
    <>
      <PageHero
        title="Calendar"
        subtitle="Stay up to date with worship gatherings, ministry opportunities, and special events from our live church calendar."
        image="/images/mural.jpg"
        imageClassName="object-cover object-center scale-[1.06]"
        overlayClassName="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,36,51,0.88),rgba(51,49,50,0.58),rgba(116,132,143,0.52))]"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <CalendarMonthView />
      </section>
    </>
  );
}
