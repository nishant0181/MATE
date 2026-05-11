"use client";
import React, { useState, useEffect } from "react";

import { BookOpen, GraduationCap, Settings } from "lucide-react";
import { Badge } from "../ui/badge";

import { Button } from "../ui/button";
import ProfileDialogBox from "./ProfileDialogBox";
import { NotesProvider } from "../../lib/NotesProvider.js";
import CardofNote from "../CardofNote";

export default function DashBoard() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [profile, setProfile] = useState(() => {
    const defaultProfile = {
      university: null,
      degree: null,
      shortDergree: null,
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
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const changeDialog = () => {
    setIsOpen(!isOpen);
  };

  const { data, dataSource, isEmptyRemote, isLoading } = NotesProvider();

  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const notes = data.filter((note) => {
    return (
      note.university === profile.university &&
      (note.branch.includes(profile.shortDergree) || note.branch === "all") &&
      (note.semester === profile.semester ||
        note.semester.includes(profile.semester))
    );
  });

  filteredData.length !== notes.length && setFilteredData(notes);

  return (
    <>
      <section
        id="dashboardSection"
        className="md:max-w-350 
        mx-auto text-black dark:text-white  select-none  mb-20  "
      >
        <ProfileDialogBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setProfile={setProfile}
          changeDialog={changeDialog}
        />

        <div className="relative bg-zinc-50 dark:bg-background mx-auto max-w-5xl w-full flex flex-col pt-8 pb-4 border-t border-b  border-primary/20">
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-4 md:items-center  gap-8 md:justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-extrabold font-Figtree leading-2xl text-black dark:text-neutral-100 ">
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
                  University{" "}
                  {profile.university ? `: ${profile.university}` : ""}
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
        </div>

        {!profile.setUp ? (
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-2 h-60  border2 border-primary/20 rounded-lg bg-primary/5">
            <p className="text-neutral-600 dark:text-neutral-300 text-center col-span-full py-10 px-4">
              Please setup your preferences to get started. We are exited to
              grow with you!
            </p>
            <Button variant="" onClick={changeDialog}>
              <Settings className="h-4 w-4 mr-2" />
              Setup Preferences
            </Button>
          </div>
        ) : (
          <main className="pt-8 max-w-5xl mx-auto">
            {isLoading ? (
              <p className="text-gray-400 text-center col-span-full py-10">
                Loading notes...
              </p>
            ) : filteredData.length === 0 ? (
              <main className="p-8 w-full">
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-2 h-60  border2 border-primary/20 rounded-lg bg-primary/5">
                  <BookOpen className="h-12 w-12 text-primary" />
                  <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100 ">
                    No Notes Available
                  </p>
                  <p className="text-sm text-neutral-500 max-w-md text-center">
                    We don&apos;t have any notes for {profile.degree} - Semester{" "}
                    {profile.semester} yet. Check back soon or try different
                    preferences.
                  </p>
                  <Button variant="" onClick={changeDialog}>
                    <Settings className="h-4 w-4 mr-2" />
                    Change Preferences
                  </Button>
                </div>
              </main>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-4 mx-auto w-full">
                {filteredData.slice(0, visibleCount).map((note, index) => (
                  <CardofNote
                    note={note}
                    key={note.id}
                    index={index}
                    id={note.id}
                    title={note.title}
                    description={note.description}
                    subject={note.subject}
                    year={note.year}
                    university={note.university}
                    pages={note.pages}
                    url={note.url}
                    semester={note.semester}
                    branch={note.branch}
                    FileMode={false}
                  />
                ))}
              </div>
            )}

            {filteredData.length > visibleCount && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount(visibleCount + 9)}
                  className="px-6 py-3 dark:bg-white dark:text-black bg-neutral-800  text-neutral-200 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </main>
        )}
      </section>
    </>
  );
}
