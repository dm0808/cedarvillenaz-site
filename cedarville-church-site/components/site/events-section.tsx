"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock3, MapPin } from "lucide-react";

import { fetchGoogleCalendarEvents, formatEventTime, type CalendarEvent } from "@/lib/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ViewState = "idle" | "loading" | "ready" | "error";

function formatEventDate(event: CalendarEvent) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(event.start));
}

export function EventsSection() {
  const [status, setStatus] = useState<ViewState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    let cancelled = false;
    const start = new Date();
    const end = new Date(start);
    end.setMonth(end.getMonth() + 12);

    setStatus("loading");
    setErrorMessage(null);

    fetchGoogleCalendarEvents(start, end)
      .then((events) => {
        if (cancelled) {
          return;
        }

        setUpcomingEvents(events.slice(0, 4));
        setStatus("ready");
      })
      .catch((error: unknown) => {
        if (cancelled) {
          return;
        }

        setErrorMessage(error instanceof Error ? error.message : "Unable to load upcoming events.");
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Upcoming Events
          </p>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl">Join Us</h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/calendar">View Calendar</Link>
        </Button>
      </div>

      {status === "loading" ? <p className="mb-4 text-sm text-muted-foreground">Loading upcoming events...</p> : null}
      {status === "error" ? <p className="mb-4 text-sm text-red-600">{errorMessage}</p> : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-wide text-secondary">
                {formatEventDate(event)}
              </CardDescription>
              <CardTitle className="font-heading text-2xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                {formatEventTime(event)}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {event.location || "Cedarville Church of the Nazarene"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {status === "ready" && upcomingEvents.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No upcoming public events are scheduled right now.</p>
      ) : null}
    </section>
  );
}
