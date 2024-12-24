"use client";

import React from "react";
import { Navigation } from ".";
import { HamburguerMenuButton } from "./HamburguerMenuButton";

import { useToggle } from "./hooks/useToggle";

import type { SettingsDocumentData } from "@/prismicio-types";

type MobileWrapperProps = {
  navItems: SettingsDocumentData["navigation_link"];
};

export const NavigationClientWrapper: React.FC<MobileWrapperProps> = ({
  navItems,
}) => {
  const { state: isMenuOpen, toggleState: toggleMobileMenu } = useToggle(
    false,
    "closeWhenDesktop",
  );

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
      />
    </>
  );
};
