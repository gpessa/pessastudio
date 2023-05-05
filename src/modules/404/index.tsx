import { Trans } from "@lingui/macro";
import { Error } from "components";
import React from "react";
export { getStaticProps } from "utils/getProps";

const Page404: React.FC = () => (
  <Error
    title={<Trans>Pagina non trovata</Trans>}
    description={<Trans>La pagina che stai cercando non esiste</Trans>}
  />
);

export default Page404;
