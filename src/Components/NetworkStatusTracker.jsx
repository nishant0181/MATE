import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
export default function NetworkStatusTracker() {
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    const handleOnline = () => {
      setOffline(false);
    };
    const handleOffline = () => {
      setOffline(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>
      {offline && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed bottom-24 md:bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-96 z-50 p-5 
                     bg-background/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl select-none"
      >
        <button
          onClick={() => setOffline(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex-1 pt-1">
            <h3 className="font-semibold text-lg leading-tight mb-1">
              MATE is Offline!
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please check your connection.
              For <span className="font-semibold">best viewing experience</span> and smooth 
              for viewing PDFs we recommend you to turn on your internet connection</p>
          </div>
        </div>
      </motion.div>
      )}
    </>
  );
}
