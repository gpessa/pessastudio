import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import ComePreparareIlFondo from "modules/ComePreparareIlFondo";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.TONDINI_COME_PREPARARE_IL_FONDO,
  title: msg`Come preparare il fondo`,
});

export default ComePreparareIlFondo;
