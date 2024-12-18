import { FormEvent, useState, useEffect } from "react";
import { ServiceType } from "@/app/components/forms/types";

export const useContactForm = (
  selectedService: ServiceType,
  formRef: React.RefObject<HTMLFormElement>,
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("contactType", selectedService.contactType);

      if (file) {
        formData.append("attachment", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);

      if (formRef.current) {
        formRef.current.reset();
      }
      setFile(null);
      return { success: true };
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Error al enviar el formulario",
      );
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSuccess,
    formError,
    file,
    setFile,
    handleSubmit,
  };
};
