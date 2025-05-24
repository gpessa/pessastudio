import { Trans } from "@lingui/react/macro";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Path, Section, Th } from "components";
import productsGiostreIppowalkerMontaggioStep_01 from "assets/products/giostre/ippowalker/montaggio/step-01.jpg";
import productsGiostreIppowalkerMontaggioStep_02 from "assets/products/giostre/ippowalker/montaggio/step-02.jpg";
import productsGiostreIppowalkerMontaggioStep_04 from "assets/products/giostre/ippowalker/montaggio/step-04.jpg";
import productsGiostreIppowalkerMontaggioStep_05 from "assets/products/giostre/ippowalker/montaggio/step-05.jpg";
import productsGiostreIppowalkerMontaggioStep_06 from "assets/products/giostre/ippowalker/montaggio/step-06.jpg";
import productsGiostreIppowalkerMontaggioStep_07 from "assets/products/giostre/ippowalker/montaggio/step-07.jpg";
import productsGiostreIppowalkerMontaggioStep_08 from "assets/products/giostre/ippowalker/montaggio/step-08.jpg";
import productsGiostreIppowalkerMontaggioStep_09 from "assets/products/giostre/ippowalker/montaggio/step-09.jpg";
import productsGiostreIppowalkerMontaggioStep_10 from "assets/products/giostre/ippowalker/montaggio/step-10.jpg";
import productsGiostreIppowalkerMontaggioStep_11 from "assets/products/giostre/ippowalker/montaggio/step-11.jpg";
export { getStaticProps } from "utils/getProps";

const IstruzioniMontaggio: React.FC = () => {
  const STEPS = [
    {
      image: productsGiostreIppowalkerMontaggioStep_01,
      text: "Trovate e segnate il centro di ciò che sarà la vostra giostra",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_02,
      text: "Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_04,
      text: "Ancorate al suolo i supporti della giostra",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_05,
      text: "Montate il fondo della giostra",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_06,
      text: "Ancorate il gruppo motore",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_07,
      text: "Assicuratevi di bloccare la giostra alla giusta altezza e piana",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_08,
      text: "Montate le braccia di separazione",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_09,
      text: "Collegate le braccia di separazione attraverso i cavi",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_10,
      text: "Montate le porte di separazione",
    },
    {
      image: productsGiostreIppowalkerMontaggioStep_11,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
  ];

  return (
    <Section>
      <Box mb={3} textAlign="center">
        <Th variant="h2">
          <Trans>Istruzioni di montaggio</Trans>
        </Th>
        <Typography>
          Segui le semplici istruzioni per montare la nostra giostra
        </Typography>
      </Box>
      <Path steps={STEPS} />
    </Section>
  );
};

export default IstruzioniMontaggio;
