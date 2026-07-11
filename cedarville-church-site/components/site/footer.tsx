import Link from "next/link";
import Image from "next/image";

import { churchInfo, navLinks, socialLinks } from "@/lib/site-data";

const icons = {
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm9.2 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
    </svg>
  ),
  YouTube: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.1V8.9l5.8 3.1-5.8 3.1Z" />
    </svg>
  ),
} as const;

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/70 bg-primary px-4 py-12 text-primary-foreground md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="relative block h-10 w-10 shrink-0">
              <Image
                src="/icons/logoIcon.png"
                alt="Cedarville Church logo symbol"
                fill
                className="object-contain"
                sizes="40px"
              />
            </span>
          </div>
          <p className="font-heading text-2xl">Cedarville Church of the Nazarene</p>
          <p className="mt-3 text-sm text-primary-foreground/80">
            A warm and welcoming church family committed to helping people know and
            follow Jesus.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.facebook.com/cedarnaz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.8v3h2.5v8h3.2z" />
                </svg>
                Follow us on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Service Times</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>Sunday School: {churchInfo.sundaySchool}</li>
            <li>Sunday Worship: {churchInfo.sundayWorship}</li>
            <li>Tuesday Bible Study: 6:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>{churchInfo.addressLine1}</li>
            <li>{churchInfo.addressLine2}</li>
            <li>{churchInfo.phone}</li>
            <li>{churchInfo.email}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = icons[social.label as keyof typeof icons];
              if (!Icon) {
                return null;
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:border-accent hover:text-accent"
                >
                  {Icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
        <p>
          {new Date().getFullYear()} Cedarville Church of the Nazarene. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
