import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/site/motion-reveal";

export function WelcomeSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <MotionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Welcome to Cedarville Church of the Nazarene
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight md:text-5xl">
            We&apos;re ordinary people who love an extraordinary God.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Our desire is to know Jesus deeply, grow in holiness through the Holy
            Spirit, and make Christlike disciples in our community and beyond.
          </p>
          <Button asChild className="mt-8" variant="secondary" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </MotionReveal>

        <MotionReveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/welcome-section.png.png"
              alt="Warm welcome at church gathering"
              fill
              className="object-cover"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
