import { useContext } from "react";
import CardofNote from "./CardofNote";
import { FavoritesContext } from "../contexts/FavoritesProvider";

import { Link } from "react-router";
import { Button } from "./ui/button";


export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <section className="max-w-5xl mx-auto">
        <div
          className="relative bg-white dark:bg-background mx-auto max-w-5xl w-full flex flex-col pt-8  pb-4 border-t border-b z-10 border-primary/20 select-none"
        >
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-4 md:items-center  gap-8 md:justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-Figtree leading-2xl text-black dark:text-neutral-100 ">
                My Favorites List
              </h1>
            </div>
          </div>
        </div>
        <main className="p-8 max-w-5xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center "
          >
            {favorites.length === 0 ? (
              <div className="col-span-full flex flex-col items-center min-h-[50vh] justify-center gap-8">
              <p className="text-gray-400 text-center py-10">
                You have no notes in your favorites.
                Let's fill it with some notes.
              </p>
              <div className="flex justify-center">
                <Button  asChild>
                  <Link to="/notes">Go to NotesPage</Link>
                </Button>
              </div>
              </div>
            ) : (
              favorites.map((note) => (
                <CardofNote
                  key={note.id}
                  note={note}
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
                  imageUrl={note.imageUrl}
                />
              ))
            )}
          </div>
        </main>
      </section>
    </>
  );
}
