"use client";
import { cn } from "@/app/lib/utils";
import { PrismicNextLink } from "@prismicio/next";
import type { KeyTextField } from "@prismicio/client";
import { ProductDocument } from "@/prismicio-types";

type CategoriesSidebarProps = {
  categories: ProductDocument[];
  activeCategory: KeyTextField | undefined;
};

import React, { useCallback, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { useToggle } from "@/app/components/layout/Navigation/hooks/useToggle";

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  activeCategory,
}) => {
  const { isDesktop, setState: setIsOpen, state: isOpen } = useToggle(false);

  useEffect(() => {
    const dropdown = document.querySelector(".dropdown__menu");
    if (isDesktop) {
      dropdown?.classList.remove("dropdown__menu--open");
      setIsOpen(false);
    }
  }, [isDesktop]);

  const toggleDropdown = useCallback(() => {
    const menu = document.querySelector(".dropdown__menu");
    // Add transition class BEFORE changing state
    menu?.classList.add("dropdown__menu-animating");
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const menu = document.querySelector(".dropdown__menu");

    const handleTransitionEnd = (e: Event) => {
      if (e instanceof TransitionEvent && e.propertyName === "opacity") {
        menu?.classList.remove("dropdown__menu-animating");
      }
    };

    menu?.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      menu?.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  return (
    <div className="dropdown">
      <div
        className={`dropdown__header ${isOpen ? "dropdown__header--active" : ""}`}
        onClick={toggleDropdown}
      >
        <h2 className="dropdown__title">Categorías</h2>
        <div className="md:hidden">
          <ChevronDown
            className={`dropdown__icon ${isOpen ? "dropdown__icon--open" : ""}`}
          />
        </div>
      </div>

      <div className={`dropdown__menu ${isOpen ? "dropdown__menu--open" : ""}`}>
        <ul className="dropdown__menu-list">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`dropdown__menu-item ${
                category.id === activeCategory
                  ? "dropdown__menu-item--selected"
                  : ""
              }`}
            >
              <PrismicNextLink field={category.data.button_link}>
                {category.data.product_title}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
