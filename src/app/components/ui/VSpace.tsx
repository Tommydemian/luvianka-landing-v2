import React from "react";
import { cn } from "@/app/lib/utils";

type VSpaceProps = {
  children: React.ReactNode;
  className?: string;
  lg?: boolean;
};

export const VSpace: React.FC<VSpaceProps> = ({ children, className, lg }) => {
  return (
    <div className={cn("py-4", className, lg && "md:py-size-60")}>
      {children}
    </div>
  );
};
