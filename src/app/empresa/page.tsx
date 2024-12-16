import { Suspense } from "react";
import { HeroSkeleton } from "@/slices/Hero/components/HeroSkeleton";
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import Hero from "@/slices/Hero";
import CompanyOverview from "@/slices/CompanyOverview";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("empresa");
  const settings = await client.getSingle("settings");

  return (
    <>
      <SliceZone
        slices={page.data.slices}
        components={{
          hero: (props) => (
            <Suspense fallback={<HeroSkeleton />}>
              <Hero {...props} />
            </Suspense>
          ),
          company_overview: (props) => (
            <Suspense fallback={<HeroSkeleton />}>
              <CompanyOverview
                redDeerLogo={settings.data.red_deer_logo}
                luviankaLogo={settings.data.logo}
                {...props}
              />
            </Suspense>
          ),
        }}
      />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("empresa");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
