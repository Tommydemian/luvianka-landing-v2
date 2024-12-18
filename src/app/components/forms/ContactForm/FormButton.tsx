import React from "react";
import { cn } from "@/app/lib/utils";
import { FormFields } from "../types";

type FormButtonProps = {
  isSubmitting: boolean;
  errors: Map<FormFields, string>;
};

export const FormButton: React.FC<FormButtonProps> = ({
  errors,
  isSubmitting,
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || errors.size > 0}
      className={cn(
        "relative w-full rounded-md bg-red-primary px-6 py-3 text-white",
        "transition-all duration-200",
        "hover:bg-red-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
      )}
    >
      {isSubmitting ? (
        <>
          <span className="opacity-0">ENVIAR</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        </>
      ) : (
        "ENVIAR"
      )}
    </button>
  );
};
