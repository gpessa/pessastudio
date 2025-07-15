import { Trans } from "@lingui/react/macro";
import { Error } from "components";
import React from "react";

const Page500: React.FC = () => (
  <Error
    title={<Trans>Errore</Trans>}
    description={<Trans>Riprova piú tardi</Trans>}
  />
);

export default Page500;
