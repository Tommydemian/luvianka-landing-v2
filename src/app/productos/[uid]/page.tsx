import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";
import { CategoriesSidebar } from "./components/CategoriesSidebar";
import { ProductsGrid } from "./components/ProductsGrid";

// Utils
import { sortProducts } from "@/app/lib/utils/sortProducts";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const { uid } = await params;

	const [page, products] = await Promise.all([
		client.getByUID("product", uid, {
			fetchOptions: {
				next: { revalidate: 3600 },
			},
		}),
		client.getAllByType("product", {
			fetchOptions: {
				next: { revalidate: 3600 },
			},
		}),
	]);
	const sortedProducts = sortProducts(products);

	// Encontramos la categoría activa en el servidor
	const activeCategory = sortedProducts.find(
		(product) =>
			product.data.product_title?.toLowerCase().trim() ===
			uid.toLowerCase().replace(/-/g, " "),
	);

	if (!activeCategory) {
		notFound();
	}

	return (
		<section className="container--lg">
			<Container>
				<VSpace>
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
						{/* Pasamos solo lo necesario a los componentes client */}
						<CategoriesSidebar
							categories={sortedProducts}
							activeCategory={activeCategory.data.product_title}
						/>
						<ProductsGrid selectedCategory={activeCategory.data} />
					</div>
				</VSpace>
			</Container>
		</section>
	);
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const client = createClient();
//   const category = await client
//     .getByUID("product", params.uid)
//     .catch(() => null);

//   if (!category) {
//     return {
//       title: "Categoría no encontrada",
//       description: "La categoría solicitada no existe",
//     };
//   }

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

//   return {
//     title: `${title} | Tu Tienda`,
//     description,
//   };
// }

export async function generateStaticParams() {
	const client = createClient();
	const categories = await client.getAllByType("product");

	return categories.map((category) => {
		return { uid: category.uid };
	});
}
