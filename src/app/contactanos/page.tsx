import { Metadata } from "next";
import { Suspense } from "react";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

import { ContactForm } from "../components/forms/ContactForm";
import { HeroSkeleton } from "@/slices/Hero/components/HeroSkeleton";

// Slices
import Hero from "@/slices/Hero";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

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
  const contact = await client.getSingle("contactanos");

  return (
    <>
      <SliceZone
        slices={contact.data.slices}
        components={{
          hero: (props) => (
            <Suspense fallback={<HeroSkeleton />}>
              <Hero {...props} />
            </Suspense>
          ),
        }}
      />
      <PrismicRichText
        field={contact.data.page_description}
        components={{
          paragraph: ({ children }) => (
            <p className="text-responsive-base mobile-x-padding mx-auto py-size-30 text-center text-gray-500">
              {children}
            </p>
          ),
        }}
      />
      <ContactForm />
    </>
  );
}
