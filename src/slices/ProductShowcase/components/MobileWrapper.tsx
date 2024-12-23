"use client";
import React from "react";
import { ProductCard } from "@/app/components/products/ProductCard";
import { MobileSkeleton, DesktopSkeleton } from "./skeletons";
import { useClientPendingUI } from "@/app/lib/hooks/useClientPendingUI";
import { ProductDocument } from "@/prismicio-types";
import { ProductShowcaseSlider } from "./ProductShowcaseSlider";

type MobileWrapperProps = {
  products: ProductDocument[];
};

export const MobileWrapper: React.FC<MobileWrapperProps> = ({ products }) => {
  const { isDesktop, pendingUI, isMounted } = useClientPendingUI(
    "desktop",
    <DesktopSkeleton />,
    <MobileSkeleton />,
  );

  if (!isMounted) {
    return pendingUI;
  }

  if (isDesktop) {
    return (
      <>
        {products.map((product) => (
          <ProductCard
            key={product.data.product_title}
            product={product.data}
          />
        ))}
      </>
    );
  }

  return <ProductShowcaseSlider products={products} />;
};
