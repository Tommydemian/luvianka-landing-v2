import React from "react";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import type { SettingsDocumentData } from "@/prismicio-types";

type FooterBrandProps = {
  logo: SettingsDocumentData["logo"];
  redDeerLogo: SettingsDocumentData["red_deer_logo"];
  tagline: SettingsDocumentData["tagline"];
};
export const FooterBrand: React.FC<FooterBrandProps> = ({
  logo,
  redDeerLogo,
  tagline,
}) => {
  return (
    <aside className="space-y-6 md:-translate-y-8">
      <div className="flex flex-wrap items-baseline justify-between md:justify-start md:gap-x-8">
        <PrismicNextImage
          priority={false}
          loading="lazy"
          className="h-[3.75rem] w-[7.188rem]"
          field={logo}
          fallback="blur"
        />
        <PrismicNextImage
          priority={false}
          loading="lazy"
          className="w-[7.188rem]"
          field={redDeerLogo}
          fallback="blur"
        />
      </div>
      <PrismicRichText field={tagline} />
    </aside>
  );
};
