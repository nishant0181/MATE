import React from "react";
import Hero from "./Hero";
import NotesFeedOnHome from "./NotesFeedOnHome";
import Features from "./Features";
import InstallApp from "./InstallApp";
import Faq from "./Faq";

export default function MainPage() {
  return (
    <div className="relative mx-auto max-w-7xl select-none">
      <Hero />
      <NotesFeedOnHome />
      <Features />
      <InstallApp />
      <Faq />
    </div>
  );
}
