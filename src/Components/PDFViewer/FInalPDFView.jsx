import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PDFViewer from "./PDFViewer.tsx";

export default function FInalPDFView({ isOpen, setIsOpen, documentUrl }) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      return undefined;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
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
      className="fixed inset-0 z-70 flex  justify-center bg-black/80 "
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          className="absolute top-4 -right-16 rounded bg-[#1F1F23] px-3 py-1 text-sm font-semibold text-white hover:bg-[#2a2a2a]"
          onClick={() => setIsOpen(false)}
        >
          Back
        </button>
        <PDFViewer documentUrl={documentUrl} />
      </div>
    </div>,
    portalRoot,
  );
}
