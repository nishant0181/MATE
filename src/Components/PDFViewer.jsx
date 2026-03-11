import React, { useState, useCallback, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Configure PDF.js worker for Vite (pdfjs-dist v5)
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ url, title, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    setLoading(false);
    setError("Failed to load PDF. Please check the URL or try again.");
    console.error("PDF load error:", err);
  }, []);

  const pdfOptions = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
  }), []);

  const goToPrev = () => setPageNumber((p) => Math.max(p - 1, 1));
  const goToNext = () => setPageNumber((p) => Math.min(p + 1, numPages));
  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  const resetZoom = () => setScale(1.0);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-999 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-start overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Header Bar */}
      <div className="sticky top-0 z-10 w-full bg-[#111113] border-b border-[#2a2a2a] px-4 py-3 flex items-center justify-between gap-4 shadow-lg">
        {/* Title */}
        <h2 className="text-white font-semibold text-sm md:text-base truncate max-w-[40%]">
          {title}
        </h2>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {/* Page Navigation */}
          <div className="flex items-center gap-1 bg-[#1F1F23] rounded-md px-2 py-1">
            <button
              onClick={goToPrev}
              disabled={pageNumber <= 1}
              className="text-white px-2 py-0.5 rounded hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
              title="Previous page"
            >
              ‹
            </button>
            <span className="text-gray-300 text-xs min-w-17.5 text-center">
              {loading ? "..." : `${pageNumber} / ${numPages}`}
            </span>
            <button
              onClick={goToNext}
              disabled={pageNumber >= numPages}
              className="text-white px-2 py-0.5 rounded hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
              title="Next page"
            >
              ›
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-[#1F1F23] rounded-md px-2 py-1">
            <button
              onClick={zoomOut}
              className="text-white px-2 py-0.5 rounded hover:bg-[#2a2a2a] transition-colors text-sm"
              title="Zoom out"
            >
              −
            </button>
            <button
              onClick={resetZoom}
              className="text-gray-300 text-xs min-w-10.5 text-center hover:text-white transition-colors"
              title="Reset zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={zoomIn}
              className="text-white px-2 py-0.5 rounded hover:bg-[#2a2a2a] transition-colors text-sm"
              title="Zoom in"
            >
              +
            </button>
          </div>

          {/* Download */}
          <a
            href={url}
            download
            target="_blank"
            rel="noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
            title="Download PDF"
          >
            ↓ Download
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-xl leading-none shrink-0"
          title="Close viewer"
        >
          ✕
        </button>
      </div>

      {/* PDF Render Area */}
      <div className="flex flex-col items-center py-6 w-full">
        {loading && (
          <div className="flex flex-col items-center gap-3 mt-20 text-gray-400">
            <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm">Loading PDF…</p>
          </div>
        )}

        {error && (
          <div className="mt-20 text-center text-red-400 bg-red-900/20 border border-red-800 rounded-lg px-6 py-4 max-w-sm">
            <p className="font-semibold mb-1">Unable to load PDF</p>
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          className="flex flex-col items-center"
          options={pdfOptions}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="shadow-2xl shadow-black/60 rounded"
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>

        {/* Bottom Page Nav */}
        {!loading && !error && numPages > 1 && (
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={goToPrev}
              disabled={pageNumber <= 1}
              className="bg-[#1F1F23] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            >
              ← Previous
            </button>
            <span className="text-gray-400 text-sm">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={goToNext}
              disabled={pageNumber >= numPages}
              className="bg-[#1F1F23] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
