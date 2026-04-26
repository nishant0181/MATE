import { createPluginRegistration } from "@embedpdf/core";
import { EmbedPDF } from "@embedpdf/core/react";
import { usePdfiumEngine } from "@embedpdf/engines/react";
import { useMemo } from "react";
import ZoomToolbar from "./ZoomToolbar";
import RotateToolbar from "./RotateToolbar";
import { ExportToolbar } from "./ExportToolbar";
import PageControls from "./PageNavigation";
// Import the essential plugins
import {
  Viewport,
  ViewportPluginPackage,
} from "@embedpdf/plugin-viewport/react";
import {
  Scroller,
  ScrollPluginPackage,
  ScrollStrategy,
} from "@embedpdf/plugin-scroll/react";
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from "@embedpdf/plugin-document-manager/react";
import {
  RenderLayer,
  RenderPluginPackage,
} from "@embedpdf/plugin-render/react";
import {
  ZoomPluginPackage,
  ZoomMode,
  ZoomGestureWrapper,
} from "@embedpdf/plugin-zoom/react";
import {
  TilingLayer,
  TilingPluginPackage,
} from "@embedpdf/plugin-tiling/react";
import { Rotation } from "@embedpdf/models";
import { Rotate, RotatePluginPackage } from "@embedpdf/plugin-rotate/react";
import { ExportPluginPackage } from "@embedpdf/plugin-export/react";
import PDFLoadingSkeleton from "./PDFLoadingSkeleton";
import {  LucideFullscreen } from "lucide-react";

