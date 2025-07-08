"use client";

import { useLingui } from "@lingui/react/macro";
import { styled } from "@mui/material/styles";
import { sendGAEvent } from "@next/third-parties/google";
import anna from "assets/generals/anna.jpg";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ITALIA, NAME_STRING } from "utils/constants";

const FloatingWhatsAppStyled = styled(FloatingWhatsApp)(
  ({ theme }) => `
  .floating-whatsapp-chatbox {
    border-radius: 0px;
  }

  .floating-whatsapp-button {
    right: ${theme.spacing(3)};
    bottom: ${theme.spacing(3)};
  }
`
);

const WhatsApp: React.FC = () => {
  const { t } = useLingui();

  return (
    <FloatingWhatsAppStyled
      accountName={NAME_STRING}
      phoneNumber={ITALIA.whatsapp.replace(/ /g, "")}
      avatar={anna.src}
      statusMessage={t`Disponibile`}
      onSubmit={() => sendGAEvent("event", "submit_on_whatsapp")}
      chatMessage={t`Ciao, come posso aiutarti`}
    />
  );
};

export default WhatsApp;
