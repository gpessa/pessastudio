import { Trans } from "@lingui/macro";
import { Avatar, Box, Card, CardContent, Stack, styled } from "@mui/material";
import { Columns, Th } from "components";
import { usePages } from "hooks";
import Image from "next/image";
import React from "react";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import {
  BANCHE,
  CONTATTI_COMMERCIALI,
  ITALIA,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
} from "utils/constants";
import anna from "./assets/anna.jpg";
import ContattiAddress from "./components/ContattiAddress";
import ContattiBank from "./components/ContattiBank";

export { getStaticProps } from "utils/getProps";

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
  const { PAGES } = usePages();

  return (
    <Columns
      left={
        <>
          <Th variant="h1">{PAGES.CONTATTI.title}</Th>

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
              <Stack spacing={PRODUCT_GUTTER}>
                {BANCHE.map((bank) => (
                  <StyledBank {...bank} key={bank.name} />
                ))}
              </Stack>
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
                <Image src={anna} height={150} width={150} alt={ITALIA.name} />
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
  );
};

export default Contatti;
