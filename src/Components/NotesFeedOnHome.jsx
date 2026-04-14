import useRecentNotes from "../hooks/useRecentNotes";
import CardofNote from "./CardofNote";
import { NotesProvider } from "../lib/NotesProvider";

export default function NotesFeedOnHome() {
  const [recentNotes] = useRecentNotes();
  const { data } = NotesProvider();
  return (

    <section className="bg-white dark:bg-[#0a0a0a] text-white mx-auto max-w-5xl flex flex-col items-center m-10 mb-20 ">
      
      
        <h1 className="w-full mt-10 px-10 text-3xl font-bold text-left text-black dark:text-white">
         Something For you :
        </h1>
      
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
    </section>
  );
}
