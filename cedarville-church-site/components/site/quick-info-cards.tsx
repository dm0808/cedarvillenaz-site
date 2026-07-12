import { quickInfo } from "@/lib/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionReveal } from "@/components/site/motion-reveal";

export function QuickInfoCards() {
  const [serviceTimes, kidsMinistry, findUs, welcomeCard] = quickInfo;
  const WelcomeIcon = welcomeCard.icon;

  return (
    <section className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-4 pb-16 md:px-8">
      <MotionReveal transition={{ duration: 0.45 }}>
        <Card className="overflow-hidden rounded-[2rem] border-border/70 bg-card/95 shadow-xl backdrop-blur">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <WelcomeIcon className="h-5 w-5" />
              </span>
              <div>
                <CardTitle className="font-heading text-3xl md:text-4xl">{welcomeCard.title}...</CardTitle>
                <p className="mt-1 text-lg text-muted-foreground">
                  No matter where you are on your journey.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[serviceTimes, kidsMinistry, findUs].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-card px-5 py-5 shadow-sm"
                  >
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-2xl">{item.title}</h3>
                      {"titleSuffix" in item ? (
                        <span className="pt-1 text-right text-sm text-muted-foreground">
                          {item.titleSuffix}
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-5 space-y-2 text-sm">
                      {item.lines.map((line) => {
                        const value = "value" in line ? line.value : undefined;

                        return (
                          <div
                            key={`${line.label}-${value ?? ""}`}
                            className={value ? "flex items-center justify-between gap-3" : "space-y-1"}
                          >
                            <span className="text-muted-foreground">{line.label}</span>
                            {value ? (
                              <span className="font-semibold text-foreground">{value}</span>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </MotionReveal>
    </section>
  );
}
