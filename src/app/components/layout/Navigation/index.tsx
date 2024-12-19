"use client";
import React, { useEffect, useState } from "react";

import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { Dropdown } from "../../ui/Dropdown";
import { NavLinkItem } from "./NavLinkItem";

import { usePathname } from "next/navigation";
import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";
// utils
import { isActiveLink } from "@/app/lib/utils/isActiveLink";
import { cn } from "@/app/lib/utils";

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
  // const { productsRef, setProductsRef } = useProductsNavigationContext();

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
        "h-full w-full bg-white outline-1 outline-offset-1 outline-red-500",
        "nav-positioning",
        "md:!relative md:inset-auto md:top-0",

        // Flex properties
        "flex gap-8",
        // Base state for mobile - no transitions
        "max-md:opacity-0",

        "max-md:pointer-events-none",

        // Open state with transitions
        isMenuOpen &&
          "fixed z-50 max-md:pointer-events-auto max-md:opacity-100 max-md:transition-all max-md:duration-300",
      )}
    >
      <Container>
        <VSpace>
          <ul
            role="list"
            className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-center"
          >
            {navItems?.map((link, index) => {
              const isActive = isActiveLink(link, pathname);
              return (
                <NavLinkItem
                  index={index}
                  isActive={isActive}
                  link={link}
                  key={link.key}
                />
              );
            })}
          </ul>
        </VSpace>
      </Container>
    </nav>
  );
};
