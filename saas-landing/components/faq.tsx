"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the pricing work?",
      answer:
        "Our pricing is subscription-based with monthly or annual billing options. We offer three tiers: Starter, Pro, and Enterprise. You can cancel anytime, and we offer a 14-day money-back guarantee.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial on all plans. No credit card is required to start your trial.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. We are GDPR and CCPA compliant.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export all your data at any time in standard formats like CSV, JSON, or Excel. We believe your data belongs to you.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email and chat support for all plans. Pro and Enterprise plans include priority support with faster response times. Enterprise plans also include a dedicated account manager.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our platform and services.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
