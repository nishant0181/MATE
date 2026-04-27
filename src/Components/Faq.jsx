import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
export default function Faq() {
  const items = [
    {
      value: "item-1",
      trigger: "What is the content uploaded in Mate?",
      content:
        "The content uploaded in Mate includes notes, tutorials, solved assignments, previous year questions, and many more, covering all subjects and topics for students of all branches and universities.",
    },
    {
      value: "item-2",
      trigger: "Do you upload all subjects and topics?",
      content:
        "Yes, we try our best to upload all subjects and topics. If you can't find a topic, you can request it and we will try to upload it as soon as possible.",
    },
    {
      value: "item-3",
      trigger: "How is the content quality?",
      content:
        "The content quality in Mate is high and we try our best to provide accurate and relevant information. If you find any content that you think is not up to the mark, you can tell us and we will take appropriate action. "
        
    },
    {
      value: "item-4",
      trigger: "Who all can access the notes?",
      content:
        "Anyone can access the notes. Just click on any subject and you can view the notes."
        
    },
    {
      value: "item-5",
      trigger: "Are the notes updateded regularly?",
      content:
        "Yes, the notes are updated regularly. We try our best to provide you with the latest and most relevant content."
        
    },
    {
      value: "item-6",
      trigger: "Can I download the notes?",
      content:
        "Yes, you can download the notes in PDF format."
        
    },
    {
        value: "item-7",
        trigger: "How can I contact you?",
        content:
            "You can contact us through our contact page."
    },
    {
        value: "item-8",
        trigger: "How can I contribute to MATE?",
        content:
            "You can contribute to MATE by uploading notes, tutorials, solved assignments, previous year questions, and many more, covering all subjects and topics for students of all branches and universities."
    }
  ];

  return (
    <section className="px-5 lg:px-24 my-20 mx-auto w-full flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mb-20">
        <h2 className="pb-4 pt-4  tracking-tighter max-w-4xl mx-auto  leading-[1.05] md:leading-none font-Inter text-[44px] text-center sm:text-[50px] md:text-[52px] lg:text-[58px] text-zinc-900 dark:text-gray-200 z-10 font-extrabold">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-[#18181b] dark:text-[#909092] ">
          Everything you need to know about Mate.
        </p>
      </div>
      <div className="mx-auto max-w-[800px] w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full font-Inter"
        >
          {items.map((item) => (
            <AccordionItem
              className="border w-full  px-8 py-4 mb-4 
            


            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.10)]
            dark:shadow-[8px_8px_0px_0px_rgba(182,182,182,0.1)]



             bg-white dark:bg-[oklch(.205_0_0)]   border-[#c4c4c4] dark:border-[#434040]  rounded-lg
            "
              key={item.value}
              value={item.value}
            >
              <AccordionTrigger className="w-full font-medium text-lg  ">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="w-full font-medium">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
