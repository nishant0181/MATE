import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/Components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
     
      await fetch("https://script.google.com/macros/s/AKfycbzwQcYOicq2lgHlaSLyePKvAH0kf9ARjUb93TmFjq2B9CNjjBu0OJxK8PIqm3sxyY30MQ/exec", {
        method: "POST",
        body: JSON.stringify(values),
        mode: "no-cors",
      });

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      });
      form.reset();
    } catch (error) {
      toast.error("An error occurred.", {
        description: "Please check your internet connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-12 flex flex-col justify-center items-center gap-4 mx-auto max-w-7xl select-none">
      <div className="tracking-tighter max-w-4xl mx-auto leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold">Contact Us</div>
      
      <div className="w-full max-w-lg mx-auto font-Inter text-lg text-zinc-900 dark:text-gray-200 z-10 font-medium text-center py-8 px-4">
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          We'd love to hear from you. Fill out the form below or reach us directly at <a href="mailto:mateforyou@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">mateforyou@proton.me</a>.
        </p>

        <div className="bg-white dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 text-left">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your excellent Name" {...field} className="bg-white dark:bg-zinc-950" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your_email@example.com" {...field} className="bg-white dark:bg-zinc-950" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="resize-none min-h-[120px] bg-white dark:bg-zinc-950" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-sm text-zinc-500 mt-4 text-center">
          Thanks for contacting us. We'll get back to you as soon as possible.
        </div>
      </div>
    </div>
  )
}
