import { Metadata } from "next";
import { Suspense } from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

// Slices
import Hero from "@/slices/Hero";
import CompanyOverview from "@/slices/CompanyOverview";
import CompanyValues from "@/slices/CompanyValues";
import ProductionFacilities from "@/slices/ProductionFacilities";
import BrandShowcase from "@/slices/BrandShowcase";

// Skeletons
import { HeroSkeleton } from "@/slices/Hero/components/HeroSkeleton";
import { CompanyOverviewSkeleton } from "@/slices/CompanyOverview/components/CompanyOverview";
import { CompanyValuesSkeleton } from "@/slices/CompanyValues/components/CompanyValuesSkeleton";
import { ProductionFacilitiesSkeleton } from "@/slices/ProductionFacilities/components/ProductionFacilitiesSkeleton";
import { BrandShowcaseSkeleton } from "@/slices/BrandShowcase/components/BrandShowcaseSkeleton";

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
            <Suspense fallback={<CompanyOverviewSkeleton />}>
              <CompanyOverview
                redDeerLogo={settings.data.red_deer_logo}
                luviankaLogo={settings.data.logo}
                {...props}
              />
            </Suspense>
          ),
          company_values: (props) => (
            <Suspense fallback={<CompanyValuesSkeleton />}>
              <CompanyValues {...props} />
            </Suspense>
          ),
          production_facilities: (props) => (
            <Suspense fallback={<ProductionFacilitiesSkeleton />}>
              <ProductionFacilities {...props} />
            </Suspense>
          ),
          brand_showcase: (props) => (
            <Suspense fallback={<BrandShowcaseSkeleton />}>
              <BrandShowcase {...props} />
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
