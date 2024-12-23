import { useEffect, useMemo, useState } from "react";
import { useBreakpoint } from "./useBreakpoint";

export const useClientPendingUI = (
  initialState: "desktop" | "mobile",
  DesktopSkeleton: React.JSX.Element,
  MobileSkeleton: React.JSX.Element,
) => {
  const isDesktop = useBreakpoint("(min-width: 768px)");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Derived state
  const pendingUI = useMemo(
    () => (initialState === "desktop" ? DesktopSkeleton : MobileSkeleton),
    [initialState, DesktopSkeleton, MobileSkeleton],
  );

  return {
    isDesktop,
    isMounted,
    pendingUI,
  };
};
