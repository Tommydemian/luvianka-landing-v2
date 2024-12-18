import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";

import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("productos", params.uid)
    .catch(() => notFound());

  const products = await client.getAllByType("product");

  // var selectedCategory = categories.find((c) => c.uid === params.uid);
  // var products = selectedCategory?.data.category_products;

  // if (!selectedCategory) {
  //   notFound();
  // }

  return (
    <section className="container--lg">
      <h1 className="choose-category-heading">Selecciona categoria</h1>
      <section className="pp-layout">
        {/* <ServerDropdown categories={categories} activeUid={params.uid} />
        <ProductCardGrid products={products} /> */}
        <h1>{products.map((el) => el.data.product_title)}</h1>
      </section>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const product = await client
    .getByUID("product", params.uid)
    .catch(() => null);

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
