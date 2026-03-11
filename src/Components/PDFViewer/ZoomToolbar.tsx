import { useZoom } from "@embedpdf/plugin-zoom/react";

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
      
      className="text-white absolute top-1/2 -left-10 -translate-x-1/2 -translate-y-1/2 py-1 flex-col transform hidden md:flex items-center justify-center gap-2 bg-[#0c0c0c] rounded-lg shadow-lg z-10  "
    >
      <button
        className="bg-gray-900 hover:bg-gray-300 text-white-800 font-bold py-1 px-3 rounded"
        // onClick={zoomProvides.zoomIn}
        onClick={() => {
          if (Math.round(zoomState.currentZoomLevel * 100) < 500) {
            zoomProvides.zoomIn();
          }
        }}
      >
        +
      </button>

      <span className="text-sm font-medium">
        {Math.round(zoomState.currentZoomLevel * 100)}%
      </span>

      <button
        className="bg-gray-900 hover:bg-gray-300 text-white-800 font-bold py-1 px-3 rounded"
        onClick={zoomProvides.zoomOut}
      >
        -
      </button>
      <button
        
        onClick={() => zoomProvides.requestZoom(1.0)}
      >
      <img src="/Images/restart-square-svgrepo-com.svg" width={30} alt="restart-square-svgrepo-com" className="z-50" />
      </button>
    </div>
  );
}
