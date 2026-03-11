import React, { useState } from "react";

import InputFilter from "./InputFilter";
import SelectionFilterMenu from "./SelectionFilterMenu";
import CardofNote from "./CardofNote";
import PDFViewer from "./PDFViewer";
import NotesData from "../../Data/NotesData";

export default function NoteSection() {
  const [data] = useState(NotesData());
  const [filteredData, setFilteredData] = useState(data);
  const [selectedPDF, setSelectedPDF] = useState(null); // { url, title }

  return (
    <>
      {selectedPDF && (
        <PDFViewer
          url={selectedPDF.url}
          title={selectedPDF.title}
          onClose={() => setSelectedPDF(null)}
        />
      )}
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

          <InputFilter setFilteredData={setFilteredData} />
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length === 0 ? (
            <p className="text-gray-400 text-center col-span-full py-10">
              No notes found matching your criteria kindly try different filters or search terms.
            </p>
          ) : (
            filteredData.map((note, index) => (
              <CardofNote
                key={index}
                title={note.title}
                description={note.description}
                subject={note.subject}
                year={note.year}
                university={note.university}
                pages={note.pages}
                url={note.url}
                semester={note.semester}
                branch={note.branch}
                onViewPDF={setSelectedPDF}
              />
            ))
          )}
        </div>
      </div>
    </section>
    </>
  );
}
