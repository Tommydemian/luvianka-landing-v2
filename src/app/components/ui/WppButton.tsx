"use client";

import React, { useEffect } from "react";
import { WhatsappIcon } from "../icons/social-media";
import { useMediaQuery } from "./hooks/useMediaQuery";
export const WppButton = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	const whatsappLink = isMobile
		? "whatsapp://send?phone=5491136406941&text=¡Hola!%20Tengo%20una%20consulta%20sobre%20jamones%20Luvianka."
		: "https://wa.me/5491136406941?text=¡Hola!%20Tengo%20una%20consulta%20sobre%20jamones%20Luvianka.";

	return (
		<a
			className="shadow-wspp-link fixed-bottom-dvh-5 z-50 inline-flex items-center justify-center gap-x-2 rounded-full bg-[#25D366] px-6 py-2"
			target="_blank"
			rel="noopener noreferrer"
			href={whatsappLink}
		>
			<WhatsappIcon />

			{/* <span className="font-src-sans text-base font-semibold text-white">
				Cotizá tu pedido
			</span> */}
		</a>
	);
};
