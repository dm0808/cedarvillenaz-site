import type { Metadata } from "next";
import Link from "next/link";

import { churchInfo, navLinks, socialLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { ChurchMapClient } from "@/components/site/church-map-client";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan your visit, ask a question, or send a prayer request.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to connect with you and help you plan your visit."
        image="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1900&q=80"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Let&apos;s Connect
          </p>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you are planning your first visit, have a question about the church,
            or want someone to pray with you, we would love to hear from you.
          </p>
        </div>

        <Card className="mt-12 border-border/60 bg-card/95">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              Get In Touch
            </p>
            <CardTitle className="font-heading text-3xl">Send Us a Message</CardTitle>
            <CardDescription className="text-base">
              Reach out with a prayer request, a question, or anything you would like us to know.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/95">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Service Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Sundays</p>
                <p>Sunday School: {churchInfo.sundaySchool}</p>
                <p>Sunday Worship: {churchInfo.sundayWorship}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Midweek</p>
                <p>Tuesday Bible Study: 6:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/95">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Address & Contact Info</CardTitle>
              <CardDescription>
                We would love to welcome you in person and help you feel at home.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium text-foreground">Visit</p>
                <p>
                  {churchInfo.name}
                  <br />
                  {churchInfo.addressLine1}
                  <br />
                  {churchInfo.addressLine2}
                </p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Phone: <a className="text-foreground transition-colors hover:text-secondary" href={`tel:${churchInfo.phone.replace(/[^\d]/g, "")}`}>{churchInfo.phone}</a>
                </p>
                <p>
                  Email: <a className="text-foreground transition-colors hover:text-secondary" href={`mailto:${churchInfo.email}`}>{churchInfo.email}</a>
                </p>
              </div>
              <Button asChild variant="secondary">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${churchInfo.addressLine1}, ${churchInfo.addressLine2}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Card className="border-border/60 bg-card/95">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Helpful Links</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/95">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              Times & Location
            </p>
            <h3 className="mt-2 font-heading text-3xl md:text-4xl">Find Us In Cedarville</h3>
          </div>
        </div>
        <ChurchMapClient className="w-full overflow-hidden border-y border-border/60 bg-card/95" />
      </section>
    </>
  );
}
