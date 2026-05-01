import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import QRCode from "react-qr-code";
import { QrCode } from "lucide-react";
import useHaptic from "../hooks/useHaptic";

export default function MyQRCode({shareUrl,name}) {
  const haptic = useHaptic();
  return (
    <Dialog onOpenChange={() => haptic.lightTap()}>
      <DialogTrigger>
        <div
          className="     cursor-pointer transition-colors duration-300  text-black
                     bg-zinc-200 dark:bg-white p-2 dark:hover:bg-zinc-200 hover:bg-zinc-300  flex items-center justify-center
                     rounded-md"
        >
          <QrCode
            className="size-4 
                        
                        "
          />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-lg ">
            Scan QR Code to View : <span>{name}</span>
          </DialogTitle>

          {shareUrl && (
            <div className="bg-white p-4 rounded-xl mx-auto mt-4 w-fit shadow-md">
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 256,
                  width: "100%",
                }}
              >
                <QRCode
                  size={256}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={shareUrl}
                  viewBox="0 0 256 256"
                />
              </div>
            </div>
          )}
        </DialogHeader>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
