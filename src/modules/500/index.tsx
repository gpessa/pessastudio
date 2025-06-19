import { Trans } from "@lingui/react/macro";
import React from "react";
import { Error } from "components";
export { getStaticProps } from "utils/getProps";

const Page500: React.FC = () => (
  <Error
    title={<Trans>Errore</Trans>}
    description={<Trans>Riprova piú tardi</Trans>}
  />
);

export default Page500;
