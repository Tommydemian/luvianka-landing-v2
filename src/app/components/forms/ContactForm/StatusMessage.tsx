"use client";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

type StatusMessageProps = {
  formError: string | null;
  isSuccess: boolean;
};

export const StatusMessage: React.FC<StatusMessageProps> = ({
  formError,
  isSuccess,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible, "isVisible");
  }, [isVisible]);

  useEffect(() => {
    console.log(isSuccess, "isSuccess");
  }, [isSuccess]);

  useEffect(() => {
    if (formError || isSuccess) {
      setTimeout(() => setIsVisible(true), 100);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [formError, isSuccess]);

  if (!formError && !isSuccess) return null;

  return (
    <div
      className={cn(
        "mb-6 rounded-md p-4",
        "transform transition-all duration-300 ease-in-out",
        isVisible
          ? "pointer-events-auto relative translate-y-0 opacity-100"
          : "pointer-events-none absolute -translate-y-1 opacity-0",
        formError ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600",
      )}
    >
      {formError || "Mensaje enviado exitosamente"}
    </div>
  );
};
