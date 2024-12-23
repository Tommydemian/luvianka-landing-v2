// import { useState, useEffect, useRef, useCallback } from "react";
// import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

// export const useDropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const isDesktop = useBreakpoint("(min-width: 768px)");
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!isDesktop) {
//       setIsDropdownOpen(false);
//     }
//   }, [isDesktop]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     if (!isDesktop) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isDesktop]);

//   const handleToggleDropdown = useCallback(() => {
//     setIsDropdownOpen((prev) => !prev);
//   }, []);

//   return { dropdownRef, isDropdownOpen, handleToggleDropdown, isDesktop };
// };
import { useState, useEffect, useCallback, useRef } from "react";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useBreakpoint("(min-width: 768px)");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDesktop]);

  return { dropdownRef, isOpen, toggleDropdown, isDesktop };
};
