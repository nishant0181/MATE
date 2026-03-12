import { useScroll } from "@embedpdf/plugin-scroll/react";
import { useEffect, useState } from "react";

export default function PageNavigation({ documentId }: { documentId: string }) {
  const { provides: scroll, state } = useScroll(documentId);
  const [pageInput, setPageInput] = useState(String(state.currentPage));
  useEffect(() => {
    setPageInput(String(state.currentPage));
  }, [state.currentPage]);
  const handleGoToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput, 10);
    if (pageNumber >= 1 && pageNumber <= state.totalPages) {
      scroll?.scrollToPage({ pageNumber });
    }
  };
  return (
    <div className="flex items-center justify-center gap-2 mb-1 p-2 bg-[#0c0c0c] rounded-lg shadow-lg z-10 text-white">

      {/* Page input */}
      <form onSubmit={handleGoToPage} className="flex items-center gap-2">
      
        <input
          type="number"
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          min={1}
          max={state.totalPages}
          className="h-6 w-8 rounded-md  bg-[#2a2d2f] px-2 text-center font-mono text-xs font-medium text-white shadow-sm "
        />
        <span className="text-xs font-medium ">
          / {state.totalPages}
        </span>
      </form>
   
    </div>
  );
}
