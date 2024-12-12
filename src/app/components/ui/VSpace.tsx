import React from "react";
import { cn } from "@/app/lib/utils";

type VSpaceProps = { children: React.ReactNode; className?: string };

export const VSpace: React.FC<VSpaceProps> = ({ children, className }) => {
  return <div className={cn("py-4", className)}>{children}</div>;
};
