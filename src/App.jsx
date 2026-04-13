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


function App() {
  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar />
          <GlassDock />
           <div className="bg-[linear-gradient(180deg,transparent_0%,#09090b_97%)] w-full fixed bottom-0 z-20 h-16 md:h-28 hidden md:block pointer-events-none  "></div>
          <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/notes" element={<NoteSection />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/subject/:id" element={<SubjectPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  );
}

export default App;
