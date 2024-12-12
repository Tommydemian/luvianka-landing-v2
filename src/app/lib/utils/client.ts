import { createClient } from "@prismicio/client";
import { repositoryName } from "@/prismicio";

export const prmClient = createClient(repositoryName);
