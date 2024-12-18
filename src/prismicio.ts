import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "home",
    path: "/",
  },
  {
    type: "productos",
    path: "/productos/:uid",
  },
  {
    type: "empresa",
    path: "/empresa",
  },
  {
    type: "calidad",
    path: "/calidad",
  },
  {
    type: "contactanos",
    path: "/contactanos",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint || repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};

/**
 * Resolves a Prismic document to a URL.
 *
 * @param doc - The Prismic document.
 */
export const linkResolver = (doc: prismic.PrismicDocument): string => {
  switch (doc.type) {
    case "home":
      return "/";
    case "productos":
      return `/productos/${doc.uid}`;
    case "empresa":
      return "/empresa";
    case "calidad":
      return "/calidad";
    case "contactanos":
      return "/contactanos";
    default:
      return "/";
  }
};
