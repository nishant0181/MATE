import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router";
import { NotesProvider } from "../lib/NotesProvider";
import CardofNote from "./CardofNote";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap, Share2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { toast } from "sonner";
import PDFviewProvider from "../lib/PDFviewProvider.js";
import FInalPDFView from "./PDFViewer/FInalPDFView.jsx";
import { useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import MyQRCode from "./QRCode.jsx";

export default function SubjectPage() {
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  const checkOverflow = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };


  const { isOpen, setIsOpen, selectedPdfUrl, handleViewPDF } =
    PDFviewProvider();


  // ------------------------------
  useEffect(() => {
    if (window.history.length <= 2) {
      window.history.replaceState(null, "", "/");

      window.history.pushState(null, "", window.location.href);
    }
  }, []);
  const navigate = useNavigate();
  // ------------------------------

  const { id } = useParams();
  const { data, dataSource, isLoading } = NotesProvider();
  const subject = data.find((subject) => subject.id === id);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [subject]);

  useEffect(() => {
    // 1. Read the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get("highlight");
    // 2. If someone shared a specific file link...
    if (highlightId && !isLoading && subject) {
      // Wait a tiny bit for the cards to finish rendering on the screen
      setTimeout(() => {
        const element = document.getElementById(highlightId);
        if (element) {
          // 3. Scroll to it smoothly!
          element.scrollIntoView({ behavior: "smooth", block: "center" });

          // Optional: Add a temporary glow effect so they know which one it is!
          element.style.boxShadow = "0px 0px 20px 5px rgba(255, 255, 255, 0.4)";
          setTimeout(() => {
            element.style.boxShadow = ""; // remove the glow after 2 seconds
          }, 2000);
        }
      }, 500);
    }
  }, [isLoading, subject]);

  if (!subject && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-400 text-center col-span-full py-10">
          We are very sorry, The subject you are looking for is not found. Please try again.
        </p>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    );
  }

  const categories = ["All", ...new Set(subject?.files?.map(file => file.tag).filter(Boolean))];
  
  const filteredFiles = subject?.files?.filter((file) => {
    if (activeTab === "All") return true;
    return file.tag === activeTab;
  });

  const handleCopyLink = async () => {
   try {
     await navigator.share({
      title: 'MATE : ' + subject?.title,
      text: subject?.description,
      url: window.location.href,
    });
  } catch (err) {
    if (err.name !== 'AbortError') {
     
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  }

  };


  return (
    <>
      <section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="dashboardSection"
        className="max-w-5xl
             mx-auto text-black dark:text-white font-Figtree mb-20 select-none"
      >
        <div
          className="relative bg-zinc-50 dark:bg-background mx-auto w-full flex flex-col pt-8 pb-4 border-t border-b  border-primary/20"
        >
          <button
            className="z-70 flex items-center gap-2 dark:text-neutral-400 dark:hover:text-white hover:text-black hover:bg-zinc-200 dark:hover:bg-zinc-900 px-4 md:px-4 md:mx-0 rounded-md  transition-colors w-fit"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex flex-col md:flex-row px-4 md:px-4 py-4 md:items-center  gap-8 md:justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-Figtree leading-2xl dark:text-neutral-100 text-black ">
                {subject?.title}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-xs  w-fit">{subject?.description}</p>

              <div className="flex items-center gap-2 flex-wrap max-w-87.5 ">
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  {subject?.branch}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <BookOpen className="h-3.5 w-3.5 mr-1" />
                  Semester : {subject?.semester}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  University : {subject?.university}
                </Badge>
              </div>
            </div>
            <div className="self-end md:self-auto flex gap-2">
              <MyQRCode shareUrl={window.location.href} />
              <Button
                variant="outline"
                onClick={() => {
                  handleCopyLink();
                  toast.success("Link copied to clipboard!", {
                    position: "bottom-right",
                  });
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        
        </div>

        {/* Dynamic Category Tabs */}
        {categories.length > 1 && (
          <div
           
            className="px-4 md:px-0 mt-6 mx-4  md:w-fit  relative  "
          >
            {showArrow && (
              <div className="absolute right-0 dark:bg-background top-1/2 -translate-y-1/2  h-full   flex items-center justify-center   md:hidden pointer-events-none">
                <ChevronRight className="h-5 w-5" />
              </div>
            )}
            <div
              ref={scrollRef}
              onScroll={checkOverflow}
              className="overflow-x-auto no-scrollbar flex gap-3 pr-8"
            >

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {setActiveTab(cat)
                  setVisibleCount(9)
                }}
                className={cn(
                  "px-4 py-2.5   rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer",
                  activeTab === cat
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-md "
                  : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
            </div>
          
          </div>
        )}

        <div
           
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-8 px-4 md:px-0 md:mx-4"
        >
          {isLoading ? (
            <p className="text-gray-400 text-center col-span-full py-10">
              Loading notes...
            </p>
          ) : filteredFiles?.length === 0 ? (
            <p className="text-gray-400 text-center col-span-full py-10">
              No notes found matching your criteria kindly try different filters
              or search terms.
            </p>
          ) : (
            filteredFiles?.slice(0, visibleCount).map((note, index) => (
              <CardofNote
                key={`${note.fileId}-${index}`}
                index={index}
                id={note.fileId}
                title={note.title}
                description={note.description}
                subject={note.tag}
                pages={note.pages}
                url={note.url}
                semester={subject.semester}
                FileMode={true}
                onViewPDF={handleViewPDF}
                imageUrl={note.imageUrl}
              />
            ))
          )}
        </div>
        {filteredFiles?.length > visibleCount && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount(visibleCount + 9)}
                className="px-6 py-3 dark:bg-white dark:text-black bg-neutral-800  text-neutral-200 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
              >
                Load More
              </button>
            </div>
          )}

        <FInalPDFView
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          documentUrl={selectedPdfUrl}
        />
      </section>
    </>
  );
}
