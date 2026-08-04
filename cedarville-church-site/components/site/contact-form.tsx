"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { churchInfo } from "@/lib/site-data";

export function ContactForm() {
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSubmitting(true);
    setSubmitNotice(null);
    setSubmitError(null);

    formData.set("_subject", subject || `Message from ${name || "website visitor"}`);
    formData.set("_replyto", email);
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    if (message) {
      formData.set("message", message);
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${churchInfo.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitNotice("Thank you for reaching out to us. We will get back to you as soon as we can.");
      form.reset();
    } catch {
      setSubmitError("We could not send your message right now. Please try again in a few minutes.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Your Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we pray for you or help you get connected?"
          required
          className="min-h-[260px]"
        />
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
      {submitNotice ? (
        <p className="text-sm text-secondary">
          {submitNotice}
        </p>
      ) : null}
      {submitError ? (
        <p className="text-sm text-destructive">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
