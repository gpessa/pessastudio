import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "dressage",
  title: msg`Dressage`,
  description: msg`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
});

export { default } from "modules/Dressage";
