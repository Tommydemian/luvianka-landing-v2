import React, { useState } from "react";
import { validate } from "../utils/validate";
import { FormFields } from "../../types";

export const useFormValidations = () => {
  const [errors, setErrors] = useState<Map<FormFields, string>>(new Map());

  const cleanErrors = () => {
    setErrors(new Map());
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    if (!e.target) return;
    const { name, value } = e.target;
    const error = validate(name as FormFields, value);
    if (error) {
      setErrors((prev) => {
        const newMap = new Map(prev);
        newMap.set(name as FormFields, error);
        return newMap;
      });
    }
  };

  const handleFocus = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setErrors((prev) => {
      const newMap = new Map(prev);
      newMap.delete(name as FormFields);
      return newMap;
    });
  };

  return { errors, handleBlur, handleFocus, cleanErrors };
};
