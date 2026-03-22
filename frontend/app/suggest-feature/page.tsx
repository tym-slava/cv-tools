"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/react";
import { CheckCircle2, Send } from "lucide-react";

import { subtitle, title } from "@/components/primitives";
import { isValidEmail } from "@/utils/validation";

const fieldClassNames = {
  inputWrapper: "bg-white/50 dark:bg-white/5",
};

export default function SuggestFeaturePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ideaError, setIdeaError] = useState("");
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

    let hasError = false;

    if (!name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!idea.trim()) {
      setIdeaError("Please describe your idea.");
      hasError = true;
    } else {
      setIdeaError("");
    }

    if (hasError) return;

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

      <form
        noValidate
        className="w-full"
        onSubmit={(e) => void handleSubmit(e)}
      >
        <div
          className="
            w-full max-w-[800px] min-h-[520px] flex flex-col gap-5 p-8 rounded-xl text-left
            bg-white/60 dark:bg-white/5
            border border-gray-200/80 dark:border-white/10
            backdrop-blur-sm
            shadow-sm
          "
        >
          {status === "success" ? (
            <div
              role="alert"
              className="flex-1 flex flex-col items-center justify-center gap-5 text-center py-8"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center">
                  <CheckCircle2
                    className="w-10 h-10 text-blue-500 dark:text-blue-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 max-w-xs">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  Thank you for your idea!
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  We read every suggestion and use them to shape what we build next.
                </p>
              </div>
            </div>
          ) : (
            <>
              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 text-red-700 dark:text-red-400 text-sm font-medium"
                >
                  Something went wrong. Please try again.
                </div>
              )}

              <Input
                isRequired
                type="text"
                label="Name"
                placeholder="Your name"
                labelPlacement="outside"
                classNames={fieldClassNames}
                isInvalid={!!nameError}
                errorMessage={nameError}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError("");
                }}
              />

              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="you@example.com"
                labelPlacement="outside"
                classNames={fieldClassNames}
                isInvalid={!!emailError}
                errorMessage={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
              />

              <Textarea
                isRequired
                label="Your idea"
                placeholder="Describe the feature you'd like to see..."
                labelPlacement="outside"
                minRows={7}
                classNames={fieldClassNames}
                isInvalid={!!ideaError}
                errorMessage={ideaError}
                value={idea}
                onChange={(e) => {
                  setIdea(e.target.value);
                  if (ideaError) setIdeaError("");
                }}
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
            </>
          )}
        </div>
      </form>
    </section>
  );
}
