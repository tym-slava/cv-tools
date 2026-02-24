import { FileCheck, PanelLeftOpen, ShieldCheck, Zap } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Zero Registration",
    description:
      'Skip the "Sign Up" wall. Start editing immediately and download your PDF in seconds.',
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-500",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "ATS-Optimized",
    description:
      "Our templates are designed to pass through Applicant Tracking Systems, ensuring humans actually see your CV.",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Privacy First",
    description:
      "We don't store your data. Your information stays in your browser, keeping your personal details 100% private.",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-500",
  },
  {
    icon: <PanelLeftOpen className="w-6 h-6" />,
    title: "Real-Time Preview",
    description:
      "What you see is what you get. Edit on the left, see the polished result on the right instantly.",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-500",
  },
];

function WhyUs() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mt-20 w-full py-4"
    >
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Why choose us
        </p>
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Why Job Seekers Love <span className="text-blue-500">onCV.link</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="
              group relative flex flex-col gap-4 p-6 rounded-2xl
              bg-white/60 dark:bg-white/5
              border border-gray-200/80 dark:border-white/10
              backdrop-blur-sm
              shadow-sm hover:shadow-md
              transition-all duration-300 hover:-translate-y-1
            "
          >
            <div
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                ${feature.iconBg} ${feature.iconColor}
                transition-transform duration-300 group-hover:scale-110
              `}
              aria-hidden="true"
            >
              {feature.icon}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
