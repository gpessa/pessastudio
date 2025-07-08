import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)({
  height: 300,
});

const FrameStyled = styled("iframe")({
  border: "none",
});

const FooterMap = () => {
  const { _ } = useLingui();

  return (
    <BoxStyled>
      <FrameStyled
        width="100%"
        height="300"
        title={_(msg`Mappa`)}
        role="application"
        src="https://maps.google.com/maps?q=Pessastudio%20Horse%20Tecnology&t=&z=11&ie=UTF8&iwloc=&output=embed"
      ></FrameStyled>
    </BoxStyled>
  );
};
export default FooterMap;
