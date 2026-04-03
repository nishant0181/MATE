import React from "react";

export default function CardofNote({
  title,
  description,
  subject,
  year,
  university,
  pages,
  url,
  semester,
  branch,
  onViewPDF,
}) {
  return (
    <>
      <div
        className="relative z-0 flex flex-col bg-[#151516]  border  border-[#3c3c3c] rounded-lg p-7 hover:border-zinc-300 transition-all duration-300  hover:shadow-lg hover:shadow-white/5
         
  
               h-full max-w-[400px]  bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] "
      >
        <div className="z-60 flex items-start justify-between mb-4">
          <div className="">
            <div className="pb-8 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <img
                src="/LogosForCards/Maths.png"
                alt="Maths Icon"
                className="w-10"
              />
            </div>
            <p className="text-sm text-gray-400 mb-3">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {subject}
          </span>
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {year}
          </span>
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {semester}
          </span>
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {branch}
          </span>
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {university}
          </span>
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {pages} pages
          </span>
        </div>

        <button
          onClick={() => onViewPDF({ url, title })}
          className="mx-auto text-center mt-5 md:mt-10 transition-colors duration-300 bg-white hover:bg-zinc-200 font-Figtree font-medium leading-tight text-sm text-black flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full"
        >
          View Notes
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
        </button>
      </div>
    </>
  );
}
