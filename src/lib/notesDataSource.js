
import { getLocalNotes } from "./localNotes";

const MANIFEST_URL =
  "https://cdn.jsdelivr.net/gh/nishantdhanani02-ops/MATE-storage@main/notes-manifest.json";

/**
 * Fetch notes from the CDN manifest (notes-manifest.json).
 * Falls back to local notes if the fetch fails or returns nothing.
 */
export async function fetchNotes() {
  try {
    const res = await fetch(MANIFEST_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Manifest fetch failed: ${res.status}`);
    }

    const manifest = await res.json();

    if (!Array.isArray(manifest) || manifest.length === 0) {
      throw new Error("Manifest is empty or malformed");
    }
    console.log(manifest);

    return {
      notes: manifest,
      source: "cdn",
      error: null,
      isEmptyRemote: false,
    };
  } catch (err) {
    console.warn(
      "[MATE] Could not load manifest from CDN, using local notes.",
      err.message,
    );

    return {
      notes: getLocalNotes(),
      source: "local",
      error: err,
      isEmptyRemote: false,
    };
  }
}