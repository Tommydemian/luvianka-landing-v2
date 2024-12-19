import React from "react";

import { Container } from "@/components/ui/Container";
import { VSpace } from "@/components/ui/VSpace";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/social-media";

import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import type { SettingsDocumentData } from "@/prismicio-types";

type SubFooterProps = {
  socialMediaLinks: SettingsDocumentData["social_media_link"];
  legalNote: SettingsDocumentData["legal"];
};

export const SubFooter: React.FC<SubFooterProps> = ({
  legalNote,
  socialMediaLinks,
}) => {
  function setIcon(index: number) {
    if (index === 0) return <FacebookIcon />;
    if (index === 1) return <InstagramIcon />;
    if (index === 2) return <XIcon />;
    if (index === 3) return <LinkedinIcon />;
  }

  return (
    <section className="bg-black" aria-label="Social media and Legal">
      <Container>
        <VSpace>
          <div className="md:flex-base-between">
            <div className="flex-base mb-8 gap-4 md:mb-0">
              {socialMediaLinks.map((link, index) => {
                return (
                  <PrismicNextLink
                    className="inline w-fit"
                    key={link.key}
                    field={link}
                  >
                    {setIcon(index)}
                  </PrismicNextLink>
                );
              })}
            </div>
            <PrismicRichText
              field={legalNote}
              components={{
                paragraph: ({ children }) => {
                  const text = children
                    .map((el) => el.props.children[0].props.children)
                    .toString();
                  const currentYear = new Date().getFullYear();
                  const formattedText = text.replace(
                    "Luvianka",
                    `Luvianka ${currentYear}`,
                  );

                  return (
                    <p className="text-center text-white">{formattedText}</p>
                  );
                },
              }}
            />
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
