import { quickInfo } from "@/lib/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionReveal } from "@/components/site/motion-reveal";

export function QuickInfoCards() {
  return (
    <section className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-4 pb-16 md:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <MotionReveal
              key={item.title}
              transition={{ delay: index * 0.05, duration: 0.45 }}
            >
              <Card className="h-full border-border/70 bg-card/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="space-y-2 text-sm">
                    {item.lines.map((line) => (
                      <div key={line.label} className="flex items-center justify-between gap-3">
                        <span className="text-muted-foreground">{line.label}</span>
                        <span className="font-semibold text-foreground">{line.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </section>
  );
}
