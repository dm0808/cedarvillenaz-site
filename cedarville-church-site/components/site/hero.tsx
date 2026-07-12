import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/site/motion-reveal";

export function Hero() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden">
      <Image
        src="/images/homepageHeroImage.png"
        alt="Church congregation worshiping together"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,36,51,0.88),rgba(71,107,69,0.65),rgba(14,36,51,0.78))]" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-center px-4 py-24 md:px-8">
        <MotionReveal className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl leading-tight md:text-6xl">
            Knowing, Showing, and Going <em>The Way</em> of Jesus
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">
            We are a welcoming community of faith, growing together in Christ and
            serving Cedarville with love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="lg" className="border-white/60 bg-white/10 text-white hover:bg-white/20">
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
