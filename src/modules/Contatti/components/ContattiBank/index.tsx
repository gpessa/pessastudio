import { Box } from "@mui/material";
import Data from "components/Data";
import { Trans } from "next-i18next";
import React from "react";

const ContattiBank: React.FC<BankProps> = ({ name, iban, swift, ...props }) => (
  <Box {...props}>
    {name && (
      <Data
        label={<Trans i18nKey={"Contacts.bank.istituto"}>Istituto</Trans>}
        value={name}
      />
    )}
    {iban && (
      <Data
        label={<Trans i18nKey={"Contacts.bank.iban"}>Iban</Trans>}
        value={iban}
      />
    )}
    {swift && (
      <Data
        label={<Trans i18nKey={"Contacts.bank.swift"}>Swift</Trans>}
        value={swift}
      />
    )}
  </Box>
);

export type BankProps = {
  name: string;
  iban: string;
  swift: string;
};

export default ContattiBank;
