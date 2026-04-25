import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Smartphone } from "lucide-react";

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [Installed, setInstalled] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      // 1. Is it currently running as an installed PWA?
      const isRunningStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;

      // 2. Is it already installed on the device (Android/Desktop Chrome)?
      let isAlreadyInstalled = false;
      if ("getInstalledRelatedApps" in navigator) {
        const apps = await navigator.getInstalledRelatedApps();
        isAlreadyInstalled = apps.length > 0;
      }

      if (isRunningStandalone || isAlreadyInstalled) {
        setInstalled(true);
      }
    };

    checkStatus();

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      console.log("PWA was installed");
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation prompt");
        } else {
          console.log("User dismissed the installation prompt");
        }
      });
      setDeferredPrompt(null);
    }
  };

  return (
    <>
      {!Installed && (
        <section className=" ">
          <div className="flex items-center flex-col gap-8 md:flex-row   flex-wrap justify-between p-8">
            <div className="flex flex-col">
              <h1 className="font-medium text-6xl pb-3 max-w-sm font-serif">
                Install the App on Android , iOS{" "}
                <span className="text-4xl text-neutral-800 dark:text-neutral-300">
                  <br /> & All other devices
                </span>
              </h1>

              <p className=" max-w-sm text-gray-600 dark:text-neutral-400">
                Become <span className="text-primary">Fast</span> because you
                deserve it.
              </p>
              <div className="mt-4 font-Figtree self-end">
                <Button onClick={handleInstall}>
                  <Download />
                  Install App
                </Button>
              </div>
            </div>

            <div className="h-112.5  md:max-w-70 lg:max-w-125 w-full flex items-center justify-center">
              <div className="order-1 lg:order-2 h-full">
                <div className="relative h-full">
                  <div className="relative mx-auto w-full h-full  max-w-75 aspect-9/16 border-8 border-border rounded-[1.5rem] bg-background shadow-2xl overflow-hidden">
                    <div className="h-full w-full bg-linear-to-br from-primary/10 via-background to-primary/5 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 border-2 border-border bg-muted rounded-md flex items-center justify-center mb-4">
                        {/* <Smartphone className="h-8 w-8 text-primary" /> */}
                        <img src="/icons/icon-512x512.png" alt="MATE Logo" className="rounded-md invert dark:invert-1"/>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-center">
                        MATE
                      </h3>
                      <p className="text-xs text-muted-foreground text-center mb-6">
                        Your unfair Advantage!
                      </p>

                      <div className="w-full space-y-3">
                        <div className="h-12 bg-muted border border-border rounded-sm"></div>
                        <div className="h-12 bg-muted border border-border rounded-sm"></div>
                        <div className="h-12 bg-muted border border-border rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
