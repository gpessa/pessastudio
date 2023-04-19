import { Trans } from "@lingui/macro";
import { Avatar, Box, Card, CardContent, Stack, styled } from "@mui/material";
import { Columns, Th } from "components";

import anna from "./assets/anna.jpg";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { jsonLdScriptProps } from "react-schemaorg";
import { ContactPage } from "schema-dts";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import {
  BANCA,
  CONTATTI_COMMERCIALI,
  ITALIA,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
} from "utils/constants";
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
              <Trans>Contatti</Trans>
            </Th>

            <Stack spacing={PRODUCT_GUTTER}>
              <Box>
                <Th variant="h4">
                  <Trans>Sede operativa</Trans>
                </Th>
                <StyledAddress {...SEDE_OPERATIVA} />
              </Box>

              <Box>
                <Th variant="h4">
                  <Trans>Sede legale</Trans>
                </Th>
                <StyledAddress {...SEDE_LEGALE} />
              </Box>

              <Box>
                <Th variant="h4">
                  <Trans>Coordinate bancarie</Trans>
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
                  <Trans>Contatto commerciale</Trans>
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
                  <Trans>Rivenditori</Trans>
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
