import React from "react";
import { createClient } from "@/prismicio";
import { cn } from "@/app/lib/utils";

import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/components/ui/Container";
import { CTA } from "../../ui/CTA";
import { MobileWrapper } from "../Navigation/MobileWrapper";

export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header
      className={cn(
        "bg-white",
        "flex items-center", // layout
        "py-4", // padding
        "border-b border-gray-200", // bottom border
        "h-nav-heigth",
      )}
    >
      <Container>
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="max-w-[8rem]">
            <PrismicNextImage field={settings.data.logo} />
          </div>

          <MobileWrapper navItems={settings.data.navigation_link} />

          {/* Contact Button */}
          {settings.data.buttonlink.map((link) => (
            <CTA key={link.key} field={link} className="hidden md:flex" />
          ))}
        </div>
      </Container>
    </header>
  );
};
