import { useState } from "react";
import { preloadPDFViewerChunk } from "../Components/PDFViewer/pdfViewerPreload.js";


export default function PDFviewProvider() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState("");



    const handleViewPDF = ({ url }) => {
        void preloadPDFViewerChunk();
        setSelectedPdfUrl(url);
        setIsOpen(true);
    };
    return {
        isOpen,
        setIsOpen,
        selectedPdfUrl,
        setSelectedPdfUrl,
        handleViewPDF,
    }
}