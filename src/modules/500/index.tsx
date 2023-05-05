import { Trans } from "@lingui/macro";
import { Error } from "components";
import React from "react";
export { getStaticProps } from "utils/getProps";

const Page500: React.FC = () => (
  <Error
    title={<Trans>Errore</Trans>}
    description={<Trans>Riprova piú tardi</Trans>}
  />
);

export default Page500;
