import { t } from "@lingui/macro"
import { Avatar, Box, styled } from "@mui/material"
import React from "react"
import { Columns, TH } from "src/components"
import { BREAKPOINT } from "src/theme"
import Address from "./_address"
import Bank from "./_bank"

export const SEDE_LEGALE = {
  name: "Pessastudio Horse Tecnology srl",
  country: "Italy",
  postalCode: "35043",
  streetAddress: "Via Garibaldi, 28",
  addressLocality: "Monselice",
  addressRegion: "Padova",
  id: "04743610281",
}

const BANCA = {
  name: "Cassa di Risparmio del Veneto filiale di Monselice",
  iban: "IT97 M030 6962 6691 0000 0004 400",
  swift: "BCITITMM",
}

export const SEDE_OPERATIVA = {
  name: "Pessastudio Horse Tecnology srl",
  country: "Italy",
  postalCode: "35044",
  streetAddress: "Via Cà Megliadino, 35",
  addressLocality: "Montagnana",
  addressRegion: "Padova",
  telephone: "+39 0429 805613",
}

const BELGIO = {
  name: "Roberto Della Bella",
  email: "magiccavallo@hotmail.com",
  telephone: "+32 475 96 5123",
}

const FRANCIA = {
  name: "Théo Cardon",
  email: "commercial@equisea.fr",
  telephone: "+33 788044648",
}

export const ITALIA = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098",
}

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: 150,
  height: 150,
}))

const RightColumnStyled = styled("div")(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginTop: 110,
  },
}))

const StyledBank = styled(Bank)(({ theme }) => ({
  [".MuiTypography-caption"]: {
    color: theme.palette.grey[400],
  },
}))

const StyledAddress = styled(Address)(({ theme }) => ({
  [".MuiTypography-caption"]: {
    color: theme.palette.grey[400],
  },
}))

const Contatti: React.FC = () => (
  <Columns
    left={
      <>
        <TH variant="h1">{t`Contatti`}</TH>

        <Box mt={6}>
          <TH variant="h4">{t`Sede operativa`}</TH>
          <StyledAddress {...SEDE_OPERATIVA} />
        </Box>

        <Box mt={6}>
          <TH variant="h4">{t`Sede legale`}</TH>
          <StyledAddress {...SEDE_LEGALE} />
          <Box mt={2}>Capitale interamente versato € 10.000,00</Box>
        </Box>

        <Box mt={6}>
          <TH variant="h4">{t`Coordinate bancarie`}</TH>
          <StyledBank {...BANCA} />
        </Box>
      </>
    }
    right={
      <RightColumnStyled>
        <Box>
          <TH variant="h4">{t`Contatto commerciale`}</TH>
          <AvatarStyled src={require("src/assets/pages/contatti/anna.jpg").default} alt="Anna Pessa" />
          <Address {...ITALIA} />
        </Box>

        <Box mt={6}>
          <TH variant="h4">{t`Contatto commerciale Belgio`}</TH>
          <Address {...BELGIO} />
        </Box>

        <Box mt={6}>
          <TH variant="h4">{t`Contatto commerciale Francia`}</TH>
          <Address {...FRANCIA} />
        </Box>
      </RightColumnStyled>
    }
  />
)

export default Contatti
