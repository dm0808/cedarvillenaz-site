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
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1900&q=80"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <CalendarMonthView />
      </section>
    </>
  );
}
