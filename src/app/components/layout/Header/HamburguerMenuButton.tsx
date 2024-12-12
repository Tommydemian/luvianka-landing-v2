import React from "react";
import { MenuIcon } from "lucide-react";

import { cn } from "@/app/lib/utils";
type HamburguerMenuButtonProps = {
  isSideBarOpen?: boolean;
  openSideBar?: () => void;
};

export const HamburguerMenuButton: React.FC<HamburguerMenuButtonProps> = ({
  isSideBarOpen,
  openSideBar,
}) => {
  return (
    <button
      className={cn("hamb-menu__transition md:hidden", {
        "z-[4] opacity-100": !isSideBarOpen,
        "z-[0] opacity-0": isSideBarOpen,
      })}
      onClick={openSideBar}
    >
      <MenuIcon />
    </button>
  );
};
