import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Medal, AwardIcon, Award, Cog, Recycle } from "lucide-react";

import { PrismicRichText } from "@prismicio/react";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

/**
 * Props for `CompanyValues`.
 */
export type CompanyValuesProps =
  SliceComponentProps<Content.CompanyValuesSlice>;

/**
 * Component for "CompanyValues" Slices.
 */

function setIcons(index: number) {
  if (index === 0) return <Medal />;
  if (index === 1) return <Cog />;
  if (index === 2) return <Recycle />;
}

const CompanyValues = ({ slice }: CompanyValuesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-surface-beige text-center"
    >
      <Container>
        <VSpace empresaPage>
          <h2 className="home-section-title mx-auto pb-10 leading-[1]">
            {slice.primary.section_title}
          </h2>
          <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-6 py-6 md:grid-cols-3">
            {slice.primary.valuescard?.map((item, index) => (
              <article
                key={item.card_title}
                className="our-values-card-padding flex h-full flex-col items-center justify-start gap-y-3 rounded-lg bg-white shadow-lg"
              >
                <div>{setIcons(index)}</div>
                <h3 className="text-lg font-bold capitalize text-red-primary">
                  {item.card_title}
                </h3>
                <PrismicRichText field={item.card_description} />
              </article>
            ))}
          </div>
        </VSpace>
      </Container>
    </section>
  );
};

export default CompanyValues;
