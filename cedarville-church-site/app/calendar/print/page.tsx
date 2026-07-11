import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printable Calendar",
  description: "Printer-friendly weekly schedule for Cedarville Church of the Nazarene.",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const recurringWeeklyEvents = [
  {
    title: "Bible Study",
    weekday: 2,
    scheduleLabel: "Every Tuesday at 6:00 PM",
  },
  {
    title: "Sunday School",
    weekday: 0,
    scheduleLabel: "Every Sunday at 9:30 AM",
  },
  {
    title: "Sunday Worship",
    weekday: 0,
    scheduleLabel: "Every Sunday at 10:30 AM",
  },
] as const;

export default function PrintableCalendarPage() {
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

  const monthEventsByDay = new Map<number, string[]>();
  for (let day = 1; day <= daysInMonth; day += 1) {
    const weekday = new Date(currentYear, currentMonth, day).getDay();
    for (const event of recurringWeeklyEvents) {
      if (event.weekday === weekday) {
        const existing = monthEventsByDay.get(day) ?? [];
        monthEventsByDay.set(day, [...existing, event.title]);
      }
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl bg-white px-6 py-8 text-black print:max-w-none print:px-4 print:py-4">
      <header className="mb-6 border-b border-black/20 pb-4">
        <h1 className="font-heading text-3xl">Cedarville Church of the Nazarene</h1>
        <p className="mt-1 text-lg">Printable Weekly Schedule</p>
        <p className="mt-1 text-sm">{monthTitle}</p>
      </header>

      <section className="mb-8">
        <h2 className="font-heading text-2xl">Recurring Weekly Events</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-base">
          {recurringWeeklyEvents.map((event) => (
            <li key={event.title}>{event.scheduleLabel}</li>
          ))}
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
            const eventLabels = inMonth ? monthEventsByDay.get(date) ?? [] : [];

            return (
              <div key={`print-day-cell-${index}`} className="min-h-20 border border-black/20 p-1">
                <p className="text-xs font-semibold">{inMonth ? date : ""}</p>
                <div className="mt-1 space-y-1">
                  {eventLabels.map((label) => (
                    <p key={`${date}-${label}`} className="text-[10px] leading-tight">
                      {label}
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
