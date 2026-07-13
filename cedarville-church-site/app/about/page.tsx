import type { Metadata } from "next";
import Image from "next/image";

import { MotionReveal } from "@/components/site/motion-reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Learn who we are and what shapes our mission in Cedarville.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Leadership Team"
        subtitle="A family-focused church committed to holiness, discipleship, and serving our community with love."
        image="/images/Exterior.JPG"
        imageClassName="object-cover object-[center_56%] scale-[1.06]"
        overlayClassName="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,36,51,0.84),rgba(51,49,50,0.46),rgba(71,107,69,0.42))]"
      />
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <MotionReveal>
          <h2 className="font-heading text-3xl md:text-4xl">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Cedarville Church of the Nazarene exists to help people know Jesus,
            grow together in grace, and shine His love throughout Cedarville and
            beyond. We are a multigenerational church where families, students,
            and seniors worship side by side.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you are exploring faith for the first time or looking for a
            church home, there is space for you here.
          </p>
        </MotionReveal>

        <MotionReveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1700&q=80"
              alt="Church members greeting one another"
              fill
              className="object-cover"
            />
          </div>
        </MotionReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To Live, Love, and Look Like Jesus through worship, discipleship, and service.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Our Heart</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We desire to be a welcoming, prayerful, and spirit-filled church family.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Our Community</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We love Cedarville and seek to serve our neighbors with practical compassion.
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
