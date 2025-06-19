"use client";

import anna from "assets/generals/anna.jpg";
import { ITALIA, NAME_STRING } from "utils/constants";
import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { styled } from "@mui/material/styles";
import { sendGAEvent } from "@next/third-parties/google";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
  const { _ } = useLingui();

  return (
    <FloatingWhatsAppStyled
      accountName={NAME_STRING}
      phoneNumber={ITALIA.whatsapp.replace(/ /g, "")}
      avatar={anna.src}
      statusMessage={_(msg`Disponibile`)}
      onSubmit={() => sendGAEvent("event", "submit_on_whatsapp")}
      chatMessage={_(msg`Ciao, come posso aiutarti`)}
    />
  );
};

export default WhatsApp;
