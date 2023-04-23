import { Error } from "components";
import React from "react";
import { Trans } from "next-i18next";

const Page404: React.FC = () => (
  <Error
    title={<Trans i18nKey="404.title">Pagina non trovata</Trans>}
    description={
      <Trans i18nKey="404.description">
        La pagina che stai cercando non esiste
      </Trans>
    }
  />
);

export default Page404;
