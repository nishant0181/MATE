import { useZoom } from "@embedpdf/plugin-zoom/react";
import { MapPlus, MinusSquare, Plus, PlusCircle, PlusIcon, PlusSquare } from "lucide-react";

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
      
      className="text-white absolute top-1/2 -left-10 -translate-x-1/2 -translate-y-1/2 py-2 px-2 flex-col transform hidden md:flex items-center justify-center gap-2 bg-white/10 dark:bg-[#0c0c0c] rounded-lg shadow-lg z-10  "
    >
      <button
        className="dark:bg-[#2a2d2f] bg-white/10 dark:hover:bg-[#242424] hover:bg-white/30 text-white-800 font-bold py-1 px-1 rounded"
        // onClick={zoomProvides.zoomIn}
        onClick={() => {
          if (Math.round(zoomState.currentZoomLevel * 100) < 500) {
            zoomProvides.zoomIn();
          }
        }}
      >
        <PlusSquare />
      </button>

      <span className="text-sm font-medium">
        {Math.round(zoomState.currentZoomLevel * 100)}
      </span>

      <button
        className="dark:bg-[#2a2d2f] bg-white/10 dark:hover:bg-[#242424] hover:bg-white/20 text-white-800 font-bold py-1 px-1 rounded"
        onClick={zoomProvides.zoomOut}
      >
        <MinusSquare />
      </button>
      <button
        
        onClick={() => zoomProvides.requestZoom(1.0)}
      >
      <img src="/Images/restart-square-svgrepo-com.svg" width={30} alt="restart-square-svgrepo-com" className="z-50" />
      </button>
    </div>
  );
}
