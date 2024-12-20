import React from "react";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";
import { ClientWrapper } from "./components/ClientWrapper";

// Utils
import { sortProducts } from "@/app/lib/utils/sortProducts";

export type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const { uid } = await params;

  const page = await client.getByUID("productos", uid).catch(() => notFound());

  const products = await client.getAllByType("product");
  const sortedProducts = sortProducts(products);

  const categories = sortedProducts.map((el) => el.data.product_title);

  // var selectedCategory = categories.find((c) => c.uid === params.uid);
  // var products = selectedCategory?.data.category_products;

  // if (!selectedCategory) {
  //   notFound();
  // }

  return (
    <section className="container--lg">
      <Container>
        <VSpace>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
            <ClientWrapper products={sortedProducts} />
          </div>
        </VSpace>
      </Container>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const { uid } = await params;

  const product = await client.getByUID("product", uid).catch(() => null);

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto solicitado no existe",
    };
  }

  //   const title =
  //     category.data.product_category_title || "Categoría de Productos";
  //   let description = "Explora nuestra selección de productos";

  //   if (
  //     category.data.product_category_description &&
  //     category.data.product_category_description.length > 0
  //   ) {
  //     const firstParagraph = category.data.product_category_description[0];
  //     if ("text" in firstParagraph!) {
  //       description = firstParagraph.text;
  //     }
  //   }

  //   if (!description) {
  //     description = `Explora nuestra selección de productos en la categoría ${title}`;
  //   }

  return {
    title: "Tu Tienda",
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const products = await client.getAllByType("product");

  return products.map((product) => {
    return { uid: product.uid };
  });
}
