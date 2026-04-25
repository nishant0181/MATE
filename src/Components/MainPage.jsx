import React from "react";
import Hero from "./Hero";
import NotesFeedOnHome from "./NotesFeedOnHome";
import Features from "./Features";
import InstallApp from "./InstallApp";

export default function MainPage() {
  return (
    <div className="relative mx-auto max-w-7xl ">
      <Hero />
      <NotesFeedOnHome />
      <Features />
      <InstallApp />
    </div>
  );
}
