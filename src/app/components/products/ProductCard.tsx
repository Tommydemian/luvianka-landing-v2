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
        "product-card group",
        "after:pointer-events-none after:absolute after:inset-0",
        "after:bg-gradient-to-t after:from-black/60 after:via-transparent after:to-transparent",
        "after:from-[13.72%] after:via-[74.65%]",
        "overflow-hidden",
        className,
      )}
    >
      <PrismicNextImage
        field={product_image}
        className={cn(
          "product-image",
          "duration-600 transition-transform ease-cubic",
          "md:group-hover:scale-[1.15]",
        )}
      />
      <div
        className={cn(
          "absolute bottom-24 left-4 z-10 md:bottom-10",
          "grid gap-2",
          "transform-gpu",
          "duration-600 transition-transform ease-cubic",
          "translate-y-16",
          "md:group-hover:translate-y-0",
        )}
      >
        <h3 className="font-title text-xl.5 font-bold text-root-secondary">
          {product_title}
        </h3>

        <CTA
          field={button_link}
          className={cn(
            "capitalize",
            "md:translate-y-7 md:opacity-0",
            "md:duration-600 md:transition-all md:ease-cubic",
            "md:group-hover:translate-y-0 md:group-hover:opacity-100",
          )}
        />
      </div>
    </article>
  );
};
