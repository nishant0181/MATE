import React from "react";

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using MATE, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use the platform.",
    },
    {
      title: "2. Description of Service",
      content: "MATE provides premium study materials, syllabus trackers, past year question papers, and related academic tools. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.",
    },
    {
      title: "3. User Responsibilities & Conduct",
      content: "You agree to use MATE only for lawful academic purposes. You are solely responsible for any content (including study notes) you upload to MATE. You must not upload copyrighted materials unless you have the explicit right or permission to do so.",
    },
    {
      title: "4. Intellectual Property Rights",
      content: "The content on MATE, including design elements, code, branding, and aggregated files, is protected by copyright and other intellectual property laws. Uploaded notes remain the property of their respective creators/contributors.",
    },
    {
      title: "5. Disclaimer & Limitation of Liability",
      content: "MATE is provided on an 'as is' and 'as available' basis. We make no warranties regarding the accuracy, completeness, or reliability of study materials. We shall not be liable for any direct or indirect damages resulting from your use of the platform.",
    },
    {
      title: "6. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in your area.",
    },
  ];

  return (
    <div className="pb-12 py-12 flex flex-col justify-center items-center gap-4 mx-auto max-w-7xl select-none">
      <div className="tracking-tighter max-w-4xl mx-auto leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold">
        Terms & Conditions
      </div>
      <div className="max-w-xl mx-auto font-Inter text-lg text-zinc-900 dark:text-gray-200 z-10 font-medium select-none text-center py-6 px-4">
        Please read these terms carefully. By using our platform, you agree to comply with the rules governing MATE's services.
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
        Last updated: August 31, 2026. For inquiries regarding our terms and conditions, email us at{" "}
        <a href="mailto:mateforyou@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">
          mateforyou@proton.me
        </a>.
      </div>
    </div>
  );
}
