import React from "react";
import useRecentNotes from "../hooks/useRecentNotes";
import CardofNote from "./CardofNote";
import { NotesProvider } from "../lib/NotesProvider";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function NotesFeedOnHome() {
  const [recentNotes] = useRecentNotes();
  const { data } = NotesProvider();
  const words = ["faster", "better", "easier", "smarter"];
  return (
    <section className=" text-white mx-auto max-w-5xl flex flex-col items-center md:mt-16 mb-20 ">
      <div className="pb-4 pt-4 px-4  tracking-tighter max-w-4xl mx-auto font-extrabold  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 ">
        Learn
        <span className="ml-1">
          <FlipWords words={words} />
        </span>with MATE
      </div>

      <div className="pt-10   px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {recentNotes.map((id) => {
            const n = data.find((n) => n.id === id);
            if (!n) return null;
            return (
              <CardofNote
                key={n.id}
                note={n}
                id={n.id}
                title={n.title}
                description={n.description}
                subject={n.subject}
                year={n.year}
                university={n.university}
                pages={n.pages}
                url={n.url}
                semester={n.semester}
                branch={n.branch}
                imageUrl={n.imageUrl}
              />
            );
          })}
        </div>
      </div>
      <Link
        to="/notes"
        className="mt-10 bg-foreground dark:bg-foreground text-background dark:text-background py-2 px-6 rounded-md font-Figtree font-medium"
      >
        View All
      </Link>
    </section>
  );
}
