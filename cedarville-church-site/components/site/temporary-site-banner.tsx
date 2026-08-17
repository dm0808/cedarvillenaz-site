import { GOOGLE_CALENDAR_TIME_ZONE } from "@/lib/calendar";
import { type TemporaryBanner } from "@/lib/site-data";

function getCurrentDateInTimeZone(timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(new Date());
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Unable to determine current date for temporary banner.");
  }

  return `${year}-${month}-${day}`;
}

function isBannerActive(banner: TemporaryBanner) {
  return getCurrentDateInTimeZone(GOOGLE_CALENDAR_TIME_ZONE) <= banner.lastVisibleDate;
}

type TemporarySiteBannerProps = {
  banner: TemporaryBanner | null;
};

export function TemporarySiteBanner({ banner }: TemporarySiteBannerProps) {
  if (!banner || !isBannerActive(banner)) {
    return null;
  }

  return (
    <section className={banner.className ?? "bg-[#b91c1c] px-4 py-3 text-center text-sm font-semibold tracking-[0.04em] text-white md:text-base"}>
      {banner.message}
    </section>
  );
}
