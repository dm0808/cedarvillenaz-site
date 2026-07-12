import type { Metadata } from "next";
import { Suspense } from "react";

import { CalendarPrintView } from "@/components/site/calendar-print-view";

export const metadata: Metadata = {
  title: "Print This Week",
  description: "Printer-friendly weekly events from Cedarville Church of the Nazarene's live calendar.",
};

export default function PrintWeekPage() {
  return (
    <Suspense>
      <CalendarPrintView mode="week" />
    </Suspense>
  );
}
