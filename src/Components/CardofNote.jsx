import React from "react";

export default function CardofNote({title, description, subject, year, university, pages}) {
  return (
    <>
      <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">
            {subject}
          </span>
          <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        <div className="text-sm text-gray-500">{university} • {pages} pages</div>
      </div>
    </>
  );
}
