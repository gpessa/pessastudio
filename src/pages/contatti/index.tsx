import { Trans } from "@lingui/macro"
import { Avatar, Box, Card, CardContent, Stack, styled } from "@mui/material"
import { Address, Bank, Columns, TH } from "components"
import { AddressProps } from "components/Address"
import { BankProps } from "components/Bank"
import React from "react"
import { Helmet } from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { ContactPage } from "schema-dts"
import { BREAKPOINT, PRODUCT_GUTTER } from "theme"

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

const CONTATTI_COMMERCIALI = [
  {
    name: <Trans>Contatto commerciale Belgio</Trans>,
    data: {
      name: "Roberto Della Bella",
      email: "magiccavallo@hotmail.com",
      telephone: "+32 475 96 5123",
    },
  },
  {
    name: <Trans>Contatto commerciale Francia</Trans>,
    data: {
      name: "Théo Cardon",
      email: "commercial@equisea.fr",
      telephone: "+33 788044648",
    },
  },
  {
    name: <Trans>Contatto commerciale Germania</Trans>,
    data: {
      email: "office@bacherproducts.de",
      telephone: "+49 6206 13445",
      name: "Bacher Products GmbH",
      streetAddress: "Lorscher Straße 13",
      postalCode: "68642",
      addressLocality: "Bürstadt",
      country: "Germany",
      website: "https://bacherproducts.de",
      whatsapp: "+49 6206 13445",
    },
  },
  {
    name: <Trans>Contatto commerciale Germania &amp; Medio Oriente</Trans>,
    data: {
      name: "BEST Equine GmbH Training Facilities for Horses (Belinda Hitzler)",
      country: "Germany",
      postalCode: "89407",
      streetAddress: "Priehlweg 7",
      addressLocality: "Dillingen",
      telephone: "+49 (0) 9071 7700256",
      mobile: "+49 (0) 171 3661394",
      email: "mail@belindahitzler.de",
    },
  },
]

export const SEDE_OPERATIVA: AddressProps = {
  name: "Pessastudio Horse Tecnology srl",
  country: "Italy",
  postalCode: "35044",
  streetAddress: "Via Cà Megliadino, 35",
  addressLocality: "Montagnana",
  addressRegion: "Padova",
  telephone: "+39 0429 805613",
}

export const ITALIA: AddressProps = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098",
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

          <Stack spacing={PRODUCT_GUTTER}>
            <Box>
              <TH variant="h4">
                <Trans>Sede operativa</Trans>
              </TH>
              <StyledAddress {...SEDE_OPERATIVA} />
            </Box>

            <Box>
              <TH variant="h4">
                <Trans>Sede legale</Trans>
              </TH>
              <StyledAddress {...SEDE_LEGALE} />
            </Box>

            <Box>
              <TH variant="h4">
                <Trans>Coordinate bancarie</Trans>
              </TH>
              <StyledBank {...BANCA} />
            </Box>
          </Stack>
        </>
      }
      right={
        <RightColumnStyled>
          <Stack spacing={PRODUCT_GUTTER}>
            <Box>
              <TH variant="h4">
                <Trans>Contatto commerciale</Trans>
              </TH>
              <AvatarStyled src={require("assets/pages/contatti/anna.jpg").default} alt="Anna Pessa" />
              <Address {...ITALIA} />
            </Box>

            <Stack spacing={PRODUCT_GUTTER}>
              <TH variant="h4" gutterBottom={false}>
                <Trans>Rivenditori</Trans>
              </TH>
              {CONTATTI_COMMERCIALI.map(({ name, data }) => (
                <Card>
                  <CardContent>
                    <TH variant="h5">{name}</TH>
                    <Address {...data} />
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Stack>
        </RightColumnStyled>
      }
    />
  </>
)

export default Contatti
