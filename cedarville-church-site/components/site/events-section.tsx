import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";

import { upcomingEvents } from "@/lib/site-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Upcoming Events
          </p>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl">Join Us This Season</h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/calendar">View Calendar</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {upcomingEvents.map((event) => (
          <Card key={event.title} className="border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-wide text-secondary">
                {event.date}
              </CardDescription>
              <CardTitle className="font-heading text-2xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                {event.time}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {event.location}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
