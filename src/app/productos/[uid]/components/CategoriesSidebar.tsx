import React from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { formatUrlPath } from "@/app/lib/utils/formatUrlPath";
import type { KeyTextField } from "@prismicio/client";

type CategoriesSidebarProps = {
  categories: KeyTextField[];
  activeCategory: KeyTextField | undefined;
};

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  activeCategory,
}) => {
  return (
    <aside className="w-full max-w-xs space-y-2">
      <h2 className="mb-4 font-title text-xl font-semibold">Categorías</h2>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => {
            const path = formatUrlPath(category || "");

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
