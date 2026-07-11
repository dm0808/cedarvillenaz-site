import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Calendar",
  description: "See upcoming events and monthly rhythms at Cedarville Nazarene.",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const recurringWeeklyEvents = [
  {
    title: "Bible Study",
    weekday: 2,
    time: "6:00 PM",
    scheduleLabel: "Every Tuesday at 6:00 PM",
    category: "Study",
    badgeClass: "bg-secondary/20 text-secondary",
  },
  {
    title: "Sunday School",
    weekday: 0,
    time: "9:30 AM",
    scheduleLabel: "Every Sunday at 9:30 AM",
    category: "Discipleship",
    badgeClass: "bg-accent/25 text-accent-foreground",
  },
  {
    title: "Sunday Worship",
    weekday: 0,
    time: "10:30 AM",
    scheduleLabel: "Every Sunday at 10:30 AM",
    category: "Worship",
    badgeClass: "bg-primary/20 text-primary",
  },
] as const;

export default function CalendarPage() {

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

  const monthEventsByDay = new Map<
    number,
    Array<{
      title: string;
      category: string;
      badgeClass: string;
    }>
  >();
  for (let day = 1; day <= daysInMonth; day += 1) {
    const weekday = new Date(currentYear, currentMonth, day).getDay();
    for (const event of recurringWeeklyEvents) {
      if (event.weekday === weekday) {
        const existing = monthEventsByDay.get(day) ?? [];
        monthEventsByDay.set(day, [
          ...existing,
          {
            title: event.title,
            category: event.category,
            badgeClass: event.badgeClass,
          },
        ]);
      }
    }
  }

  const displayCards = recurringWeeklyEvents.map((event) => ({
    key: event.title,
    title: event.title,
    content: event.scheduleLabel,
    category: event.category,
    badgeClass: event.badgeClass,
  }));

  return (
    <>
      <PageHero
        title="Calendar"
        subtitle="Stay up to date with worship gatherings, ministry opportunities, and special events."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1900&q=80"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mb-4 flex flex-wrap justify-end gap-2">
          <Button asChild variant="outline">
            <Link href="/calendar/print/week">Print This Week</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/calendar/print/month">Print This Month</Link>
          </Button>
        </div>
        <h2 className="font-heading text-3xl">{monthTitle}</h2>
        <div className="mt-6 grid grid-cols-7 gap-2 rounded-2xl border border-border/70 bg-card p-4">
          {days.map((day) => (
            <div key={day} className="pb-2 text-center text-sm font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
          {Array.from({ length: totalCells }).map((_, index) => {
            const date = index - firstWeekday + 1;
            const inMonth = date >= 1 && date <= daysInMonth;
            const dayEvents = inMonth ? monthEventsByDay.get(date) ?? [] : [];

            return (
              <div
                key={`day-cell-${index}`}
                className={`min-h-24 rounded-xl border border-border/60 p-2 ${
                  inMonth ? "bg-background/70" : "bg-background/30"
                }`}
              >
                <p className="text-xs font-semibold">{inMonth ? date : ""}</p>
                <div className="mt-2 space-y-1">
                  {dayEvents.map((event) => (
                    <p
                      key={`${date}-${event.title}`}
                      className={`rounded-lg px-2 py-1 text-xs font-medium ${event.badgeClass}`}
                      title={event.category}
                    >
                      {event.title}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {displayCards.map((event) => (
            <Card key={event.key}>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>{event.content}</p>
                <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${event.badgeClass}`}>
                  {event.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
