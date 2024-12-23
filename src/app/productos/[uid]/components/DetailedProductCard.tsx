import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ProductDocumentDataProductVarietiesItem } from "@/prismicio-types";

type DetailedProductCardProps = {
  image: ProductDocumentDataProductVarietiesItem["product_image"];
  title: ProductDocumentDataProductVarietiesItem["product_var_title"];
  type?: ProductDocumentDataProductVarietiesItem["product_var_type"];
  code: ProductDocumentDataProductVarietiesItem["product_var_code"];
  weight: ProductDocumentDataProductVarietiesItem["product_var_weight"];
  lifespan: ProductDocumentDataProductVarietiesItem["product_var_lifespan"];
  quantityPerBox?: ProductDocumentDataProductVarietiesItem["product_var_quantity_per_box"];
  weightPerBox?: ProductDocumentDataProductVarietiesItem["product_var_weight_per_box"];
};

export const DetailedProductCard: React.FC<DetailedProductCardProps> = ({
  code,
  image,
  lifespan,
  quantityPerBox,
  title,
  type,
  weight,
  weightPerBox,
}) => {
  return (
    <article className="space-y-4 p-4">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-surface-snow p-4">
        <PrismicNextImage
          priority={true}
          field={image}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-primary">
          {title}
        </h3>

        {/* Product details grid */}
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <dt className="text-gray-500">Código</dt>
            <dd className="font-medium text-gray-900">{code}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Peso</dt>
            <dd className="font-medium text-gray-900">{weight}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-gray-500">Vida Útil</dt>
            <dd className="font-medium text-gray-900">{lifespan}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};
