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
import { Button } from "../ui/button";
import { Fullscreen, FullscreenIcon, LucideFullscreen } from "lucide-react";

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
              {({ isLoaded }) =>
                isLoaded ? (
                  <div
                    className=""
                    style={{
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <ZoomToolbar documentId={activeDocumentId} />{" "}
                    <div className="flex justify-between items-center gap-4  bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white leading-tight font-Inter flex items-center gap-2 font-medium text-sm py-1 px-4 rounded-md border border-black/10 dark:border-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                      <div className="text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]">
                        MATE
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-sm font-Inter text-white">
                          {documentName}
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
                    <div style={{ flex: 1, overflow: "hidden" }}>
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
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </div>
  );
}
