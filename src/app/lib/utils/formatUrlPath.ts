export const formatUrlPath = (category: string) => {
  return category
    ?.toLowerCase()
    .split(" ")
    .filter(Boolean)
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
