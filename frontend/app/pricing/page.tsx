"use client";
import GetStartedBtn from "@/common-components/buttons/get-started";
import { title, subtitle } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-[var(--foreground)]">
      <div className="container inline-block max-w-xl text-center justify-center">
        <span className={title()}>Pricing</span>
      </div>
      <div
        className={subtitle({
          class: "mt-4 inline-block max-w-xl text-center justify-center",
        })}
      >
        <p className="text-[32px] text-muted-foreground mt-4 text-center max-w-2xl text-[var(--foreground)] font-bold leading-10">
          Build a <span className="text-blue-500">strong resume — for free</span> <br /> and get
          hired faster!
        </p>
      </div>
      <p className="text-[24px] text-muted-foreground mt-4 text-center max-w-2xl text-[var(--foreground)]">
        Right now, oncv.link is open for everyone. Use the builder, try different templates, and
        create your perfect CV — completely free.
      </p>
      <div className="mt-8">
        <GetStartedBtn />
      </div>

      <h2 className="text-[24px] text-muted-foreground mt-4 text-center max-w-2xl text-[var(--foreground)] font-bold">
        We&apos;re building tools that help you win opportunities
      </h2>

      <div className="mt-8 max-w-3xl px-6">
        <p className="text-lg text-[var(--foreground)] mb-6 text-center leading-relaxed">
          Soon we&apos;ll be adding features that make your resume truly powerful:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3 text-[var(--foreground)]">
            <span className="text-blue-500 text-xl mt-1">•</span>
            <span className="text-base leading-relaxed">
              Smart suggestions and quality analysis
            </span>
          </li>
          <li className="flex items-start gap-3 text-[var(--foreground)]">
            <span className="text-blue-500 text-xl mt-1">•</span>
            <span className="text-base leading-relaxed">Premium professional templates</span>
          </li>
          <li className="flex items-start gap-3 text-[var(--foreground)]">
            <span className="text-blue-500 text-xl mt-1">•</span>
            <span className="text-base leading-relaxed">Easy export and secure storage</span>
          </li>
          <li className="flex items-start gap-3 text-[var(--foreground)]">
            <span className="text-blue-500 text-xl mt-1">•</span>
            <span className="text-base leading-relaxed">
              Personalized recommendations for each job
            </span>
          </li>
        </ul>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 text-center">
          <p className="text-base text-[var(--foreground)] leading-relaxed mb-3">
            When these features are ready, we&apos;ll introduce a simple, affordable subscription —
            only for those who need advanced tools.
          </p>
          <p className="text-lg font-semibold text-blue-500">
            The core resume builder will stay free.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-2xl px-6 text-center">
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Be the first to know</h3>

        <p className="text-base text-[var(--foreground)] mb-2 leading-relaxed">
          We&apos;ll notify you when new features and pricing launch.
        </p>
        <p className="text-base text-[var(--foreground)] mb-8 leading-relaxed">
          Subscribers will get early access, bonuses, and special offers.
        </p>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
          <span className="text-2xl">👉</span>
          <span>Subscribe to stay updated</span>
        </div>
      </div>
    </div>
  );
}
