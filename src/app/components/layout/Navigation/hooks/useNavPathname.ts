import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useNavPathname = (
  isStateOPen: boolean,
  toggleState: () => void,
) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isStateOPen) {
      toggleState();
    }
  }, [pathname, toggleState]);

  return { pathname };
};
