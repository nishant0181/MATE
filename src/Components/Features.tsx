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
    <section className="pt-16 max-w-7xl mx-auto">
      <div className="max-w-full  mx-auto ">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="font-librebaskerville text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Everything You Need To Excel
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-6 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 border-l border-border
                bg-[#f5f5f5] dark:bg-[oklch(0.145_0_0)] 
                hover:bg-[#f5f5f5]/50 hover:transition-colors
                dark:text-white text-black"
              >
                {/* Icon */}
                <div className="inline-flex p-2 sm:p-3 border border-border bg-muted mb-3 sm:mb-4">
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
