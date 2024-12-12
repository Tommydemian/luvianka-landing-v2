import React from "react";
import { cn } from "@/app/lib/utils";

import { prmClient } from "@/app/lib/utils/client";
import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/components/ui/Container";
import { Navigation } from "../Navigation";
import { CTA } from "../../ui/CTA";
import { HamburguerMenuButton } from "./HamburguerMenuButton";

export const Header = async () => {
  const settings = await prmClient.getSingle("settings");
  const { data } = settings;

  return (
    <header
      className={cn(
        "w-full bg-white",
        "flex items-center justify-between", // layout
        "px-6 py-4", // padding
        "border-b border-gray-200", // bottom border
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="max-w-[8rem]">
            <PrismicNextImage field={data.logo} />
          </div>

          <HamburguerMenuButton />

          {/* Navigation */}
          <Navigation navItems={data.navigation_items} />

          {/* Contact Button */}
          {data.buttonlink.map((link) => (
            <CTA key={link.key} field={link} className="hidden md:flex" />
          ))}
        </div>
      </Container>
    </header>
  );
};
