
import { getLocalNotes } from "./localNotes";
import { hasSupabaseConfig, supabase } from "./supabaseClient";

export async function fetchNotes() {
  if (!hasSupabaseConfig()) {
    return {
      notes: getLocalNotes(),
      source: "local",
      error: null,
      isEmptyRemote: false,
    };
  }

  const { data, error } = await supabase
    .from("notes")
    .select("id, title, description, subject, year, semester, branch, university, pages, url")
    .order("id", { ascending: true });

  if (error) {
    console.error("Failed to fetch notes from Supabase:", error.message);

    return {
      notes: getLocalNotes(),
      source: "local",
      error,
      isEmptyRemote: false,
    };
  }

  return {
    notes: data ?? [],
    source: "supabase",
    error: null,
    isEmptyRemote: (data ?? []).length === 0,
  };
}