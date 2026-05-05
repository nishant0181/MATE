import { useState } from "react";
import { preloadPDFViewerChunk } from "../Components/PDFViewer/pdfViewerPreload.js";


export default function PDFviewProvider() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState("");
    const [selectedPdfName, setSelectedPdfName] = useState("");



    const handleViewPDF = ({ url, name }) => {
        void preloadPDFViewerChunk();
        setSelectedPdfUrl(url);
        if (name) setSelectedPdfName(name);
        setIsOpen(true);
    };
    return {
        isOpen,
        setIsOpen,
        selectedPdfUrl,
        setSelectedPdfUrl,
        selectedPdfName,
        setSelectedPdfName,
        handleViewPDF,
    }
}