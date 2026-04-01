import React, { useEffect, useState } from "react";
import InputFilter from "./InputFilter";
import SelectionFilterMenu from "./SelectionFilterMenu";
import CardofNote from "./CardofNote";
import FInalPDFView from "./PDFViewer/FInalPDFView.jsx";
import PDFViewerWarmup from "./PDFViewer/PDFViewerWarmup.jsx";
import { preloadPDFViewerChunk } from "./PDFViewer/pdfViewerPreload";
import { fetchNotes } from "../lib/notesDataSource.js";

export default function NoteSection() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");
  const [warmPdfViewer, setWarmPdfViewer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState("local");
  const [isEmptyRemote, setIsEmptyRemote] = useState(false);

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      void preloadPDFViewerChunk();
      setWarmPdfViewer(true);
    }, 1500);

    return () => {
      window.clearTimeout(preloadTimer);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadNotes() {
      setIsLoading(true);

      const { notes, source, isEmptyRemote } = await fetchNotes();

      if (!isMounted) {
        return;
      }

      setData(notes);
      setFilteredData(notes);
      setDataSource(source);
      setIsEmptyRemote(isEmptyRemote);
      setIsLoading(false);
    }

    void loadNotes();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleViewPDF = ({ url }) => {
    void preloadPDFViewerChunk();
    setSelectedPdfUrl(url);
    setIsOpen(true);
  };

  return (
    <>
      <section
        id="noteSection"
        className="md:max-w-350  font-Inter mx-auto text-white select-none "
      >
        <div className="relative bg-black w-full  flex flex-col items-center   bg-[url('/Images/Hero.svg')]  bg-cover bg-center bg-no-repeat">
          <div className=" bg-[linear-gradient(0deg,transparent_0%,#000000_97%)]  w-full absolute top-0  z-20 h-16  md:h-28 "></div>
          <div className=" mx-auto  mt-18 flex flex-col items-center gap-15 bg-black/50 p-6 rounded-lg z-30">
            <div className="mt-4">
              <h1 className="text-5xl font-bold  text-center tracking-wider text-amber-400">
                Welcome to Mate Notes!
              </h1>
              <p className=" md:text-lg text-center text-gray-300 mt-4">
                Find your notes by filtering or searching.{" "}
              </p>
            </div>

            <InputFilter setFilteredData={setFilteredData} data={data} />
            <SelectionFilterMenu
              data={data}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl  font-bold  mb-2 text-green-100">
              The Legendary Notes
            </h2>
            <p className="text-gray-400">
              Browse through our collection of study materials
            </p>
            {dataSource === "local" && (
              <p className="mt-2 text-xs text-amber-300">
                Using local notes data until Supabase env keys are configured.
              </p>
            )}
 
            {dataSource === "supabase" && isEmptyRemote && (
              <p className="mt-2 text-xs text-amber-300">
                Supabase responded with 0 notes. Check your RLS select policy or confirm rows exist in the public schema.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <p className="text-gray-400 text-center col-span-full py-10">
                Loading notes...
              </p>
            ) : filteredData.length === 0 ? (
              <p className="text-gray-400 text-center col-span-full py-10">
                No notes found matching your criteria kindly try different
                filters or search terms.
              </p>
            ) : (
              filteredData.map((note) => (
                <CardofNote
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  subject={note.subject}
                  year={note.year}
                  university={note.university}
                  pages={note.pages}
                  url={note.url}
                  semester={note.semester}
                  branch={note.branch}
                  onViewPDF={handleViewPDF}
                />
              ))
            )}
          </div>
        </div>
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
