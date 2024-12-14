"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";

import { cn } from "@/app/lib/utils";
import type { SettingsDocumentData } from "@/prismicio-types";

type FooterNavigationProps = {
  navItems: SettingsDocumentData["navigation_link"];
};
export const FooterNavigation: React.FC<FooterNavigationProps> = ({
  navItems,
}) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Footer Navigation" className="md:pl-16">
      <ul role="list" className="flex flex-col items-start gap-4">
        {navItems?.map((link) => {
          const isActive = pathname === `/${link.text?.toLocaleLowerCase()}`;
          return (
            <li role="listitem" key={link.key}>
              <PrismicNextLink
                field={link}
                className={cn(
                  "nav-link text-base uppercase text-white md:text-[1.03rem]",
                  isActive && "nav-link--active",
                )}
              >
                {link.text}
              </PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
