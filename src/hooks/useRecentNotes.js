import { useEffect, useState } from "react"

export default function useRecentNotes() {

    const [recentNotes, setRecentNotes] = useState(() => {
        const saved = localStorage.getItem("recentNotes");


        const parsed = saved ? JSON.parse(saved) : null;


        if (!parsed || parsed.length === 0) {
            return [
                "maths-1",
                "pps",
                "maths-2",


            ];
        }

        return parsed;
    });


    useEffect(() => {
        localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
    }, [recentNotes]);

    const addNoteId = (id) => {
        if (!id) return;

        setRecentNotes((prev) => {
            const filtered = prev.filter((existingId) => existingId !== id);
            return [id, ...filtered].slice(0, 3);
        });
    };


    return [recentNotes, addNoteId];
}
