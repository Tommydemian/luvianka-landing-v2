import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Container } from "@/components/ui/Container";
import { DecorativeUnderline } from "@/components/icons/decorative";
import { ProductCard } from "@/app/components/products/ProductCard";

import { ProductDocument } from "@/prismicio-types";

/**
 * Props for `ProductShowcase`.
 */
export type ProductShowcaseProps =
  SliceComponentProps<Content.ProductShowcaseSlice> & {
    products: ProductDocument[];
  };

/**
 * Component for "ProductShowcase" Slices.
 */
const ProductShowcase = ({
  slice,
  products,
}: ProductShowcaseProps): JSX.Element => {
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
            <span className="decorative-text text-root-accent">
              {slice.primary.decorative_text}
            </span>
            <h2 id="product-showcase-title" className="home-section-title">
              {slice.primary.main_heading}
            </h2>
            <DecorativeUnderline className="absolute left-[5rem] md:left-[10rem]" />
          </div>

          <div className="mx-auto grid max-w-fit grid-cols-3 gap-8 pt-size-45">
            {products.map((product) => (
              <ProductCard
                key={product.data.product_title}
                product={product.data}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
