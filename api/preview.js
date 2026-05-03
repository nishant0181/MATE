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

        // 2. Identify the route being previewed
        const pathParam = req.query?.path || '';
        const subjectId = req.query?.id || req.url.split('?')[0].split('/').pop();

        // 3. Set default fallbacks
        let title = "MATE — Your All in One Study Companion";
        let description = "The future of learning with MATE. Your seamlessly designed, all-in-one platform for premium study materials to supercharge your college journey.";
        let url = "https://www.mateapp.tech/";
        let imageUrl = "https://www.mateapp.tech/Preview.png";

        // 4. Assign custom metadata based on route
        if (pathParam === 'subject' && subjectId) {
            const subject = localNotes.find((item) => item.id === subjectId) || {};
            title = subject.title ? `${subject.title} | MATE` : title;
            description = subject.description || description;
            url = `https://www.mateapp.tech/subject/${subjectId}`;
            
            const firstFile = subject.files && subject.files.length > 0 ? subject.files[0] : null;
            
            if (subject.previewImage) {
                // If you manually specify a previewImage in localNotes.js for the subject
                imageUrl = subject.previewImage.startsWith('http') ? subject.previewImage : `https://www.mateapp.tech${subject.previewImage}`;
            } else if (firstFile && firstFile.imageUrl) {
                // Fallback to the thumbnail of the first file in the subject
                imageUrl = firstFile.imageUrl;
            }
        } else if (pathParam) {
            // Configuration for all other static pages
            const pagesConfig = {
                'dashboard': { title: "Your Command Center | MATE", desc: "Take control of your academic life. Track your progress, resume recent subjects, and dive back into a distraction-free study environment tailored just for you.", img: "https://www.mateapp.tech/DashboardPreview.png" },
                'notes': { title: "The Knowledge Vault | MATE", desc: "Explore an expansive library of meticulously curated notes, slide decks, and previous year question papers. Everything you need to ace your exams, beautifully organized.", img: "https://www.mateapp.tech/NotesPreview.png" },
                'favorites': { title: "Your Curated Collection | MATE", desc: "Access your most crucial study assets instantly. A personalized space for your saved notes and essential materials, ready whenever inspiration strikes.", img: "https://www.mateapp.tech/FavoritesPreview.png" },
                'about': { title: "Our Vision | MATE", desc: "Discover the mission behind MATE. We're rethinking how students interact with their curriculum by blending premium design with unparalleled academic utility.", img: "https://www.mateapp.tech/AboutPreview.png" },
                'contact': { title: "Let's Connect | MATE", desc: "Have questions or feedback? Reach out to the MATE team. We are constantly evolving to build the ultimate academic operating system with your input.", img: "https://www.mateapp.tech/ContactPreview.png" },
                'upload': { title: "Contribute to the Legacy | MATE", desc: "Help shape the future of learning. Upload and share your high-quality study materials to empower the community and build an unparalleled knowledge base.", img: "https://www.mateapp.tech/UploadPreview.png" }
            };
            
            const config = pagesConfig[pathParam];
            if (config) {
                title = config.title;
                description = config.desc;
                url = `https://www.mateapp.tech/${pathParam}`;
                if (config.img) {
                    imageUrl = config.img;
                }
            }
        }

        // 5. Swap Strings using robust regex matching for meta tags
        htmlString = htmlString
            .replace(/<title>.*?<\/title>/ig, `<title>${title}</title>`)
            .replace(/<meta property="og:title" content="[^"]*"/g, `<meta property="og:title" content="${title}"`)
            .replace(/<meta property="twitter:title" content="[^"]*"/g, `<meta property="twitter:title" content="${title}"`)
            .replace(/<meta property="og:description" content="[^"]*"/g, `<meta property="og:description" content="${description}"`)
            .replace(/<meta property="twitter:description" content="[^"]*"/g, `<meta property="twitter:description" content="${description}"`)
            .replace(/<meta property="og:image" content="[^"]*"/g, `<meta property="og:image" content="${imageUrl}"`)
            .replace(/<meta property="twitter:image" content="[^"]*"/g, `<meta property="twitter:image" content="${imageUrl}"`)
            .replace(/<meta property="og:url" content="[^"]*"/g, `<meta property="og:url" content="${url}"`);

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlString);
        
    } catch (error) {
        res.status(500).send("Error generating preview snippet");
    }
}
