import React from "react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us (such as name, email, and files when you contact us or upload notes) and automated usage data (such as IP address, browser type, and page interactions) to improve your learning experience.",
    },
    {
      title: "2. How We Use Your Data",
      content: "Your data is used to provide and maintain MATE services, process note uploads, respond to support inquiries, analyze usage patterns, and secure the platform against unauthorized access or abuse.",
    },
    {
      title: "3. Storage & Protection",
      content: "We implement robust security measures to protect your personal data. We do not sell, rent, or trade your personal information to third parties, and we store it securely using premium encrypted cloud infrastructure.",
    },
    {
      title: "4. Cookies & Local Storage",
      content: "MATE uses browser cookies and local storage to save your preferences, authenticate sessions, track your favorites, and preserve your dashboard theme (light or dark mode) across visits.",
    },
    {
      title: "5. Your Privacy Rights",
      content: "Depending on your jurisdiction, you have the right to access, correct, update, or delete your personal data. To exercise these rights, please reach out to us at our official support email.",
    },
    {
      title: "6. Changes to this Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any major updates by posting the revised policy on this page with a new effective date.",
    },
  ];

  return (
    <div className="pb-12 py-12 flex flex-col justify-center items-center gap-4 mx-auto max-w-7xl select-none">
      <div className="tracking-tighter max-w-4xl mx-auto leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold">
        Privacy Policy
      </div>
      <div className="max-w-xl mx-auto font-Inter text-lg text-zinc-900 dark:text-gray-200 z-10 font-medium select-none text-center py-6 px-4">
        Your privacy and trust are our utmost priorities. Learn how we handle and protect your personal information at MATE.
      </div>

      <div className="flex mx-4 md:mx-0 flex-col gap-6 justify-center items-center max-w-2xl w-full px-6">
        {sections.map((section, index) => (
          <div
            className="relative z-0 flex flex-col bg-white dark:bg-[oklch(.205_0_0)] border-neutral-300 dark:border-black border-2 rounded-xl p-6 
            shadow-[7px_7px_0px_-1px_rgba(0,0,0,0.10)]
            dark:shadow-[7px_7px_0px_-1px_rgba(0,0,0,0.80)]
            transition-all duration-300 hover:translate-x-1 hover:translate-y-1 
            hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.10)]
            dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            w-full
            dark:bg-[radial-gradient(#323236_1px,transparent_1px)] bg-size-[16px_16px] 
            bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]
            "
            key={index}
          >
            <h3 className="font-Inter font-bold text-lg text-zinc-900 dark:text-gray-100 mb-2">
              {section.title}
            </h3>
            <p className="font-Inter font-normal text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-md text-xs text-zinc-500 dark:text-zinc-400 mt-8 px-4">
        Last updated: August 31, 2026. For questions or concerns regarding our privacy practices, email us at{" "}
        <a href="mailto:mateforyou@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">
          mateforyou@proton.me
        </a>.
      </div>
    </div>
  );
}
