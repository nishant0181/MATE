import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NotesProvider } from "../lib/NotesProvider.js";
import InputFilter from "./InputFilter";
import SelectionFilterMenu from "./SelectionFilterMenu";
import CardofNote from "./CardofNote";

export default function NoteSection() {
  const { data, dataSource, isEmptyRemote, isLoading } = NotesProvider();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <section
        id="noteSection"
        className="md:max-w-350 scroll-smooth 
        font-Inter mx-auto text-white select-none 
        mb-20 
        relative
        "
      >

        <div className="relative ">
          <div className="absolute w-full h-full  top-0 left-0 bg-[url('/Images/Hero.svg')] bg-cover bg-center bg-no-repeat invert dark:invert-0 bg-white/50 dark:bg-black/50  -z-10 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
          </motion.div>
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
                Using local notes data until Supabase env keys are configured.
              </p>
            )}

            {dataSource === "supabase" && isEmptyRemote && (
              <p className="mt-2 text-xs text-zinc-500">
                Supabase responded with 0 notes. Check your RLS select policy or
                confirm rows exist in the public schema.
              </p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              filteredData.map((note) => (
                <CardofNote
                note={note}
                  key={note.id}
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
                />
              ))
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
