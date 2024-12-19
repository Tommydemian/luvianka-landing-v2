import React, { Dispatch, SetStateAction } from "react";
import { ProductDocument } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import { cn } from "@/app/lib/utils";

type DropdownProps = {
  products: ProductDocument[];
  productLinkHover: boolean;
  setProductLinkHover: Dispatch<SetStateAction<boolean>>;
};

export const Dropdown: React.FC<DropdownProps> = ({
  products,
  productLinkHover,
  setProductLinkHover,
}) => {
  return (
    <div
      className={cn(
        "rounded-product-dropdown product-dropdown-top ease-cubic transition-product-dropdown shadow-product-dropdown pointer-events-none absolute left-0 z-50 w-max -translate-y-[10px] bg-white px-size-35 py-size-24 opacity-0 duration-150",
        productLinkHover && "pointer-events-auto translate-y-0 opacity-100",
      )}
      onMouseEnter={() => setProductLinkHover(true)}
    >
      <ul
        className="flex flex-col items-start justify-center gap-y-2"
        role="list"
      >
        {products.map((p) => (
          <li key={p.uid} role="listitem">
            <PrismicNextLink field={p.data.button_link}>
              {p.data.product_title}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
