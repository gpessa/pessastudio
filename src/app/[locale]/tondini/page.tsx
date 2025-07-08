import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "tondini",
  title: msg`Tondini`,
  description: msg`Tondini coperti per addestrare puledri in libertà`,
});

export { default } from "modules/Tondini";
