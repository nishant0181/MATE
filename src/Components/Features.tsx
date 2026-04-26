"use client";
import {
  BookOpen,
  Download,
  Users,
  RefreshCw,
  Upload,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0,
      },
    },
  };
  return (
    <section className="md:pt-32 pt-20 max-w-7xl mx-auto mb-28  border-b border-border ">
      <div className="max-w-full  mx-auto ">
        <motion.div
          className="pb-4 pt-4  tracking-tighter max-w-4xl mx-auto  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Features of this Legacy
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3  place-items-center m-10 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative z-0 flex flex-col bg-white dark:bg-[oklch(.205_0_0)]   border-neutral-300 dark:border-black border-2 rounded-lg p-7 
       


        shadow-[14px_14px_0px_-1px_rgba(0,0,0,0.10)]
        dark:shadow-[14px_14px_0px_-1px_rgba(0,0,0,0.80)]
        transition-all duration-300 hover:translate-x-1 hover:translate-y-1 
            hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.10)]
        dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]


        h-full max-w-[350px] w-full

        dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
        bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]
                "
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon */}
                <div className="inline-flex p-2 sm:p-3 border border-border bg-zinc-200 dark:bg-black rounded-sm mb-3 sm:mb-4 w-fit">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl   font-semibold mb-2 px-1 sm:px-0">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#18181b] dark:text-[#a1a1aa] leading-relaxed px-1 sm:px-0">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
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
