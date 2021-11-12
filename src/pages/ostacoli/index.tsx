import { Section, TH } from "@components"
import { t, Trans } from "@lingui/macro"
import { Typography } from "@mui/material"
import React from "react"
import Barriere from "./_barriere"
import CandelieriLameForate from "./_candelieri-e-lame-forate"
import Cavalletti from "./_cavalletti"
import Cubi from "./_cubi"
import Cucchiai from "./_cucchiai-segnaletica"
import Fosso from "./_fosso"
import Segnaletica from "./_segnaletica"

const Ostacoli: React.FC = () => (
  <>
    <Section>
      <TH variant="h1">{t`Ostacoli`}</TH>
      <Trans>
        <Typography>
          I nostri ostacoli sono progettati e costruiti per durare nel tempo non richiedono alcuna manutenzione e
          conservano, inalterata, la loro bellezza anche se lasciati nel campo per anni.
        </Typography>
        <Typography paragraph>
          Se gli ostacoli per il professionista sono uno strumento di lavoro, per molti altri appassionati rappresentano
          la realizzazione di un sogno. Noi abbiamo deciso di rendere questi strumenti resistenti nel tempo per fare in
          modo che questo sogno duri.
        </Typography>
        <Typography>
          Potrete scegliere le quantità e i colori nella nostra gamma di produzione e acquistare anche singoli pezzi di
          ricambio.
        </Typography>
      </Trans>
    </Section>

    <Section id="barriere" color="warm1">
      <Barriere />
    </Section>

    <Section id="fosso">
      <Fosso />
    </Section>

    <Section id="cavalletti" color="warm1">
      <Cavalletti />
    </Section>

    <Section id="cubi">
      <Cubi />
    </Section>

    <Section id="candelierilameforate" color="warm1">
      <CandelieriLameForate />
    </Section>

    <Section id="cucchiai">
      <Cucchiai />
    </Section>

    <Section id="segnaletica" color="warm1">
      <Segnaletica />
    </Section>
  </>
)

export default Ostacoli
