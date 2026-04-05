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
      description: "Upload your notes to share with other students and increase your value",
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
          <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Access comprehensive study materials organized by branch, semester,
            and subject for BTech students.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m-6 border-r border-b border-border/20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 border-l border-t border-border/20 hover:border-l hover:border-t hover:border-r hover:border-b hover:border-border 
                
                bg-[oklch(0.145_0_0)] hover:bg-muted/10 hover:transition-colors"
              >
                {/* Icon */}
                <div className="inline-flex p-2 sm:p-3 border border-border bg-muted mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl text-white   font-semibold mb-2 px-1 sm:px-0">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed px-1 sm:px-0">
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
