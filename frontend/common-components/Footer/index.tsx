"use client";
import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import MyLogo from "@/common-components/MyLogo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-zinc-100 dark:bg-background text-zinc-700 dark:text-zinc-300 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 px-6 py-6">
        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-semibold tracking-widest transition-colors duration-200 hover:text-blue-500",
                  isActive ? "text-blue-500" : "text-zinc-500 dark:text-zinc-400"
                )}
              >
                {item.label}
              </NextLink>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-300 dark:bg-zinc-700" />

        {/* Slogan */}
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
          Your career story deserves a perfect first impression. Build a professional CV in minutes
          and land the job you&apos;ve always wanted.
        </p>

        {/* Logo */}
        <NextLink
          href="/"
          aria-label="onCV.link homepage"
          className="h-8 opacity-90 hover:opacity-100 transition-opacity duration-200"
        >
          <MyLogo
            fontSize="16px"
            padding="3px"
          />
        </NextLink>

        {/* Legal links */}
        <div className="flex gap-4 text-xs text-zinc-400 dark:text-zinc-600">
          <NextLink href="/terms" className="hover:text-blue-500 transition-colors duration-200">
            Terms of Service
          </NextLink>
          <span>·</span>
          <NextLink href="/privacy" className="hover:text-blue-500 transition-colors duration-200">
            Privacy Policy
          </NextLink>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} onCV.link — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
