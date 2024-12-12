// import { createClient } from "@/prismicio";
// export default async function CalidadPage() {
//   const client = createClient();
//   const qualityPage = await client.getSingle("calidad");

//   return <h1>{qualityPage.data.titulo_de_prueba}</h1>;
// }

import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const quality = await client.getSingle("calidad");

  return {
    title: prismic.asText(quality.data.title),
    description: quality.data.meta_description,
    openGraph: {
      title: quality.data.meta_title ?? undefined,
      images: [{ url: quality.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const quality = await client.getSingle("calidad");

  return <SliceZone slices={quality.data.slices} components={components} />;
}
