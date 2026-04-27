import React from "react";
import { motion } from "framer-motion";
export default function About() {
  const feats = [
    "Minimal Distraction",
    " Fast, efficient, and always accessible",
    "Minimal UI",
  ];
  return (
    <div className="pb-4 py-12   flex flex-col justify-center items-center gap-4 mx-auto max-w-7xl select-none ">
      <div className=" tracking-tighter max-w-4xl mx-auto  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold  ">
        About MATE
      </div>
      <div className="max-w-xl mx-auto font-Inter text-lg text-zinc-900 dark:text-gray-200 z-10 font-medium  select-none text-center py-8 px-4">
        Because studying shouldn't feel like a Boring Stuff-MATE makes your
        notes readable, relatable, and ready for exam day.
      </div>
      <div className="flex mx-12 md:mx-0 flex-col gap-4 justify-center items-center max-w-xl w-full px-8">
        {feats.map((feat, index) => (
          <div
            className="relative z-0 flex flex-col bg-white dark:bg-[oklch(.205_0_0)]   border-neutral-300 dark:border-black border-2 rounded-lg p-4 
       


        shadow-[7px_7px_0px_-1px_rgba(0,0,0,0.10)]
        dark:shadow-[7px_7px_0px_-1px_rgba(0,0,0,0.80)]
        transition-all duration-300 hover:translate-x-1 hover:translate-y-1 
            hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.10)]
        dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]

 w-full

        dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
        bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]
        
        font-medium
        "
            key={index}
          >
            • {feat}
          </div>
        ))}
      </div>
      <div className="text-center max-w-sm text-sm mt-8">
        MATE  started because we were tired of the 'information overload.' We help you skip the noise and get straight to the stuff that matters.
      </div>
    </div>
  );
}
