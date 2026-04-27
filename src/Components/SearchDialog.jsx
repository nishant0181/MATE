import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { NotesProvider } from "../lib/NotesProvider";
import { useEffect, useState } from "react";
import CardofNote from "./CardofNote";

export default function SearchDialog({isOpen, setIsOpen}) {
 

  const useCmdK = (callback) => {
    useEffect(() => {
      const handleKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "k") {
          event.preventDefault();
          callback();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [callback]);
  };
    useCmdK(() => setIsOpen(true));
    const [query,setQuery] = useState("");
    const [filteredNotes,setFilteredNotes] = useState([]);

     const { data } = NotesProvider();
    useEffect(() => {
      const filtered = data.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNotes(filtered);
     
    }, [query, data]);
  
  

  return (
    <>
      <Dialog className='font-Figtree '  open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-120  md:top-[55%] z-60 ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold font-Figtree text-left">
              Search Notes 
            </DialogTitle>
            <DialogDescription className="text-base font-Figtree text-left">
              Let&apos;s personalize your experience. Select your branch and
              semester to see relevant notes.
            </DialogDescription>
            <div className="flex items-center gap-2  flex-col  mt-4">
              
              <Input placeholder="Type to search" value={query} onChange={(e) => setQuery(e.target.value)}   />
              
              <div className="mt-4 overflow-auto h-96 w-full no-scrollbar items-center   flex flex-col gap-8">
             {filteredNotes.map((note, index) => (
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
              setIsOpen={setIsOpen}
              />
             ))}
              </div>
            </div>
          </DialogHeader>
          
      
        </DialogContent>
      </Dialog>
    </>
  );
}
