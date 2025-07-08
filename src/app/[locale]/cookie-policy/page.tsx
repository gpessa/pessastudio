import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "cookie-policy",
  title: msg`Informativa sui Cookie`,
  description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
});

export { default } from "modules/CookiePolicy";
