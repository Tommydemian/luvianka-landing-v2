"use client";

import React from "react";
import { PrismicNextLink } from "@prismicio/next";

import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";
import { cn } from "@/app/lib/utils";

type DesktopProductDropdownProps = {
  isDropdownOpen: boolean;
};

export const DesktopProductDropdown: React.FC<DesktopProductDropdownProps> = ({
  isDropdownOpen,
}) => {
  const { productsRef } = useProductsNavigationContext();
  return (
    <>
      <div data-invisible-bridge className="absolute left-0 h-4 w-full" />
      <div
        className={cn(
          "absolute left-0 top-product-dropdown-top z-50 w-max bg-white px-size-35 py-size-16",
          "rounded-product-dropdown shadow-product-dropdown",
          "transform transition-product-dropdown duration-300 ease-cubic",
          isDropdownOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        <ul
          className={cn(
            "flex flex-col items-start justify-center gap-y-2",
            "transform transition-all delay-75 duration-200",
            isDropdownOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-1 opacity-0",
          )}
          role="list"
        >
          {productsRef?.map((p) => (
            <li
              key={p.uid}
              role="listitem"
              className="w-full transition-colors duration-300 ease-cubic hover:text-red-primary"
            >
              <PrismicNextLink
                field={p.data.button_link}
                className="block w-full"
              >
                {p.data.product_title}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
