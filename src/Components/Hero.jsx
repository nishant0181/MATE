import React from "react";
import FlipFadeText from "./ui/FlipFadeText";
import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <section className="md:max-w-350 font-Inter mx-auto text-white select-none relative">
        <div className="relative overflow-hidden bg-[#09090b] w-full flex flex-col items-center bg-[url('/Images/Hero.svg')] bg-cover bg-center bg-no-repeat">
          {/* Sophisticated Ambient White/Blue Light */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(100,150,255,0.03)_50%,transparent_100%)] blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

          <div className="bg-[linear-gradient(0deg,transparent_0%,#09090b_97%)] w-full absolute top-0 z-20 h-16 md:h-28"></div>

          {/* Premium Glassmorphism Badge */}
          <div className="mt-20 lg:mt-32 mb-8 text-[12px] md:text-sm font-Inter text-white/80 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all cursor-pointer z-10 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
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

          <div className="px-4 md:px-0 tracking-tighter max-w-4xl mx-auto font-extrabold text-center leading-[1.05] md:leading-none font-Inter text-[56px] sm:text-[64px] md:text-7xl lg:text-[78px] text-gray-200 z-10">
            <span className="relative inline-block pb-2">
              Your{" "}
              {/* Ultra-pure crisp white high contrast text */}
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                unfair <span className="tracking-tight">advantage</span>
              </span>
              <img
                src="/Images/RoundedArrow.svg"
                alt="Rounded Arrow"
                className="absolute min-[420px]:right-1 -right-4 -bottom-20 md:right-25 md:-bottom-30 w-12 h-12 md:w-15 md:h-15 invert-100 md:-rotate-6 -rotate-40 opacity-70"
              />
            </span>
            <br />
            <span>in learning</span>
            <br />
            <span className="block mt-4 font-serif font-extralight italic text-center text-gray-400/80 tracking-wide text-5xl md:text-[72px]">
              <FlipFadeText
                words={["reimagined.", "minimal.", "refined.", "optimized."]}
                interval={2500}
                letterDuration={0.5}
              />
            </span>
          </div>

          <p className="px-6 md:px-0 font-Inter text-sm sm:text-base md:text-xm text-center leading-relaxed mt-10 md:mt-10 text-gray-400 max-w-2xl mx-auto z-10 font-medium">
            Preparing for exams is already challenging enough.{" "}
            <br className="hidden md:block" /> Avoid further complications by
            ditching outdated study methods.
          </p>

          <div className="p-10 flex flex-wrap justify-center items-center gap-4 z-10 mt-2">
            <Link to="/notes">
              <div className="bg-white hover:bg-gray-200 transition-colors font-Inter font-semibold leading-tight text-sm text-black flex items-center gap-2 py-3 px-6 rounded-full cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search Notes
              </div>
            </Link>
            <Link to="/notes">
              <div className="bg-white/5 hover:bg-white/10 text-white leading-tight font-Inter flex items-center gap-2 font-medium text-sm py-3 px-6 rounded-full border border-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                <img
                  src="/Images/dashboard.svg"
                  alt="dashboard"
                  className="w-4 h-4 opacity-80"
                />
                DashBoard
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
