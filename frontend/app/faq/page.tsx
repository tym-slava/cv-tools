"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronRight } from "lucide-react";

import { title, subtitle } from "@/components/primitives";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is onCV.link really free?",
    answer:
      "Yes! The core CV builder is completely free — no hidden fees, no watermarks, no trial limits. You can create, edit, and download your resume as a PDF without paying anything. In the future, we may introduce optional premium features, but the main builder will always remain free.",
  },
  {
    question: "Do I need to sign up or create an account?",
    answer:
      "No registration required. You can start building your CV right away — no email, no password, no sign-up wall. Just open the builder and go. Your data stays in your browser, so you're always in control.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "Absolutely. We take a privacy-first approach: your information is stored locally in your browser and is never sent to our servers. We don't collect, store, or share your personal details. Your data is 100% yours.",
  },
  {
    question: "What does ATS-optimized mean?",
    answer:
      "ATS stands for Applicant Tracking System — software that companies use to filter resumes before a human ever sees them. Our templates are specifically designed to pass through these systems, using clean formatting, proper headings, and standard fonts so your CV actually reaches the hiring manager.",
  },
  {
    question: "Can I download my CV as a PDF?",
    answer:
      "Yes! Once you're happy with your resume, you can export it as a professional-looking PDF with one click. The file is generated instantly and is ready to send to employers or upload to job portals.",
  },
  {
    question: "Can I come back and edit my CV later?",
    answer:
      "Yes. Since your data is stored in your browser's local storage, you can return to onCV.link anytime and continue editing where you left off — as long as you use the same browser and haven't cleared your browsing data.",
  },
  {
    question: "What templates are available?",
    answer:
      "We offer a variety of clean, professional templates suitable for different industries — from tech and design to marketing and academia. All templates are ATS-friendly and look great on screen and in print. We're constantly adding new ones based on user feedback.",
  },
  {
    question: "Will there be paid plans in the future?",
    answer:
      "We plan to introduce an affordable subscription for advanced features like AI-powered suggestions, resume quality analysis, premium templates, and personalized recommendations for specific job listings. However, the core resume builder will always stay free.",
  },
  {
    question: "How can I suggest a new feature?",
    answer:
      'We love hearing from our users! Head over to the "Suggest a Feature" page in the navigation menu, fill in the form with your idea, and we\'ll review it. Many of our improvements come directly from user suggestions.',
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us at oncvlink@gmail.com. Whether you have a question, found a bug, or just want to say hi — we're happy to hear from you and typically respond within 24 hours.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Got questions?
        </p>
        <h1 className={title()}>FAQ</h1>
        <p className={subtitle({ className: "mt-4 text-center mx-auto" })}>
          Everything you need to know about <span className="text-blue-500 font-bold">onCV.link</span> and how it works.
        </p>
      </div>

      <div
        className="
          w-full rounded-2xl
          bg-white/60 dark:bg-white/5
          border border-gray-200/80 dark:border-white/10
          backdrop-blur-sm
          shadow-sm
          p-2 sm:p-4
        "
      >
        <Accordion
          variant="splitted"
          selectionMode="multiple"
          itemClasses={{
            base: "!bg-transparent !shadow-none",
            title: "font-semibold text-gray-900 dark:text-white text-base",
            trigger:
              "py-5 px-2 hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-lg transition-colors duration-200",
            content: "px-2 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed",
            indicator: "text-blue-500",
          }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              aria-label={item.question}
              title={item.question}
              indicator={<ChevronRight className="w-5 h-5" />}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
