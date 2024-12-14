import React from "react";
import { createClient } from "@/prismicio";
import { cn } from "@/app/lib/utils";

import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/components/ui/Container";
import { VSpace } from "../../ui/VSpace";
import { CTA } from "../../ui/CTA";
import { MobileWrapper } from "../Navigation/MobileWrapper";
import Link from "next/link";

export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header
      className={cn(
        "bg-white",
        "flex items-center", // layout
        "text-base",
        "md:text-lg",
        "border-b border-gray-200", // bottom border
        "h-nav-heigth",
      )}
    >
      <Container>
        <VSpace>
          <div className="flex w-full items-center justify-between">
            {/* Logo */}
            <div className="max-w-[8rem]">
              <Link href="/">
                <PrismicNextImage
                  loading="eager"
                  priority={true}
                  fallback="blur"
                  field={settings.data.logo}
                />
              </Link>
            </div>

            <MobileWrapper navItems={settings.data.navigation_link} />

            {/* Contact Button */}
            {settings.data.buttonlink.map((link) => (
              <CTA key={link.key} field={link} className="show-md-flex" />
            ))}
          </div>
        </VSpace>
      </Container>
    </header>
  );
};
