import { styled } from "@mui/material/styles";
import anna from "assets/generals/anna.jpg";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ITALIA, NAME_STRING } from "utils/constants";
import { useLingui } from "@lingui/react";
import { t } from "@lingui/core/macro";

const FloatingWhatsAppStyled = styled(FloatingWhatsApp)(
  ({ theme }) => `
  .floating-whatsapp-chatbox {
    border-radius: 0px;
  }

  .floating-whatsapp-button {
    right: ${theme.spacing(3)};
    bottom: ${theme.spacing(3)};
    // background-color: ${theme.palette.primary.main};
  }
`
);

const WhatsApp: React.FC = () => {
  const a = useLingui(); // Fix on locale change

  return (
    <FloatingWhatsAppStyled
      accountName={NAME_STRING}
      phoneNumber={ITALIA.whatsapp}
      avatar={anna.src}
      chatMessage={t`Ciao, come posso aiutarti?`}
      statusMessage={t`Disponibile`}
    />
  );
};

export default WhatsApp;
