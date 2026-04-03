import React from "react";

const getDocumentName = (url) => {
  if (!url) return "Loading...";
  const fileName = decodeURIComponent(url.split("/").pop() ?? "");
  const cleanedName = fileName.replace(/\.pdf$/i, "");
  return cleanedName || "Loading...";
};

export default function PDFLoadingSkeleton({ documentUrl, setIsOpen }) {
  const documentName = getDocumentName(documentUrl);

  return (
    <div className="h-dvh flex flex-col">
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        {/* Placeholder for ZoomToolbar to prevent layout shift */}
        <div className="h-[2px]"></div>
        
        {/* Top Toolbar (Desktop) Mock */}
        <div className="flex justify-between items-center gap-4 bg-[#0c0c0c] px-4 py-2 rounded-lg shadow-lg z-10 w-full animate-pulse">
          <div className="text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]">
            MATE
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-Inter text-white truncate max-w-[200px] md:max-w-xs">
              {documentName}
            </div>
          </div>
          <div className="hidden md:flex gap-2 text-white items-center">
            <div className="bg-[#2a2d2f] h-8 w-32 rounded"></div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="bg-[#2a2d2f] h-8 w-24 rounded"></div>
            <button
              onClick={() => setIsOpen && setIsOpen(false)}
              className="cursor-pointer rounded bg-[#2a2d2f] px-4 py-3 text-xs font-semibold text-white hover:bg-[#2a2a2a] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Document Content Skeleton UI */}
        <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            {/* Sleek Minimalist Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-[3px] border-zinc-800 border-t-white rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-zinc-400 text-[10px] font-bold tracking-widest mt-[2px]">PDF</span>
              </div>
            </div>
            {/* Pulsing visual element resembling a document loading */}
            <div className="mt-8 relative w-48 h-64 border border-[#2a2d2f] bg-[#161616] rounded-md overflow-hidden animate-pulse shadow-xl flex flex-col gap-3 p-4 select-none">
              <div className="h-4 bg-[#2a2d2f] rounded w-3/4"></div>
              <div className="h-3 bg-[#2a2d2f] rounded w-full"></div>
              <div className="h-3 bg-[#2a2d2f] rounded w-full"></div>
              <div className="h-3 bg-[#2a2d2f] rounded w-5/6"></div>
              <div className="mt-4 h-24 bg-[#2a2d2f]/50 rounded w-full"></div>
              <div className="mt-auto flex justify-between">
                <div className="h-2 bg-[#2a2d2f] rounded w-1/4"></div>
                <div className="h-2 bg-[#2a2d2f] rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Toolbar (Mobile) Mock */}
        <div className="flex md:hidden justify-between items-center gap-4 bg-[#0c0c0c] px-6 py-2 rounded-lg shadow-lg z-10 animate-pulse">
          <div className="bg-[#2a2d2f] h-8 w-10 rounded"></div>
          <div className="bg-[#2a2d2f] h-8 w-24 rounded"></div>
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => setIsOpen && setIsOpen(false)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2a2d2f] p-2 px-4 py-2 text-xs font-semibold text-white hover:bg-[#2a2a2a] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
