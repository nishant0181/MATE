"use client";
import React from "react";
import { ChangePreference } from "./ChangePreference";
import { BookOpen, GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";
export default function DashBoard() {
  return (
    <>
      <section
        id="dashboardSection"
        className="md:max-w-350 
         mx-auto text-white font-Figtree select-none "
      >
        <div className="relative bg-[#0a0a0a] mx-auto max-w-5xl w-full flex flex-col pt-8 pb-4 border-b  border-primary/20">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-4">

            <h1 className="text-3xl font-bold font-Figtree leading-2xl text-neutral-100 ">My Dashboard</h1>
           
             <div className="flex items-center gap-2 flex-wrap ">
                  <Badge
                    variant="outline"
                    className="text-sm bg-primary/5 border-primary/20"
                  >
                    <GraduationCap className="h-3.5 w-3.5 mr-1" />
                    Degree
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-sm bg-primary/5 border-primary/20"
                  >
                    <BookOpen className="h-3.5 w-3.5 mr-1" />
                    Semester 
                  </Badge>
                </div>

            </div>

            <ChangePreference />


          </div>
        </div>

        <main className="p-8">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-2 h-60  border2 border-primary/20 rounded-lg bg-primary/5">
            <BookOpen className="h-12 w-12 text-primary" />
            <p className="text-lg font-medium text-neutral-100">No Notes Available</p>
            <p className="text-sm text-neutral-500 max-w-md text-center">We don't have any notes for BTech - Semester 1 yet. Check back soon or try different preferences.</p>
          </div>
        </main>
      </section>
    </>
  );
}
