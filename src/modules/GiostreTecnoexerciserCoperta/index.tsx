"use client";

import { Trans } from "@lingui/react/macro";
import { Typography } from "@mui/material";
import { Columns, Th, Ul, Video } from "components";
import { usePages } from "hooks";
import React from "react";

import TecnoexerciserAccessori from "./components/_accessori";
import TecnoexerciserCompare from "./components/_compare";
import TecnoexerciserCoperture from "./components/_coperture";
import TecnoexerciserCorridoi from "./components/_corridoi";
import TecnoexerciserGallery from "./components/_gallery";
import TecnoexerciserServizioClienti from "./components/_servizio_clienti";

const GiostreTecnoexerciserCoperta: React.FC = () => {
  const { PAGES } = usePages();

  return (
    <>
      <Columns
        left={
          <>
            <Th variant="h1">{PAGES.GIOSTRE_TECNOEXERCISER_COPERTA.title}</Th>
            <Trans>
              <Typography mx={{ marginBottom: 15 }}>
                Tecnoexerciser con copertura è il modello di giostra attualmente
                più richiesto .
              </Typography>
              <Typography mx={{ marginBottom: 15 }}>
                Oggi, grazie alle già note caratteristiche tecniche e alla
                grande affidabilità. Abbiamo aggiunto alcune specifiche che
                fanno, di questo modello, la macchina leader del settore.
              </Typography>
              <Typography mx={{ marginBottom: 15 }}>
                È possibile infatti:
              </Typography>
              <Ul>
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

              <Typography mx={{ marginTop: 15 }}>
                Il cliente potrà scegliere tra una{" "}
                <strong>COPERTURA IN PVC</strong> e una
                <strong> COPERTURA CON PANNELLI SANDWICH COIBENTATI</strong>.
              </Typography>
            </Trans>
          </>
        }
        right={<TecnoexerciserGallery />}
      />

      <Video videoid="mkB5ZPK9swA" />

      <TecnoexerciserCorridoi />

      <TecnoexerciserCoperture />

      <TecnoexerciserAccessori />

      <TecnoexerciserCompare />

      <TecnoexerciserServizioClienti />
    </>
  );
};

export default GiostreTecnoexerciserCoperta;
