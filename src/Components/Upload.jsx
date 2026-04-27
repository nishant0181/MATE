import React from "react";

export default function Upload() {
  return (
    <div className=" md:h-[230dvh]  h-[180dvh]     my-18 mx-auto max-w-6xl flex flex-col items-center select-none">
      <div className="tracking-tighter max-w-4xl mx-auto leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold ">Upload Notes</div>
      <div className="font-Inter text-zinc-700 dark:text-[#909090] text-sm  max-w-md text-center mx-auto px-4 mt-4">Participate in the chain of knowledge sharing,  and help others.</div>
      <iframe
        src="https://tally.so/embed/rj0gaR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        className="h-full w-full overflow-x-hidden webkit-scrollbar px-4"
      ></iframe>
      <div className="text-sm text-zinc-500 mt-4 text-center px-4 font-Inter max-w-lg mx-auto">
        we will update and respond as soon as possible. Thank you for investing your valuable time for this contribution.
      </div>
    </div>
  );
}
