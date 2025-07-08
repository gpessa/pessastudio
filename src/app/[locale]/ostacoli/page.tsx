import { msg } from "@lingui/core/macro";
import generateMetadataFunction from "utils/generateMetadataFunction";

export const generateMetadata = generateMetadataFunction({
  url: "ostacoli",
  title: msg`Ostacoli`,
  description: msg`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
});

export { default } from "modules/Ostacoli";
