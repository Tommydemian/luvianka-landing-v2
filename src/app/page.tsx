import { Metadata } from "next";
import { Suspense } from "react";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

import { HeroSkeleton } from "@/slices/Hero/components/HeroSkeleton";
import { TextWithMediaSkeleton } from "@/slices/TextWithMedia/components/TextWithMediaSkeleton";

import Hero from "@/slices/Hero";
import TextWithMedia from "@/slices/TextWithMedia";
import ProductShowcase from "@/slices/ProductShowcase";
// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  const products = await client.getAllByType("product");

  console.log(products, "products");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  const products = await client.getAllByType("product");

  return (
    <SliceZone
      slices={home.data.slices}
      components={{
        hero: (props) => (
          <Suspense fallback={<HeroSkeleton />}>
            <Hero {...props} />
          </Suspense>
        ),
        product_showcase: (props) => (
          <Suspense fallback={<HeroSkeleton />}>
            <ProductShowcase products={products} {...props} />
          </Suspense>
        ),

        text_with_media: (props) => (
          <Suspense
            fallback={
              <TextWithMediaSkeleton
                isVariant={props.slice.variation === "fullWidthImage"}
              />
            }
          >
            <TextWithMedia {...props} />
          </Suspense>
        ),
      }}
    />
  );
}
