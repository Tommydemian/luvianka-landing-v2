import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { CTA } from "@/components/ui/CTA";

import { cn } from "@/app/lib/utils";

type HeroContentProps = {
  heading: Content.HeroSliceDefaultPrimary["heading"];
  description: Content.HeroSliceDefaultPrimary["hero_description"];
  ctaLink: Content.HeroSliceDefaultPrimary["hero_link"] | null;
  isVariant: boolean;
};

export const HeroContent: React.FC<HeroContentProps> = ({
  description,
  heading,
  ctaLink,
  isVariant,
}) => {
  return (
    <div
      className={cn(
        "center-absolute absolute top-0 flex w-full flex-col items-center justify-center space-y-4 max-md:px-[1.75rem]",
        isVariant && "hero-content-gradient z-0 w-10/12 items-start p-[2em]",
      )}
      aria-label="Hero content wrapper"
    >
      <h1 className="max-w-[17ch] text-center font-title text-2xl font-semibold uppercase text-white md:max-w-none md:text-4xl">
        {heading}
      </h1>

      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => (
            <p
              className={cn(
                "max-w-[30ch] text-center text-lg leading-[1.414rem] text-white md:max-w-[55ch] md:text-xl md:leading-[1.7rem]",
                isVariant && "text-left",
              )}
            >
              {children}
            </p>
          ),
        }}
      />

      {/* {ctaLink?.map((link) => <CTA key={link.key} field={link} />)} */}
    </div>
  );
};
