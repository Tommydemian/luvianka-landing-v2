"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from ".";
import { HamburguerMenuButton } from "./HamburguerMenuButton";

import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

import type { SettingsDocumentData, ProductDocument } from "@/prismicio-types";

type MobileWrapperProps = {
  navItems: SettingsDocumentData["navigation_link"];
  products: ProductDocument[];
};

export const MobileWrapper: React.FC<MobileWrapperProps> = ({
  navItems,
  products,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useBreakpoint("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <HamburguerMenuButton
        isMenuOpen={isMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <Navigation
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        toggleMobileMenu={toggleMobileMenu}
        products={products}
      />
    </>
  );
};
