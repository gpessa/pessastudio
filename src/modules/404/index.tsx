import { Trans } from "@lingui/react/macro";
import { Error } from "components";
import React from "react";

const Page404: React.FC = () => (
  <Error
    title={<Trans>Pagina non trovata</Trans>}
    description={<Trans>La pagina che stai cercando non esiste</Trans>}
  />
);

export default Page404;
