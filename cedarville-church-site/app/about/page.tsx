import type { Metadata } from "next";
import Image from "next/image";

import { MotionReveal } from "@/components/site/motion-reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Learn who we are and what shapes our mission in Cedarville.",
};

const leadershipTeam = [
  {
    slot: "Pastor",
    name: "Jesse Aaron",
    title: "Pastor",
    image: "/images/Staff Board/Jesse wide.png",
    imageClassName: "object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-105",
    summary:
      "Jesse serves as pastor, helping guide the church through preaching, prayer, discipleship, and pastoral care.",
  },
  {
    slot: "Board Member",
    name: "Nick Hopkins",
    title: "Board Member",
    summary:
      "Nick serves on the church board, offering spiritual encouragement and practical leadership in support of the church family.",
  },
  {
    slot: "Board Member",
    name: "Ted Kerns",
    title: "Board Member",
    image: "/images/Staff Board/Ted.jpeg",
    imageClassName: "object-cover object-[50%_22%] scale-[1.06] transition-transform duration-500 group-hover:scale-[1.12]",
    summary:
      "Ted serves on the church board, helping strengthen the mission of the church through wisdom, service, and steady leadership.",
  },
  {
    slot: "Board Member",
    name: "Rachel Pennington",
    title: "Board Member",
    summary:
      "Rachel serves on the church board, supporting the ministry of the church with care, counsel, and a heart for the congregation.",
  },
  {
    slot: "Treasurer / Secretary",
    name: "Pam Green",
    title: "Treasurer / Secretary",
    image: "/images/Staff Board/Pam.PNG",
    imageClassName: "object-cover object-[50%_22%] transition-transform duration-500 group-hover:scale-105",
    summary:
      "Pam serves as treasurer and secretary, helping steward the administrative and financial life of the church with faithfulness.",
  },
  {
    slot: "Sunday School Superintendent",
    name: "Cheryl Kerns",
    title: "Sunday School Superintendent",
    image: "/images/Staff Board/Cheryl.jpeg",
    imageClassName: "object-cover object-[50%_20%] scale-[1.04] transition-transform duration-500 group-hover:scale-[1.1]",
    summary:
      "Cheryl supports children and families through Sunday School leadership, helping create spaces where young hearts can grow in faith.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Leadership Team"
        subtitle="A family-focused church committed to holiness, discipleship, and serving our community with love."
        image="/images/Exterior.JPG"
        imageClassName="object-cover object-[72%_58%] scale-[1.03]"
        overlayClassName="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,36,51,0.90),rgba(14,36,51,0.62),rgba(71,107,69,0.26))]"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              Meet Our Leaders
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl">Serving Cedarville With Faithful Leadership</h2>
          </div>
        </MotionReveal>

        <div className="mt-12 space-y-8">
          {leadershipTeam.map((member, index) => (
            <MotionReveal key={`${member.slot}-${index}`} transition={{ delay: index * 0.05 }}>
              <Card className="group overflow-hidden border-border/60 bg-card/95 transition-shadow duration-300 hover:shadow-xl">
                <div className="grid gap-0 md:grid-cols-[minmax(0,18rem)_1fr]">
                  {"image" in member ? (
                    <div className="relative aspect-[4/3] overflow-hidden md:h-full md:min-h-[20rem] md:aspect-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={"imageClassName" in member ? member.imageClassName : "object-cover object-center"}
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(145deg,rgba(14,36,51,0.10),rgba(71,107,69,0.10),rgba(116,132,143,0.16))] px-6 text-center md:h-full md:min-h-[20rem] md:aspect-auto">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                          Photo Space
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Add a portrait or ministry photo here
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col justify-center">
                    <CardHeader className="pb-3 md:px-8 md:pt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                        {member.slot}
                      </p>
                      <CardTitle className="font-heading text-3xl md:text-4xl">{member.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="md:px-8 md:pb-8">
                      <p className="text-base font-medium text-foreground/90">{member.title}</p>
                      <CardDescription className="mt-4 max-w-2xl text-base">
                        {member.summary}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </section>

    </>
  );
}
