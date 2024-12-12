import React from "react";
import { MenuIcon, XIcon } from "lucide-react";

import { cn } from "@/app/lib/utils";

type HamburguerMenuButtonProps = {
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const HamburguerMenuButton: React.FC<HamburguerMenuButtonProps> = ({
  isMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <button
      className="relative z-50 md:hidden"
      onClick={toggleMobileMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <MenuIcon
        className={cn(
          "absolute transition-all duration-300",
          isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
        )}
      />
      <XIcon
        className={cn(
          "transition-all duration-300",
          isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
        )}
      />
    </button>
  );
};
