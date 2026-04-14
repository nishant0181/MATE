import { useRotate } from "@embedpdf/plugin-rotate/react"

export default function RotateToolbar({ documentId }: { documentId: string }) {
  const { rotation, provides: rotate } = useRotate(documentId)
  if (!rotate) return null
  const degrees = rotation * 90
  return (
    <div className="bg-[#2a2d2f] rounded-lg shadow-lg z-10 flex items-center justify-center gap-2 p-2">
    
      
     
        
        <button
          onClick={rotate.rotateForward}
          
          title="Rotate Clockwise"
        >
          <img src="/Images/restart-square-svgrepo-com.svg" width={26} alt="restart-square-svgrepo-com" className="z-50 rotate-90 cursor-pointer" />
        </button>
      

    </div>
  )
}