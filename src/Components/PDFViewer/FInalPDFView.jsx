import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PDFViewer from "./PDFViewer.tsx";

export default function FInalPDFView({ isOpen, setIsOpen, documentUrl }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const portalRoot = document.getElementById("PDFViewPort");

  if (!isOpen || !portalRoot) {
    return null;
  }

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute -top-12 right-0 rounded bg-[#1F1F23] px-3 py-1 text-sm font-semibold text-white hover:bg-[#2a2a2a]"
          onClick={() => setIsOpen(false)}
        >
          Close X
        </button>
        <PDFViewer documentUrl={documentUrl} />
      </div>
    </div>,
    portalRoot
  );
}
