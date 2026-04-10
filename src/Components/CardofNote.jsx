import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Share2 } from "lucide-react";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

export default function CardofNote({
  id,
  title,
  description,
  subject,
  university,
  pages,
  url,
  semester,
  FileMode,
  branch,
  onViewPDF,
}) {
  const handleShare = () => {
    let shareUrl = window.location.origin + window.location.pathname;

    if (FileMode && id) {
      shareUrl = shareUrl + `?highlight=${id}`;
    }
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!", {
      position: "bottom-right",
    });
  };

  return (
    <>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-0 flex flex-col bg-[#151516]  border  border-[#3c3c3c] rounded-lg p-7 
        transition-all duration-300  1

        shadow-[14px_14px_0px_-1px_rgba(255,255,255,0.10)]
        hover:shadow-[8px_8px_0px_-1px_rgba(255,255,255,0.15)]
        max-w-[350px]  
        bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] "
      >
        <div className="z-60 flex items-start justify-between mb-4">
          <div className="">
            <div className="pb-8 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                {title}
              </h3>
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
            Sem : {semester}
          </span>
          {branch && (
            <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
              {branch == "all" ? "All Branches" : branch}
            </span>
          )}
          {university && (
            <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
              {university}
            </span>
          )}
          <span className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
            {pages} pages
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 mt-5 md:mt-10">
          {FileMode && (
            <button
              onClick={() => onViewPDF({ url })}
              className="mx-auto text-center transition-colors duration-300 bg-white hover:bg-zinc-200 font-Figtree font-medium leading-tight text-sm text-black flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full "
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
          )}

          {!FileMode && (
            <Link
              to={`/subject/${id}`}
              className="mx-auto text-center  transition-colors duration-300 bg-white hover:bg-zinc-200 font-Figtree font-medium leading-tight text-sm text-black flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full"
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
            </Link>
          )}

          <button
            className="  transition-colors duration-300 bg-white hover:bg-zinc-200 text-black  flex items-center gap-4 py-2 px-2 rounded-md cursor-pointer justify-center "
            title="Share"
            onClick={handleShare}
          >
            {" "}
            <Share2 className="size-4" />{" "}
          </button>
        </div>
        <Toaster />
      </motion.div>
    </>
  );
}
