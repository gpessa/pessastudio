import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.CONTATTI,
  title: msg`Contatti`,
  description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
});

export { default } from "modules/Contatti";
