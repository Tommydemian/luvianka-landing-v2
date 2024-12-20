import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

/**
 * Props for `ProductionAndQuality`.
 */
export type ProductionAndQualityProps =
  SliceComponentProps<Content.ProductionAndQualitySlice>;

/**
 * Component for "ProductionAndQuality" Slices.
 */

const ProductionAndQuality = ({
  slice,
}: ProductionAndQualityProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-surface-snow pb-size-60 pt-0"
    >
      <Container>
        <VSpace>
          <article className="relative overflow-hidden rounded-2xl border border-ligth-gray bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Content Side */}
              <div className="relative z-10 space-y-6 p-size-35 max-md:order-1">
                {/* Red decorative line */}
                <div className="w-16 bg-red-primary" />

                <h3 className="font-title text-xl.5 font-semibold md:text-2xl">
                  {slice.primary.section_title}
                </h3>

                <div className="prose prose-lg">
                  <PrismicRichText
                    field={slice.primary.section_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-red-primary">
                          {children}
                        </strong>
                      ),
                    }}
                  />
                </div>
              </div>

              {/* Image Side */}
              <div className="max-md:order-0 relative order-2 h-full min-h-[300px] bg-white md:min-h-full">
                <div className="absolute inset-0 rounded-none bg-gradient-to-r from-white/50 via-transparent to-transparent max-md:rounded-bl-2xl md:hidden" />
                <PrismicNextImage
                  field={slice.primary.section_image}
                  className="h-full w-full object-cover max-md:rounded-2xl"
                  priority={false}
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="bg-red-primary/5 absolute -left-16 -top-16 h-32 w-32 rounded-full" />
            <div className="bg-red-primary/5 absolute -bottom-8 -right-8 h-24 w-24 rounded-full" />
          </article>
        </VSpace>
      </Container>

      {/* Background Decorative Elements */}
      <div className="from-red-primary/5 absolute bottom-0 left-0 h-1/2 w-1/3 bg-gradient-to-t to-transparent" />
      <div className="from-red-primary/5 absolute right-0 top-0 h-1/2 w-1/3 bg-gradient-to-b to-transparent" />
    </section>
  );
};

export default ProductionAndQuality;
