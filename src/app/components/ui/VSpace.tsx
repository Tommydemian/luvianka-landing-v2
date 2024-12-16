import React from "react";
import { cn } from "@/app/lib/utils";

type VSpaceProps = {
  children: React.ReactNode;
  className?: string;
  lg?: boolean;
  empresaPage?: boolean;
};

export const VSpace: React.FC<VSpaceProps> = ({
  children,
  className,
  lg,
  empresaPage,
}) => {
  return (
    <div
      className={cn(
        "py-4",
        className,
        lg && "md:py-size-60",
        empresaPage &&
          "py-empresa-section-py-mobile md:py-empresa-section-py-desktop",
      )}
    >
      {children}
    </div>
  );
};
