import React from "react";
import { Link } from "@heroui/link";

import MyLogo from "@/app/common-components/MyLogo";

function Footer() {
  return (
    <footer className="light w-full flex items-center justify-center py-3">
      <Link
        className="flex items-center gap-1 text-current"
        href="/"
        title="career_tool homepage"
      >
        <MyLogo />
      </Link>
    </footer>
  );
}

export default Footer;
