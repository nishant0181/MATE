import { useRotate } from "@embedpdf/plugin-rotate/react"

export default function RotateToolbar({ documentId }: { documentId: string }) {
  const { rotation, provides: rotate } = useRotate(documentId)
  if (!rotate) return null
  const degrees = rotation * 90
  return (
    <div className=" max-w-2xl flex items-center gap-3 border-b border-gray-300 bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
      <span className="tracking-wide text-xs font-medium uppercase text-gray-600 dark:text-gray-300">
        Rotation
      </span>
      <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
      {/* Rotation controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={rotate.rotateBackward}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-100"
          title="Rotate Counter-Clockwise"
        >
         
        </button>
        {/* Degree indicator */}
        <div className="min-w-14 rounded-md bg-white px-2 py-1 text-center shadow-sm ring-1 ring-gray-300 dark:bg-gray-700 dark:ring-gray-600">
          <span className="font-mono text-sm font-medium text-gray-700 dark:text-gray-300">
            {degrees}°
          </span>
        </div>
        <button
          onClick={rotate.rotateForward}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-100"
          title="Rotate Clockwise"
        >
      
        </button>
      </div>
      <span className="hidden text-xs text-gray-600 dark:text-gray-300 sm:inline">
        Click to rotate all pages
      </span>
    </div>
  )
}