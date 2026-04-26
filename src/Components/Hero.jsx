import React from "react";
import FlipFadeText from "./ui/FlipFadeText";
import { Link } from "react-router";
import { LayoutDashboard, Search } from "lucide-react";
import { motion } from "framer-motion";
import ElipseDarkGradient from "./ui/ElipseDarkGradient";


export default function Hero() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:max-w-350 font-Inter mx-auto text-black dark:text-white select-none relative"
      >
        <div className="relative overflow-hidden bg-zinc-50 dark:bg-background w-full flex flex-col items-center pb-24 md:pb-32">
          <div className="absolute inset-0 bg-[url('/Images/Gridwithstars.svg')] bg-cover bg-center bg-no-repeat invert dark:invert-0 z-0 pointer-events-none mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          <ElipseDarkGradient  />

    
    
          <div className="mt-20 lg:mt-28 mb-8 text-[12px] md:text-sm font-Inter text-black/80 dark:text-white/80 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center justify-center gap-2 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all cursor-pointer z-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.03)]">
            Now it&apos;s time for comeback
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="size-4"
            >
              <path d="M216,128l-72,72V56Z" opacity="0.2"></path>
              <path d="M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"></path>
            </svg>
          </div>

          <div className="px-4 md:px-0 tracking-tighter max-w-4xl mx-auto font-extrabold text-center leading-[1.05] md:leading-none font-Inter text-[56px] sm:text-[64px] md:text-7xl lg:text-[78px] text-zinc-900 dark:text-gray-200 z-10">
            <span className="relative inline-block pb-2">
              Your{" "}
              <span className="text-black dark:text-white ]">
                unfair <span className="tracking-tight">advantage</span>
              </span>
              <img
                src="/Images/RoundedArrow.svg"
                alt="Rounded Arrow"
                className="absolute min-[420px]:right-1 -right-4 -bottom-20 md:right-25 md:-bottom-30 w-12 h-12 md:w-15 md:h-15 invert-0 dark:invert-100 md:-rotate-6 -rotate-40 opacity-70"
              />
            </span>
            <br />
            <span>in learning</span>
            <br />
            <span className="block mt-4 font-serif font-extralight italic text-center text-zinc-500 tracking-wide text-5xl md:text-[72px]">
              <FlipFadeText
                words={["reimagined.", "minimal.", "refined.", "optimized."]}
                interval={2500}
                letterDuration={0.5}
              />
            </span>
          </div>

          <p className="px-6 md:px-0 font-sans text-sm sm:text-base md:text-xm text-center leading-relaxed mt-10 md:mt-10 text-zinc-600 dark:text-[#909092] max-w-2xl mx-auto z-10 font-medium">
            Preparing for exams is already challenging enough.{" "}
            <br className="hidden md:block" /> Avoid further complications by
            ditching outdated study methods.
          </p>

          <div className="pt-10 z-20 flex flex-wrap justify-center items-center gap-4  mt-2">
            <Link to="/notes">
              <div className="bg-black text-white dark:bg-white hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors font-Inter font-semibold leading-tight text-sm dark:text-black flex items-center gap-2 py-3 px-6 rounded-full cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <Search size={16} />
                Search Notes
              </div>
            </Link>
            <Link to="/dashboard">
              <div className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white leading-tight font-Inter flex items-center gap-2 font-medium text-sm py-3 px-6 rounded-full border border-black/10 dark:border-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                <LayoutDashboard size={16} />
                DashBoard
              </div>
            </Link>
          </div>

          <div className="absolute bottom-0 w-full h-[50px] md:h-[100px] z-30 pointer-events-none"></div>
        </div>
      </motion.section>
    </>
  );
}
