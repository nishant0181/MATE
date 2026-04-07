"use client";
import React, { useState, useEffect } from "react";

import { BookOpen, GraduationCap, Settings, University } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import ProfileDialogBox from "./ProfileDialogBox";

export default function DashBoard() {
  const [profile, setProfile] = useState(() => {
    const defaultProfile = {
      university: null,
      degree: null,
      semester: null,
      setUp: false,
    };

    if (typeof window === "undefined") return defaultProfile;

    try {
      const storedProfile = localStorage.getItem("profile");
      return storedProfile
        ? { ...defaultProfile, ...JSON.parse(storedProfile) }
        : defaultProfile;
    } catch {
      return defaultProfile;
    }
  });

  const [isOpen, setIsOpen] = useState(() => !profile.setUp);
  
  useEffect(() => {
    console.log(profile);
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const changeDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="dashboardSection"
        className="md:max-w-350 
         mx-auto text-white font-Figtree select-none "
      >
        <ProfileDialogBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setProfile={setProfile}
          changeDialog={changeDialog}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#0a0a0a] mx-auto max-w-5xl w-full flex flex-col pt-8 pb-4 border-t border-b  border-primary/20"
        >
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-4 md:items-center  gap-8 md:justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-Figtree leading-2xl text-neutral-100 ">
                My Dashboard
              </h1>

              <div className="flex items-center gap-2 flex-wrap max-w-87.5 ">
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  Degree {profile.degree ? `: ${profile.degree}` : ""}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <BookOpen className="h-3.5 w-3.5 mr-1" />
                  Semester {profile.semester ? `: ${profile.semester}` : ""}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-primary/5 border-primary/20"
                >
                  <GraduationCap className="h-3.5 w-3.5 mr-1" />
                  University {profile.university ? `: ${profile.university}` : ""}
                </Badge>
              
              </div>
            </div>

            <div className="self-end md:self-auto">
              <Button variant="outline" onClick={changeDialog}>
                <Settings className="h-4 w-4 mr-2" />
                Change Preferences
              </Button>
            </div>
          </div>
        </motion.div>

        <main className="p-8">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-2 h-60  border2 border-primary/20 rounded-lg bg-primary/5">
            <BookOpen className="h-12 w-12 text-primary" />
            <p className="text-lg font-medium text-neutral-100">
              No Notes Available
            </p>
            <p className="text-sm text-neutral-500 max-w-md text-center">
              We don&apos;t have any notes for BTech - Semester 1 yet. Check
              back soon or try different preferences.
            </p>
          </div>
        </main>
      </motion.section>
    </>
  );
}
