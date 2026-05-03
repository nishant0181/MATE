import React, { Suspense, lazy, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { loadPDFViewerModule } from "./pdfViewerPreload";
import PDFLoadingSkeleton from "./PDFLoadingSkeleton";

const LazyPDFViewer = lazy(() =>
  loadPDFViewerModule().then((module) => ({ default: module.default })),
);

export default function FInalPDFView({ isOpen, setIsOpen, documentUrl }) {
  const hasModalHistoryEntry = useRef(false);

  const closeModal = useCallback(() => {
    if (hasModalHistoryEntry.current) {
      window.history.back();
      return;
    }

    setIsOpen(false);
  }, [setIsOpen]);

  // ── Screen Wake Lock: keep screen on while reading PDF ──────────────────
  const wakeLockRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const acquireWakeLock = async () => {
      if (!('wakeLock' in navigator)) return;
      try {
        wakeLockRef.current = await navigator.wakeLock.request('screen');
      } catch (err) {
      }
    };

    acquireWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isOpen) {
        acquireWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
     
      wakeLockRef.current?.release().catch(() => {});
      wakeLockRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      return undefined;
    }

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
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
        data-lenis-prevent="true"
      >

      
        <Suspense fallback={<PDFLoadingSkeleton documentUrl={documentUrl} setIsOpen={setIsOpen} />}>
          <LazyPDFViewer documentUrl={documentUrl} setIsOpen={setIsOpen} />
        </Suspense>
      </div>
    </div>,
    portalRoot,
  );
}
