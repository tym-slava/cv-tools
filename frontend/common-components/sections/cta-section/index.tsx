import Link from "next/link";
import { Button } from "@heroui/react";
import { PencilLine, Sparkles } from "lucide-react";

function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mt-20 w-full my-4 rounded-2xl overflow-hidden relative"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600 dark:from-blue-700 dark:via-blue-600 dark:to-violet-700"
        aria-hidden="true"
      />

      {/* Decorative blobs */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 py-16 sm:py-20">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
          <Sparkles
            className="w-4 h-4 text-white"
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-white">Free. No sign-up. No watermarks.</span>
        </div>

        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
        >
          Stand Out. <span className="text-yellow-300">Get Hired.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
          A great resume is your personal brand. Don&apos;t let a messy layout hold you back. Use{" "}
          <span className="font-semibold text-white">onCV.link</span> to build a document that gets
          you noticed.
        </p>

        <Link href="/cv-builder">
          <Button
            size="lg"
            className="bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            endContent={<PencilLine className="w-4 h-4" />}
            aria-label="Build my resume now"
          >
            Build My Resume Now
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CtaSection;
