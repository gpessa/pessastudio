import { msg } from "@lingui/core/macro";
import ComePreparareIlFondo from "modules/ComePreparareIlFondo";
import generateMetadataFunction from "utils/generateMetadataFunction";

import { PAGES_URL } from "hooks/usePages";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.RECINTI_COME_PREPARARE_IL_FONDO,
  title: msg`Come preparare il fondo`,
});

export default ComePreparareIlFondo;
