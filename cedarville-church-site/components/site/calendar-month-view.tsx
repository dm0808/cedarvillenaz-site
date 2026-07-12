"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

import {
  calendarCategoryStyles,
  type CalendarEvent,
  fetchGoogleCalendarEvents,
  formatDateKey,
  formatEventTime,
  formatMonthLabel,
  formatMonthParam,
  getMonthGrid,
  getMonthRange,
  GOOGLE_CALENDAR_ID,
  groupEventsByDay,
} from "@/lib/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ViewState = "idle" | "loading" | "ready" | "error";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const googleCalendarDirectUrl = `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(GOOGLE_CALENDAR_ID)}`;

export function CalendarMonthView() {
  const [currentMonth, setCurrentMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [status, setStatus] = useState<ViewState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [eventsByDay, setEventsByDay] = useState<Map<string, CalendarEvent[]>>(new Map());
  const [monthEvents, setMonthEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    let cancelled = false;
    const { monthStart, monthEnd } = getMonthRange(currentMonth);

    setStatus("loading");
    setErrorMessage(null);

    fetchGoogleCalendarEvents(monthStart, monthEnd)
      .then((events) => {
        if (cancelled) {
          return;
        }

        setMonthEvents(events);
        setEventsByDay(groupEventsByDay(events));
        setStatus("ready");
      })
      .catch((error: unknown) => {
        if (cancelled) {
          return;
        }

        setErrorMessage(error instanceof Error ? error.message : "Unable to load calendar events.");
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [currentMonth]);

  const { firstWeekday, daysInMonth, totalCells } = getMonthGrid(currentMonth);
  const monthParam = formatMonthParam(currentMonth);
  const weekDateParam = formatDateKey(currentMonth);

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={() => setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
            <ChevronLeft className="h-4 w-4" />
            Previous Month
          </Button>
          <Button type="button" variant="outline" onClick={() => setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
            Next Month
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href={`/calendar/print/week?date=${weekDateParam}`}>Print This Week</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/calendar/print/month?month=${monthParam}`}>Print This Month</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={googleCalendarDirectUrl} target="_blank" rel="noreferrer">
              Open in Google Calendar
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-border/70">
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <CardTitle className="font-heading text-3xl">{formatMonthLabel(currentMonth)}</CardTitle>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
            {Object.entries(calendarCategoryStyles).map(([category, styles]) => (
              <span key={category} className={`inline-flex rounded-full px-3 py-1 ${styles.legend}`}>
                {category}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {status === "loading" ? <p className="mb-4 text-sm text-muted-foreground">Loading calendar events...</p> : null}
          {status === "error" ? <p className="mb-4 text-sm text-red-600">{errorMessage}</p> : null}

          <div className="grid grid-cols-7 gap-2 rounded-2xl border border-border/70 bg-card p-4">
            {days.map((day) => (
              <div key={day} className="pb-2 text-center text-sm font-semibold text-muted-foreground">
                {day}
              </div>
            ))}
            {Array.from({ length: totalCells }).map((_, index) => {
              const date = index - firstWeekday + 1;
              const inMonth = date >= 1 && date <= daysInMonth;
              const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
              const dayKey = inMonth ? formatDateKey(dayDate) : "";
              const dayEvents = inMonth ? eventsByDay.get(dayKey) ?? [] : [];

              return (
                <div
                  key={`calendar-day-cell-${index}`}
                  className={`min-h-36 rounded-xl border border-border/60 p-2 ${inMonth ? "bg-background/70" : "bg-background/30"}`}
                >
                  <p className="text-xs font-semibold">{inMonth ? date : ""}</p>
                  <div className="mt-2 space-y-1">
                    {dayEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className={`rounded-lg px-2 py-1 text-[11px] font-medium leading-tight ${calendarCategoryStyles[event.category].screen}`}
                        title={event.location ? `${event.title} • ${event.location}` : event.title}
                      >
                        <div>{event.title}</div>
                        <div className="mt-0.5 text-[10px] opacity-85">{formatEventTime(event)}</div>
                      </div>
                    ))}
                    {dayEvents.length > 3 ? (
                      <p className="px-1 text-[11px] font-medium text-muted-foreground">+{dayEvents.length - 3} more</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {monthEvents.length === 0 && status === "ready" ? (
              <Card className="md:col-span-2">
                <CardContent className="py-6 text-sm text-muted-foreground">No public events were found for this month.</CardContent>
              </Card>
            ) : null}
            {monthEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle className="font-heading text-2xl">{event.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{new Intl.DateTimeFormat("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(event.start))}</p>
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${calendarCategoryStyles[event.category].screen}`}>
                      {event.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>{formatEventTime(event)}</p>
                  {event.location ? <p>{event.location}</p> : null}
                  {event.description ? <p>{event.description}</p> : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