type PDFViewerProps = {
  documentUrl?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const getDocumentName = (url: string) => {
  if (!url) {
    return "Untitled";
  }

  const fileName = decodeURIComponent(url.split("/").pop() ?? "");
  const cleanedName = fileName.replace(/\.pdf$/i, "");
  return cleanedName || "Untitled";
};

export function PDFEngineWarmup() {
  usePdfiumEngine();
  return null;
}

export default function PDFViewer({
  documentUrl = "",
  setIsOpen,
}: PDFViewerProps) {
  const documentName = useMemo(
    () => getDocumentName(documentUrl),
    [documentUrl],
  );

  const plugins = useMemo(
    () => [
      createPluginRegistration(DocumentManagerPluginPackage, {
        initialDocuments: [
          {
            url: documentUrl,
          },
        ],
      }),
      createPluginRegistration(ViewportPluginPackage),
      createPluginRegistration(RenderPluginPackage),
      createPluginRegistration(ZoomPluginPackage, {
        defaultZoomLevel: ZoomMode.FitPage,
      }),
      createPluginRegistration(ScrollPluginPackage, {
        defaultStrategy: ScrollStrategy.Vertical,
        defaultPageGap: 10,
      }),
      createPluginRegistration(TilingPluginPackage, {
        tileSize: 768,
        overlapPx: 5,
        extraRings: 0,
      }),
      createPluginRegistration(RotatePluginPackage, {
        defaultRotation: Rotation.Degree0,
      }),
      createPluginRegistration(ExportPluginPackage, {
        defaultFileName: "my-document.pdf",
      }),
    ],
    [documentUrl],
  );

  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();

  if (isLoading || !engine) {
    return (
      <PDFLoadingSkeleton documentUrl={documentUrl} setIsOpen={setIsOpen} />
    );
  }

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div className="h-dvh flex flex-col ">
   
  
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded, isError }) => {
                if (isError) {
                  return (
                    <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-xs text-white p-4 text-center relative">
                      <div className="absolute top-0 left-0 w-full  text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6] p-4 0">
                      MATE

                      </div>
                      <div className="mb-6 flex flex-col items-center gap-2">
                        <div className="rounded-full  p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <h2 className="text-xl font-bold">We are very sorry for the inconvinience.</h2>
                        <p className="text-sm text-neutral-400 max-w-sm">
                          The selected document could not be loaded. Kindly try again.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        
                        <button
                          onClick={() => setIsOpen && setIsOpen(false)}
                          className="cursor-pointer rounded-lg bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors"
                        >
                          Back & Try Again
                        </button>
                      </div>
                    </div>
                  );
                }

                return isLoaded ? (
                  <div
                    className="select-none backdrop-blur-xs"
                    style={{
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <ZoomToolbar documentId={activeDocumentId} />{" "}
                    <div className="flex justify-between items-center gap-4  bg-black/5 dark:bg-black   text-black dark:text-white leading-tight font-Inter font-medium text-sm py-1 px-4  border border-black/10 dark:border-white/10 transition-colors cursor-pointer">
                      <div className="text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]">
                        MATE
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-sm font-Inter text-white">
                          {documentName.length > 30
                            ? (documentName.slice(0, 30) + "...")
                                .toUpperCase()
                                .replace(/-/g, " ")
                            : documentName.toUpperCase().replace(/-/g, " ")}
                        </div>
                        <div className="hidden md:block">
                          <PageControls documentId={activeDocumentId} />
                        </div>
                      </div>

                      <div className="hidden items-center gap-2 md:flex">
                        <ExportToolbar documentId={activeDocumentId} />
                        <button
                          onClick={() => setIsOpen && setIsOpen(false)}
                          className="cursor-pointer rounded-md bg-[#2a2d2f] hover:bg-[#242424]  p-2 text-xs font-semibold "
                        >
                          <img
                            className="w-6"
                            src="/Images/back-square.svg"
                            alt="back-square"
                          />
                        </button>
                      </div>
                    </div>
                    {/* 2. Add the component here with documentId */}
                    <div  style={{ flex: 1, overflow: "hidden" }}>
                      <Viewport
                        documentId={activeDocumentId}
                        className=" scrollbar-thumb-[#313131] scrollbar-track-[#161616]  scrollbar-thin"
                      >
                        <ZoomGestureWrapper documentId={activeDocumentId}>
                          <Scroller
                            documentId={activeDocumentId}
                            renderPage={({ width, height, pageIndex }) => (
                              <Rotate
                                documentId={activeDocumentId}
                                pageIndex={pageIndex}
                              >
                                <div style={{ width, height }}>
                                  <RenderLayer
                                    documentId={activeDocumentId}
                                    pageIndex={pageIndex}
                                    scale={1.0}
                                  />
                                  <TilingLayer
                                    documentId={activeDocumentId}
                                    pageIndex={pageIndex}
                                  />
                                </div>
                              </Rotate>
                            )}
                          />
                        </ZoomGestureWrapper>
                      </Viewport>
                    </div>
                    <div className="hidden md:block absolute right-2 bottom-2">
                      <RotateToolbar documentId={activeDocumentId} />
                    </div>
                    <div className="flex  md:hidden justify-between items-center gap-4  dark:bg-[#0c0c0c] bg-white px-6 py-2  shadow-lg z-10">
                      <div className="flex items-center gap-2">
                        <button
                          className="cursor-pointer rounded-md bg-[#2a2d2f] hover:bg-[#242424]  p-2 text-xs font-semibold "
                          onClick={() => {
                            if (document.fullscreenElement) {
                              document.exitFullscreen();
                            } else {
                              document.documentElement.requestFullscreen();
                            }
                          }}
                        >
                          <LucideFullscreen className="text-white" size={26} />
                        </button>
                        <RotateToolbar documentId={activeDocumentId} />
                      </div>
                      <PageControls documentId={activeDocumentId} />
                      <div className="flex justify-between items-center gap-2">
                        <ExportToolbar documentId={activeDocumentId} />
                        <button
                          onClick={() => setIsOpen && setIsOpen(false)}
                          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2a2d2f] p-2 px-2 py-2 text-xs font-semibold text-white hover:bg-[#2a2a2a]"
                        >
                          <img
                            className="w-6"
                            src="/Images/back-square.svg"
                            alt="back-square"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <PDFLoadingSkeleton
                    documentUrl={documentUrl}
                    setIsOpen={setIsOpen}
                  />
                );
              }}
            </DocumentContent>
          )
        }
      </EmbedPDF>
      
   
   
        
     
        <div></div>
      
    </div>
  );
}
