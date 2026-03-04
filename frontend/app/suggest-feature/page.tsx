"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/react";
import { Send } from "lucide-react";

import { subtitle, title } from "@/components/primitives";

const fieldClassNames = {
  label: "font-semibold text-gray-700 dark:text-gray-300",
  inputWrapper:
    "rounded-md border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-blue-400 focus-within:!border-blue-500",
};

export default function SuggestFeaturePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send the data to the server
    // console.log(name, email, idea);
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
        className="w-full"
        onSubmit={handleSubmit}
      >
        <div
          className="
            w-full max-w-[800px] flex flex-col gap-5 p-8 rounded-xl
            bg-white/60 dark:bg-white/5
            border border-gray-200/80 dark:border-white/10
            backdrop-blur-sm
            shadow-sm
          "
        >
          <Input
            type="text"
            label="Name"
            placeholder="Your name"
            labelPlacement="outside"
            variant="bordered"
            classNames={fieldClassNames}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            variant="bordered"
            classNames={fieldClassNames}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Textarea
            label="Your idea"
            placeholder="Describe the feature you'd like to see..."
            labelPlacement="outside"
            variant="bordered"
            minRows={7}
            classNames={fieldClassNames}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />

          <Button
            className="w-full rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            endContent={<Send className="w-4 h-4" />}
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
