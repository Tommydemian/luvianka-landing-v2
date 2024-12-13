import React from "react";
import { createClient } from "@/prismicio";

import { Container } from "@/components/ui/Container";
import { VSpace } from "../../ui/VSpace";
import { FooterBrand } from "./FooterBrand";
import { NavClientWrapper } from "./NavClientWrapper";
import { FooterContact } from "./FooterContact";
import { SubFooter } from "./SubFooter";

export const Footer = async () => {
  const client = createClient();
  const {
    data: {
      logo,
      red_deer_logo,
      contact_section,
      legal,
      navigation_link,
      tagline,
      social_media_link,
    },
  } = await client.getSingle("settings");

  return (
    <footer className="mt-[40rem] bg-surface-gray text-white">
      <Container>
        <VSpace>
          <div className="md:footer-grid grid grid-cols-1 gap-8">
            {/* Brand section */}
            <FooterBrand
              logo={logo}
              redDeerLogo={red_deer_logo}
              tagline={tagline}
            />

            {/* Navigation */}
            <NavClientWrapper navItems={navigation_link} />
            {/* Contact */}
            <FooterContact contactData={contact_section} />
          </div>
        </VSpace>
      </Container>
      {/* Social/Legal section */}
      <SubFooter socialMediaLinks={social_media_link} legalNote={legal} />
    </footer>
  );
};
