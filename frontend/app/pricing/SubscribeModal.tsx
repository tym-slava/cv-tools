"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

import { isValidEmail } from "@/utils/validation";

interface SubscribeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscribeModal({ isOpen, onOpenChange }: SubscribeModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setStatus("idle");
        setEmailError("");
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");

      return;
    }
    setEmailError("");
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        setStatus("error");

        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      size="md"
      classNames={{
        base: "mx-4",
        backdrop: "bg-black/50 backdrop-blur-sm",
      }}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 pt-6 pb-2">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Stay in the loop
              </span>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 leading-relaxed">
                Leave your name and email — we&apos;ll notify you when new features launch.
                <br />
                <span className="text-blue-500 font-medium">
                  No spam, ever. Unsubscribe anytime.
                </span>
              </p>
            </ModalHeader>

            <ModalBody className="py-4 gap-4">
              {status === "success" ? (
                <div
                  role="alert"
                  className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-5 py-4 text-green-700 dark:text-green-400 text-sm font-medium text-center"
                >
                  🎉 You&apos;re on the list! We&apos;ll be in touch when something exciting
                  launches.
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
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    labelPlacement="outside"
                    classNames={{ inputWrapper: "bg-white/50 dark:bg-white/5" }}
                    value={name}
                    onValueChange={setName}
                  />
                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    classNames={{ inputWrapper: "bg-white/50 dark:bg-white/5" }}
                    isInvalid={!!emailError}
                    errorMessage={emailError}
                    value={email}
                    onValueChange={(val) => {
                      setEmail(val);
                      if (emailError) setEmailError("");
                    }}
                  />
                </>
              )}
            </ModalBody>

            <ModalFooter className="pb-6 pt-2">
              {status === "success" ? (
                <Button
                  className="w-full rounded-md font-semibold bg-blue-500 text-white"
                  size="lg"
                  onPress={onClose}
                >
                  Close
                </Button>
              ) : (
                <div className="flex gap-3 w-full">
                  <Button
                    className="flex-1 rounded-md font-semibold"
                    variant="flat"
                    size="lg"
                    isDisabled={isLoading}
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600"
                    size="lg"
                    isLoading={isLoading}
                    isDisabled={!email.trim()}
                    onPress={() => void handleSubmit()}
                  >
                    Notify me
                  </Button>
                </div>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
