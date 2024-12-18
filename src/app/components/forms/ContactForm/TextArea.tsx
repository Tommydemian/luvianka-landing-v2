import { FormFields } from "../types";
import { cn } from "@/app/lib/utils";

type TextAreaProps = {
  errors: Map<FormFields, string>;
  inputName: FormFields;
  placeholder: string;
  maxLength?: number;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};

export const TextArea: React.FC<TextAreaProps> = ({
  errors,
  inputName,
  placeholder,
  maxLength,
  handleBlur,
  handleFocus,
}) => {
  return (
    <div className="min-h-[140px]">
      <textarea
        placeholder={placeholder}
        maxLength={maxLength}
        name={inputName}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={cn(
          "h-32 w-full rounded-md border px-4 py-2 transition-colors",
          "focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary",
          errors.get(inputName) ? "border-red-500" : "border-gray-300",
        )}
      />
      {errors.get(inputName) && (
        <span className="text-sm mt-1 block text-red-500">
          {errors.get(inputName)}
        </span>
      )}
    </div>
  );
};
