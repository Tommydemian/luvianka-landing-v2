import React from "react";
import { WhatsappIcon } from "../icons/social-media";
export const WppButton = () => {
  return (
    <a
      className="shadow-wspp-link fixed-bottom-dvh-5 z-50 inline-flex items-center justify-center gap-x-2 rounded-full bg-[#25D366] px-6 py-2"
      data-action="open"
      data-phone="5491149796361"
      data-message="¡Hola! Tengo una consulta sobre jamones Luvianka."
      role="button"
      target="_blank"
      href="https://web.whatsapp.com/send?phone=1149796361&amp;text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20una%20terapia%20natural."
    >
      <WhatsappIcon />

      <span className="font-src-sans text-lg font-semibold text-white">
        Cotizá tu pedido
      </span>
    </a>
  );
};
