import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PDFViewer from "./PDFViewer.tsx";

export default function FInalPDFView({ isOpen, setIsOpen, documentUrl }) {
  const hasModalHistoryEntry = useRef(false);

  const closeModal = useCallback(() => {
    if (hasModalHistoryEntry.current) {
      window.history.back();
      return;
    }

    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      return undefined;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Add a synthetic history entry so browser back closes modal first.
      if (!hasModalHistoryEntry.current) {
        window.history.pushState(
          {
            ...(window.history.state ?? {}),
            pdfViewerOpen: true,
          },
          "",
        );
        hasModalHistoryEntry.current = true;
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handlePopState = () => {
      if (hasModalHistoryEntry.current) {
        hasModalHistoryEntry.current = false;
      }
      setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);

      if (!isOpen) {
        document.body.style.overflow = "unset";
        document.documentElement.style.overflow = "unset";
      }
    };
  }, [closeModal, isOpen, setIsOpen]);

  const portalRoot = document.getElementById("PDFViewPort");

  if (!isOpen || !portalRoot) {
    return null;
  }

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-70 flex  justify-center bg-black/80 "
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >

      
        <PDFViewer documentUrl={documentUrl} setIsOpen={setIsOpen} />
      </div>
    </div>,
    portalRoot,
  );
}
