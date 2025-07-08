import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO,
  title: msg`Istruzioni di montaggio`,
});

export { default } from "modules/GiostreTecnoexerciserIstruzioniDiMontaggio";
