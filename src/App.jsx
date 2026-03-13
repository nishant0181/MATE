import "./App.css";
import Main from "./Components/MainHero";
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
          
          <Route path="/" index element={<Main />} />
          <Route path="/notes" element={<NoteSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
