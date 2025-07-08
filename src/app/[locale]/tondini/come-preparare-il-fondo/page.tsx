import { msg } from "@lingui/core/macro";
import ComePreparareIlFondo from "modules/ComePreparareIlFondo";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "recinti/come-preparare-il-fondo",
  title: msg`Come preparare il fondo`,
});

export default ComePreparareIlFondo;
