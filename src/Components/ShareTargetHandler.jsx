import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ShareTargetHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedUrl = params.get("url") || params.get("text") || "";
    const sharedTitle = params.get("title") || "";

    if (sharedUrl) {
      if (sharedUrl.toLowerCase().endsWith(".pdf")) {
        navigate("/notes", {
          state: { autoOpenUrl: sharedUrl, autoOpenTitle: sharedTitle },
        });
      } else {
        navigate("/notes");
      }
    } else {
      navigate("/");
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
