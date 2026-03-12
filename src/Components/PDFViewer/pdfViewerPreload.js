export const loadPDFViewerModule = () => import("./PDFViewer.tsx");

export function preloadPDFViewerChunk() {
  return loadPDFViewerModule();
}