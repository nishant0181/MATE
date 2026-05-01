import React from "react";
import { motion } from "framer-motion";
import { preloadPDFViewerChunk } from "./PDFViewer/pdfViewerPreload";
import { Link } from "react-router";
import { QrCode, Share2 } from "lucide-react";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FavoritesContext } from "@/contexts/FavoritesProvider";
import useRecentNotes from "../hooks/useRecentNotes";
import useHaptic from "../hooks/useHaptic";

import MyQRCode from "./QRCode";

export default function CardofNote({
  note,
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
  setIsOpen,
  imageUrl,
  index = 0,
}) {
  const haptic = useHaptic();
  const [, addNoteId] = useRecentNotes();
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.origin + "/subject/" + id
      : "";

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!", {
      position: "bottom-right",
    });
  };

  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <>
      <motion.div
        id={id}
        onMouseEnter={() => preloadPDFViewerChunk()}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 1,
          delay: (index % 12) * 0.05,
        }}
        className="relative z-0 flex flex-col bg-white dark:bg-[oklch(.205_0_0)]   border-neutral-300 dark:border-black border-2 rounded-lg p-7 
       


        shadow-[14px_14px_0px_-1px_rgba(0,0,0,0.10)]
        dark:shadow-[14px_14px_0px_-1px_rgba(0,0,0,0.80)]
        transition-all duration-300 hover:translate-x-1 hover:translate-y-1 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.10)]
        dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]


        h-full max-w-[350px] w-full

        dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
        bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]
        
        select-none
        "
      >
        <div className="flex flex-1 flex-col">
          <div className="z-60 flex items-start justify-between mb-4">
            <div className="w-full">
              {/* Dynamic Thumbnail Preview */}
              {FileMode && (
                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6 border border-neutral-200 dark:border-neutral-800">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-top object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-200 to-neutral-300 dark:from-zinc-800 dark:to-zinc-900">
                      <div className="text-xl font-Inter font-medium tracking-[3.5px] text-zinc-500/50 select-none">
                        MATE
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between gap-3 w-full">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 line-clamp-1 w-full">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-[#909092] mb-3 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-[#b6b5b5] px-3 py-1 rounded-full border border-zinc-400">
              {subject}
            </span>
            <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-[#b6b5b5] px-3 py-1 rounded-full border border-zinc-400">
              Sem : {semester}
            </span>
            {branch && (
              <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-[#b6b5b5] px-3 py-1 rounded-full border border-zinc-400">
                {branch == "all" ? "All Branches" : branch}
              </span>
            )}
            {university && (
              <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-[#b6b5b5] px-3 py-1 rounded-full border border-zinc-400">
                {university}
              </span>
            )}
            {pages && (
              <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-[#b6b5b5] px-3 py-1 rounded-full border border-zinc-400">
                {pages} Pages
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          {FileMode && (
            <>
              <button
                className="mx-auto text-center transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 font-Figtree font-medium leading-tight text-sm dark:text-black text-zinc-900 flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full "
                onClick={() => {
                  onViewPDF({ url });
                  haptic.mediumTap();
                }}
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
            </>
          )}

          {!FileMode && (
            <>
              <div className="flex flex-col w-full gap-4">
                <div className="flex justify-end  w-full">
                  <MyQRCode shareUrl={shareUrl} haptic={haptic} name={title}/>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/subject/${id}`}
                    className="mx-auto text-center transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 font-Figtree font-medium leading-tight text-sm dark:text-black text-zinc-900 flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full "
                    onClick={() => {
                      addNoteId(id);
                      haptic.mediumTap();
                    }}
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

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toggleFavorite(note);
                      haptic.lightTap();
                    }}
                    className={cn(
                      "h-8 w-8 p-0 hover:scale-105 active:scale-95 transition-all",
                      isFavorite(note)
                        ? "bg-red-50 border-red-200 hover:bg-red-100 dark:bg-red-950 dark:border-red-800 dark:hover:bg-red-900"
                        : "hover:border-red-200 hover:bg-red-50 dark:hover:border-red-800 dark:hover:bg-red-950",
                    )}
                    aria-label={
                      isFavorite(note)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-all duration-200",
                        isFavorite(note)
                          ? "fill-red-500 text-red-500"
                          : "text-muted-foreground",
                      )}
                    />
                  </Button>
                  <button
                    className="  transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 text-black  flex items-center gap-4 py-2 px-2 rounded-md cursor-pointer justify-center "
                    title="Share"
                    onClick={() => {
                      handleShare();
                      haptic.lightTap();
                    }}
                  >
                    <Share2 className="size-4" />{" "}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
