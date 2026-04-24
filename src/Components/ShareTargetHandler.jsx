import { useEffect } from 'react';
import { useNavigate } from 'react-router';

/**
 * PWA Share Target Handler
 * When a user shares a URL to MATE from their phone's share sheet,
 * Chrome opens this route: /share-target?url=...&title=...
 * We extract the URL and redirect to the notes page or try to open it.
 */
export default function ShareTargetHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedUrl = params.get('url') || params.get('text') || '';
    const sharedTitle = params.get('title') || '';

    if (sharedUrl) {
      // If it's a PDF link, try to open it in the viewer via state
      if (sharedUrl.toLowerCase().endsWith('.pdf')) {
        // Redirect to notes page passing the URL to auto-open
        navigate('/notes', { state: { autoOpenUrl: sharedUrl, autoOpenTitle: sharedTitle } });
      } else {
        // Otherwise just go to the notes page
        navigate('/notes');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-[#09090b]">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mx-auto mb-4" />
        <p className="text-zinc-400 text-sm">Opening in MATE...</p>
      </div>
    </div>
  );
}
