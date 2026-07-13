import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ministries, ministryPageCopy } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);

  if (!ministry) {
    return { title: "Ministry" };
  }

  return {
    title: ministry.title,
    description: ministry.description,
  };
}

export default async function MinistryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  if (!ministry) {
    notFound();
  }

  const copy = ministryPageCopy[ministry.slug];
  const galleryImages = copy.galleryImages ?? [];
  const hasGalleryImages = galleryImages.length > 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60">
          <Image
            src={ministry.image}
            alt={ministry.title}
            fill
            className={`object-cover ${ministry.slug === "men-on-mission" ? "-scale-x-100" : ""} ${ministry.slug === "worship-prayer" ? "object-[center_38%] scale-[1.05]" : ""} ${ministry.slug === "adult-discipleship" ? "object-[center_58%] scale-[1.12]" : ""}`}
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Ministry</p>
          <h1 className="mt-2 font-heading text-4xl md:text-5xl">{ministry.title}</h1>
          <p className="mt-4 text-muted-foreground">{copy.summary}</p>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                {copy.galleryTitle ?? `${ministry.title} Photos`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {hasGalleryImages ? (
                <div className="space-y-4">
                  {copy.galleryDescription ? (
                    <p className="text-muted-foreground">{copy.galleryDescription}</p>
                  ) : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {galleryImages.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={image.className ?? "object-cover"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-border/70 bg-background/70 px-5 py-8 text-center">
                  <p className="text-muted-foreground">
                    {copy.galleryDescription ?? "Photos from this ministry will be featured here as they are added."}
                  </p>
                </div>
              )}
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
