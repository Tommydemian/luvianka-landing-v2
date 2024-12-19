"use client";

import React from "react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";
import { cn } from "@/app/lib/utils";

type MobileProductDropdownProps = {
  isDropdownOpen: boolean;
};

export const MobileProductDropdown: React.FC<MobileProductDropdownProps> = ({
  isDropdownOpen,
}) => {
  const { productsRef } = useProductsNavigationContext();
  return (
    <ul
      className={cn(
        "ml-4 space-y-3 py-4",
        "transform transition-all duration-300 ease-cubic",
        isDropdownOpen
          ? "relative opacity-100"
          : "absolute max-h-0 overflow-hidden opacity-0",
      )}
    >
      {productsRef?.map((p) => (
        <li
          key={p.uid}
          role="listitem"
          className="flex w-full items-center justify-between border-b border-ligth-gray py-3 transition-colors duration-300 ease-cubic hover:text-red-primary"
        >
          <PrismicNextLink field={p.data.button_link} className="block flex-1">
            {p.data.product_title}
          </PrismicNextLink>
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gray-100">
            <PrismicNextImage
              field={p.data.product_image}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
