"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";

import { MobileProductDropdown } from "./ProductDropdown/MobileProductDropdown";
import { DesktopProductDropdown } from "./ProductDropdown/DesktopProductDropdown";

import { cn } from "@/app/lib/utils";
import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";

import type { LinkField } from "@prismicio/client";

type NavLinkItemProps = {
  link: LinkField;
  isActive: boolean;
  index: number;
  toggleState: () => void;
  handleStateClose: () => void;
  handleStateOPen: () => void;
  isOpen: boolean;
  isDesktop: boolean;
};

export const NavLinkItem: React.FC<NavLinkItemProps> = React.memo(
  function NavLinkItem({
    link,
    isActive,
    index,
    handleStateClose: handleDropdownClose,
    handleStateOPen: handleDropdownOpen,
    isOpen: isDropdownOpen,
    toggleState: toggleDropdown,
    isDesktop,
  }) {
    const { productsRef } = useProductsNavigationContext();

    if (index === 0) {
      return (
        <div
          className="dropdown relative max-md:w-full"
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <li
            role="listitem"
            key={link.text}
            className="flex items-end gap-x-1"
            onClick={toggleDropdown}
          >
            <PrismicNextLink
              field={link}
              className={cn(
                "nav-link flex items-end max-md:w-full md:text-lg",
                (isActive || isDropdownOpen) && "nav-link--active",
              )}
            >
              {link.text}
              <span className="inline-flex w-full items-center justify-end">
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    isDropdownOpen && "rotate-180",
                  )}
                />
              </span>
            </PrismicNextLink>
          </li>

          {/* Dropdown */}
          {productsRef && isDesktop && (
            <DesktopProductDropdown isDropdownOpen={isDropdownOpen} />
          )}

          {productsRef && !isDesktop && (
            <MobileProductDropdown isDropdownOpen={isDropdownOpen} />
          )}
        </div>
      );
    }

    return (
      <li role="listitem" key={link.text}>
        <PrismicNextLink
          field={link}
          className={cn(
            "nav-link flex items-end md:text-lg",
            isActive && "nav-link--active",
          )}
        >
          {link.text}
        </PrismicNextLink>
      </li>
    );
  },
);
