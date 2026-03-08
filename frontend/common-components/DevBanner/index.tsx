"use client";
import { useState } from "react";
import { X, Zap } from "lucide-react";

const DevBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      role="banner"
      aria-label="Development status banner"
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-700 dark:via-indigo-700 dark:to-blue-800"
    >
      {/* Animated shimmer overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"
      />

      <div className="relative flex items-center justify-center gap-3 px-10 py-2.5 text-white">
        {/* Pulsing dot */}
        <span
          aria-hidden="true"
          className="relative flex h-2 w-2 shrink-0"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        </span>

        {/* Icon */}
        <Zap
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-yellow-300"
          fill="currentColor"
        />

        {/* Message */}
        <p className="text-center text-xs font-semibold tracking-wide sm:text-sm">
          <span className="font-bold text-yellow-300">Active Development</span>
          <span className="mx-2 opacity-60">·</span>
          <span>
            New features ship weekly — bugs may appear. Your feedback shapes what&apos;s next.
          </span>
        </p>
      </div>

      {/* Close button */}
      <button
        type="button"
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default DevBanner;
