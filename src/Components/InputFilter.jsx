import React from "react";

export default function InputFilter() {
  return (
    <>
      <input
        name="InputSearch"
        type="text"
        className="w-full text-sm  p-2 rounded-lg bg-[#161616] text-white border border-[#222323] focus:outline-none focus:ring-1 focus:ring-[#ffff]"
        placeholder="Search notes By title or Subject..."
      />
    </>
  );
}
