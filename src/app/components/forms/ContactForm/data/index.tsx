import { ServiceType } from "../../types";
import {
  ProductDistributionIcon,
  CustomerServiceIcon,
  RecruitmentIcon,
} from "../icons";

export const services: ServiceType[] = [
  {
    title: "Comercializá",
    subtitle: "Nuestros Productos",
    image: <ProductDistributionIcon />,
    formTitle: "A la brevedad un vendedor se contactará con usted",
    contactType: "COMERCIALIZA",
  },
  {
    title: "Atención",
    subtitle: "Al Cliente",
    image: <CustomerServiceIcon />,
    formTitle: "Déjenos sus datos y nos comunicaremos a la brevedad",
    contactType: "ATENCION",
  },
  {
    title: "Trabaja",
    subtitle: "Con Nosotros",
    image: <RecruitmentIcon />,
    formTitle: "Sé parte de nuestro equipo",
    contactType: "TRABAJA",
  },
];
