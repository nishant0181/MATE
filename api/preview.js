import fs from 'fs';
import path from 'path';
import { localNotes } from '../src/lib/localNotes.js'; 

export default function handler(req, res) { 
    try {
        // 1. Grab the real production HTML file from the 'dist' folder!
        let htmlPath = path.join(process.cwd(), 'dist', 'index.html');
        
        // (Fallback if 'dist' doesn't exist for some reason)
        if (!fs.existsSync(htmlPath)) {
            htmlPath = path.join(process.cwd(), 'index.html');
        }
        
        let htmlString = fs.readFileSync(htmlPath, 'utf-8');

        // 2. Extract the ID natively from the URL or query params
        const subjectId = req.query?.id || req.url.split('?')[0].split('/').pop();

        const data = localNotes; 
        const subject = data.find((item) => item.id === subjectId) || {};

        // 3. Fallbacks
        const title = subject.title ? `${subject.title} | MATE` : "MATE | Your College Notes";
        const description = subject.description || "Get all your college syllabus, notes, and pyq in one click!";
        const url = `https://mate-three-rho.vercel.app/subject/${subjectId}`;
        
        // Use the first file's image as the subject's Open Graph image, or fallback to the default Preview
        const firstFile = subject.files && subject.files.length > 0 ? subject.files[0] : null;
        const imageUrl = firstFile ? firstFile.imageUrl : "https://mate-three-rho.vercel.app/Preview.png";

        // 4. Swap Strings globally to cover both og:* and twitter:* tags
        htmlString = htmlString
            .replace(/content="MATE \| Your College Notes"/g, `content="${title}"`)
            .replace(/content="Get all your college syllabus, notes, and pyq in one click!"/g, `content="${description}"`)
            .replace(/content="https:\/\/mate-three-rho\.vercel\.app\/Preview\.png"/g, `content="${imageUrl}"`)
            .replace(/content="https:\/\/mate-three-rho\.vercel\.app\/"/g, `content="${url}"`);

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlString);
        
    } catch (error) {
        console.error("Preview generation error:", error);
        res.status(500).send("Error generating preview snippet");
    }
}
