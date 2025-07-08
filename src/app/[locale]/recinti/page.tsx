import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "recinti",
  title: msg`Recinti`,
  description: msg`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
});

export { default } from "modules/Recinti";
