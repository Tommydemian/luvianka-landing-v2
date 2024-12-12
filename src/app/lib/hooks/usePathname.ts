import { useState } from "react";
import { usePathname } from "next/navigation";

export const useActiveLink = (link: string) => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  if (pathname === link) {
    setIsActive(true);
  }

  return { isActive, pathname };
};
