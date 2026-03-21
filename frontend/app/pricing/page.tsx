"use client";
import {
  CloudDownload,
  CreditCard,
  LayoutDashboard,
  SlidersHorizontal,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import GetStartedBtn from "@/common-components/buttons/get-started";
import { subtitle, title } from "@/components/primitives";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "Smart AI Suggestions",
    description:
      "Intelligent analysis to strengthen every bullet point and help you stand out to recruiters.",
  },
  {
    icon: LayoutDashboard,
    title: "Premium Templates",
    description:
      "Professional templates crafted to catch recruiters' attention from the very first glance.",
  },
  {
    icon: CloudDownload,
    title: "Easy Export & Storage",
    description:
      "Download your CV as a polished PDF or store it securely in the cloud for easy access.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tailored Recommendations",
    description:
      "Personalized improvement tips matched to each specific job description you're targeting.",
  },
];

export default function PricingPage() {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="px-6 py-10 md:py-10 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/40 px-4 py-1 text-sm font-semibold text-blue-600 dark:text-blue-300 mb-6 tracking-wide">
            Pricing
          </span>

          <h1 className={title({ fullWidth: true, class: "mb-6" })}>
            Build a strong resume —{" "}
            <span className="text-blue-600 dark:text-blue-600">for free</span>
            {""} and get hired faster!
          </h1>
          <p className={subtitle({ class: "mb-10 max-w-xl mx-auto" })}>
            Right now, oncv.link is open for everyone. Use the builder, try different templates, and
            create your perfect CV — completely free.
          </p>
          <div className="mt-10 flex justify-center">
            <GetStartedBtn />
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="px-6 py-10 md:pb-10 md:pt-0">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              We&apos;re building tools that help you win opportunities
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Soon we&apos;ll be adding features that make your resume truly powerful:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    group flex flex-col gap-4 p-6 rounded-2xl
                    bg-blue-50/70 dark:bg-slate-800/50
                    border border-blue-200/60 dark:border-slate-700/40
                    hover:shadow-lg hover:scale-[1.02] hover:border-blue-300/80 dark:hover:border-blue-600/50
                    transition-all duration-200 ease-out
                  "
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Intent ───────────────────────────────────────── */}
      <section className="px-6 py-14 bg-blue-50/80 dark:bg-slate-800/40 border-y border-blue-200/40 dark:border-slate-700/30">
        <div className="mx-auto max-w-2xl text-center">
          <CreditCard className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-4 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Simple, fair pricing is coming
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            When these features are ready, we&apos;ll introduce a simple, affordable subscription —
            only for those who want advanced tools.
          </p>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-300">
            The core resume builder will always stay free.
          </p>
        </div>
      </section>
    </div>
  );
}
