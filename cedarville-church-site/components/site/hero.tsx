import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/site/motion-reveal";

export function Hero() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2200&q=80"
        alt="Church congregation worshiping together"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,36,51,0.88),rgba(71,107,69,0.65),rgba(14,36,51,0.78))]" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-center px-4 py-24 md:px-8">
        <MotionReveal className="max-w-3xl text-background">
          <p className="mb-4 inline-flex rounded-full border border-background/40 bg-background/10 px-4 py-1 text-sm font-semibold tracking-wide">
            A Family of Faith in Cedarville
          </p>
          <h1 className="font-heading text-4xl leading-tight md:text-6xl">
            To Live, Love, and Look Like Jesus
          </h1>
          <p className="mt-6 max-w-2xl text-base text-background/90 md:text-lg">
            A welcoming community of faith growing together in Christ and serving
            Cedarville with love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="lg" className="border-background/60 bg-background/10 text-background hover:bg-background/20">
              <Link href="https://www.youtube.com/@CedarvilleChurchofNazarene" target="_blank" rel="noreferrer">
                Watch Latest Sermon
              </Link>
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
