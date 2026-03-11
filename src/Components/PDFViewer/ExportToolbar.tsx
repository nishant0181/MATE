import { useExport } from '@embedpdf/plugin-export/react';
 
export const ExportToolbar = ({ documentId }) => {
  const { provides: exportApi } = useExport(documentId);
 
  return (
    <button className='flex items-center justify-center gap-2 text-white cursor-pointer p-2 bg-[#2a2d2f] rounded-xl font-Inter text-xs'  onClick={() => exportApi?.download()} disabled={!exportApi}>
      <img width={20} src="/Images/download-minimalistic.svg" alt="download-minimalistic" />
    Download
    </button>
  );
};