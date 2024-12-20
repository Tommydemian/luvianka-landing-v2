import { Metadata } from "next";
import { Suspense } from "react";

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";

// Slices
import Hero from "@/slices/Hero";
import QualityStandarts from "@/slices/QualityStandarts";

// Skeletons
import { HeroSkeleton } from "@/slices/Hero/components/HeroSkeleton";
import ProductionAndQuality from "@/slices/ProductionAndQuality";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const quality = await client.getSingle("calidad");

  return {
    // title: prismic.asText(quality.data.title),
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

  return (
    <SliceZone
      slices={quality.data.slices}
      components={{
        hero: (props) => (
          <Suspense fallback={<HeroSkeleton />}>
            <Hero {...props} />
          </Suspense>
        ),
        quality_standarts: (props) => <QualityStandarts {...props} />,
        production_and_quality: (props) => <ProductionAndQuality {...props} />,
      }}
    />
  );
}
