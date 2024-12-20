import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { formatUrlPath } from "@/app/lib/utils/formatUrlPath";
import type { KeyTextField } from "@prismicio/client";
import { log } from "console";

type CategoriesSidebarProps = {
  categories: KeyTextField[];
  activeCategory: KeyTextField | undefined;
};

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  activeCategory,
}) => {
  const probPath = categories.map((c) => c)[5];
  const probPathSix = categories.map((c) => c)[6];
  useEffect(() => {
    console.log(probPath, "PROD");
    console.log(formatUrlPath(probPath || ""), "PROD");
    console.log(formatUrlPath(probPathSix || ""), "PROD");
  }, [categories]);

  console.log(activeCategory, console.log("ERE"));
  // console.log(formatUrlPath(probPath || ""));

  // Helper function to format URL path
  const formatUrlPath = (category: string) => {
    const formatted = category
      ?.toLocaleLowerCase()
      .split(" ")
      .filter(Boolean)
      .join("-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    console.log("Original:", category);
    console.log("Formatted:", formatted);
    return formatted;
  };

  return (
    <aside className="w-full max-w-xs space-y-2">
      <h2 className="mb-4 font-title text-xl font-semibold">Categorías</h2>
      <nav>
        <ul className="space-y-2">
          {/* {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/productos/${formatUrlPath(category || "")}`}
                className={cn(
                  "curso block w-full rounded-lg px-4 py-2 transition-colors duration-200",
                  category === activeCategory
                    ? "bg-red-primary text-white"
                    : "hover:bg-red-primary/5",
                )}
              >
                {category}
              </Link>
            </li>
          ))} */}
          {categories.map((category) => {
            console.log("Rendering category:", category);
            const path = formatUrlPath(category || "");
            console.log("Generated path:", path);

            return (
              <li key={category}>
                <Link
                  href={`/productos/${path}`}
                  className={cn(
                    "block w-full rounded-lg px-4 py-2 transition-colors duration-200",
                    category === activeCategory
                      ? "bg-red-primary text-white"
                      : "hover:bg-red-primary/5",
                  )}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
