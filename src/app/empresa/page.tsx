import { createClient } from "@/prismicio";

export default async function EmpresaPage() {
  const client = createClient();
  const companyPage = await client.getSingle("empresa");

  return <div>{companyPage.data.meta_title}</div>;
}
