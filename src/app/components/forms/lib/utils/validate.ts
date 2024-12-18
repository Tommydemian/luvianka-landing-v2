import { FormFields, FORM_FIELDS } from "../../types";
export const validate = (name: FormFields, value: string) => {
  switch (name) {
    case FORM_FIELDS.NAME:
      if (!value.trim()) return "Campo requerido";
      if (value.length < 3) return "El campo requiere al menos 3 caracteres";
      if (value.length > 50)
        return "El campo excede el límite de 50 caracteres";
      return "";

    case FORM_FIELDS.EMAIL:
      if (!value.trim()) return "Campo requerido";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Email inválido";
      if (value.length > 50)
        return "El campo excede el límite de 50 caracteres";
      return "";

    case FORM_FIELDS.PHONE:
      if (!value.trim()) return "Campo requerido";
      const phoneRegex = /^[0-9\s-+()]*$/;
      if (!phoneRegex.test(value)) return "Teléfono inválido";
      if (value.replace(/\D/g, "").length < 8)
        return "El campo requiere al menos 8 números";
      if (value.length > 20)
        return "El campo excede el límite de 20 caracteres";
      return "";

    case FORM_FIELDS.DIRECTION:
      if (!value.trim()) return "Campo requerido";
      if (value.length < 5) return "El campo requiere al menos 5 caracteres";
      if (value.length > 100)
        return "El campo excede el límite de 100 caracteres";
      return "";

    case FORM_FIELDS.CITY:
      if (!value.trim()) return "Campo requerido";
      if (value.length < 3) return "El campo requiere al menos 3 caracteres";
      if (value.length > 50)
        return "El campo excede el límite de 50 caracteres";
      return "";

    case FORM_FIELDS.PROVINCIA:
      if (!value.trim()) return "Campo requerido";
      if (value.length < 3) return "El campo requiere al menos 3 caracteres";
      if (value.length > 50)
        return "El campo excede el límite de 50 caracteres";
      return "";

    case FORM_FIELDS.MESSAGE:
      if (value.trim() && value.length < 10)
        return "El campo requiere al menos 10 caracteres";
      if (value.length > 200)
        return "El campo excede el límite de 200 caracteres";
      return "";

    default:
      return "";
  }
};
