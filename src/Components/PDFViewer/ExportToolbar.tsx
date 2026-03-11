import { useExport } from '@embedpdf/plugin-export/react';
 
export const ExportToolbar = ({ documentId }) => {
  const { provides: exportApi } = useExport(documentId);
 
  return (
    <button onClick={() => exportApi?.download()} disabled={!exportApi}>
      Download
    </button>
  );
};