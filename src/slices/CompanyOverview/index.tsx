import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";
import { Span } from "next/dist/trace";

/**
 * Props for `CompanyOverview`.
 */
export type CompanyOverviewProps =
  SliceComponentProps<Content.CompanyOverviewSlice> & {
    luviankaLogo: Content.SettingsDocumentData["logo"];
    redDeerLogo: Content.SettingsDocumentData["red_deer_logo"];
  };

/**
 * Component for "CompanyOverview" Slices.
 */
const CompanyOverview = ({
  slice,
  luviankaLogo,
  redDeerLogo,
}: CompanyOverviewProps): JSX.Element => {
  const sectionTitle = slice.primary.company_overview;
  const targetWord = sectionTitle?.split(" ")[1];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <VSpace empresaPage>
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-10">
            <div className="flex flex-wrap items-baseline justify-between md:justify-start md:gap-x-8">
              <PrismicNextImage
                priority={false}
                loading="lazy"
                className="h-[3.75rem] w-[7.188rem]"
                field={luviankaLogo}
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
            <div>
              <h2 className="empresa-section-title mb-4">
                {sectionTitle?.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={word === targetWord ? "text-red-primary" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>
              <PrismicRichText
                field={slice.primary.company_overview_description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="max-w-[58xh]">{children}</p>
                  ),
                }}
              />
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};

export default CompanyOverview;
