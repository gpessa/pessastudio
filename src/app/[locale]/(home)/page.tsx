import { msg } from "@lingui/core/macro";
import Index from "modules/Index";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "",
  title: msg`Home`,
  description: msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
});

export default Index;
