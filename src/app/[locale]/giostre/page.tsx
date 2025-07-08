import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";
import { PAGES_URL } from "hooks/usePages";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.GIOSTRE,
  title: msg`Giostre`,
  description: msg`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
});

export { default } from "modules/Giostre";
