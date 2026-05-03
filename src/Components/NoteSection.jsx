import React, { useEffect, useState } from "react";
import { NotesProvider } from "../lib/NotesProvider.js";
import InputFilter from "./InputFilter";
import SelectionFilterMenu from "./SelectionFilterMenu";
import CardofNote from "./CardofNote";
import ElipseDarkGradient from "./ui/ElipseDarkGradient";
import useHaptic from '../hooks/useHaptic';

export default function NoteSection() {
  const haptic = useHaptic();
  const { data, dataSource, isEmptyRemote, isLoading } = NotesProvider();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
   
  }, [data]);
  useEffect(() => {
    setVisibleCount(9);
  }, [filteredData]);

  const [visibleCount, setVisibleCount] = useState(9)
  return (
    <>
      <section
        id="noteSection"
        className="md:max-w-350 scroll-smooth 
        font-Inter mx-auto text-white  
        mb-20 
        relative select-none
        "
      >

        <div className="relative ">
          <div className="absolute w-full h-full  top-0 left-0 bg-[url('/Images/Gridwithstars.svg')] bg-cover bg-center bg-no-repeat  invert dark:invert-0  -z-10 pointer-events-none">
          </div>
          <ElipseDarkGradient />
          

          <div
           
            className=" mx-auto pt-18  flex flex-col items-center gap-15 dark:bg-blacfk/50 bg-whitde/50 p-4 rounded-lg z-30"
          >
            <div className="">
              <h1 className="text-5xl font-bold  text-center tracking-wider text-black dark:text-white">
                Mate Notes
              </h1>
              <p className=" md:text-lg text-center dark:text-gray-300 text-gray-600 mt-4">
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

        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="mb-18 text-center">
            <h2 className="text-3xl pt-10 font-bold  mb-2 text-black dark:text-white">
              The Legendary Notes
            </h2>
            <p className=" dark:text-gray-300 text-gray-600 ">
              Browse through our collection of study materials
            </p>
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
          </div>

          <div
           
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center "
          >
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
              filteredData.slice(0, visibleCount).map((note, index) => (
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
                onClick={() => {setVisibleCount(visibleCount + 9)
                  haptic.lightTap()
                }}
                className="px-6 py-3 dark:bg-white dark:text-black bg-neutral-800  text-neutral-200 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
