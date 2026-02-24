// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Main from "./Components/MainHero";
import Navbar from "./Components/Navbar";
import NoteSection from "./Components/NoteSection";
import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      {/* <NoteSection /> */}
      <BrowserRouter>
        <Routes>
          
          <Route path="/" index element={<Main />} />
          <Route path="/notes" element={<NoteSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
