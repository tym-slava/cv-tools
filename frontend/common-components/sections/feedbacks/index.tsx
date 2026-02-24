"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Feedback = {
  quote: string;
  author: string;
  role: string;
};

const FEEDBACKS: Feedback[] = [
  {
    quote:
      "Finally, a builder that doesn't ask for my email before letting me download! I had my resume ready in 5 minutes and landed an interview the next day.",
    author: "Alex R.",
    role: "Software Engineer",
  },
  {
    quote:
      "The templates are clean, modern, and actually look professional. Perfect for anyone who wants to avoid those cluttered, over-designed CVs.",
    author: "Sarah M.",
    role: "Marketing Specialist",
  },
  {
    quote:
      "As a student, I needed something fast and free. This is hands-down the best tool I've found. Exporting to PDF was seamless.",
    author: "James L.",
    role: "Graduate Student",
  },
  {
    quote:
      "I usually hate editing my resume, but this made it genuinely painless. The layout stayed consistent, and I could tailor versions for different roles in minutes.",
    author: "Priya K.",
    role: "Product Manager",
  },
  {
    quote:
      "The spacing and typography look great out of the box. I exported a PDF, printed it for a career fair, and got multiple callbacks the same week.",
    author: "Daniel T.",
    role: "Data Analyst",
  },
];

function Feedbacks() {
  return (
    <section
      aria-labelledby="feedbacks-heading"
      className="w-full py-4 mt-20"
    >
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Testimonials
        </p>
        <h2
          id="feedbacks-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Success Stories
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Swiper
          loop
          navigation
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 10000 }}
          pagination={{ clickable: true }}
          className="feedbacks-swiper"
        >
          {FEEDBACKS.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-6 px-6 pb-14 pt-10 bg-white/60 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 backdrop-blur-sm rounded-2xl shadow-sm text-center">
                <Quote
                  className="w-10 h-10 text-blue-400 dark:text-blue-500 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 italic px-8">
                  &ldquo;{feedback.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {feedback.author}
                  </span>
                  <span className="text-sm text-blue-500">{feedback.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Feedbacks;
