import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

import { FacilityArticle } from "./components/FacilityArticle";

/**
 * Props for `ProductionFacilities`.
 */
export type ProductionFacilitiesProps =
  SliceComponentProps<Content.ProductionFacilitiesSlice>;

/**
 * Component for "ProductionFacilities" Slices.
 */
const ProductionFacilities = ({
  slice,
}: ProductionFacilitiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <VSpace empresaPage>
          <h2 className="home-section-title-base mx-auto w-full pb-10 text-center md:whitespace-nowrap">
            {slice.primary.section_title_start}{" "}
            <span className="text-red-primary">
              {slice.primary.highlighted_word}
            </span>{" "}
            {slice.primary.section_title_end}
          </h2>

          <div className="md:py-6">
            {slice.primary.facilities.map((item, index) => {
              const { description, imagen, title } = item;
              return (
                <FacilityArticle
                  title={title}
                  description={description}
                  image={imagen}
                  index={index}
                  key={title}
                />
              );
            })}
          </div>
        </VSpace>
      </Container>
    </section>
  );
};

export default ProductionFacilities;
