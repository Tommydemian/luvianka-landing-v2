import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductShowcase`.
 */
export type ProductShowcaseProps =
  SliceComponentProps<Content.ProductShowcaseSlice>;

/**
 * Component for "ProductShowcase" Slices.
 */
const ProductShowcase = ({ slice }: ProductShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_showcase (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductShowcase;
