import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import { GIOSTRE_MODELS } from "modules/Giostre";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.GIOSTRE_IPPOWALKER,
  title: msg`Giostre ${GIOSTRE_MODELS.IPPOWALKER}`,
  description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.IPPOWALKER}, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
});

export { default } from "modules/GiostreIppowalker";
