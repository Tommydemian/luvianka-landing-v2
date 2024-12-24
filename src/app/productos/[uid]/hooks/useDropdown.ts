import { useToggle } from "@/app/components/layout/Navigation/hooks/useToggle";
import { useClickOutside } from "@/app/components/layout/Navigation/hooks/useClickOutside";

export const useDropdown = () => {
  const {
    state: isOpen,
    setState: setIsOpen,
    toggleState: toggleDropdown,
    isDesktop,
  } = useToggle(false, "closeWhenMobile");

  const { dropdownRef } = useClickOutside(isDesktop, () => setIsOpen(false));

  return { dropdownRef, isOpen, toggleDropdown };
};
