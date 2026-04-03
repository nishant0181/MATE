import { useExport } from '@embedpdf/plugin-export/react';
 
export const ExportToolbar = ({ documentId }) => {
  const { provides: exportApi } = useExport(documentId);
 
  return (
    <button title='Download' className='cursor-pointer p-2 bg-[#2a2d2f] hover:bg-[#242424] rounded-md'  onClick={() => exportApi?.download()} disabled={!exportApi}>
      <img width={25} src="/Images/download-minimalistic.svg" className='w-6' alt="download-minimalistic" />
    </button>
  );
};