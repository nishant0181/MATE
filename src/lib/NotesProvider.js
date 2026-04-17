import { useEffect, useState } from "react";
import { fetchNotes } from "../lib/notesDataSource";

export function NotesProvider() {
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState("cdn");
  const [isEmptyRemote, setIsEmptyRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadNotes() {
      setIsLoading(true);

      const { notes, source, isEmptyRemote } = await fetchNotes();

      if (!isMounted) return;

      setData(notes);
      setDataSource(source);
      setIsEmptyRemote(isEmptyRemote);
      setIsLoading(false);
    }

    void loadNotes();

    return () => {
      isMounted = false;
    };
  }, []); // ← empty array: fetch once on mount only

  return { data, dataSource, isEmptyRemote, isLoading };
}
