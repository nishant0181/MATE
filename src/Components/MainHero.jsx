import React from "react";
import FlipFadeText from "./ui/FlipFadeText";
import { Link } from "react-router";

export default function Main() {
  return (
    <>
      <section className="md:max-w-350  font-Inter mx-auto text-white select-none">
        <div className="relative bg-black w-full  flex flex-col items-center   bg-[url('/Images/Hero.svg')]  bg-cover bg-center bg-no-repeat">
          <div className=" bg-[linear-gradient(0deg,transparent_0%,#000000_97%)]  w-full absolute top-0  z-20 h-16  md:h-28 "></div>

          <div className=" mt-32 mb-10  text-[12px] md:text-sm font-Inter   text-amber-50  bg-[#1F1F23] rounded-xl px-3 py-1.5 flex items-center justify-center gap-2">
            Now it is time to comeback
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

          <div className="text-amber-200 shadow-amber-300 tracking-tight max-w-3xl mx-auto font-extrabold text-center md:leading-20 font-Inter text-6xl md:text-7xl">
            <span className=" max-w-xs relative text-shadow-amber-200">
              Your unfair advantage in learning
              <img
                src="/Images/RoundedArrow.svg"
                alt="Rounded Arrow"
                className="absolute -right-19  -bottom-10 w-15 h-15 invert-100"
              />
            </span>
            <br />{" "}
            <span className=" font-serif font-extralight italic text-center  tracking-wide ">
              {" "}
              <FlipFadeText
                words={["reimagined", "minimal", "refined", "optimized"]}
                interval={2500}
                letterDuration={0.5}
              />
            </span>
          </div>
          <p className=" font-Inter md:text-lg  text-center leading-8 mt-14 md:mt-4 text-gray-300">
            Preparing for exams is already challenging enough. <br /> Avoid
            further complications by ditching outdated study methods
          </p>
          <div className="p-10 flex gap-4">
            <Link
              className="bg-[#1F1F23] hover:bg-[#2a2d2f] text-green-100 font-bold py-2 px-4 rounded-2xl cursor-pointer"
              to="/notes"
            >
              Visit Notes
            </Link>

            <Link
              className="bg-[#1F1F23] hover:bg-[#2a2d2f] text-green-100 font-bold py-2 px-4 rounded-2xl cursor-pointer"
              to="/notes"
            >
              Get Started
            </Link>
        </div>
          </div>

      </section>
    </>
  );
}
