import React from "react";
import { PrismicNextLink } from "@prismicio/next";

import type { SettingsDocumentData } from "@/prismicio-types";

type FooterContactProps = {
  contactData: SettingsDocumentData["contact_section"];
};

export const FooterContact: React.FC<FooterContactProps> = ({
  contactData,
}) => {
  return (
    <address aria-labelledby="contact-section-title">
      {contactData.map((el, index) => (
        <div key={el.section_title}>
          <h3
            className="mb-4 text-red-secondary"
            id={`contact-section-title-${index}`}
          >
            {el.section_title}
          </h3>
          <ul className="space-y-4">
            <li>{el.phone_number_1}</li>
            <li>{el.phone_number_2}</li>
            <li>{el.phone_number_3}</li>
          </ul>
          {el.email.map((link) => (
            <PrismicNextLink
              className="footer-email-link mt-4 block"
              key={link.key}
              field={link}
            />
          ))}
        </div>
      ))}
    </address>
  );
};
