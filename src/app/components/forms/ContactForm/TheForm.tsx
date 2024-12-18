import React, { useEffect, useState } from "react";
import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { FileInput } from "./FileInput";
import { FormButton } from "./FormButton";
import { StatusMessage } from "./StatusMessage";
// lib/utils
import { cn } from "@/app/lib/utils";
// Hooks
import { useFormValidations } from "../lib/hooks/useFormValidations";
import { useContactForm } from "@/app/lib/hooks/useContactForm";
// Types
import type { ServiceType } from "../types";
import { FORM_FIELDS } from "../types";

type TheFormProps = {
  selectedService: ServiceType;
  formRef: React.RefObject<HTMLFormElement>;
};

export const TheForm: React.FC<TheFormProps> = ({
  selectedService,
  formRef,
}) => {
  const { errors, handleBlur, handleFocus, cleanErrors } = useFormValidations();

  const { file, handleSubmit, isSubmitting, setFile, formError, isSuccess } =
    useContactForm(selectedService, formRef);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    cleanErrors();
  }, [selectedService]);

  return (
    <>
      <StatusMessage formError={formError} isSuccess={isSuccess} />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cn(
          "space-y-4",
          isSubmitting && "pointer-events-none opacity-70",
        )}
      >
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            errors={errors}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            inputName={FORM_FIELDS.NAME}
            placeholder="Nombre y apellido *"
          />
          <TextInput
            errors={errors}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            inputName={FORM_FIELDS.DIRECTION}
            placeholder="Dirección *"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            errors={errors}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            inputName={FORM_FIELDS.EMAIL}
            placeholder="Email *"
            type="email"
          />
          <TextInput
            errors={errors}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            inputName={FORM_FIELDS.PHONE}
            placeholder="Telefono *"
            type="tel"
          />
        </div>
        <TextInput
          errors={errors}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          inputName={FORM_FIELDS.CITY}
          placeholder="Ciudad *"
        />
        <TextInput
          errors={errors}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          inputName={FORM_FIELDS.PROVINCIA}
          placeholder="Provincia *"
        />

        <TextArea
          errors={errors}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          inputName={FORM_FIELDS.MESSAGE}
          placeholder="Mensaje"
          maxLength={400}
        />

        <FileInput file={file} onChange={handleFileChange} />
        <FormButton errors={errors} isSubmitting={isSubmitting} />
      </form>
    </>
  );
};
