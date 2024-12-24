"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ProductDocument } from "@/prismicio-types";
import { LinkField, Repeatable } from "@prismicio/client";

type ProductsNavigationContextType = {
  productsRef: ProductDocument[] | null;
  setProductsRef: (products: ProductDocument[]) => void;
  buttonLink: Repeatable<LinkField>;
};
export const ProductsNavigationContext = createContext<
  ProductsNavigationContextType | undefined
>(undefined);

export const ProductsNavigationContextProvider = ({
  children,
  initialProducts,
  buttonLink,
}: {
  children: ReactNode;
  initialProducts: ProductDocument[];
  buttonLink: Repeatable<LinkField>;
}) => {
  const [productsRef, setProductsRef] = useState<ProductDocument[] | null>(
    initialProducts,
  );

  return (
    <ProductsNavigationContext.Provider
      value={{ productsRef, setProductsRef, buttonLink }}
    >
      {children}
    </ProductsNavigationContext.Provider>
  );
};

export const useProductsNavigationContext = () => {
  const context = useContext(ProductsNavigationContext);
  if (context === undefined) {
    throw new Error(
      "useProductsNavigationContext must be used within a MobileMenuProvider",
    );
  }
  return context;
};
