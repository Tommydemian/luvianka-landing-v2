"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";
import { cn } from "@/app/lib/utils";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";

import { usePathname } from "next/navigation";

import type { SettingsDocumentData, ProductDocument } from "@/prismicio-types";

type NavigationProps = {
  navItems: SettingsDocumentData["navigation_link"];
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
  products: ProductDocument[];
};

export const Navigation: React.FC<NavigationProps> = ({
  navItems,
  isMenuOpen,
  toggleMobileMenu,
  products,
}) => {
  const pathname = usePathname();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      toggleMobileMenu();
    }
  }, [pathname]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        // Layout & Positioning
        "bg-white outline-1 outline-offset-1 outline-red-500",
        "absolute inset-0 top-nav-heigth",
        "md:!relative md:inset-auto md:top-0",

        // Flex properties
        "flex gap-8",
        // Base state for mobile - no transitions
        "max-md:opacity-0",

        "max-md:pointer-events-none",

        // Open state with transitions
        isMenuOpen &&
          "z-50 max-md:pointer-events-auto max-md:opacity-100 max-md:transition-all max-md:duration-300",
      )}
    >
      <Container>
        <VSpace>
          <ul
            role="list"
            className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-center"
          >
            {navItems?.map((link, index) => {
              const isActive = () => {
                const currentPath = pathname.endsWith("/")
                  ? pathname.slice(0, -1)
                  : pathname;
                const linkPath = `/${link.text?.toLocaleLowerCase()}`;
                return (
                  currentPath === linkPath || currentPath.startsWith(linkPath)
                );
              };
              return (
                <li role="listitem" key={link.key}>
                  <PrismicNextLink
                    field={link}
                    className={cn(
                      "nav-link flex items-end md:text-lg",
                      isActive() && "nav-link--active",
                    )}
                  >
                    {link.text}
                    {index === 0 && (
                      <span>
                        <ChevronDown className="w-8" />
                      </span>
                    )}
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
