import { styled } from "@mui/material/styles";
import anna from "assets/generals/anna.jpg";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ITALIA, NAME_STRING } from "utils/constants";
import { useLingui } from "@lingui/react";
import { t } from "@lingui/core/macro";
import { sendGAEvent } from "@next/third-parties/google";

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
  const a = useLingui(); // Fix on locale change

  return (
    <FloatingWhatsAppStyled
      accountName={NAME_STRING}
      phoneNumber={ITALIA.whatsapp.replace(/ /g, "")}
      avatar={anna.src}
      chatMessage={t`Ciao, come posso aiutarti?`}
      statusMessage={t`Disponibile`}
      onSubmit={() => sendGAEvent("event", "submit_on_whatsapp")}
    />
  );
};

export default WhatsApp;
