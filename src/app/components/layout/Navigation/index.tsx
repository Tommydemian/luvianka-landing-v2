"use client";

import React, { useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { cn } from "@/app/lib/utils";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";

import { usePathname } from "next/navigation";

import type { SettingsDocumentData } from "@/prismicio-types";

type NavigationProps = {
  navItems: SettingsDocumentData["navigation_link"];
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const Navigation: React.FC<NavigationProps> = ({
  navItems,
  isMenuOpen,
  toggleMobileMenu,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    toggleMobileMenu();
  }, [pathname]);

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        // Layout & Positioning
        "bg-white outline-1 outline-offset-1 outline-red-500",
        "absolute inset-0 top-nav-heigth",
        "md:!relative md:inset-auto md:top-0",

        // Mobile-specific
        "z-50",

        // Flex properties
        "flex gap-8",

        // Font
        "font-src-sans",

        // Base state for mobile - no transitions
        "max-md:opacity-0",

        // Open state with transitions
        isMenuOpen &&
          "max-md:opacity-100 max-md:transition-all max-md:duration-300",
      )}
    >
      <Container>
        <VSpace>
          <ul
            role="list"
            className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-center"
          >
            {navItems?.map((link) => {
              const isActive =
                pathname === `/${link.text?.toLocaleLowerCase()}`;
              return (
                <li role="listitem" key={link.key}>
                  <PrismicNextLink
                    field={link}
                    className={cn("nav-link", isActive && "nav-link--active")}
                  >
                    {link.text}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </VSpace>
      </Container>
    </nav>
  );
};
