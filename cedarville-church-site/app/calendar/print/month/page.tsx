import type { Metadata } from "next";

import { PrintPageButton } from "@/components/site/print-page-button";

export const metadata: Metadata = {
  title: "Print This Month",
  description: "Printer-friendly monthly events for Cedarville Church of the Nazarene.",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const recurringWeeklyEvents = [
  {
    title: "Bible Study",
    weekday: 2,
    category: "Study",
  },
  {
    title: "Sunday School",
    weekday: 0,
    category: "Discipleship",
  },
  {
    title: "Sunday Worship",
    weekday: 0,
    category: "Worship",
  },
] as const;

const categoryPrintClass: Record<string, string> = {
  Worship: "border-l-4 border-l-blue-700 bg-blue-50 text-blue-900",
  Discipleship: "border-l-4 border-l-amber-700 bg-amber-50 text-amber-900",
  Study: "border-l-4 border-l-green-700 bg-green-50 text-green-900",
};

export default function PrintMonthPage() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthTitle = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(currentYear, currentMonth, 1));

  const firstWeekday = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  const monthEventsByDay = new Map<number, Array<{ title: string; category: string }>>();
  for (let day = 1; day <= daysInMonth; day += 1) {
    const weekday = new Date(currentYear, currentMonth, day).getDay();
    for (const event of recurringWeeklyEvents) {
      if (event.weekday === weekday) {
        const existing = monthEventsByDay.get(day) ?? [];
        monthEventsByDay.set(day, [...existing, { title: event.title, category: event.category }]);
      }
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl bg-white px-6 py-8 text-black print:max-w-none print:px-4 print:py-4">
      <header className="mb-6 border-b border-black/20 pb-4">
        <h1 className="font-heading text-3xl">Cedarville Church of the Nazarene</h1>
        <p className="mt-1 text-lg">This Month&apos;s Calendar Events</p>
        <p className="mt-1 text-sm">{monthTitle}</p>
        <div className="mt-4 print:hidden">
          <PrintPageButton label="Print This Month" />
        </div>
      </header>

      <section className="mb-6">
        <h2 className="font-heading text-xl">Event Categories</h2>
        <ul className="mt-2 space-y-2 text-sm">
          <li className="rounded px-2 py-1 border-l-4 border-l-blue-700 bg-blue-50 text-blue-900">Worship: Sunday Worship</li>
          <li className="rounded px-2 py-1 border-l-4 border-l-amber-700 bg-amber-50 text-amber-900">Discipleship: Sunday School</li>
          <li className="rounded px-2 py-1 border-l-4 border-l-green-700 bg-green-50 text-green-900">Study: Bible Study</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-2xl">{monthTitle}</h2>
        <div className="mt-4 grid grid-cols-7 gap-2 border border-black/20 p-2">
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-semibold">
              {day}
            </div>
          ))}
          {Array.from({ length: totalCells }).map((_, index) => {
            const date = index - firstWeekday + 1;
            const inMonth = date >= 1 && date <= daysInMonth;
            const dayEvents = inMonth ? monthEventsByDay.get(date) ?? [] : [];

            return (
              <div key={`print-month-day-cell-${index}`} className="min-h-20 border border-black/20 p-1">
                <p className="text-xs font-semibold">{inMonth ? date : ""}</p>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <p
                      key={`${date}-${event.title}`}
                      className={`rounded px-1 py-0.5 text-[10px] leading-tight ${categoryPrintClass[event.category] ?? "border-l-4 border-l-black bg-white text-black"}`}
                    >
                      {event.title}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
