"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("@/components/site/church-map").then((mod) => mod.ChurchMap),
  {
    ssr: false,
  },
);

export function ChurchMapClient() {
  return <DynamicMap />;
}
