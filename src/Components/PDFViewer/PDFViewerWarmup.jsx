import React, { Suspense, lazy } from "react";
import { loadPDFViewerModule } from "./pdfViewerPreload";

const LazyPDFEngineWarmup = lazy(() =>
  loadPDFViewerModule().then((module) => ({ default: module.PDFEngineWarmup })),
);

export default function PDFViewerWarmup({ enabled }) {
  if (!enabled) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <LazyPDFEngineWarmup />
    </Suspense>
  );
}