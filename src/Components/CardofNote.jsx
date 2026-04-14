import { motion } from "framer-motion";
import { Link } from "react-router";
import { Share2 } from "lucide-react";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FavoritesContext } from "@/contexts/FavoritesProvider";
import useRecentNotes from "../hooks/useRecentNotes";

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
}) {
  const [recentNotes, setNoteId] = useRecentNotes();
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

  const { favorites, toggleFavorite, isFavorite } =
    useContext(FavoritesContext);

  return (
    <>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-0 flex flex-col bg-white dark:bg-[#151516]  border border-neutral-300 dark:border-[#3c3c3c] rounded-lg p-7 
        transition-all duration-300  1

      
        shadow-[14px_14px_0px_-1px_rgba(255,255,255,0.10)]
        hover:shadow-[8px_8px_0px_-1px_rgba(255,255,255,0.15)]
        max-w-[350px]  
        
        dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
        bg-[radial-gradient(#f5f5f5_1px,transparent_1px)]"
      >
        <div className="z-60 flex items-start justify-between mb-4">
          <div className="">
            <div className="pb-8 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 line-clamp-1">
                {title}
              </h3>
              <img
                src="/LogosForCards/Maths.png"
                alt="Maths Icon"
                className="w-10"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-400">
            {subject}
          </span>
          <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-400">
            Sem : {semester}
          </span>
          {branch && (
            <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-400">
              {branch == "all" ? "All Branches" : branch}
            </span>
          )}
          {university && (
            <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-400">
              {university}
            </span>
          )}
          <span className="text-xs dark:bg-zinc-900 bg-gray-200 text-black dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-400">
            {pages} pages
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 mt-5 md:mt-10">
          {FileMode && (
            <>
              <button
                onClick={() => onViewPDF({ url })}
                className="mx-auto text-center transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 font-Figtree font-medium leading-tight text-sm dark:text-black text-zinc-900 flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full "
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
              <Link
                to={`/subject/${id}`}
                className="mx-auto text-center transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 font-Figtree font-medium leading-tight text-sm dark:text-black text-zinc-900 flex items-center gap-4 py-2 px-4 rounded-md cursor-pointer justify-center w-full "
                onClick={() => {
                  setNoteId(id);
                  
                  setIsOpen(false);
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
                onClick={() => toggleFavorite(note)}
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
            </>
          )}

          <button
            className="  transition-colors duration-300 bg-zinc-200 dark:bg-white dark:hover:bg-zinc-200 hover:bg-zinc-300 text-black  flex items-center gap-4 py-2 px-2 rounded-md cursor-pointer justify-center "
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
