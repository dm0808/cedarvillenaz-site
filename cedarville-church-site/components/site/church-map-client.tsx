"use client";

import dynamic from "next/dynamic";

type ChurchMapClientProps = {
  className?: string;
};

const DynamicMap = dynamic(
  () => import("@/components/site/church-map").then((mod) => mod.ChurchMap),
  {
    ssr: false,
  },
);

export function ChurchMapClient({ className }: ChurchMapClientProps) {
  return <DynamicMap className={className} />;
}
