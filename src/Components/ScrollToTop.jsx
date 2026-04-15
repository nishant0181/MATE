import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Gets the current URL path

  useEffect(() => {
    window.scrollTo(0, 0); // The magic line that instantly resets the scroll
  }, [pathname]); // This effect runs every single time the pathname changes!

  return null; // This component is invisible
}
