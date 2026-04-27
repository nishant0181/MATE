import React from 'react'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactUs() {
  return (
    <div
      className="py-12   flex flex-col justify-center items-center gap-4 mx-auto max-w-7xl select-none ">
      <div className=" tracking-tighter max-w-4xl mx-auto  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold  ">Contact Us</div>
      <div className="max-w-xl mx-auto font-Inter text-lg text-zinc-900 dark:text-gray-200 z-10 font-medium  select-none text-center py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">We'd love to hear from you. Whether you have a question, feedback, feel free to reach out.</p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mail size={24} />
            <span className="text-gray-700 dark:text-gray-300">[EMAIL_ADDRESS]</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={24} />
            <span className="text-gray-700 dark:text-gray-300">@mate</span>
          </div>
        </div>
      </div>
    </div>
  )
}
