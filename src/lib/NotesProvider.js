import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchNotes } from "../lib/notesDataSource";

const NotesContext = createContext(null);

export function NotesContextProvider({ children }) {
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
  }, []);

  return React.createElement(
    NotesContext.Provider,
    { value: { data, dataSource, isEmptyRemote, isLoading } },
    children
  );
}

export function NotesProvider() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("NotesProvider hook must be used within a NotesContextProvider");
  }
  return context;
}

