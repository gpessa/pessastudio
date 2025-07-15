"use client";

import { Trans } from "@lingui/react/macro";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import anna from "assets/generals/anna.jpg";
import { Columns, Section, Th } from "components";
import { usePages } from "hooks";
import Image from "next/image";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import {
  BANCHE,
  CONTATTI_COMMERCIALI,
  ITALIA,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
} from "utils/constants";

import ContattiAddress from "./components/ContattiAddress";
import ContattiBank from "./components/ContattiBank";

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  height: 150,
  marginBottom: theme.spacing(2),
  width: 150,
}));

const ContattiAddressStyled = styled(ContattiAddress)(({ theme }) => ({
  ".MuiTypography-caption": {
    color: theme.palette.primary.contrastText,
  },
}));

const Contatti: React.FC = () => {
  const { PAGES } = usePages();

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.CONTATTI.title}</Th>
            <Typography mx={{ marginBottom: 15 }}>
              <Trans>
                Siamo qui per aiutarti! Se hai domande sui nostri prodotti per
                cavalli, necessiti di assistenza con un ordine o desideri
                maggiori informazioni, non esitare a contattarci.
              </Trans>
            </Typography>
            <Th variant="h4">
              <Trans>Contatto commerciale</Trans>
            </Th>
            <AvatarStyled alt="Anna Pessa">
              <Image src={anna} height={150} width={150} alt={ITALIA.name} />
            </AvatarStyled>
            <ContattiAddressStyled {...ITALIA} />
          </>
        }
        right={
          <Stack direction="column" gap={PRODUCT_GUTTER}>
            <Box>
              <Th variant="h5" sans>
                <Trans>Sede operativa</Trans>
              </Th>
              <ContattiAddress {...SEDE_OPERATIVA} />
            </Box>

            <Divider />

            <Box>
              <Th variant="h5" sans>
                <Trans>Sede legale</Trans>
              </Th>
              <ContattiAddress {...SEDE_LEGALE} />
            </Box>

            <Divider />

            <Box>
              <Th variant="h5" sans>
                <Trans>Coordinate bancarie</Trans>
              </Th>
              <Stack spacing={PRODUCT_GUTTER}>
                {BANCHE.map((bank) => (
                  <ContattiBank {...bank} key={bank.name} />
                ))}
              </Stack>
            </Box>
          </Stack>
        }
      />
      <Section color="warm1">
        <Th variant="h4">
          <Trans>Rivenditori</Trans>
        </Th>
        <Grid container spacing={PRODUCT_GUTTER} alignItems="stretch">
          {CONTATTI_COMMERCIALI.map(({ name, data }, index) => (
            <Grid
              key={index}
              size={{
                md: 3,
                xs: 12,
              }}
            >
              <Card sx={{ minHeight: "100%" }} elevation={0}>
                <CardContent>
                  <Th variant="h5">{name}</Th>
                  <ContattiAddress {...data} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default Contatti;
