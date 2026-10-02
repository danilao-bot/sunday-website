import React from "react";
import { cn } from "@/lib/utils";

interface BlendBandProps {
  from: "amber" | "chalk" | "ink" | "royal";
  to: "amber" | "chalk" | "ink" | "royal";
  className?: string;
}

export default function BlendBand({ from, to, className }: BlendBandProps) {
  const blendClass = `blend-${from}-to-${to}`;

  return (
    <div
      className={cn("blend-band", blendClass, className)}
      aria-hidden="true"
      role="presentation"
    />
  );
}
