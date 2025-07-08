import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.TONDINI,
  title: msg`Tondini`,
  description: msg`Tondini coperti per addestrare puledri in libertà`,
});

export { default } from "modules/Tondini";
