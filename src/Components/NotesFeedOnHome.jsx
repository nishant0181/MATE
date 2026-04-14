import useRecentNotes from "../hooks/useRecentNotes";
import CardofNote from "./CardofNote";
import { NotesProvider } from "../lib/NotesProvider";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function NotesFeedOnHome() {
  const [recentNotes] = useRecentNotes();
  const { data } = NotesProvider();
  const words = ["Recommended", "Better", "Best", "Top"];
  return (
    <section className="bg-white dark:bg-[#0a0a0a] text-white mx-auto max-w-5xl flex flex-col items-center m-10 mb-20 ">
      <div className="w-full flex  items-center px-4 md:px-0 border-t border-primary/20 border-b pb-4 pt-4">
        <div className="text-3xl md:text-4xl w-full mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          This is
          <FlipWords words={words} /> <br />
          for you
        </div>
      </div>
      {/* <h1 className="w-full mt-10 px-10 md:px-0 text-3xl font-bold text-left text-black dark:text-white">
         Something <span className="text-black dark:text-[#808080]">For you</span> :
        </h1> */}

      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
