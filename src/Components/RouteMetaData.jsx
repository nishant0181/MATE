import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { localNotes } from '../lib/localNotes';

const pagesConfig = {
  '/dashboard': { title: "Your Command Center | MATE", desc: "Take control of your academic life. Track your progress, resume recent subjects, and dive back into a distraction-free study environment tailored just for you." },
  '/notes': { title: "The Knowledge Vault | MATE", desc: "Explore an expansive library of meticulously curated notes, slide decks, and previous year question papers. Everything you need to ace your exams, beautifully organized." },
  '/favorites': { title: "Your Curated Collection | MATE", desc: "Access your most crucial study assets instantly. A personalized space for your saved notes and essential materials, ready whenever inspiration strikes." },
  '/about': { title: "Our Vision | MATE", desc: "Discover the mission behind MATE. We're rethinking how students interact with their curriculum by blending premium design with unparalleled academic utility." },
  '/contact': { title: "Let's Connect | MATE", desc: "Have questions or feedback? Reach out to the MATE team. We are constantly evolving to build the ultimate academic operating system with your input." },
  '/upload': { title: "Contribute to the Legacy | MATE", desc: "Help shape the future of learning. Upload and share your high-quality study materials to empower the community and build an unparalleled knowledge base." },
  '/': { title: "MATE — Your All in One Study Companion", desc: "The future of learning with MATE. Your seamlessly designed, all-in-one platform for premium study materials to supercharge your college journey." }
};

export default function RouteMetaData() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = pagesConfig['/'].title;
    let description = pagesConfig['/'].desc;

    if (pagesConfig[path]) {
      title = pagesConfig[path].title;
      description = pagesConfig[path].desc;
    } else if (path.startsWith('/subject/')) {
      const subjectId = path.split('/')[2];
      const subject = localNotes.find((item) => item.id === subjectId);
      if (subject) {
        title = subject.title ? `${subject.title} | MATE` : title;
        description = subject.description || description;
      }
    }

    // Update the document title (Browser Tab)
    document.title = title;

    // Helper to safely update meta tags
    const updateMetaTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Update meta descriptions
    updateMetaTag('og:title', title);
    updateMetaTag('twitter:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('twitter:description', description);
    updateMetaTag('description', description);
    updateMetaTag('og:url', window.location.href);

  }, [location]);

  return null;
}
