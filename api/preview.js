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
        let title = "MATE — The Next-Gen Academic Hub";
        let description = "Step into the future of learning with MATE. Your seamlessly designed, all-in-one platform for premium study materials, syllabus tracking, and past year papers—built to supercharge your college journey.";
        let url = "https://mate-three-rho.vercel.app/";
        let imageUrl = "https://mate-three-rho.vercel.app/Preview.png";

        // 4. Assign custom metadata based on route
        if (pathParam === 'subject' && subjectId) {
            const subject = localNotes.find((item) => item.id === subjectId) || {};
            title = subject.title ? `${subject.title} | MATE` : title;
            description = subject.description || description;
            url = `https://mate-three-rho.vercel.app/subject/${subjectId}`;
            
            const firstFile = subject.files && subject.files.length > 0 ? subject.files[0] : null;
            
            if (subject.previewImage) {
                // If you manually specify a previewImage in localNotes.js for the subject
                imageUrl = subject.previewImage.startsWith('http') ? subject.previewImage : `https://mate-three-rho.vercel.app${subject.previewImage}`;
            } else if (firstFile && firstFile.imageUrl) {
                // Fallback to the thumbnail of the first file in the subject
                imageUrl = firstFile.imageUrl;
            }
        } else if (pathParam) {
            // Configuration for all other static pages
            const pagesConfig = {
                'dashboard': { title: "Your Command Center | MATE", desc: "Take control of your academic life. Track your progress, resume recent subjects, and dive back into a distraction-free study environment tailored just for you.", img: "https://mate-three-rho.vercel.app/DashboardPreview.png" },
                'notes': { title: "The Knowledge Vault | MATE", desc: "Explore an expansive library of meticulously curated notes, slide decks, and previous year question papers. Everything you need to ace your exams, beautifully organized.", img: "https://mate-three-rho.vercel.app/NotesPreview.png" },
                'favorites': { title: "Your Curated Collection | MATE", desc: "Access your most crucial study assets instantly. A personalized space for your saved notes and essential materials, ready whenever inspiration strikes.", img: "https://mate-three-rho.vercel.app/FavoritesPreview.png" },
                'about': { title: "Our Vision | MATE", desc: "Discover the mission behind MATE. We're rethinking how students interact with their curriculum by blending premium design with unparalleled academic utility.", img: "https://mate-three-rho.vercel.app/AboutPreview.png" },
                'contact': { title: "Let's Connect | MATE", desc: "Have questions or feedback? Reach out to the MATE team. We are constantly evolving to build the ultimate academic operating system with your input.", img: "https://mate-three-rho.vercel.app/ContactPreview.png" },
                'upload': { title: "Contribute to the Legacy | MATE", desc: "Help shape the future of learning. Upload and share your high-quality study materials to empower the community and build an unparalleled knowledge base.", img: "https://mate-three-rho.vercel.app/UploadPreview.png" }
            };
            
            const config = pagesConfig[pathParam];
            if (config) {
                title = config.title;
                description = config.desc;
                url = `https://mate-three-rho.vercel.app/${pathParam}`;
                if (config.img) {
                    imageUrl = config.img;
                }
            }
        }

        // 5. Swap Strings globally to cover both og:* and twitter:* tags
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
