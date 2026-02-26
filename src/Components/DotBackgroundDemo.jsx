import { cn } from "@/lib/utils";
import React from "react";

export default function DotBackgroundDemo() {
  return (
    <div
      className="relative flex h-40 w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#2a2d2f_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      
    </div>
  );
}
