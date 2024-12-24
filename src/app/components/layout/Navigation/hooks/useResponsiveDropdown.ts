import { useCallback } from "react";
import { useToggle } from "./useToggle";

export const useResponsiveDropdown = () => {
  const {
    state: isOpen,
    setState: setIsOpen,
    toggleState,
    isDesktop,
  } = useToggle(false, "closeWhenDesktop");

  const handleOpen = useCallback(() => {
    if (isDesktop) {
      setIsOpen(true);
    }
  }, [isDesktop, setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleToggle = useCallback(() => {
    if (!isDesktop) {
      toggleState();
    }
  }, [isDesktop, toggleState]);

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
    isDesktop,
  };
};
