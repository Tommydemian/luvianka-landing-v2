import { useEffect } from "react";

export const usePreventScroll = (shouldPrevent: boolean) => {
  useEffect(() => {
    if (shouldPrevent) {
      document.body.classList.add("prevent-scroll");
    } else {
      document.body.classList.remove("prevent-scroll");
    }
  }, [shouldPrevent]);
};
