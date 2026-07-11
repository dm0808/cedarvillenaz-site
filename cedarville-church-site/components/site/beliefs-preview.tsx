import Link from "next/link";

import { beliefs } from "@/lib/site-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/site/motion-reveal";

export function BeliefsPreview() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              What We Believe
            </p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Anchored in Scripture</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/beliefs">Explore Beliefs</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <MotionReveal key={belief.title} transition={{ delay: index * 0.08 }}>
              <Card className="h-full border-border/60 bg-card/90">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{belief.title}</CardTitle>
                  <CardDescription>{belief.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-16 rounded-full bg-accent" />
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
