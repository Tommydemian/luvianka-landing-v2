import { LinkField } from "@prismicio/client";

export const isActiveLink = (link: LinkField, pathname: string): boolean => {
  const currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const linkPath = `/${link.text?.toLocaleLowerCase()}`;
  return currentPath === linkPath || currentPath.startsWith(linkPath);
};
