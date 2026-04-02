import React from "react";
import FlipFadeText from "./ui/FlipFadeText";
import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <section className="md:max-w-350  font-Inter mx-auto text-white select-none">
        <div className="relative bg-black w-full  flex flex-col items-center   bg-[url('/Images/Hero.svg')]  bg-cover bg-center bg-no-repeat">
          <div className=" bg-[linear-gradient(0deg,transparent_0%,#000000_97%)]  w-full absolute top-0  z-20 h-16  md:h-28 "></div>

          <div className=" mt-32 mb-10  text-[12px] md:text-sm font-Inter   text-amber-50  bg-[#1F1F23] rounded-xl px-3 py-1.5 flex items-center justify-center gap-2">
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

          <div className=" shadow-amber-300 tracking-tight max-w-3xl mx-auto font-extrabold text-center md:leading-20 font-Inter text-6xl md:text-7xl">
            <span className=" max-w-xs relative text-shadow-amber-200 text-amber-300">
              Your unfair advantage in learning
              <img
                src="/Images/RoundedArrow.svg"
                alt="Rounded Arrow"
                className="absolute -right-19  -bottom-10 w-15 h-15 invert-100"
              />
            </span>
            <br />{" "}
            <span className=" font-serif font-extralight italic text-center  tracking-wide  ">
              {" "}
              <FlipFadeText
                words={["reimagined", "minimal", "refined", "optimized"]}
                interval={2500}
                letterDuration={0.5}
              />
            </span>
          </div>
          <p className=" font-Inter   md:text-s  text-center leading-8 mt-14 md:mt-4 text-gray-300">
            Preparing for exams is already challenging enough. <br /> Avoid
            further complications by ditching outdated study methods
          </p>



          <div className="p-10 flex items-center gap-4">
            <Link to="/notes">
              <div className="bg-[#e5e5e5]  hover:bg-[#cfcfcf]  font-Figtree font-medium leading-tight text-sm text-black flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search Notes Here
              </div>
            </Link>
            <Link to="/notes">
              <div className=" bg-[#151515] text-white leading-tight font-Figtree flex items-center gap-2  font-medium text-sm py-2 px-6 rounded-md border border-[#373737]  cursor-pointer">
                <img src="/Images/dashboard.svg" alt="dashboard" />
                DashBoard
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
