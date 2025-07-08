import { msg } from "@lingui/core/macro";
import { PAGES_URL } from "hooks/usePages";
import Index from "modules/Index";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: PAGES_URL.HOME,
  title: msg`Home`,
  description: msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
});

export default Index;
