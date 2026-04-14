import { useEffect, useState } from "react"

export default function useRecentNotes() {
    // 1. LAZY INITIALIZATION
    // We read from LocalStorage immediately when the hook starts.
    const [recentNotes, setRecentNotes] = useState(() => {
        const saved = localStorage.getItem("recentNotes");
        
        // Try parsing the saved data
        const parsed = saved ? JSON.parse(saved) : null;
        
        // If there was no data, OR if the data is an empty array [], load the presets!
        if (!parsed || parsed.length === 0) {
            return [
                "mathematics-1",
                "mathematics-2",
                "physics-5"
            ];
        }
        
        return parsed;
    });


    // 2. THE SYNC EFFECT
    // We ONLY write to LocalStorage when `recentNotes` changes.
    // (Your old code was reading from LocalStorage inside an effect dependent on itself, causing an infinite loop!)
    useEffect(() => {
        localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
    }, [recentNotes]);

    // 3. THE ADD FUNCTION
    const addNoteId = (id) => {
        if (!id) return;

        setRecentNotes((prev) => {
            // Step A: Remove the ID if it already exists anywhere in the array
            const filtered = prev.filter((existingId) => existingId !== id);

            // Step B: Push it to the front, and slice it so we only keep 4 items max!
            return [id, ...filtered].slice(0, 3);
        });
    };


    return [recentNotes, addNoteId];
}
