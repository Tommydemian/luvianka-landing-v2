import React from "react";

import { PrismicNextLink } from "@prismicio/next";

import { cn } from "@/app/lib/utils";
import type { KeyTextField } from "@prismicio/client";
import type { ProductDocument } from "@/prismicio-types";

type SideBarNavDropdownProps = {
  categories: ProductDocument[];
  activeCategory: KeyTextField | undefined;
  isDropdownOpen: boolean;
};

export const SideBarNavDropdown = React.memo(
  ({
    // Using memo to prevent unnecessary re-renders
    activeCategory,
    categories,
    isDropdownOpen,
  }: SideBarNavDropdownProps) => {
    return (
      <nav
        aria-label="Products-Navigation"
        className={cn(
          "pointer-events-auto md:static md:block md:translate-y-0 md:opacity-100",
          "max-md:product-dropdown-container-base max-md:product-dropdown-mobile-padding",
          isDropdownOpen
            ? "max-md:translate-y-0 max-md:opacity-100"
            : "max-md:pointer-events-none max-md:translate-y-6 max-md:opacity-0",
        )}
      >
        <ul className="space-y-2">
          {categories.map((category) => (
            <CategoryLink
              key={category.data.product_title}
              category={category}
              isActive={category?.data?.product_title === activeCategory}
            />
          ))}
        </ul>
      </nav>
    );
  },
);

// Separate component for individual links to better control re-renders
const CategoryLink = React.memo(
  ({
    category,
    isActive,
  }: {
    category: ProductDocument;
    isActive: boolean;
  }) => (
    <li>
      <PrismicNextLink
        className={cn(
          "block w-full rounded-lg px-4 py-1 transition-colors duration-200",
          isActive ? "bg-red-primary text-white" : "hover:bg-red-primary/5",
        )}
        field={category.data.button_link}
      >
        {category?.data?.product_title}
      </PrismicNextLink>
    </li>
  ),
);

// Add display names for better debugging
SideBarNavDropdown.displayName = "SideBarNavDropdown";
CategoryLink.displayName = "CategoryLink";
