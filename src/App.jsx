import "./App.css";
import DashBoard from "./Components/Dashboard/DashBoard";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import NoteSection from "./Components/NoteSection";
import { BrowserRouter, Routes, Route } from "react-router";
import SubjectPage from "./Components/SubjectPage";



function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/notes" element={<NoteSection />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/subject/:id" element={<SubjectPage />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
