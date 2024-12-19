import { ProductDocument } from "@/prismicio-types";
export function sortProducts(productArr: ProductDocument[]) {
  return productArr.sort((a, b) => {
    if (a.data.list_number != null && b.data.list_number != null) {
      return a.data.list_number - b.data.list_number;
    }
    return -1;
  });
}
