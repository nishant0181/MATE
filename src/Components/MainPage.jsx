import React from "react";
import Hero from "./Hero";
import NotesFeedOnHome from "./NotesFeedOnHome";
import Features from "./Features";


export default function MainPage() {
  return (
    <div
   
      className="relative mx-auto max-w-7xl "
    >
      <Hero />
      <div className="h-8 bg-dashed max-w-7xl mx-auto"></div>
      <NotesFeedOnHome />
      <div className="h-8 bg-dashed max-w-7xl mx-auto"></div>
      <Features />
      <div className="h-8 bg-dashed max-w-7xl mx-auto mb-20"></div>
    </div>
  );
}
