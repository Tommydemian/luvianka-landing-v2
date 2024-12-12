import React from "react";
import { cn } from "@/app/lib/utils";

import { prmClient } from "@/app/lib/utils/client";
import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/components/ui/Container";

type Props = {};

export const Footer = async (props: Props) => {
  const settings = await prmClient.getSingle("settings");
  const { data } = settings;

  return (
    <footer className="py-4">
      <Container>
        <div aria-label="nuestras redes sociales"></div>
        <div aria-labelledby="title"></div>
        <div aria-labelledby="title"></div>
      </Container>
    </footer>
  );
};
