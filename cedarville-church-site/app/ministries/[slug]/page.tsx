import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ministries, ministryPageCopy } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const ministry = ministries.find((item) => item.slug === params.slug);

  if (!ministry) {
    return { title: "Ministry" };
  }

  return {
    title: ministry.title,
    description: ministry.description,
  };
}

export default function MinistryDetailPage({ params }: { params: Params }) {
  const ministry = ministries.find((item) => item.slug === params.slug);
  if (!ministry) {
    notFound();
  }

  const copy = ministryPageCopy[ministry.slug];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60">
          <Image
            src={ministry.image}
            alt={ministry.title}
            fill
            className={`object-cover ${ministry.slug === "men-on-mission" ? "-scale-x-100" : ""}`}
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Ministry</p>
          <h1 className="mt-2 font-heading text-4xl md:text-5xl">{ministry.title}</h1>
          <p className="mt-4 text-muted-foreground">{copy.summary}</p>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {copy.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Button className="mt-6" asChild>
            <a href="/contact">Connect With This Ministry</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
