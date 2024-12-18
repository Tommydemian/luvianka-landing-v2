import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../ui/CTA";
import { cn } from "@/lib/utils";
import { ProductDocumentData } from "@/prismicio-types";

type ProductCardProps = {
  product: ProductDocumentData;
  className?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
}) => {
  const { product_image, product_title, button_link } = product;

  return (
    <article
      className={cn(
        "product-card group", // añadimos group aquí
        "after:pointer-events-none after:absolute after:inset-0",
        "after:bg-gradient-to-t after:from-black/60 after:via-transparent after:to-transparent",
        "after:from-[13.72%] after:via-[74.65%]",
        className,
      )}
    >
      <PrismicNextImage field={product_image} className="product-image" />
      <div
        className={cn(
          "absolute bottom-10 left-4 z-10",
          "space-y-4",
          // Estado inicial
          "translate-y-10 opacity-0",
          // Transición
          "transition-all duration-300 ease-out",
          // Estado hover
          "group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <h3 className="font-title text-xl.5 font-bold text-root-secondary">
          {product_title}
        </h3>

        <CTA field={button_link} className="capitalize" />
      </div>
    </article>
  );
};
