import React from "react";
import { cn } from "@/app/lib/utils";
import { FormFields } from "../types";

type Props = {
  errors: Map<FormFields, string>;
  inputName: FormFields;
  type?: string;
  placeholder: string;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const TextInput: React.FC<Props> = ({
  errors,
  inputName,
  placeholder,
  type = "text",
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="min-h-[3.375rem]">
      <input
        type={type}
        placeholder={placeholder}
        required
        className={cn(
          "w-full rounded-md border px-4 py-2",
          errors.get(inputName) ? "border-red-500" : "border-gray-300",
        )}
        name={inputName}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {errors.get(inputName) && (
        <span className="text-sm mt-1 block text-red-500">
          {errors.get(inputName)}
        </span>
      )}
    </div>
  );
};
