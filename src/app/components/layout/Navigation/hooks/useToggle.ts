import { useCallback, useState, useEffect } from "react";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";
import { useClickOutside } from "./useClickOutside";

export const useToggle = (
  initialState = false,
  closeResolution?: "closeWhenDesktop" | "closeWhenMobile",
) => {
  const [state, setState] = useState(initialState);
  const isDesktop = useBreakpoint("(min-width: 768px)");

  const toggleState = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  const handleStateOPen = useCallback(() => {
    setState(true);
  }, []);

  const handleStateClose = useCallback(() => {
    setState(false);
  }, []);

  useEffect(() => {
    const shouldClose =
      closeResolution === "closeWhenDesktop" ? isDesktop : !isDesktop;
    if (shouldClose) {
      setState(false);
    }
  }, [isDesktop]);

  return {
    state,
    setState,
    toggleState,
    isDesktop,
    handleStateOPen,
    handleStateClose,
  };
};
