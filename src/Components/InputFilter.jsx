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
        className="w-full text-sm  p-2 rounded-lg bg-[#161616] text-white border border-[#222323] focus:outline-none focus:ring-1 focus:ring-[#ffff]"
        placeholder="Search notes By title or Subject..."
        onChange={handleInputChange}
      />
    </>
  );
}
