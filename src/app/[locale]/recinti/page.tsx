import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";
import { PAGES_URL } from "hooks/usePages";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.RECINTI,
  title: msg`Recinti`,
  description: msg`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
});

export { default } from "modules/Recinti";
