import type { Metadata } from "next";
import { Suspense } from "react";

import { CalendarPrintView } from "@/components/site/calendar-print-view";

export const metadata: Metadata = {
  title: "Print This Month",
  description: "Printer-friendly monthly events from Cedarville Church of the Nazarene's live calendar.",
};

export default function PrintMonthPage() {
  return (
    <Suspense>
      <CalendarPrintView mode="month" />
    </Suspense>
  );
}
