import { useState, useEffect } from "react";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isDesktop = useBreakpoint("(min-width: 768px)");

  const handleDropdownOpen = () => {
    if (isDesktop) {
      setIsDropdownOpen(true);
    }
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (!isDesktop) {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    handleDropdownClose();
  }, [isDesktop]);

  return {
    isDesktop,
    isDropdownOpen,
    handleDropdownClose,
    handleDropdownOpen,
    toggleDropdown,
  };
};
