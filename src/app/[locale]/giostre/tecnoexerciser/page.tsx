import { msg } from "@lingui/core/macro";
import { GIOSTRE_MODELS } from "modules/Giostre";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "giostre/tecnoexerciser",
  title: msg`Giostre ${GIOSTRE_MODELS.TECNOEXERCISER}`,
  description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.TECNOEXERCISER}, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
});

export { default } from "modules/GiostreTecnoexerciser";
