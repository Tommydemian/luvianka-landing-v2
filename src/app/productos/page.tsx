import { createClient } from "@/prismicio";

export default async function ProductosPage() {
  const client = createClient();
  const productsPage = await client.getSingle("productos");

  return <div>{productsPage.data.meta_title}</div>;
}
