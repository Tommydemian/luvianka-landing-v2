import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/app/lib/utils";
import React from "react";

type FacilityItem = {
  title: Content.ProductionFacilitiesSliceDefaultPrimaryFacilitiesItem["title"];
  description: Content.ProductionFacilitiesSliceDefaultPrimaryFacilitiesItem["description"];
  image: Content.ProductionFacilitiesSliceDefaultPrimaryFacilitiesItem["imagen"];
  index: number;
};

type FacilityArticleProps = FacilityItem;

export const FacilityArticle: React.FC<FacilityArticleProps> = ({
  description,
  image,
  index,
  title,
}) => (
  <article className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:gap-16 [&:not(:last-child)]:mb-10">
    <div
      className={cn(
        "flex flex-col",
        index % 2 === 0 ? "md:order-2" : "md:order-1",
      )}
    >
      {/* Add a small red decorative line above the title */}
      <div className="mb-4 mt-2 h-0.5 w-16 bg-red-primary" />
      <h3 className="mb-4 text-xl.5 font-bold text-red-primary">{title}</h3>
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => (
            <p className="text-base leading-relaxed md:text-lg">{children}</p>
          ),
        }}
      />
    </div>
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        index % 2 === 0 ? "md:order-1" : "md:order-2",
      )}
    >
      <PrismicNextImage
        field={image}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="aspect-[16/10] w-full object-cover"
      />
    </div>
  </article>
);
