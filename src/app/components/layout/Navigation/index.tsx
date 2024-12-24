"use client";
import React from "react";

// Components
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { NavigationRoot } from "./NavigationRoot";
import { NavigationList } from "./NavigationList";
import { NavigationMobileActions } from "./NavigationMobileActions";

// Hooks
import { useResponsiveDropdown } from "./hooks/useResponsiveDropdown";
import { usePreventScroll } from "./hooks/usePreventScroll";
import { useNavPathname } from "./hooks/useNavPathname";

// Types
import type { SettingsDocumentData } from "@/prismicio-types";

type NavigationProps = {
  navItems: SettingsDocumentData["navigation_link"];
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const Navigation: React.FC<NavigationProps> = ({
  navItems,
  isMenuOpen, // Menu open
  toggleMobileMenu,
}) => {
  usePreventScroll(isMenuOpen);
  const {
    handleClose,
    handleOpen,
    handleToggle,
    isDesktop,
    isOpen: isDropdownOpen, // Dropdown open
  } = useResponsiveDropdown();

  const { pathname } = useNavPathname(isMenuOpen, toggleMobileMenu);

  return (
    <>
      <NavigationRoot isMenuOpen={isMenuOpen}>
        <Container>
          <VSpace>
            <NavigationList
              handleStateClose={handleClose}
              handleStateOPen={handleOpen}
              toggleState={handleToggle}
              isDesktop={isDesktop}
              isOpen={isDropdownOpen}
              navItems={navItems}
              pathname={pathname}
            />
            <NavigationMobileActions isDropdownOpen={isDropdownOpen} />
          </VSpace>
        </Container>
      </NavigationRoot>
    </>
  );
};
