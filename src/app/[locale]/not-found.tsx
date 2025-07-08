import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.PAGE_404,
  title: msg`Come preparare il fondo`,
});

export { default } from "modules/404";
