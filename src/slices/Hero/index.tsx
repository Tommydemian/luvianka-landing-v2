import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { HeroContent } from "./components/HeroContent";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const isVariant = slice.variation === "heroWithGradient";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative z-0"
    >
      <div className="hero-overlay h-[75vh] w-full max-md:landscape:h-screen">
        <PrismicNextImage
          loading="eager"
          priority={true}
          fetchPriority="high"
          field={slice.primary.full_screen_background_image}
          className="inherit-size object-cover"
        />
      </div>

      <HeroContent
        ctaLink={!isVariant ? slice.primary.hero_link : null}
        description={slice.primary.hero_description}
        heading={slice.primary.heading}
        isVariant={isVariant}
      />
    </section>
  );
};

export default Hero;
