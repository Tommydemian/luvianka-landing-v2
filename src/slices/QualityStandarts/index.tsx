import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";
import { Children } from "react";
import { Ultra } from "next/font/google";

/**
 * Props for `QualityStandarts`.
 */
export type QualityStandartsProps =
  SliceComponentProps<Content.QualityStandartsSlice>;

/**
 * Component for "QualityStandarts" Slices.
 */
const QualityStandarts = ({ slice }: QualityStandartsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-surface-snow py-size-45"
    >
      {/* Decorative background element */}
      <div className="bg-red-primary/5 absolute -right-32 -top-32 h-64 w-64 rounded-full" />
      <div className="bg-red-primary/5 absolute -left-32 bottom-0 h-96 w-96 rounded-full" />

      <Container>
        <VSpace>
          {/* Content Grid */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* HACCP Badge */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-4/5 max-w-md transform transition-transform duration-300 hover:scale-105">
                <PrismicNextImage
                  field={slice.primary.section_image}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Standards List */}
            <div className="flex flex-col justify-center space-y-4 text-left">
              {/* Header */}
              <header className="relative mx-auto max-w-4xl">
                <h2 className="home-section-title-base pb-4">
                  {slice.primary.section_title}{" "}
                  <span className="text-red-primary">
                    {slice.primary.highlighted_word}
                  </span>
                </h2>
                <PrismicRichText
                  field={slice.primary.section_description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-lg leading-relaxed text-gray-700">
                        {children}
                      </p>
                    ),
                  }}
                />
              </header>
              <ul className="space-y-6">
                <PrismicRichText
                  field={slice.primary.section_list}
                  components={{
                    list: ({ children }) => (
                      <ul className="space-y-6">{children}</ul>
                    ),
                    listItem: ({ children }) => (
                      <li className="group relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                          <span className="bg-red-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-red-primary">
                            •
                          </span>
                          <div className="space-y-1">{children}</div>
                        </div>
                      </li>
                    ),
                  }}
                />
              </ul>
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};

export default QualityStandarts;
