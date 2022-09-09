import { Trans } from "@lingui/macro"
import { Avatar, Box, styled } from "@mui/material"
import { Columns, TH } from "components"
import React from "react"
import { Helmet } from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { ContactPage } from "schema-dts"
import { BREAKPOINT } from "theme"
import Address, { AddressProps } from "./_address"
import Bank, { BankProps } from "./_bank"

export const SEDE_LEGALE: AddressProps = {
  name: "Pessastudio Horse Tecnology srl",
  country: "Italy",
  postalCode: "35043",
  streetAddress: "Via Garibaldi, 28",
  addressLocality: "Monselice",
  addressRegion: "Padova",
  id: "04743610281",
}

const BANCA: BankProps = {
  name: "Cassa di Risparmio del Veneto filiale di Monselice",
  iban: "IT97 M030 6962 6691 0000 0004 400",
  swift: "BCITITMM",
}

export const SEDE_OPERATIVA: AddressProps = {
  name: "Pessastudio Horse Tecnology srl",
  country: "Italy",
  postalCode: "35044",
  streetAddress: "Via Cà Megliadino, 35",
  addressLocality: "Montagnana",
  addressRegion: "Padova",
  telephone: "+39 0429 805613",
}

const BELGIO: AddressProps = {
  name: "Roberto Della Bella",
  email: "magiccavallo@hotmail.com",
  telephone: "+32 475 96 5123",
}

const FRANCIA: AddressProps = {
  name: "Théo Cardon",
  email: "commercial@equisea.fr",
  telephone: "+33 788044648",
}

export const ITALIA: AddressProps = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098",
}

const GERMANIA_MEDIO_ORIENTE: AddressProps = {
  name: <>BEST Equine GmbH<br/>Training Facilities for Horses (Belinda Hitzler)</>,
  country: "Germany",
  postalCode: "89407",
  streetAddress: "Priehlweg 7",
  addressLocality: "Dillingen",
  telephone: "+49 (0) 9071 7700256",
  mobile: "+49 (0) 171 3661394",
  email: "mail@belindahitzler.de"
}

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  height: 150,
  width: 150,
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
  <>
    <Helmet
      script={[
        helmetJsonLdProp<ContactPage>({
          "@context": "https://schema.org",
          "@type": "ContactPage",
        }),
      ]}
    />
    <Columns
      left={
        <>
          <TH variant="h1">
            <Trans>Contatti</Trans>
          </TH>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Sede operativa</Trans>
            </TH>
            <StyledAddress {...SEDE_OPERATIVA} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Sede legale</Trans>
            </TH>
            <StyledAddress {...SEDE_LEGALE} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Coordinate bancarie</Trans>
            </TH>
            <StyledBank {...BANCA} />
          </Box>
        </>
      }
      right={
        <RightColumnStyled>
          <Box>
            <TH variant="h4">
              <Trans>Contatto commerciale</Trans>
            </TH>
            <AvatarStyled src={require("assets/pages/contatti/anna.jpg").default} alt="Anna Pessa" />
            <Address {...ITALIA} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Contatto commerciale Belgio</Trans>
            </TH>
            <Address {...BELGIO} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Contatto commerciale Francia</Trans>
            </TH>
            <Address {...FRANCIA} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">
              <Trans>Contatto commerciale Germania &amp; Medio Oriente</Trans>
            </TH>
            <Address {...GERMANIA_MEDIO_ORIENTE} />
          </Box>
        </RightColumnStyled>
      }
    />
  </>
)

export default Contatti
