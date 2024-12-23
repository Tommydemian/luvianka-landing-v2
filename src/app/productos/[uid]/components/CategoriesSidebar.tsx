"use client";

// import React, { useEffect, useState } from "react";
// import { SideBarNavDropdown } from "./SideBarNavDropdown";
// import { CategoriesSidebarSkeleton } from "./skeletons/CategoriesSidebarSkeleton";
// import { ChevronDown } from "lucide-react";
// import { useDropdown } from "../hooks/useDropdown";
import { cn } from "@/app/lib/utils";
import { PrismicNextLink } from "@prismicio/next";
import type { KeyTextField } from "@prismicio/client";
import { ProductDocument } from "@/prismicio-types";

type CategoriesSidebarProps = {
  categories: ProductDocument[];
  activeCategory: KeyTextField | undefined;
};

// export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
//   categories,
//   activeCategory,
// }) => {
//   const { dropdownRef, toggleDropdown, isDesktop, isOpen } = useDropdown();

//   return (
//     <aside className="w-full max-w-xs space-y-2">
//       {isDesktop ? (
//         <>
//           <h2 className="font-title text-xl font-semibold">Categorías</h2>

//           <SideBarNavDropdown
//             activeCategory={activeCategory}
//             categories={categories}
//             isDropdownOpen={isOpen}
//           />
//         </>
//       ) : (
//         <div className="md:hidden">
//           <div
//             onClick={toggleDropdown}
//             id="p-dropdown"
//             ref={dropdownRef}
//             className="relative mb-4 rounded-lg border border-ligth-gray p-2 max-md:flex max-md:items-end max-md:justify-between"
//           >
//             <h2 className="font-title text-xl font-semibold">Categorías</h2>
//             <span>
//               <ChevronDown
//                 className={cn(
//                   "transition-transform duration-200",
//                   isOpen && "rotate-180",
//                 )}
//               />
//             </span>
//             <SideBarNavDropdown
//               activeCategory={activeCategory}
//               categories={categories}
//               isDropdownOpen={isOpen}
//             />
//           </div>
//         </div>
//       )}
//     </aside>
//   );
// };

import React, { useCallback, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  activeCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useBreakpoint("(min-width: 768px)");

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
