import { Avatar, Box, Card, CardContent, Stack, styled } from "@mui/material";
import { Columns, Th } from "components";

import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { jsonLdScriptProps } from "react-schemaorg";
import { ContactPage } from "schema-dts";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import { BANCA, ITALIA, SEDE_LEGALE, SEDE_OPERATIVA } from "utils/constants";
import anna from "./assets/anna.jpg";
import ContattiAddress from "./components/ContattiAddress";
import ContattiBank from "./components/ContattiBank";

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  height: 150,
  width: 150,
}));

const RightColumnStyled = styled("div")(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    marginTop: 110,
  },
}));

const StyledBank = styled(ContattiBank)(({ theme }) => ({
  [".MuiTypography-caption"]: {
    color: theme.palette.grey[400],
  },
}));

const StyledAddress = styled(ContattiAddress)(({ theme }) => ({
  [".MuiTypography-caption"]: {
    color: theme.palette.grey[400],
  },
}));

const Contatti: React.FC = () => {
  const { t } = useTranslation();

  const CONTATTI_COMMERCIALI = [
    {
      name: t("Contacts.resellers.belgium", {
        defaultValue: "Contatto commerciale Belgio",
      }),
      data: {
        name: "Roberto Della Bella",
        email: "magiccavallo@hotmail.com",
        telephone: "+32 475 96 5123",
      },
    },
    {
      name: t("Contacts.resellers.france", {
        defaultValue: "Contatto commerciale Francia",
      }),
      data: {
        name: "Théo Cardon",
        email: "commercial@equisea.fr",
        telephone: "+33 788044648",
      },
    },
    {
      name: t("Contacts.resellers.germany", {
        defaultValue: "Contatto commerciale Germania",
      }),
      data: {
        email: "office@bacherproducts.de",
        telephone: "+49 6206 13445",
        name: "Bacher Products GmbH",
        streetAddress: "Lorscher Straße 13",
        postalCode: "68642",
        addressLocality: "Bürstadt",
        addressCountry: "Germany",
        website: "https://bacherproducts.de",
        whatsapp: "+49 6206 13445",
      },
    },
    {
      name: t("Contacts.resellers.germanyAndMiddleEast", {
        defaultValue: "Contatto commerciale Germania & Medio Oriente",
      }),
      data: {
        name: "BEST Equine GmbH Training Facilities for Horses (Belinda Hitzler)",
        addressCountry: "Germany",
        postalCode: "89407",
        streetAddress: "Priehlweg 7",
        addressLocality: "Dillingen",
        telephone: "+49 (0) 9071 7700256",
        mobile: "+49 (0) 171 3661394",
        email: "mail@belindahitzler.de",
      },
    },
  ];

  const jsonLdProp = jsonLdScriptProps<ContactPage>({
    "@context": "https://schema.org",
    "@type": "ContactPage",
  });

  return (
    <>
      <Script {...jsonLdProp} />

      <Columns
        left={
          <>
            <Th variant="h1">
              <Trans i18nKey="Contacts.contacts">Contatti</Trans>
            </Th>

            <Stack spacing={PRODUCT_GUTTER}>
              <Box>
                <Th variant="h4">
                  <Trans i18nKey="Contacts.headOffice">Sede operativa</Trans>
                </Th>
                <StyledAddress {...SEDE_OPERATIVA} />
              </Box>

              <Box>
                <Th variant="h4">
                  <Trans i18nKey="Contacts.registeredEntity">Sede legale</Trans>
                </Th>
                <StyledAddress {...SEDE_LEGALE} />
              </Box>

              <Box>
                <Th variant="h4">
                  <Trans i18nKey="Contacts.bankAccountDetails">
                    Coordinate bancarie
                  </Trans>
                </Th>
                <StyledBank {...BANCA} />
              </Box>
            </Stack>
          </>
        }
        right={
          <RightColumnStyled>
            <Stack spacing={PRODUCT_GUTTER}>
              <Box>
                <Th variant="h4">
                  <Trans i18nKey="General.contacts.salesOffice">
                    Contatto commerciale
                  </Trans>
                </Th>
                <AvatarStyled alt="Anna Pessa">
                  <Image
                    src={anna}
                    height={150}
                    width={150}
                    alt={ITALIA.name}
                  />
                </AvatarStyled>
                <ContattiAddress {...ITALIA} />
              </Box>

              <Stack spacing={PRODUCT_GUTTER}>
                <Th variant="h4" gutterBottom={false}>
                  <Trans i18nKey="General.contacts.internationalDealers">
                    Rivenditori
                  </Trans>
                </Th>
                {CONTATTI_COMMERCIALI.map(({ name, data }, index) => (
                  <Card key={index}>
                    <CardContent>
                      <Th variant="h5">{name}</Th>
                      <ContattiAddress {...data} />
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Stack>
          </RightColumnStyled>
        }
      />
    </>
  );
};

export default Contatti;
