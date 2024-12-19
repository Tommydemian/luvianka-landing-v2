"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";
import { cn } from "@/app/lib/utils";
import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";
import type { LinkField } from "@prismicio/client";

type NavLinkItemProps = {
  link: LinkField;
  isActive: boolean;
  index: number;
};

export const NavLinkItem: React.FC<NavLinkItemProps> = ({
  link,
  isActive,
  index,
}) => {
  const { productsRef } = useProductsNavigationContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (index === 0) {
    return (
      <div
        className="dropdown relative"
        ref={containerRef}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <li role="listitem" key={link.text} className="flex items-end gap-x-1">
          <PrismicNextLink
            field={link}
            className={cn(
              "nav-link flex items-end md:text-lg",
              (isActive || isDropdownOpen) && "nav-link--active",
            )}
          >
            {link.text}
            <span className="inline-flex items-center">
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  isDropdownOpen && "rotate-180",
                )}
              />
            </span>
          </PrismicNextLink>
        </li>

        {/* Add this invisible bridge */}
        <div className="absolute left-0 h-4 w-full" />

        {productsRef && (
          <div
            className={cn(
              "top-product-dropdown-top py-size-16 absolute left-0 z-50 w-max bg-white px-size-35",
              "rounded-product-dropdown shadow-product-dropdown",
              "transition-product-dropdown ease-cubic transform duration-300",
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
              {productsRef.map((p) => (
                <li
                  key={p.uid}
                  role="listitem"
                  className="ease-cubic w-full transition-colors duration-300 hover:text-red-primary"
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
};
