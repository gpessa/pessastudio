import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.DRESSAGE,
  title: msg`Dressage`,
  description: msg`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
});

export { default } from "modules/Dressage";
