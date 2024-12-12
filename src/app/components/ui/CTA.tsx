import React from "react";
import { cn } from "@/app/lib/utils";
import { PrismicNextLink } from "@prismicio/next";
import type { LinkField } from "@prismicio/client";

type CTAProps = {
  variant?: "primary" | "secondary";
  field: LinkField;
  className?: string;
};

export const CTA: React.FC<CTAProps> = ({
  field,
  variant = "primary",
  className,
}) => {
  return (
    <PrismicNextLink
      className={cn(
        "text-white",
        "rounded-cta",
        variant === "primary" ? "bg-red-primary" : "bg-black",
        "font-src-sans",
        "cta-padding",
        "uppercase",
        "font-bold",
        "flex",
        "inline-flex",
        "justify-center",
        "items-center",
        "outline-none",
        "max-h-[2.938rem]",
        className,
      )}
      field={field}
    />
  );
};
