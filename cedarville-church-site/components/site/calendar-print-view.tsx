"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  calendarCategoryStyles,
  type CalendarEvent,
  fetchGoogleCalendarEvents,
  formatDateKey,
  formatDayLabel,
  formatEventTime,
  formatMonthLabel,
  formatMonthParam,
  getMonthGrid,
  getMonthRange,
  getWeekRange,
  groupEventsByDay,
  parseDateParam,
  parseMonthParam,
} from "@/lib/calendar";
import { PrintPageButton } from "@/components/site/print-page-button";

type CalendarPrintViewProps = {
  mode: "month" | "week";
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarPrintView({ mode }: CalendarPrintViewProps) {
  const searchParams = useSearchParams();
  const initialDate = useMemo(() => {
    if (mode === "month") {
      return parseMonthParam(searchParams.get("month")) ?? new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    }

    return parseDateParam(searchParams.get("date")) ?? new Date();
  }, [mode, searchParams]);

  const [activeDate, setActiveDate] = useState(initialDate);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setActiveDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    let cancelled = false;
    const startDate = mode === "month" ? getMonthRange(activeDate).monthStart : getWeekRange(activeDate).weekStart;
    const endDate = mode === "month" ? getMonthRange(activeDate).monthEnd : getWeekRange(activeDate).weekEnd;

    setErrorMessage(null);
    fetchGoogleCalendarEvents(startDate, endDate)
      .then((response) => {
        if (!cancelled) {
          setEvents(response);
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setErrorMessage(error instanceof Error ? error.message : "Unable to load events.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeDate, mode]);

  const groupedEvents = groupEventsByDay(events);

  if (mode === "month") {
    const { firstWeekday, daysInMonth, totalCells } = getMonthGrid(activeDate);

    return (
      <main className="mx-auto w-full max-w-5xl bg-white px-6 py-8 text-black print:max-w-none print:px-4 print:py-4">
        <header className="mb-6 border-b border-black/20 pb-4">
          <h1 className="font-heading text-3xl">Cedarville Church of the Nazarene</h1>
          <p className="mt-1 text-lg">This Month&apos;s Calendar Events</p>
          <p className="mt-1 text-sm">{formatMonthLabel(activeDate)}</p>
          <div className="mt-4 flex flex-wrap gap-2 print:hidden">
            <Link
              href={`/calendar/print/month?month=${formatMonthParam(new Date(activeDate.getFullYear(), activeDate.getMonth() - 1, 1))}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Month
            </Link>
            <Link
              href={`/calendar/print/month?month=${formatMonthParam(new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 1))}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold"
            >
              Next Month
              <ChevronRight className="h-4 w-4" />
            </Link>
            <PrintPageButton label="Print This Month" />
          </div>
        </header>

        {errorMessage ? <p className="mb-4 text-sm text-red-700">{errorMessage}</p> : null}

        <section className="mb-6">
          <h2 className="font-heading text-xl">Event Categories</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {Object.entries(calendarCategoryStyles).map(([category, styles]) => (
              <li key={category} className={`rounded px-2 py-1 ${styles.print}`}>
                {category}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl">{formatMonthLabel(activeDate)}</h2>
          <div className="mt-4 grid grid-cols-7 gap-2 border border-black/20 p-2">
            {days.map((day) => (
              <div key={day} className="text-center text-sm font-semibold">
                {day}
              </div>
            ))}
            {Array.from({ length: totalCells }).map((_, index) => {
              const date = index - firstWeekday + 1;
              const inMonth = date >= 1 && date <= daysInMonth;
              const dayDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), date);
              const dayEvents = inMonth ? groupedEvents.get(formatDateKey(dayDate)) ?? [] : [];

              return (
                <div key={`print-month-cell-${index}`} className="min-h-24 border border-black/20 p-1">
                  <p className="text-xs font-semibold">{inMonth ? date : ""}</p>
                  <div className="mt-1 space-y-1">
                    {dayEvents.map((event) => (
                      <p key={event.id} className={`rounded px-1 py-0.5 text-[10px] leading-tight ${calendarCategoryStyles[event.category].print}`}>
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

  const { weekStart } = getWeekRange(activeDate);
  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return {
      key: formatDateKey(date),
      date,
      label: formatDayLabel(date),
      events: groupedEvents.get(formatDateKey(date)) ?? [],
    };
  });

  return (
    <main className="mx-auto w-full max-w-4xl bg-white px-6 py-8 text-black print:max-w-none print:px-4 print:py-4">
      <header className="mb-6 border-b border-black/20 pb-4">
        <h1 className="font-heading text-3xl">Cedarville Church of the Nazarene</h1>
        <p className="mt-1 text-lg">This Week&apos;s Calendar Events</p>
        <div className="mt-4 flex flex-wrap gap-2 print:hidden">
          <Link
            href={`/calendar/print/week?date=${formatDateKey(new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() - 7))}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Week
          </Link>
          <Link
            href={`/calendar/print/week?date=${formatDateKey(new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() + 7))}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm font-semibold"
          >
            Next Week
            <ChevronRight className="h-4 w-4" />
          </Link>
          <PrintPageButton label="Print This Week" />
        </div>
      </header>

      {errorMessage ? <p className="mb-4 text-sm text-red-700">{errorMessage}</p> : null}

      <section className="space-y-3">
        {weekDays.map((day) => (
          <div key={day.key} className="border border-black/20 p-3">
            <p className="font-semibold">{day.label}</p>
            {day.events.length === 0 ? (
              <p className="mt-1 text-sm text-black/70">No events scheduled.</p>
            ) : (
              <ul className="mt-1 space-y-2 text-sm">
                {day.events.map((event) => (
                  <li key={event.id} className={`rounded px-2 py-1 ${calendarCategoryStyles[event.category].print}`}>
                    <div className="font-semibold">{event.title}</div>
                    <div>{formatEventTime(event)}</div>
                    {event.location ? <div>{event.location}</div> : null}
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
