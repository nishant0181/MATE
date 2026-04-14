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

function App() {
  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <ThemeGiver >
            <Navbar />
            <GlassDock />
            <div
              className="
              bg-[linear-gradient(180deg,transparent_0%,#ffffff_100%)]
              dark:bg-[linear-gradient(180deg,transparent_0%,#09090b_97%)] mx-auto w-full fixed bottom-0 z-20  h-10 md:h-28 hidden md:block pointer-events-none
           "
            ></div>
            <Routes>
              <Route path="/" index element={<MainPage />} />
              <Route path="/notes" element={<NoteSection />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/subject/:id" element={<SubjectPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
            <Footer />
          </ThemeGiver>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  );
}

export default App;
