import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import FavoritesProvider from "./contexts/FavoritesProvider";
import GlassDock from "./Components/GlassDock";
import ThemeGiver from "./contexts/ThemeGiver";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import PDFViewerWarmup from "./Components/PDFViewer/PDFViewerWarmup";
import BackButtonHandler from "./Components/BackButtonHandler";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/Components/ui/sonner";
import RouteMetaData from "./Components/RouteMetaData";
import InstallPopup from "./Components/InstallPopup";
import NetworkStatusTracker from "./Components/NetworkStatusTracker";
import LoadingFallback from "./Components/LoadingFallback";
import MainPage from "./Components/MainPage";

const DashBoard = lazy(() => import("./Components/Dashboard/DashBoard"));
const NoteSection = lazy(() => import("./Components/NoteSection"));
const SubjectPage = lazy(() => import("./Components/SubjectPage"));
const FavoritesPage = lazy(() => import("./Components/FavoritesPage"));
const ShareTargetHandler = lazy(
  () => import("./Components/ShareTargetHandler"),
);
const About = lazy(() => import("./Components/About"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Upload = lazy(() => import("./Components/Upload"));
const NotFound = lazy(() => import("./Components/NotFound"));

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
            <Suspense fallback={<LoadingFallback />}>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </ThemeGiver>
        </BrowserRouter>
      </FavoritesProvider>
      <PDFViewerWarmup enabled={true} />
      <NetworkStatusTracker />
      <Toaster />
      <InstallPopup />
    </ReactLenis>
  );
}

export default App;
