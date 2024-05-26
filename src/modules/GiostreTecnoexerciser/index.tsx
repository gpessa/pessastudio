import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Typography } from "@mui/material";
import { Columns, Th, Ul, Video } from "components";
import { usePages } from "hooks";
import { GIOSTRE_MODELS } from "modules/Giostre";
import React from "react";
import TecnoexerciserAccessori from "./_accessori";
import TecnoexerciserCompare from "./_compare";
import TecnoexerciserCopertura from "./_copertura";
import TecnoexerciserCorridoi from "./_corridoi";
import TecnoexerciserGallery from "./_gallery";
import TecnoexerciserServizioClienti from "./_servizio_clienti";
export { getStaticProps } from "utils/getProps";

const GiostreTecnoexerciser: React.FC = () => {
  useLingui(); // Fix on locale change
  const { PAGES } = usePages();

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.GIOSTRE_TECNOEXERCISER.title}</Th>
            <Trans>
              <Typography paragraph>
                Tecnoexerciser è il modello di giostra attualmente più
                richiesto.
              </Typography>
              <Typography paragraph>
                Oggi, grazie alle già note caratteristiche tecniche e alla
                grande affidabilità, abbiamo aggiunto alcune specifiche funzioni
                che fanno, di questo modello, la macchina{" "}
                <strong>leader</strong> del settore.
              </Typography>
              <Typography paragraph>È possibile infatti:</Typography>
              <Ul sx={{ mb: 2 }}>
                <li>
                  Scegliere la forza che la porta mobile esercita sugli animali
                  per invitarli ad avanzare
                </li>
                <li>
                  Mantenere un controllo costante sull'elettrificazione delle
                  porte mobili
                </li>
                <li>
                  Beneficiare dell'innovativo sistema "training program" che vi
                  consentirà di allenare i vostri cavalli fino ad ottenere
                  performance atletiche.
                </li>
                <li>
                  Scegliere il programma di irrigazione pesta mentre la giostra
                  sta girando
                </li>
              </Ul>
              <Typography paragraph>
                La struttura è fornita, a seconda delle esigenze, o con punte
                per l'ancoraggio al suolo o con tasselli nel caso in cui si
                desideri ancorarla ad un fondo di calcestruzzo.
              </Typography>
            </Trans>
          </>
        }
        right={<TecnoexerciserGallery />}
      />

      <Video
        src={"https://www.youtube-nocookie.com/embed/mkB5ZPK9swA"}
        title={t`Giostra ${GIOSTRE_MODELS.TECNOEXERCISER} in movimento`}
      />

      <TecnoexerciserCorridoi />

      <TecnoexerciserCopertura />

      <TecnoexerciserAccessori />

      <TecnoexerciserCompare />

      <TecnoexerciserServizioClienti />
    </>
  );
};

export default GiostreTecnoexerciser;
