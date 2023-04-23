import { Box, styled } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

const BoxStyled = styled(Box)({
  height: 300,
});

const FrameStyled = styled("iframe")({
  border: "none",
});

const Map = () => {
  const { t } = useTranslation();
  return (
    <BoxStyled>
      <FrameStyled
        width="100%"
        height="300"
        title={t("General.map", { defaultValue: `Mappa` })!}
        role="application"
        src="https://maps.google.com/maps?q=Pessastudio%20Horse%20Tecnology&t=&z=11&ie=UTF8&iwloc=&output=embed"
      ></FrameStyled>
    </BoxStyled>
  );
};

export default Map;
