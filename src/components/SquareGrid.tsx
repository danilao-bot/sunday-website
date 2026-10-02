import React from "react";

interface SquareGridProps {
  className?: string;
  color?: "amber" | "ink" | "chalk";
}

export const SquareGrid: React.FC<SquareGridProps> = ({
  className = "",
  color = "amber",
}) => {
  const colorMap = {
    amber: "bg-amber",
    ink: "bg-ink",
    chalk: "bg-chalk",
  };

  const bgClass = colorMap[color] || "bg-amber";

  return (
    <div className={`grid grid-cols-2 gap-2 w-fit ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${bgClass} rounded-sm shadow-sm animate-pulse`}
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: "1.2s",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SquareGrid;
