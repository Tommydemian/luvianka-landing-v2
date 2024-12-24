import React from "react";
import { useProductsNavigationContext } from "@/app/contexts/ProductsNavigationContext";
import { CTA } from "../../ui/CTA";

export const NavigationMobileCTA = ({ className }: { className?: string }) => {
  const { buttonLink } = useProductsNavigationContext();
  return buttonLink.map((link) => (
    <CTA className={className} key={link.key} field={link} />
  ));
};
