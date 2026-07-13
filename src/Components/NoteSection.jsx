import React, { useEffect, useState } from "react";
import { Filter, X } from "lucide-react";
import { NotesProvider } from "../lib/NotesProvider.js";
import InputFilter from "./InputFilter";
import SelectionFilterMenu from "./SelectionFilterMenu";
import CardofNote from "./CardofNote";
import useHaptic from "../hooks/useHaptic";
import { useLocation, useNavigate } from "react-router";
import PDFviewProvider from "../lib/PDFviewProvider.js";
import FInalPDFView from "./PDFViewer/FInalPDFView.jsx";

export default function NoteSection() {
  const haptic = useHaptic();
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen, selectedPdfUrl, selectedPdfName, handleViewPDF } = PDFviewProvider();

  useEffect(() => {
    if (location.state?.autoOpenUrl) {
      const url = location.state.autoOpenUrl;
      const title = location.state.autoOpenTitle || "Shared PDF";
      handleViewPDF({ url, name: title });
      // Clear location state to prevent looping on page reload/refresh
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate, handleViewPDF]);

  const { data, dataSource, isEmptyRemote, isLoading } = NotesProvider();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  useEffect(() => {
    setVisibleCount(9);
  }, [filteredData]);

  const [visibleCount, setVisibleCount] = useState(9);
  const [showFloatingFilter, setShowFloatingFilter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingFilter(true);
      } else {
        setShowFloatingFilter(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="noteSection"
        className="scroll-smooth font-Inter mx-auto text-white mb-20 relative select-none"
      >
        {/* Floating Mobile Filter Button */}
        <div
          className={`fixed bottom-24 right-2 z-50 lg:hidden transition-all duration-300 ${
            showFloatingFilter
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <button
            onClick={() => {
              document
                .getElementById("noteSection")
                ?.scrollIntoView({ behavior: "smooth" });
              haptic.lightTap();
            }}
            className="flex items-center justify-center p-3.5 bg-black/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black  shadow-xl rounded-lg border border-white/10 dark:border-black/10 active:scale-95 transition-transform"
          >
            <Filter size={20} />
          </button>
        </div>

        <div className="relative ">
          {/* <div className="absolute w-full h-full  top-0 left-0 bg-[url('/Images/Gridwithstars.svg')] bg-cover bg-center bg-no-repeat  invert dark:invert-0  -z-10 pointer-events-none">
          </div> */}
          {/* <ElipseDarkGradient /> */}

          <div className="mx-auto pt-18 flex flex-col items-center p-4 z-30">
            <div className="mb-4">
              <h1 className="text-5xl font-bold text-center tracking-wider text-black dark:text-white">
                Mate Notes
              </h1>
              <p className="md:text-lg text-center dark:text-gray-300 text-gray-600 mt-4">
                Let&apos;s find your notes by filtering or searching.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col lg:flex-row gap-8 relative">
          {/* Sidebar / Filters (Top on Mobile, Left on Desktop) */}
          <aside className="w-full lg:w-72 lg:sticky lg:top-28 self-start flex flex-col gap-6 z-20">
            <div className="flex flex-col gap-6 bg-white/50 dark:bg-black/50 p-6 rounded-xl border border-neutral-200 dark:border-[#222] shadow-sm lg:shadow-none">
              <InputFilter setFilteredData={setFilteredData} data={data} />
              <SelectionFilterMenu
                data={data}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
              />
            </div>
          </aside>

          {/* Main Content (Notes Grid) */}
          <div className="flex-1 flex justify-center items-center flex-col">
            
              {/* <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">
              The Legendary Notes
            </h2>
            <p className=" dark:text-gray-300 text-gray-600 ">
              Browse through our collection of study materials
            </p> */}
              {dataSource === "local" && (
                <p className="mt-2 text-xs text-zinc-500">
                  Using bundled local notes — CDN manifest unavailable.
                </p>
              )}
              {isEmptyRemote && (
                <p className="mt-2 text-xs text-red-500">
                  Remote notes source is empty — no notes available.
                </p>
              )}
            

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {isLoading ? (
                <p className="text-gray-400 text-center col-span-full py-10">
                  Loading notes...
                </p>
              ) : filteredData.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-400 text-center col-span-full py-10 md:max-w-sm ">
                  No notes found matching your criteria kindly try different
                  filters or search terms.
                </p>
              ) : (
                filteredData
                  .slice(0, visibleCount)
                  .map((note, index) => (
                    <CardofNote
                      note={note}
                      key={note.id}
                      index={index}
                      id={note.id}
                      title={note.title}
                      description={note.description}
                      subject={note.subject}
                      year={note.year}
                      university={note.university}
                      pages={note.pages}
                      url={note.url}
                      semester={note.semester}
                      branch={note.branch}
                      FileMode={false}
                      imageUrl={note.imageUrl}
                    />
                  ))
              )}
            </div>
            {filteredData.length > visibleCount && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    setVisibleCount(visibleCount + 9);
                    haptic.lightTap();
                  }}
                  className="px-6 py-3 dark:bg-white dark:text-black bg-neutral-800  text-neutral-200 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
        <FInalPDFView
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          documentUrl={selectedPdfUrl}
          documentName={selectedPdfName}
        />
      </section>
    </>
  );
}
