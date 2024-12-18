import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ProductDocumentData } from "@/prismicio-types";

type ProductCardProps = {
  product: ProductDocumentData;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { product_image, product_title } = product;
  return (
    <article className="rounded-product-card relative h-full cursor-pointer overflow-hidden shadow-md md:min-h-[27.25rem] md:max-w-[21.188rem]">
      <PrismicNextImage className="product-card-image" field={product_image} />
      <h3 className="absolute bottom-4 left-4 font-title text-xl.5 font-bold text-root-secondary">
        {product_title}
      </h3>
    </article>
  );
};
