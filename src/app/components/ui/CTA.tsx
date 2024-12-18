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
        "cta-base",
        variant === "primary" ? "cta-primary" : "cta-secondary",
        className,
      )}
      field={field}
    />
  );
};
