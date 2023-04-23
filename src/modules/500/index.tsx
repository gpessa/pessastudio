import { Error } from "components";
import React from "react";
import { Trans } from "next-i18next";

const Page500: React.FC = () => (
  <Error
    title={<Trans i18nKey="500.title">Errore</Trans>}
    description={
      <Trans i18nKey="500.description">
        Il server non è stato in grado di inviarti il documento html a causa di
        un errore interno (software del server)
      </Trans>
    }
  />
);

export default Page500;
