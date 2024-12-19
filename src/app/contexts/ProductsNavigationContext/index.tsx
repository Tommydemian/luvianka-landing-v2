"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ProductDocument } from "@/prismicio-types";

type ProductsNavigationContextType = {
  productsRef: ProductDocument[] | null;
  setProductsRef: (products: ProductDocument[]) => void;
};
export const ProductsNavigationContext = createContext<
  ProductsNavigationContextType | undefined
>(undefined);

export const ProductsNavigationContextProvider = ({
  children,
  initialProducts,
}: {
  children: ReactNode;
  initialProducts: ProductDocument[];
}) => {
  const [productsRef, setProductsRef] = useState<ProductDocument[] | null>(
    initialProducts,
  );

  return (
    <ProductsNavigationContext.Provider value={{ productsRef, setProductsRef }}>
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
