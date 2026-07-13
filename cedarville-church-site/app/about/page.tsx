import type { Metadata } from "next";

import { MotionReveal } from "@/components/site/motion-reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Learn who we are and what shapes our mission in Cedarville.",
};

const leadershipTeam = [
  { slot: "Pastor", name: "Add Name", title: "Lead Pastor" },
  { slot: "Board Member", name: "Add Name", title: "Board Member" },
  { slot: "Board Member", name: "Add Name", title: "Board Member" },
  { slot: "Board Member", name: "Add Name", title: "Board Member" },
  { slot: "Treasurer / Secretary", name: "Add Name", title: "Treasurer / Secretary" },
  { slot: "Children's Pastor", name: "Add Name", title: "Children's Pastor" },
] as const;

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

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              Meet Our Leaders
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl">Serving Cedarville With Faithful Leadership</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              This page is set up with dedicated space for your pastor, board members,
              treasurer and secretary, and children&apos;s pastor. Each card includes a
              photo area plus editable name and title text.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadershipTeam.map((member, index) => (
            <MotionReveal key={`${member.slot}-${index}`} transition={{ delay: index * 0.05 }}>
              <Card className="h-full overflow-hidden border-border/60 bg-card/95 shadow-sm">
                <div className="flex aspect-[4/3] items-center justify-center border-b border-border/60 bg-[linear-gradient(145deg,rgba(14,36,51,0.10),rgba(71,107,69,0.10),rgba(116,132,143,0.16))] px-6 text-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      Photo Space
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add a portrait or ministry photo here
                    </p>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    {member.slot}
                  </p>
                  <CardTitle className="font-heading text-2xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.title}</p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <MotionReveal>
          <Card className="border-border/60 bg-primary/5">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Next Step</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              When you are ready, I can replace each placeholder with the actual names,
              titles, and photos for every person on the leadership team.
            </CardContent>
          </Card>
        </MotionReveal>
      </section>
    </>
  );
}
