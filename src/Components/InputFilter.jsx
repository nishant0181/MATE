import React from "react";

export default function InputFilter({ setFilteredData, data }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();

    if (!searchTerm) {
      setFilteredData(data);
      return;
    }

    setFilteredData(
      data.filter((note) => {
        const title = (note.title ?? "").toLowerCase();
        const subject = (note.subject ?? "").toLowerCase();
        return title.includes(searchTerm) || subject.includes(searchTerm);
      }),
    );
  };

  return (
    <>
      <input
        name="InputSearch"
        type="search"
        className="w-full md:w-4xl text-sm  p-2 rounded-lg dark:bg-[#161616] bg-white text-black dark:text-white border border-neutral-300 dark:border-[#3c3c3c] focus:outline-none focus:ring-1 focus:ring-[#ffff]"
        placeholder="Search notes By title or Subject..."
        onChange={handleInputChange}
      />
    </>
  );
}
