import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

/**
 * Props for `BrandShowcase`.
 */
export type BrandShowcaseProps =
  SliceComponentProps<Content.BrandShowcaseSlice>;

/**
 * Component for "BrandShowcase" Slices.
 */
const BrandShowcase = ({ slice }: BrandShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <article className="bg-surface-snow p-em-size-35 mx-auto w-fit space-y-4 rounded-2xl shadow-xl md:w-[90%]">
          {/* Title and Description Group */}

          <h2 className="home-section-title-base mx-auto w-full text-center">
            {slice.primary.section_title}
          </h2>
          <PrismicRichText
            field={slice.primary.section_description}
            components={{
              paragraph: ({ children }) => (
                <p className="mx-auto mt-4 max-w-[100ch] text-center text-base leading-relaxed text-gray-700">
                  {children}
                </p>
              ),
            }}
          />

          {/* Logos Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {/* Lambare */}
            <div className="w-[120px] transition-transform hover:scale-105 md:w-[150px]">
              <PrismicNextImage
                field={slice.primary.lambare_logo}
                className="h-auto w-full"
              />
            </div>
            {/* LVK */}
            <div className="w-[120px] transition-transform hover:scale-105 md:w-[150px]">
              <PrismicNextImage
                field={slice.primary.lvk_logo}
                className="h-auto w-full"
              />
            </div>
            {/* 295 */}
            <div className="w-[120px] transition-transform hover:scale-105 md:w-[150px]">
              <PrismicNextImage
                field={slice.primary["295_logo"]}
                className="h-auto w-full"
              />
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default BrandShowcase;
