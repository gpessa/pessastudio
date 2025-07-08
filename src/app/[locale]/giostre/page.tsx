import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "giostre",
  title: msg`Giostre`,
  description: msg`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
});

export { default } from "modules/Giostre";
