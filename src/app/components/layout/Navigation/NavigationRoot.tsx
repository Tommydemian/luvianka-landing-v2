import React from "react";
import { cn } from "@/app/lib/utils";

type NavigationRootProps = {
  children: React.ReactNode;
  isMenuOpen: boolean;
};

export const NavigationRoot: React.FC<NavigationRootProps> = ({
  children,
  isMenuOpen,
}) => {
  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        // Layout & Positioning
        "h-full w-full bg-white outline-1 outline-offset-1 outline-red-500",
        "nav-positioning",
        "md:!relative md:inset-auto md:top-0",

        // Flex properties
        "flex flex-col gap-8",
        // Base state for mobile - no transitions
        "max-md:opacity-0",

        "max-md:pointer-events-none",

        // Open state with transitions
        isMenuOpen &&
          "fixed z-50 overflow-y-auto max-md:pointer-events-auto max-md:opacity-100 max-md:transition-all max-md:duration-300",
      )}
    >
      {children}
    </nav>
  );
};
