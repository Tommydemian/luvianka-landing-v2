"use client";
import React, { useEffect, useState, useMemo } from "react";
// Components
import { CategoriesSidebar } from "./CategoriesSidebar";
import { DetailedProductCard } from "./DetailedProductCard";

// Hooks
import { usePathname } from "next/navigation";

// Types
import type { ProductDocumentData, ProductDocument } from "@/prismicio-types";
import { KeyTextField } from "@prismicio/client";

type ClienWrapperProps = {
  products: ProductDocument[];
};

export const ClientWrapper: React.FC<ClienWrapperProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductDocumentData | null>(null);

  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const productPath = pathArr[pathArr.length - 1] as KeyTextField;

  // Derived State
  const categories = useMemo(() => products.map((el) => el.data), [products]); // Categories

  useEffect(() => {
    console.log(
      productPath?.toLocaleLowerCase().trim().replace(/-/g, " "),
      "TOFD",
    );
    console.log("TEST PRODUCT");
  }, [categories, productPath]);

  useEffect(() => {
    const activeCategory = categories.find(
      (el) =>
        el.product_title?.toLocaleLowerCase().trim() ===
        productPath?.toLocaleLowerCase().trim().replace(/-/g, " "),
    );
    if (activeCategory) {
      setSelectedCategory(activeCategory);
    }
  }, [categories, pathname]);

  useEffect(() => {
    console.log(selectedCategory, "heredog");
  }, [selectedCategory]);

  return (
    <>
      <CategoriesSidebar
        categories={categories.map((el) => el.product_title)}
        activeCategory={selectedCategory?.product_title}
      />

      {/* Products grid */}
      <div className="space-y-8">
        {/* Category title */}
        <h1 className="font-title text-3xl font-semibold capitalize">
          {selectedCategory?.product_title}
        </h1>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedCategory?.product_varieties.map((prod, i) => {
            const {
              product_image,
              product_var_code,
              product_var_lifespan,
              product_var_quantity_per_box,
              product_var_title,
              product_var_type,
              product_var_weight,
              product_var_weight_per_box,
            } = prod;
            return (
              <DetailedProductCard
                code={product_var_code}
                image={product_image}
                lifespan={product_var_lifespan}
                quantityPerBox={product_var_quantity_per_box}
                title={product_var_title}
                type={product_var_type}
                weight={product_var_weight}
                weightPerBox={product_var_weight_per_box}
                key={`key-${product_var_title}-${product_var_code}-${product_var_weight}-${product_var_lifespan}-${i}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
