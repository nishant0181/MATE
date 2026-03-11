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
    <div className="flex items-center justify-center gap-2 border-b border-gray-300 bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
      {/* Previous button */}
      <button
        onClick={() => scroll?.scrollToPreviousPage()}
        disabled={state.currentPage <= 1}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-100"
        title="Previous Page"
      >
        
      </button>
      {/* Page input */}
      <form onSubmit={handleGoToPage} className="flex items-center gap-2">
        <span className="tracking-wide text-xs font-medium uppercase text-gray-600 dark:text-gray-300">
          Page
        </span>
        <input
          type="number"
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          min={1}
          max={state.totalPages}
          className="h-8 w-14 rounded-md border-0 bg-white px-2 text-center font-mono text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-600"
        />
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
          of {state.totalPages}
        </span>
      </form>
      {/* Next button */}
      <button
        onClick={() => scroll?.scrollToNextPage()}
        disabled={state.currentPage >= state.totalPages}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-100"
        title="Next Page"
      >
       
      </button>
    </div>
  );
};
