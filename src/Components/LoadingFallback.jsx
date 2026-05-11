import React from "react";
import { Loader2 } from "lucide-react";

export default function LoadingFallback() {
  return (
    <div className="flex-1 w-full h-full min-h-[50vh] flex flex-col items-center justify-center bg-transparent">
      <Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" />
      <span className="mt-4 text-sm font-medium text-muted-foreground animate-pulse">Loading...</span>
    </div>
  );
}
