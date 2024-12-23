"use client";

// import React, { useEffect, useState } from "react";
// import { SideBarNavDropdown } from "./SideBarNavDropdown";
// import { CategoriesSidebarSkeleton } from "./skeletons/CategoriesSidebarSkeleton";
// import { ChevronDown } from "lucide-react";
// import { useDropdown } from "../hooks/useDropdown";
// import { cn } from "@/app/lib/utils";
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

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  activeCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className={`dropdown__header ${isOpen ? "dropdown__header--active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="dropdown__title">Categorías</h2>
        <ChevronDown
          className={`dropdown__icon ${isOpen ? "dropdown__icon--open" : ""}`}
        />
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
