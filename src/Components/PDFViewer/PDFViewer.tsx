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

type PDFViewerProps = {
  documentUrl?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function PDFViewer({
  documentUrl = "",
  setIsOpen,
}: PDFViewerProps) {
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
      createPluginRegistration(ScrollPluginPackage),
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
    return <div>Loading PDF Engine...</div>;
  }

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div className="h-dvh flex flex-col ">
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (
                  <div
                    className=""
                    style={{
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <ZoomToolbar documentId={activeDocumentId} />{" "}
                    <div className="flex justify-between items-center gap-4  bg-[#0c0c0c] px-4 py-2 rounded-lg shadow-lg z-10">
                      <div
                       
                        className="text-xl font-Inter font-medium tracking-[3.5px] text-[#f4efe6]"
                      >
                        MATE
                      </div>
                      <div className="text-sm font-Inter text-[#f4efe6]">
                        {documentUrl.split("/").pop().split(".pdf")[0]}
                      </div>
                      <div className="hidden md:block">
                        <PageControls documentId={activeDocumentId} />
                      </div>

                      <div className="hidden items-center gap-2 md:flex">
                        <ExportToolbar documentId={activeDocumentId} />
                        <button
                          onClick={() => setIsOpen && setIsOpen(false)}
                          className="rounded bg-[#1F1F23] px-4 py-3 text-xs font-semibold text-white hover:bg-[#2a2a2a  cursor-pointer p-2 bg-[#2a2d2f] rounded-xl font-Inter text-xs]"
                        >
                          Back
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
                    <div className='hidden md:block absolute right-2 bottom-2'>
                      <RotateToolbar documentId={activeDocumentId} />
                    </div>
                    <div className="flex  md:hidden justify-between items-center gap-4  bg-[#0c0c0c] px-6 py-2 rounded-lg shadow-lg z-10">
                      <button
                        onClick={() => setIsOpen && setIsOpen(false)}
                        className="flex items-center justify-center gap-2  px-4 py-2 text-xs font-semibold text-white hover:bg-[#2a2a2a] cursor-pointer p-2 bg-[#2a2d2f] rounded-xl font-Inter text-xs]"
                      >
                        <img className='w-6' src="/Images/back-square.svg" alt="back-square" />
                        
                      </button>
                      <PageControls documentId={activeDocumentId} />
                      <div className="flex justify-between items-center gap-2">

                      <ExportToolbar documentId={activeDocumentId} />
                      <RotateToolbar documentId={activeDocumentId} />
                      </div>
                    </div>
                  </div>
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </div>
  );
}
