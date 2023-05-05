import { Trans } from "@lingui/macro";
import { Box } from "@mui/material";
import Data from "components/Data";
import React from "react";

const ContattiBank: React.FC<BankProps> = ({ name, iban, swift, ...props }) => (
  <Box {...props}>
    {name && <Data label={<Trans>Istituto</Trans>} value={name} />}
    {iban && <Data label={<Trans>Iban</Trans>} value={iban} />}
    {swift && <Data label={<Trans>Swift</Trans>} value={swift} />}
  </Box>
);

export type BankProps = {
  name: string;
  iban: string;
  swift: string;
};

export default ContattiBank;
