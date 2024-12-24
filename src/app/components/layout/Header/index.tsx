import React from "react";
import { createClient } from "@/prismicio";
import { cn } from "@/app/lib/utils";

import { PrismicNextImage } from "@prismicio/next";

import { Container } from "@/components/ui/Container";
import { VSpace } from "../../ui/VSpace";
import { CTA } from "../../ui/CTA";
import { NavigationClientWrapper } from "../Navigation/NavigationClientWrapper";
import Link from "next/link";

import { ProductsNavigationContextProvider } from "@/app/contexts/ProductsNavigationContext";
import { sortProducts } from "@/app/lib/utils/sortProducts";

export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const products = await client.getAllByType("product");
  const sortedProducts = sortProducts(products);

  return (
    <header
      className={cn(
        "bg-white",
        "flex items-center", // layout
        // Typography
        "text-responsive-base",

        "border-b border-gray-200", // bottom border
        "h-nav-heigth",
        "relative z-10",
      )}
    >
      <Container>
        <VSpace>
          <div className="flex-base-between">
            {/* Logo */}
            <div className="max-w-[8rem]">
              <Link href="/">
                <PrismicNextImage
                  loading="eager"
                  priority={true}
                  fallback="blur"
                  field={settings.data.logo}
                />
              </Link>
            </div>

            <ProductsNavigationContextProvider
              initialProducts={sortedProducts}
              buttonLink={settings.data.buttonlink}
            >
              <NavigationClientWrapper
                navItems={settings.data.navigation_link}
              />
            </ProductsNavigationContextProvider>

            {/* Contact Button */}
            {settings.data.buttonlink.map((link) => (
              <CTA key={link.key} field={link} className="show-md-flex" />
            ))}
          </div>
        </VSpace>
      </Container>
    </header>
  );
};
