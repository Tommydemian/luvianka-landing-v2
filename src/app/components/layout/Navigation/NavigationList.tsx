import React from "react";
// Components
import { NavLinkItem } from "./NavLinkItem";
// Lib
import { isActiveLink } from "@/app/lib/utils/isActiveLink";
// Types
import type { SettingsDocumentData } from "@/prismicio-types";

type NavigationListProps = {
  navItems: SettingsDocumentData["navigation_link"];
  pathname: string;
  toggleState: () => void;
  handleStateClose: () => void;
  handleStateOPen: () => void;
  isOpen: boolean;
  isDesktop: boolean;
};

export const NavigationList: React.FC<NavigationListProps> = ({
  navItems,
  pathname,
  handleStateClose,
  handleStateOPen,
  isDesktop,
  isOpen,
  toggleState,
}) => {
  return (
    <ul
      role="list"
      className="relative flex flex-col items-start gap-6 max-md:mb-[7.5rem] md:flex-row md:items-center md:justify-center"
    >
      {navItems?.map((link, index) => {
        const isActive = isActiveLink(link, pathname);
        return (
          <NavLinkItem
            index={index}
            isActive={isActive}
            link={link}
            key={link.key}
            isOpen={isOpen}
            handleStateClose={handleStateClose}
            handleStateOPen={handleStateOPen}
            toggleState={toggleState}
            isDesktop={isDesktop}
          />
        );
      })}
    </ul>
  );
};
