import "./App.css";
import DashBoard from "./Components/Dashboard/DashBoard";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import NoteSection from "./Components/NoteSection";
import { BrowserRouter, Routes, Route } from "react-router";
import SubjectPage from "./Components/SubjectPage";
import FavoritesProvider from "./contexts/FavoritesProvider";
import FavoritesPage from "./Components/FavoritesPage";
import GlassDock from "./Components/GlassDock";
import ThemeGiver from "./contexts/ThemeGiver";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import PDFViewerWarmup from "./Components/PDFViewer/PDFViewerWarmup";
import ShareTargetHandler from "./Components/ShareTargetHandler";

import BackButtonHandler from "./Components/BackButtonHandler";

import { ReactLenis } from "lenis/react";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import { Toaster } from "@/Components/ui/sonner";
import Upload from "./Components/Upload";
import RouteMetaData from "./Components/RouteMetaData";

function App() {
  return (
    <ReactLenis root>
      <FavoritesProvider>
        <BrowserRouter>
          <RouteMetaData />
          <BackButtonHandler />
          <ScrollToTop />
          <ThemeGiver>
            <Navbar />
            <GlassDock />
            <div
              className="
              bg-[linear-gradient(180deg,transparent_0%,#ffffff_100%)]
              
              dark:bg-[linear-gradient(180deg,transparent_0%,oklch(0.227_0_281.65)_97%)]
              mx-auto w-full fixed bottom-0 z-20  h-10 md:h-28 hidden md:block pointer-events-none
           "
            ></div>
            <Routes>
              <Route path="/" index element={<MainPage />} />
              <Route path="/notes" element={<NoteSection />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/subject/:id" element={<SubjectPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/share-target" element={<ShareTargetHandler />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
            <Footer />
          </ThemeGiver>
        </BrowserRouter>
      </FavoritesProvider>
      <PDFViewerWarmup enabled={true} />
      <Toaster />
    </ReactLenis>
  );
}

export default App;
