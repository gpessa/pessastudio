import { Trans } from "@lingui/react/macro";
import { Box } from "@mui/material";
import React from "react";
import Data from "components/Data";

const ContattiBank: React.FC<BankProps> = ({ name, iban, swift, ...props }) => (
  <Box {...props}>
    <Data label={<Trans>Istituto</Trans>} value={name} />
    <Data label={<Trans>Iban</Trans>} value={iban} />
    {swift && <Data label={<Trans>Swift</Trans>} value={swift} />}
  </Box>
);

export type BankProps = {
  name: string;
  iban: string;
  swift?: string;
};

export default ContattiBank;
