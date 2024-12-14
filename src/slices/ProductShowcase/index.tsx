import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Container } from "@/components/ui/Container";
import { DecorativeUnderline } from "@/components/icons/decorative";

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
      <Container>
        <div className="py-size-30">
          <div
            aria-labelledby="product-showcase-title"
            className="relative mx-auto w-fit text-center"
          >
            <span className="font-decorative text-xl.5 text-red-primary md:text-2xl">
              {slice.primary.decorative_text}
            </span>
            <h2
              id="product-showcase-title"
              className="font-title text-2xl font-semibold md:text-3xl"
            >
              {slice.primary.main_heading}
            </h2>
            <DecorativeUnderline className="absolute left-[5rem] md:left-[10rem]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
