import React from "react";
import { CircleCheckBigIcon } from "lucide-react";
import { Content } from "@prismicio/client";
import { cn } from "@/app/lib/utils";
import { PrismicRichText } from "@prismicio/react";

import { CTA } from "@/app/components/ui/CTA";
import { KeyTextField } from "@prismicio/client";

type TextWithMediaTextContentProps = {
  decorativeText: Content.TextWithMediaSliceDefaultPrimary["decorative_text"];
  sectionTitle: Content.TextWithMediaSliceDefaultPrimary["section_title"];
  sectionDescription: Content.TextWithMediaSliceDefaultPrimary["section_description"];
  cta: Content.TextWithMediaSliceDefaultPrimary["button_link"];
  isVariant: boolean;
  tickLineOne:
    | Content.TextWithMediaSliceFullWidthImagePrimary["tick_line_1"]
    | undefined;
  tickLineTwo:
    | Content.TextWithMediaSliceFullWidthImagePrimary["tick_line_2"]
    | undefined;
};

export const TextWithMediaTextContent: React.FC<
  TextWithMediaTextContentProps
> = ({
  cta,
  decorativeText,
  sectionDescription,
  sectionTitle,
  isVariant,
  tickLineOne,
  tickLineTwo,
}) => {
  const tickLineObj = {
    0: tickLineOne,
    1: tickLineTwo,
  };

  return (
    <div
      className={cn(
        !isVariant
          ? "order-0 justify-self-center md:order-1"
          : "mobile-x-padding mx-auto max-w-[37.5rem] py-size-30 md:ml-auto md:mr-0",
        "flex flex-col items-start justify-between gap-[0.75em]",
      )}
      aria-labelledby="text-with-image-default-section-title"
    >
      <span className={cn("decorative-text", !isVariant && "text-root-accent")}>
        {decorativeText}
      </span>
      <h2
        id="text-with-image-default-section-title"
        className="home-section-title"
      >
        {sectionTitle}
      </h2>
      <PrismicRichText
        field={sectionDescription}
        components={{
          paragraph: ({ children }) => (
            <p className="max-w-[56ch] md:text-lg">{children}</p>
          ),
        }}
      />
      {tickLineOne && tickLineTwo ? (
        <ul className="flex flex-col gap-4 max-md:py-4">
          {Object.values(tickLineObj).map((el) => (
            <li key={el} className="flex gap-4 text-lg">
              <span>
                <CircleCheckBigIcon />
              </span>
              {el}
            </li>
          ))}
        </ul>
      ) : null}

      <CTA field={cta} variant={isVariant ? "secondary" : "primary"} />
    </div>
  );
};
