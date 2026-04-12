import fs from 'fs';
import path from 'path';
import { getLocalNotes } from '../src/lib/localNotes.js'; 

export default function handler(req, res) { 
    try {
        // 1. Grab the real production HTML file from the 'dist' folder!
        let htmlPath = path.join(process.cwd(), 'dist', 'index.html');
        
        // (Fallback if 'dist' doesn't exist for some reason)
        if (!fs.existsSync(htmlPath)) {
            htmlPath = path.join(process.cwd(), 'index.html');
        }
        
        let htmlString = fs.readFileSync(htmlPath, 'utf-8');

        // 2. Extract the ID natively from the URL (bulletproof method)
        // If req.url is "/subject/mathematics-1", this pulls out "mathematics-1"
        const subjectId = req.url.split('?')[0].split('/').pop();

        const data = getLocalNotes(); 
        const subject = data.find((item) => item.id === subjectId) || {};

        // 3. Fallbacks
        const title = subject.title || "MATE | Your College Notes";
        const description = subject.description || "Get all your college syllabus, notes, and pyq in one click!";
        
        // 4. Swap Strings
        htmlString = htmlString
            .replace('content="MATE | Your College Notes"', `content="${title}"`)
            .replace('content="Get all your college syllabus, notes, and pyq in one click!"', `content="${description}"`);

        res.status(200).send(htmlString);
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error generating preview snippet");
    }
}
