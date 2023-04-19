import { Trans } from "@lingui/macro";
import { Section, Th, Ul } from "components";
import React from "react";
export { getStaticProps } from "utils/getProps";

const ComePreparareIlFondo: React.FC = () => (
  <Section>
    <Th variant="h2">
      <Trans>Come preparare il fondo</Trans>
    </Th>
    <Trans>
      <Ul>
        <li>
          Preparare la superficie spianandola a "schiena d'asino" con il centro
          più alto dei bordi (2%) per far si che la pioggia defluisca. Mantenere
          i bordi dell'area alla stessa altezza del terreno circostante e
          riportare materiale nel centro dell'area per alzarlo.
        </li>
        <li>
          Stendere sull'area una "rete di separazione", ben tesa e trattenuta
          lungo i bordi in una canaletta scavata nel terreno impedendo così che
          la terra si mescoli alla sabbia.
        </li>
        <li>
          Distendere uniformemente sopra la rete uno strato di 7/8 centimetri di
          sabbia (diametro 1 mm.)
        </li>
        <li>
          Distribuire sopra alla sabbia 3 kg di "straccetti di geotessuto" per
          mt quadro di superficie in modo da mantenere il fondo stabile e
          morbido. Distribuire successivamente dopo un paio di ingressi a
          cavallo altri 2 kg.
        </li>
        <li>
          Tutti i giorni passare con una "erpice livellatrice" per eliminare le
          impronte lasciate dagli zoccoli.
        </li>
      </Ul>
    </Trans>
  </Section>
);

export default ComePreparareIlFondo;
