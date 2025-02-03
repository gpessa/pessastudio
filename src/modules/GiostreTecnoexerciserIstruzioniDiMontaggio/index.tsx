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
export { getStaticProps } from "utils/getProps";

const IstruzioniMontaggio: React.FC = () => {
  const STEPS = [
    {
      image: productsGiostreTecnoexerciserMontaggioStep_01,
      text: <>Trovate e segnate il centro di ciò che sarà la vostra giostra</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_02,
      text: (
        <>
          Usate la base della giostra per trovare e segnare i punti dove saranno
          piantate i supporti
        </>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_04,
      text: <>Ancorate al suolo i supporti della giostra</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_05,
      text: <>Montate il fondo della giostra</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_06,
      text: <>Ancorate il gruppo motore</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_07,
      text: (
        <>Assicuratevi di bloccare la giostra alla giusta altezza e piana</>
      ),
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_08,
      text: <>Montate le braccia di separazione</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_09,
      text: <>Collegate le braccia di separazione attraverso i cavi</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_10,
      text: <>Montate le porte di separazione</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_11,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_12,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_13,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_14,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_15,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_16,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_17,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
    {
      image: productsGiostreTecnoexerciserMontaggioStep_18,
      text: <>Assicuratevi che le porte corrispondano alla figura</>,
    },
  ];

  return (
    <Section>
      <Box mb={3} textAlign="center">
        <Th variant="h2">{<>Istruzioni di montaggio</>}</Th>
        <Typography>
          Segui le semplici istruzioni per montare la nostra giostra
        </Typography>
      </Box>
      <Path steps={STEPS} />
    </Section>
  );
};

export default IstruzioniMontaggio;
