"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ministries } from "@/lib/site-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MinistryGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Ministries
          </p>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl">Find Your Place to Grow</h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/ministries">View All Ministries</Link>
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ministries.map((ministry) => {
          const Icon = ministry.icon;
          return (
            <motion.div
              key={ministry.slug}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="group h-full overflow-hidden border-border/60 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    className={
                      ministry.slug === "men-on-mission"
                        ? "object-cover -scale-x-100"
                        : "object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                  />
                </div>
                <CardHeader>
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="font-heading text-2xl">{ministry.title}</CardTitle>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" size="sm">
                    <Link href={`/ministries/${ministry.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
