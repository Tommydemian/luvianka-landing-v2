import React from "react";
import { WhatsappIcon } from "../icons/social-media";
export const WppButton = () => {
  return (
    <a
      className="shadow-wspp-link fixed-bottom-dvh-5 z-50 inline-flex items-center justify-center gap-x-2 rounded-full bg-[#25D366] px-6 py-2"
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/5491149796361?text=¡Hola!%20Tengo%20una%20consulta%20sobre%20jamones%20Luvianka."
    >
      <WhatsappIcon />

      <span className="font-src-sans text-base font-semibold text-white">
        Cotizá tu pedido
      </span>
    </a>
  );
};
