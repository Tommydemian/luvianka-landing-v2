import { useState, useEffect, useCallback } from "react";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isDesktop = useBreakpoint("(min-width: 768px)");

  const handleDropdownOpen = useCallback(() => {
    if (isDesktop) {
      setIsDropdownOpen(true);
    }
  }, [isDesktop]);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    if (!isDesktop) {
      setIsDropdownOpen((prev) => !prev);
    }
  }, [isDesktop]);

  useEffect(() => {
    handleDropdownClose();
  }, [isDesktop, handleDropdownClose]);

  return {
    isDesktop,
    isDropdownOpen,
    handleDropdownClose,
    handleDropdownOpen,
    toggleDropdown,
  };
};
