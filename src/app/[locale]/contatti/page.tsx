import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "contatti",
  title: msg`Contatti`,
  description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
});

export { default } from "modules/Contatti";
