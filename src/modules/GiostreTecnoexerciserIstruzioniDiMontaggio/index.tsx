import { Trans } from "@lingui/macro";
import { Box, Typography } from "@mui/material";
import productsGiostreTecnoexerciserMontaggioStep_01 from "assets/products/giostre/tecnoexerciser/montaggio/step-01.jpg";
import productsGiostreTecnoexerciserMontaggioStep_02 from "assets/products/giostre/tecnoexerciser/montaggio/step-02.jpg";
import productsGiostreTecnoexerciserMontaggioStep_04 from "assets/products/giostre/tecnoexerciser/montaggio/step-04.jpg";
import productsGiostreTecnoexerciserMontaggioStep_05 from "assets/products/giostre/tecnoexerciser/montaggio/step-05.jpg";
import productsGiostreTecnoexerciserMontaggioStep_06 from "assets/products/giostre/tecnoexerciser/montaggio/step-06.jpg";
import productsGiostreTecnoexerciserMontaggioStep_07 from "assets/products/giostre/tecnoexerciser/montaggio/step-07.jpg";
import productsGiostreTecnoexerciserMontaggioStep_08 from "assets/products/giostre/tecnoexerciser/montaggio/step-08.jpg";
import productsGiostreTecnoexerciserMontaggioStep_09 from "assets/products/giostre/tecnoexerciser/montaggio/step-09.jpg";
import productsGiostreTecnoexerciserMontaggioStep_10 from "assets/products/giostre/tecnoexerciser/montaggio/step-10.jpg";
import productsGiostreTecnoexerciserMontaggioStep_11 from "assets/products/giostre/tecnoexerciser/montaggio/step-11.jpg";
import productsGiostreTecnoexerciserMontaggioStep_12 from "assets/products/giostre/tecnoexerciser/montaggio/step-12.jpg";
import productsGiostreTecnoexerciserMontaggioStep_13 from "assets/products/giostre/tecnoexerciser/montaggio/step-13.jpg";
import productsGiostreTecnoexerciserMontaggioStep_14 from "assets/products/giostre/tecnoexerciser/montaggio/step-14.jpg";
import productsGiostreTecnoexerciserMontaggioStep_15 from "assets/products/giostre/tecnoexerciser/montaggio/step-15.jpg";
import productsGiostreTecnoexerciserMontaggioStep_16 from "assets/products/giostre/tecnoexerciser/montaggio/step-16.jpg";
import productsGiostreTecnoexerciserMontaggioStep_17 from "assets/products/giostre/tecnoexerciser/montaggio/step-17.jpg";
import productsGiostreTecnoexerciserMontaggioStep_18 from "assets/products/giostre/tecnoexerciser/montaggio/step-18.jpg";
import { Path, Section, Th } from "components";
import React from "react";

const IstruzioniMontaggio: React.FC = () => {
  const STEPS = [
    {
      image: productsGiostreTecnoexerciserMontaggioStep_01,
      text: (
        <Trans>
          Trovate e segnate il centro di ciò che sarà la vostra giostra
        </Trans>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_02,
      text: (
        <Trans>
          Usate la base della giostra per trovare e segnare i punti dove saranno
          piantate i supporti
        </Trans>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_04,
      text: <Trans>Ancorate al suolo i supporti della giostra</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_05,
      text: <Trans>Montate il fondo della giostra</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_06,
      text: <Trans>Ancorate il gruppo motore</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_07,
      text: (
        <Trans>
          Assicuratevi di bloccare la giostra alla giusta altezza e piana
        </Trans>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_08,
      text: <Trans>Montate le braccia di separazione</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_09,
      text: (
        <Trans>Collegate le braccia di separazione attraverso i cavi</Trans>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_10,
      text: <Trans>Montate le porte di separazione</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_11,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_12,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_13,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_14,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_15,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_16,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_17,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_18,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
  ];

  return (
    <Section>
      <Box mb={3} textAlign="center">
        <Th variant="h2">{<Trans>Istruzioni di montaggio</Trans>}</Th>
        <Typography>
          Segui le semplici istruzioni per montare la nostra giostra
        </Typography>
      </Box>
      <Path steps={STEPS} />
    </Section>
  );
};

export default IstruzioniMontaggio;
