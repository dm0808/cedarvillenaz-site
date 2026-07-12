"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#333132] text-white backdrop-blur dark:border-white/10 dark:bg-[#333132] dark:text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative block h-12 w-12 shrink-0">
            <Image
              src="/icons/logoIcon.png"
              alt="Cedarville Church logo symbol"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </span>
          <div>
            <p className="font-heading text-lg font-semibold leading-none">Cedarville Church of the Nazarene</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white dark:text-white/90 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden dark:border-white/20 dark:text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/15 bg-[#333132] text-white transition-all md:hidden dark:border-white/10 dark:bg-[#333132] dark:text-white",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
