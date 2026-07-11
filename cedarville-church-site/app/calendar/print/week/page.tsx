import type { Metadata } from "next";

import { PrintPageButton } from "@/components/site/print-page-button";

export const metadata: Metadata = {
  title: "Print This Week",
  description: "Printer-friendly weekly events for Cedarville Church of the Nazarene.",
};

const recurringWeeklyEvents = [
  {
    title: "Bible Study",
    weekday: 2,
    time: "6:00 PM",
    category: "Study",
  },
  {
    title: "Sunday School",
    weekday: 0,
    time: "9:30 AM",
    category: "Discipleship",
  },
  {
    title: "Sunday Worship",
    weekday: 0,
    time: "10:30 AM",
    category: "Worship",
  },
] as const;

const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const categoryPrintClass: Record<string, string> = {
  Worship: "border-l-4 border-l-blue-700 bg-blue-50 text-blue-900",
  Discipleship: "border-l-4 border-l-amber-700 bg-amber-50 text-amber-900",
  Study: "border-l-4 border-l-green-700 bg-green-50 text-green-900",
};

export default function PrintWeekPage() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());

  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    const weekday = date.getDay();

    const events = recurringWeeklyEvents.filter((event) => event.weekday === weekday);

    return {
      key: `${date.toISOString()}-${weekday}`,
      label: `${weekdayNames[weekday]}, ${new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date)}`,
      events,
    };
  });

  return (
    <main className="mx-auto w-full max-w-4xl bg-white px-6 py-8 text-black print:max-w-none print:px-4 print:py-4">
      <header className="mb-6 border-b border-black/20 pb-4">
        <h1 className="font-heading text-3xl">Cedarville Church of the Nazarene</h1>
        <p className="mt-1 text-lg">This Week&apos;s Calendar Events</p>
        <div className="mt-4 print:hidden">
          <PrintPageButton label="Print This Week" />
        </div>
      </header>

      <section className="space-y-3">
        {weekDays.map((day) => (
          <div key={day.key} className="border border-black/20 p-3">
            <p className="font-semibold">{day.label}</p>
            {day.events.length === 0 ? (
              <p className="mt-1 text-sm text-black/70">No recurring events scheduled.</p>
            ) : (
              <ul className="mt-1 space-y-2 text-sm">
                {day.events.map((event) => (
                  <li
                    key={`${day.key}-${event.title}`}
                    className={`rounded px-2 py-1 ${categoryPrintClass[event.category] ?? "border-l-4 border-l-black bg-white text-black"}`}
                  >
                    {event.title} at {event.time} ({event.category})
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
