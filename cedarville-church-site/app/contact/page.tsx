import type { Metadata } from "next";

import { churchInfo } from "@/lib/site-data";
import { ContactForm } from "@/components/site/contact-form";
import { ChurchMapClient } from "@/components/site/church-map-client";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-3xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Service Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                Sunday School: {churchInfo.sundaySchool}
                <span className="ml-2 text-sm text-muted-foreground/80">(Adult and Children&apos;s)</span>
              </p>
              <p>Sunday Worship: {churchInfo.sundayWorship}</p>
              <p>Tuesday Bible Study: 6:00 PM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Google Map Placeholder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-border bg-background/80 text-sm text-muted-foreground">
                Google Maps embed can be added here.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Find Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {churchInfo.addressLine1}
                <br />
                {churchInfo.addressLine2}
              </p>
              <ChurchMapClient />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
