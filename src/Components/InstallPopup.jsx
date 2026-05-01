import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { Button } from './ui/button';

export default function InstallPopup() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Check if already installed
    const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isRunningStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Capture the install prompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 3. Listen for successful installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPopup(false);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    // 4. Check Cooldown Logic (7 days)
    const checkCooldown = () => {
      const dismissedAt = localStorage.getItem('pwa_prompt_dismissed_at');
      if (dismissedAt) {
        const daysSinceDismissal = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24);
        if (daysSinceDismissal < 7) {
          return false; // Still in cooldown
        }
      }
      return true; // OK to show
    };

    if (!checkCooldown()) return;

    // 5. Triggers: 15 seconds timer OR 500px scroll
    let timerId;
    const triggerPopup = () => {
      if (!showPopup) setShowPopup(true);
      window.removeEventListener('scroll', handleScroll);
    };

    const handleScroll = () => {
      if (window.scrollY > 500) {
        triggerPopup();
        clearTimeout(timerId);
      }
    };

    // Only start triggers if not installed
    if (!isRunningStandalone) {
      timerId = setTimeout(triggerPopup, 15000);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timerId);
    };
  }, [showPopup]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPopup(false);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback if browser doesn't support prompt but popup showed anyway
      alert("To install, tap the Share icon and select 'Add to Home Screen'.");
      setShowPopup(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa_prompt_dismissed_at', Date.now().toString());
    setShowPopup(false);
  };

  if (isInstalled) return null;

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-24 md:bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-50 p-5 
                     bg-background/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl select-none"
        >
          <button 
            onClick={handleDismiss} 
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <img src="/icons/icon-192x192.png" alt="MATE Logo" className="w-8 h-8 rounded-md dark:invert" />
            </div>
            
            <div className="flex-1 pt-1">
              <h3 className="font-semibold text-lg leading-tight mb-1">You should have a Best Experience.</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Install MATE for a Home Screen App with  10x faster loading, and  better study environment.
              </p>
              
              <div className="flex items-center gap-2">
                <Button onClick={handleInstallClick} className="flex-1 text-sm h-9">
                  <Download className="mr-2 h-4 w-4" /> Install App
                </Button>
                <Button onClick={handleDismiss} variant="outline" className="text-sm h-9 px-3">
                  Not Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
