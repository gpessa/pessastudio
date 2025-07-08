"use client";

import { Trans } from "@lingui/react/macro";
import { Typography } from "@mui/material";
import { Columns, Th, Ul, Video } from "components";
import { usePages } from "hooks";
import React from "react";
import TecnoexerciserAccessori from "./_accessori";
import TecnoexerciserCompare from "./_compare";
import TecnoexerciserCopertura from "./_copertura";
import TecnoexerciserCorridoi from "./_corridoi";
import TecnoexerciserGallery from "./_gallery";
import TecnoexerciserServizioClienti from "./_servizio_clienti";

const GiostreTecnoexerciser: React.FC = () => {
  const { PAGES } = usePages();

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.GIOSTRE_TECNOEXERCISER.title}</Th>
            <Trans>
              <Typography mx={{ marginBottom: 15 }}>
                Tecnoexerciser è il modello di giostra attualmente più
                richiesto.
              </Typography>
              <Typography mx={{ marginBottom: 15 }}>
                Oggi, grazie alle già note caratteristiche tecniche e alla
                grande affidabilità, abbiamo aggiunto alcune specifiche funzioni
                che fanno, di questo modello, la macchina{" "}
                <strong>leader</strong> del settore.
              </Typography>
              <Typography mx={{ marginBottom: 15 }}>
                È possibile infatti:
              </Typography>
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
              <Typography mx={{ marginBottom: 15 }}>
                La struttura è fornita, a seconda delle esigenze, o con punte
                per l'ancoraggio al suolo o con tasselli nel caso in cui si
                desideri ancorarla ad un fondo di calcestruzzo.
              </Typography>
            </Trans>
          </>
        }
        right={<TecnoexerciserGallery />}
      />

      <Video videoid="mkB5ZPK9swA" />

      <TecnoexerciserCorridoi />

      <TecnoexerciserCopertura />

      <TecnoexerciserAccessori />

      <TecnoexerciserCompare />

      <TecnoexerciserServizioClienti />
    </>
  );
};

export default GiostreTecnoexerciser;
