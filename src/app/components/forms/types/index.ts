import { ReactElement } from "react";

export type ServiceType = {
  title: string;
  subtitle: string;
  image: ReactElement;
  formTitle: string;
  contactType: "COMERCIALIZA" | "ATENCION" | "TRABAJA";
};

export const FORM_FIELDS = {
  NAME: "name",
  EMAIL: "email",
  PHONE: "phone",
  DIRECTION: "direction",
  CITY: "city",
  PROVINCIA: "provincia",
  MESSAGE: "message",
} as const;

export type FormFields = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];
