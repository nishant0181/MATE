import React from "react";
import Hero from "./Hero";
import NotesFeedOnHome from "./NotesFeedOnHome";
import Features from "./Features";
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-7xl "
    >
      <Hero />
      <div className="h-8 bg-dashed max-w-7xl mx-auto"></div>
      <NotesFeedOnHome />
      <div className="h-8 bg-dashed max-w-7xl mx-auto"></div>
      <Features />
      <div className="h-8 bg-dashed max-w-7xl mx-auto mb-20"></div>
    </motion.div>
  );
}
