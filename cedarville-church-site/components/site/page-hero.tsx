import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[36svh] overflow-hidden border-b border-border/60">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,36,51,0.86),rgba(14,36,51,0.45),rgba(71,107,69,0.7))]" />
      <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
        <span className="relative block h-12 w-12">
          <Image
            src="/icons/logoIcon.png"
            alt="Cedarville Church logo symbol"
            fill
            className="object-contain"
            sizes="48px"
          />
        </span>
      </div>
      <div className="relative mx-auto flex min-h-[36svh] w-full max-w-7xl items-end px-4 py-12 md:px-8">
        <div className="max-w-3xl text-background">
          <h1 className="font-heading text-4xl md:text-5xl">{title}</h1>
          <p className="mt-3 text-base text-background/90 md:text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
