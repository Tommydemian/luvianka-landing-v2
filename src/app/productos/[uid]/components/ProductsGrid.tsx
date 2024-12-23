"use client";
import React, { useState, useEffect } from "react";
import { DetailedProductCard } from "./DetailedProductCard";
import { ProductsGridSkeleton } from "./skeletons/ProductsGridSkeleton";
import type {
  ProductDocumentData,
  ProductDocumentDataProductVarietiesItem,
} from "@/prismicio-types";

// ProductsGrid recibe la categoría completa
type ProductsGridProps = {
  selectedCategory: ProductDocumentData | null;
};

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  selectedCategory,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !selectedCategory) {
    return <ProductsGridSkeleton />;
  }

  return <ProductGridContent category={selectedCategory} />;
};

// ProductGridContent también recibe la categoría completa
type ProductGridContentProps = {
  category: ProductDocumentData;
};

const ProductGridContent: React.FC<ProductGridContentProps> = ({
  category,
}) => (
  <div className="space-y-4 md:space-y-8">
    <h1 className="font-title font-semibold capitalize max-mobile-base:text-2xl.5 mobile-base:text-3xl">
      {category.product_title}
    </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {category.product_varieties.map((product, index) => (
        <DetailedProductCard
          key={createProductKey(product, index)}
          {...getProductProps(product)}
        />
      ))}
    </div>
  </div>
);

// Los helpers trabajan con ProductDocumentDataProductVarietiesItem
const createProductKey = (
  product: ProductDocumentDataProductVarietiesItem,
  index: number,
) => {
  const {
    product_var_title,
    product_var_code,
    product_var_weight,
    product_var_lifespan,
  } = product;
  return `key-${product_var_title}-${product_var_code}-${product_var_weight}-${product_var_lifespan}-${index}`;
};

const getProductProps = (product: ProductDocumentDataProductVarietiesItem) => ({
  code: product.product_var_code,
  image: product.product_image,
  lifespan: product.product_var_lifespan,
  quantityPerBox: product.product_var_quantity_per_box,
  title: product.product_var_title,
  type: product.product_var_type,
  weight: product.product_var_weight,
  weightPerBox: product.product_var_weight_per_box,
});
