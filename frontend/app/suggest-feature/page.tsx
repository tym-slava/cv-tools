"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/react";
import { Send } from "lucide-react";

import { subtitle, title } from "@/components/primitives";

const fieldClassNames = {
  inputWrapper: "bg-white/50 dark:bg-white/5",
};

export default function SuggestFeaturePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
      successTimerRef.current = null;
    }
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, idea }),
      });

      if (!response.ok) {
        setStatus("error");

        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setIdea("");
      successTimerRef.current = setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center gap-6 p-8 md:p-10">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Help us improve
        </p>
        <h1 className={title()}>Suggest a Feature</h1>
        <p className={subtitle({ className: "mt-4 text-center mx-auto" })}>
          Have an idea that would make onCV.link better? We&apos;d love to hear it!
        </p>
      </div>

      {status === "success" && (
        <div
          role="alert"
          className="w-full max-w-[800px] rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-5 py-4 text-green-700 dark:text-green-400 text-sm font-medium"
        >
          Thank you! Your idea has been submitted.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="w-full max-w-[800px] rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-5 py-4 text-red-700 dark:text-red-400 text-sm font-medium"
        >
          Something went wrong. Please try again.
        </div>
      )}

      <form
        className="w-full"
        onSubmit={(e) => void handleSubmit(e)}
      >
        <div
          className="
            w-full max-w-[800px] flex flex-col gap-5 p-8 rounded-xl text-left
            bg-white/60 dark:bg-white/5
            border border-gray-200/80 dark:border-white/10
            backdrop-blur-sm
            shadow-sm
          "
        >
          <Input
            isRequired
            type="text"
            label="Name"
            placeholder="Your name"
            labelPlacement="outside"
            classNames={fieldClassNames}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            classNames={fieldClassNames}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Textarea
            isRequired
            label="Your idea"
            placeholder="Describe the feature you'd like to see..."
            labelPlacement="outside"
            minRows={7}
            classNames={fieldClassNames}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />

          <Button
            className="w-full rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            endContent={!isLoading && <Send className="w-4 h-4" />}
            size="lg"
            type="submit"
            isLoading={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
