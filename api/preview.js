import fs from 'fs';
import path from 'path';
import { getLocalNotes } from '../src/lib/localNotes.js'; // 1. Standard Import!

export default function handler(req, res) { // 2. standard req, res format
    try {
        const htmlPath = path.join(process.cwd(), 'index.html');
        let htmlString = fs.readFileSync(htmlPath, 'utf-8');

        const data = getLocalNotes(); // 3. Call the imported function
        const subjectId = req.query.id; // 4. This comes from the $id in vercel.json

        // Find the subject, or fallback to an empty object if not found
        const subject = data.find((item) => item.id === subjectId) || {};

        const title = subject.title || "MATE | Your College Notes";
        const description = subject.description || "Get all your college syllabus, notes, and pyq in one click!";
        const image = "https://mate-three-rho.vercel.app/MATE_LOGO.svg";

        // 5. You MUST save the replaced string back into a variable!
        htmlString = htmlString
            .replace("__META_TITLE__", title)
            .replace("__META_DESCRIPTION__", description)
            .replace("__META_IMAGE__", image);

        // 6. Send response using Node.js express style
        res.status(200).send(htmlString);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error generating preview snippet");
    }
}
