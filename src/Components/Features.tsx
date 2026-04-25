"use client";
import {
  BookOpen,
  Download,
  Users,
  Star,
  Smartphone,
  RefreshCw,
  Upload,
  FileText,
} from "lucide-react";



export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Notes",
      description:
        "Access detailed notes for all subjects, covering all units and topics",
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description: "Download notes instantly for offline access and study",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join the WhatsApp community for discussions and support",
    },
    {
      icon: FileText,
      title: "Online PDF Viewer",
      description:
        "View notes online without downloading and save them for quick access",
    },
    {
      icon: Upload,
      title: "Upload Notes",
      description:
        "Upload your notes to share with other students and increase your value",
    },
    {
      icon: RefreshCw,
      title: "Updated Content",
      description:
        "Stay up-to-date with the latest notes and resources for your studies",
    },
  ];

  return (
    <section className="md:pt-32 pt-20 max-w-7xl mx-auto mb-28  border-b border-border ">
      <div className="max-w-full  mx-auto ">
        <div className="pb-4 pt-4  tracking-tighter max-w-4xl mx-auto  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold ">
          Features of this Legacy
        </div>

        <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3  place-items-center m-10 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative z-0 flex flex-col bg-white dark:bg-[#151516]  border border-neutral-300 dark:border-[#3c3c3c] rounded-lg p-7 
        transition-all duration-300
        shadow-[14px_14px_0px_-1px_rgba(0,0,0,0.10)]
        hover:shadow-[8px_8px_0px_-1px_rgba(0,0,0,0.15)]
        dark:shadow-[14px_14px_0px_-1px_rgba(255,255,255,0.10)]
        dark:hover:shadow-[8px_8px_0px_-1px_rgba(255,255,255,0.15)]
        h-full max-w-[350px] w-full
        dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
        bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]
                "
              >
                {/* Icon */}
                <div className="inline-flex p-2 sm:p-3 border border-border bg-muted mb-3 sm:mb-4 w-fit">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl   font-semibold mb-2 px-1 sm:px-0">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#18181b] dark:text-[#a1a1aa] leading-relaxed px-1 sm:px-0">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
        
    </section>
  );
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export type { Feature, FeaturesProps };
