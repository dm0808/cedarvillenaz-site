"use client";

import { Button } from "@/components/ui/button";

type PrintPageButtonProps = {
  label: string;
};

export function PrintPageButton({ label }: PrintPageButtonProps) {
  return (
    <Button type="button" onClick={() => window.print()}>
      {label}
    </Button>
  );
}
