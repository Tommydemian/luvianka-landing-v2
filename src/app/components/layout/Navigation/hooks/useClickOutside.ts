import { useRef, useEffect } from "react";

export const useClickOutside = (
  isDesktop: boolean,
  onClickOutside: () => void,
) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          onClickOutside();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDesktop]);

  return { dropdownRef };
};
