import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { NotesProvider } from "../lib/NotesProvider";
import CardofNote from "./CardofNote";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, Share2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import PDFviewProvider from "../lib/PDFviewProvider.js";
import { preloadPDFViewerChunk } from "./PDFViewer/pdfViewerPreload";
import FInalPDFView from "./PDFViewer/FInalPDFView.jsx";
import PDFViewerWarmup from "./PDFViewer/PDFViewerWarmup.jsx";
import { useNavigate } from "react-router";

export default function SubjectPage() {
  const [warmPdfViewer, setWarmPdfViewer] = useState(false);
  const { isOpen, setIsOpen, selectedPdfUrl, handleViewPDF } =
    PDFviewProvider();

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      void preloadPDFViewerChunk();
      setWarmPdfViewer(true);
    }, 1500);

    return () => {
      window.clearTimeout(preloadTimer);
    };
  }, []);

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

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!subject) {
    return (
      <div>
        <button onClick={() => navigate("/")}>Go to Home</button>
        <p>Subject not found</p>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="dashboardSection"
        className="max-w-5xl
             mx-auto text-white font-Figtree select-none "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#0a0a0a] mx-auto max-w-5xl w-full flex flex-col pt-8 pb-4 border-t border-b  border-primary/20"
        >
          <button
            className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 md:px-8 transition-colors w-fit"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back 
          </button>
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-4 md:items-center  gap-8 md:justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-Figtree leading-2xl text-neutral-100 ">
                {subject.title}
              </h1>
              <p className="text-neutral-400">{subject.description}</p>

              <div className="flex items-center gap-2 flex-wrap max-w-87.5 ">
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  {subject.branch}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <BookOpen className="h-3.5 w-3.5 mr-1" />
                  Semester : {subject.semester}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  University : {subject.university}
                </Badge>
              </div>
            </div>
            <div className="self-end md:self-auto">
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
          <Toaster />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-8"
        >
          {isLoading ? (
            <p className="text-gray-400 text-center col-span-full py-10">
              Loading notes...
            </p>
          ) : subject.files.length === 0 ? (
            <p className="text-gray-400 text-center col-span-full py-10">
              No notes found matching your criteria kindly try different filters
              or search terms.
            </p>
          ) : (
            subject.files.map((note) => (
              <CardofNote
                key={note.fileId}
                id={note.fileId}
                title={note.title}
                description={note.description}
                subject={note.tag}
                pages={note.pages}
                url={note.url}
                semester={subject.semester}
                FileMode={true}
                onViewPDF={handleViewPDF}
              />
            ))
          )}
        </motion.div>

        <FInalPDFView
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          documentUrl={selectedPdfUrl}
        />
        <PDFViewerWarmup enabled={warmPdfViewer} />
      </section>
    </>
  );
}
