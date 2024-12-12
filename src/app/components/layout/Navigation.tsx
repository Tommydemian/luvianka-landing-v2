import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import type { SettingsDocumentData } from "@/prismicio-types";

type NavigationProps = {
  navItems: SettingsDocumentData["navigation_items"];
};

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  return (
    <nav className="hidden items-center gap-8 font-src-sans md:flex">
      <ul role="list" className="flex items-center gap-4">
        {navItems.map((item) =>
          item.navigation_item_link_to.map((link) => (
            <li role="listitem" key={link.text}>
              <PrismicNextLink field={link} />
            </li>
          )),
        )}
      </ul>
    </nav>
  );
};
