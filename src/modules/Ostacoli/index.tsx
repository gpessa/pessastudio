"use client";

import { Trans } from "@lingui/react/macro";
import { Typography } from "@mui/material";
import React from "react";
import { ContactUs, Section, Th } from "components";
import { usePages, useProducts } from "hooks";
import Barriere from "./Barriere";
import CandelieriLameForate from "./CandelieriElameForate";
import Cavalletti from "./Cavalletti";
import Cubi from "./Cubi";
import Cucchiai from "./CucchiaiSegnaletica";
import Fosso from "./Fosso";
import Segnaletica from "./Segnaletica";

const Ostacoli: React.FC = () => {
  const { PAGES } = usePages();
  const {
    BARRIERA_3_MT,
    FOSSO,
    CAVALLETTI_CAPRILLI,
    CAVALLETTI_CAPRILLI_BARRIERA_KIT,
    CUBI_MAXI,
    CUBI_MINI,
    CUCCHIAIO_DE,
    CUCCHIAIO_PS,
    SUPPORTO_SICUREZZA,
    LAMA_DE_50,
    LAMA_DE_150,
    CANDELIERE_CON_PIEDE_IN_PVC_170,
    CANDELIERE_CON_PIEDE_IN_PVC_190,
    OSTACOLI_BANDIERINE,
    NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
  } = useProducts();

  return (
    <>
      <Section>
        <Th variant="h1">{PAGES.OSTACOLI.title}</Th>
        <Trans>
          <Typography>
            I nostri ostacoli sono progettati e costruiti per durare nel tempo
            non richiedono alcuna manutenzione e conservano, inalterata, la loro
            bellezza anche se lasciati nel campo per anni.
          </Typography>
          <Typography mx={{ marginBottom: 15 }}>
            Se gli ostacoli per il professionista sono uno strumento di lavoro,
            per molti altri appassionati rappresentano la realizzazione di un
            sogno. Noi abbiamo deciso di rendere questi strumenti resistenti nel
            tempo per fare in modo che questo sogno duri.
          </Typography>
          <Typography>
            Potrete scegliere le quantità e i colori nella nostra gamma di
            produzione e acquistare anche singoli pezzi di ricambio.
          </Typography>
        </Trans>
      </Section>

      <Section color="warm1">
        <Barriere products={[BARRIERA_3_MT]} />
      </Section>

      <Section>
        <Fosso products={[FOSSO]} />
      </Section>

      <Section color="warm1">
        <Cavalletti
          products={[CAVALLETTI_CAPRILLI, CAVALLETTI_CAPRILLI_BARRIERA_KIT]}
        />
      </Section>

      <Section>
        <Cubi products={[CUBI_MAXI, CUBI_MINI]} />
      </Section>

      <Section color="warm1">
        <CandelieriLameForate
          products={[
            CANDELIERE_CON_PIEDE_IN_PVC_170,
            CANDELIERE_CON_PIEDE_IN_PVC_190,
            LAMA_DE_50,
            LAMA_DE_150,
          ]}
        />
      </Section>

      <Section>
        <Cucchiai products={[CUCCHIAIO_DE, CUCCHIAIO_PS, SUPPORTO_SICUREZZA]} />
      </Section>

      <Section color="warm1">
        <Segnaletica
          products={[OSTACOLI_BANDIERINE, NUMERO_CAMPO_OSTACOLI_PROFESSIONAL]}
        />
      </Section>

      <ContactUs />
    </>
  );
};

export default Ostacoli;
