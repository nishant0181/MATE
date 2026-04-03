import "./App.css";

import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import NoteSection from "./Components/NoteSection";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/notes" element={<NoteSection />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
