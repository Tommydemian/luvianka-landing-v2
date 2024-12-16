import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";

import { TextWithMediaTextContent } from "./components/TextWithMediaTextContent";

import { cn } from "@/app/lib/utils";

/**
 * Props for `TextWithMedia`.
 */
export type TextWithMediaProps =
  SliceComponentProps<Content.TextWithMediaSlice>;

/**
 * Component for "TextWithMedia" Slices.
 */
const TextWithMedia = ({ slice }: TextWithMediaProps): JSX.Element => {
  const isVariant = slice.variation === "fullWidthImage";
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        isVariant
          ? "bg-surface-red text-root-secondary"
          : "py-size-30 md:py-[7.5rem]",
      )}
    >
      <div className={cn(!isVariant && "container")}>
        <div
          className={cn(
            "grid grid-cols-1 gap-x-10 gap-y-4",
            isVariant ? "md:grid-cols-2" : "lg:grid-cols-2",
          )}
        >
          <article
            className={cn(
              "relative",
              "md:order-0 order-1",
              isVariant
                ? "webkit-fill-available h-[20.875rem] md:h-[32.313rem]"
                : "h-[18.188rem] md:h-[23.75rem]",
              !isVariant && "justify-self-center",
            )}
          >
            <PrismicNextImage
              priority={true}
              field={slice.primary.imagen}
              className={cn(
                !isVariant
                  ? "inherit-size object-contain"
                  : "inherit-size object-cover",
              )}
            />
          </article>

          <TextWithMediaTextContent
            cta={slice.primary.button_link}
            decorativeText={slice.primary.decorative_text}
            sectionDescription={slice.primary.section_description}
            sectionTitle={slice.primary.section_title}
            isVariant={isVariant}
          />
        </div>
      </div>
    </section>
  );
};

export default TextWithMedia;
