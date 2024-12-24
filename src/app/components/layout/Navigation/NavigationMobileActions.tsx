import React from "react";
import { NavigationMobileCTA } from "./NavigationMobileCTA";
import { cn } from "@/app/lib/utils";

type NavigationMobileActionsProps = {
  isDropdownOpen: boolean;
};

export const NavigationMobileActions: React.FC<
  NavigationMobileActionsProps
> = ({ isDropdownOpen }) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-[80%] flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center py-5 md:hidden",
        isDropdownOpen && "relative",
      )}
    >
      <NavigationMobileCTA className="w-[90%]" />
    </div>
  );
};
