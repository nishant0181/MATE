import { useZoom } from "@embedpdf/plugin-zoom/react";
import PageControls from "./PageNavigation";
interface ZoomToolbarProps {
  documentId: string;
}

export default function ZoomToolbar({ documentId }: ZoomToolbarProps) {
  const { provides: zoomProvides, state: zoomState } = useZoom(documentId);

  if (!zoomProvides) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "8px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
        onClick={zoomProvides.zoomOut}
        >
        -
      </button>
      <span className="text-sm font-medium">
        {Math.round(zoomState.currentZoomLevel * 100)}%
      </span>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
        // onClick={zoomProvides.zoomIn}
        onClick={() => {
            if (Math.round(zoomState.currentZoomLevel * 100) < 500) {
            zoomProvides.zoomIn()

          }
        }}
      >
        +
      </button>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
        onClick={() => zoomProvides.requestZoom(1.0)}
      >
        Reset
      </button>
      <PageControls documentId={documentId} />
    </div>
  );
}
