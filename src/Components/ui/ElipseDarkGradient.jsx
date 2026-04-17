import React from "react";

export default function ElipseDarkGradient() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-50  dark:from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 dark:from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 dark:from-background to-transparent z-0 pointer-events-none"></div>
    </>
  );
}
