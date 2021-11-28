import { t } from "@lingui/macro"
import { Box, styled } from "@mui/material"
import React from "react"

const BoxStyled = styled(Box)({
  height: 300,
})

const Map = () => (
  <BoxStyled>
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder={0}
      marginWidth={0}
      marginHeight={0}
      title={t`Mappa`}
      role="application"
      src="https://maps.google.com/maps?q=Pessastudio%20Horse%20Tecnology&t=&z=11&ie=UTF8&iwloc=&output=embed"
    ></iframe>
  </BoxStyled>
)

export default Map
