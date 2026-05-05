import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingPhrases = [
  "Organizing the pages...",
  "Brewing coffee...",
  "Fetching your material...",
  "Writing exam answers...",
  "Getting things ready...",
  "Almost there, you are the best...",
  "Preparing your workspace..."
];

const getDocumentName = (url) => {
  if (!url) return "Loading...";
  const fileName = decodeURIComponent(url.split("/").pop() ?? "");
  const cleanedName = fileName.replace(/\.pdf$/i, "");
  return cleanedName || "Loading...";
};

export default function PDFLoadingSkeleton({ documentUrl, setIsOpen, documentName }) {
   documentName = documentName || getDocumentName(documentUrl);
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Rotating phrases every 2.5 seconds
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 2500);

    // Asymptotic progress bar logic
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 96) return 96;
        // Increase quickly at first, then slow down
        const diff = 100 - oldProgress;
        const step = Math.max(diff * 0.1, 0.5); // take 10% of remaining distance
        return oldProgress + step;
      });
    }, 200);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="h-dvh flex flex-col">
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        {/* Placeholder for ZoomToolbar to prevent layout shift */}
        <div className="h-[2px]"></div>

        {/* Top Toolbar (Desktop) Mock */}
        <div className="flex justify-between items-center gap-4 bg-[#0c0c0c] px-4 py-2 rounded-lg shadow-lg z-10 w-full">
          <div className="text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]">
            MATE
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-Inter text-white truncate max-w-[200px] md:max-w-xs">
              {documentName.length > 30
                ? (documentName.slice(0, 30) + "...")
                    .toUpperCase()
                    .replace(/-/g, " ")
                : documentName.toUpperCase().replace(/-/g, " ")}
            </div>
          </div>
          <div className="hidden md:flex gap-2 text-white items-center">
            <div className="bg-[#2a2d2f] h-8 w-32 rounded"></div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="bg-[#2a2d2f] h-8 w-24 rounded"></div>
            <button
              onClick={() => setIsOpen && setIsOpen(false)}
              className="cursor-pointer rounded bg-[#2a2d2f] px-4 py-3 text-xs font-semibold text-white hover:bg-[#2a2a2a] transition-colors"
            >
              Back
            </button>
          </div>
        </div>

        {/* Document Content Skeleton UI */}
        <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            {/* Sleek Minimalist Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-[3px] border-zinc-800 border-t-white rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-zinc-400 text-[10px] font-bold tracking-widest mt-[2px]">
                  PDF
                </span>
              </div>
            </div>
            {/* New Progress & Typography UI */}
            <div className="mt-12 flex flex-col items-center max-w-xs w-full">
              {/* Animated Text */}
              <div className="h-8 mb-6 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-400 text-sm font-medium tracking-wide text-center"
                  >
                    {loadingPhrases[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-zinc-800/80 rounded-full overflow-hidden backdrop-blur-sm ">
                <motion.div 
                  className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
              <div className="mt-4 flex justify-between w-full text-[10px] text-zinc-500 font-bold tracking-widest">
                <span>LOADING</span>
                <span>{Math.floor(progress)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Toolbar (Mobile) Mock */}
        <div className="flex md:hidden justify-between items-center gap-4 bg-[#0c0c0c] px-6 py-2 rounded-lg shadow-lg z-10 ">
          <div className="bg-[#2a2d2f] h-8 w-10 rounded animate-pulse"></div>
          <div className="bg-[#2a2d2f] h-8 w-24 rounded animate-pulse"></div>
          <div className="flex justify-between items-center gap-2 ">
            <button
              onClick={() => setIsOpen && setIsOpen(false)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2a2d2f] p-2 px-4 py-2 text-xs font-semibold text-white hover:bg-[#2a2a2a] transition-colors "
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
