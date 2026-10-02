import React from "react";
import SquareGrid from "@/components/SquareGrid";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-chalk/90 backdrop-blur-sm transition-opacity">
      <div className="flex flex-col items-center gap-4">
        <SquareGrid color="amber" />
        <span className="font-display text-xs tracking-widest uppercase text-ink/60 font-semibold">
          Loading
        </span>
      </div>
    </div>
  );
}
