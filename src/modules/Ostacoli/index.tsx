import { Trans, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Typography } from "@mui/material";
import productsOstacoliBandierine from "assets/products/ostacoli/bandierine.jpg";
import productsOstacoliBarriere_01 from "assets/products/ostacoli/barriere-01.png";
import productsOstacoliBarriere_02 from "assets/products/ostacoli/barriere-02.png";
import productsOstacoliBarriere_03 from "assets/products/ostacoli/barriere-03.png";
import productsOstacoliCandelierePvc_01 from "assets/products/ostacoli/candeliere-pvc-01.png";
import productsOstacoliCandelierePvc_02 from "assets/products/ostacoli/candeliere-pvc-02.png";
import productsOstacoliCandelierePvc_03 from "assets/products/ostacoli/candeliere-pvc-03.png";
import productsOstacoliCavalletto_01 from "assets/products/ostacoli/cavalletto-01.png";
import productsOstacoliCavallettoBarriera_01 from "assets/products/ostacoli/cavalletto-barriera-01.png";
import productsOstacoliCubiMaxi_01 from "assets/products/ostacoli/cubi-maxi-01.png";
import productsOstacoliCubiMaxi_02 from "assets/products/ostacoli/cubi-maxi-02.png";
import productsOstacoliCubiMaxi_03 from "assets/products/ostacoli/cubi-maxi-03.png";
import productsOstacoliCubiMini_01 from "assets/products/ostacoli/cubi-mini-01.png";
import productsOstacoliCubiMini_02 from "assets/products/ostacoli/cubi-mini-02.png";
import productsOstacoliCubiMini_03 from "assets/products/ostacoli/cubi-mini-03.png";
import productsOstacoliCucchiaioDe_01 from "assets/products/ostacoli/cucchiaio-de-01.png";
import productsOstacoliCucchiaioDe_02 from "assets/products/ostacoli/cucchiaio-de-02.png";
import productsOstacoliCucchiaioDe_03 from "assets/products/ostacoli/cucchiaio-de-03.png";
import productsOstacoliCucchiaioPs_01 from "assets/products/ostacoli/cucchiaio-ps-01.png";
import productsOstacoliCucchiaioPs_02 from "assets/products/ostacoli/cucchiaio-ps-02.png";
import productsOstacoliCucchiaioPs_03 from "assets/products/ostacoli/cucchiaio-ps-03.png";
import productsOstacoliFosso from "assets/products/ostacoli/fosso.png";
import productsOstacoliLamaDe_01 from "assets/products/ostacoli/lama-de-01.png";
import productsOstacoliLamaDe_02 from "assets/products/ostacoli/lama-de-02.png";
import productsOstacoliLamaDe_03 from "assets/products/ostacoli/lama-de-03.png";
import productsOstacoliNumeroLight from "assets/products/ostacoli/numero-light.png";
import productsOstacoliNumeroProfessional from "assets/products/ostacoli/numero-professional.png";
import productsOstacoliSupportoDiSicurezza_01 from "assets/products/ostacoli/supporto-di-sicurezza-01.png";
import productsOstacoliSupportoDiSicurezza_03 from "assets/products/ostacoli/supporto-di-sicurezza-03.png";
import productsOstacoliSupportoDiSicurezza_04 from "assets/products/ostacoli/supporto-di-sicurezza-04.png";
import { Section, Th } from "components";
import { ProductData } from "components/Product";
import { usePages } from "hooks";
import React from "react";
import { Colors } from "theme";
import { MATERIALS } from "utils/constants";
import { ProductId } from "utils/products";
import Barriere from "./Barriere";
import CandelieriLameForate from "./CandelieriElameForate";
import Cavalletti from "./Cavalletti";
import Cubi from "./Cubi";
import Cucchiai from "./CucchiaiSegnaletica";
import Fosso from "./Fosso";
import Segnaletica from "./Segnaletica";
export { getStaticProps } from "utils/getProps";

const Ostacoli: React.FC = () => {
  const { PAGES } = usePages();
  useLingui(); // Fix on locale change

  const BARRIERE: ProductData[] = [
    {
      id: ProductId.Barriera_3Mt,
      name: t`Barriera 3 mt.`,
      description: t`Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
      pictures: [
        productsOstacoliBarriere_01,
        productsOstacoliBarriere_02,
        productsOstacoliBarriere_03,
      ],
      price: 50,
      weight: 9.75,
      length: 2990,
      diameter: 95,
      colors: [
        Colors.BLU,
        Colors.GREEN,
        Colors.RED,
        Colors.WHITE,
        Colors.YELLOW,
      ],
    },
  ];

  const FOSSI: ProductData[] = [
    {
      id: ProductId.Fosso,
      pictures: [productsOstacoliFosso],
      name: t`Fosso`,
      length: 1500,
      width: 2800,
      price: 440,
      height: 80,
    },
  ];

  const CAVALLETTI: ProductData[] = [
    {
      id: ProductId.CavallettiCaprilli,
      name: t`Cavalletti Caprilli`,
      description: t`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
      pictures: [productsOstacoliCavalletto_01],
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: [{ price: 34, note: <Trans>Singolo cavvalleto</Trans> }],
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
    {
      id: ProductId.CavallettiCaprilliBarrieraKit,
      name: t`Kit Cavalletti Caprilli + barriera`,
      description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
      pictures: [productsOstacoliCavallettoBarriera_01],
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 92,
    },
  ];

  const CUBI: ProductData[] = [
    {
      id: ProductId.CubiMini,
      name: t`Cubi mini`,
      pictures: [
        productsOstacoliCubiMini_01,
        productsOstacoliCubiMini_02,
        productsOstacoliCubiMini_03,
      ],
      width: 350,
      length: 370,
      height: 570,
      weight: 3,
      price: 38.5,
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
    {
      id: ProductId.CubiMaxi,
      name: t`Cubi maxi`,
      pictures: [
        productsOstacoliCubiMaxi_01,
        productsOstacoliCubiMaxi_02,
        productsOstacoliCubiMaxi_03,
      ],
      width: 370,
      length: 570,
      height: 700,
      weight: 5,
      price: 63.5,
      colors: [
        Colors.WHITE,
        Colors.BLU,
        Colors.YELLOW,
        Colors.RED,
        Colors.GREEN,
      ],
    },
  ];

  const CANDELIERI_LAME_FORATE: ProductData[] = [
    {
      name: t`Candeliere con piede in PVC`,
      id: ProductId.CandeliereConPiedeInPvc,
      description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      pictures: [
        productsOstacoliCandelierePvc_03,
        productsOstacoliCandelierePvc_02,
        productsOstacoliCandelierePvc_01,
      ],
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
      price: [
        { price: 89, note: <Trans>Altezza {170} cm.</Trans> },
        { price: 96, note: <Trans>Lama {190} cm.</Trans> },
      ],
    },
    {
      name: t`Lama DE da 50/150 cm.`,
      id: ProductId.LamaDe_50_150Cm,
      materials: [MATERIALS.ACCIAIO_ZINCATO],
      description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      pictures: [
        productsOstacoliLamaDe_02,
        productsOstacoliLamaDe_01,
        productsOstacoliLamaDe_03,
      ],
      length: 500,
      thickness: 2,
      width: 65,
      price: [
        { price: 8.5, note: <Trans>Lama {50} cm.</Trans> },
        { price: 17.0, note: <Trans>Lama {150} cm.</Trans> },
      ],
    },
  ];

  const CUCCHIAI_MODELS = {
    DE: "DE",
    PS: "PS",
  };

  const CUCCHIAI: ProductData[] = [
    {
      id: ProductId.CucchiaioDe,
      name: t`Cucchiaio ${CUCCHIAI_MODELS.DE}`,
      description: t`Il cucchiaio standard utilizzato al livello internazionale`,
      pictures: [
        productsOstacoliCucchiaioDe_01,
        productsOstacoliCucchiaioDe_02,
        productsOstacoliCucchiaioDe_03,
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      depth: 20,
      weight: 0.15,
      price: 3.5,
    },
    {
      id: ProductId.CucchiaioPs,
      name: t`Cucchiaio ${CUCCHIAI_MODELS.PS}`,
      description: t`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
      pictures: [
        productsOstacoliCucchiaioPs_01,
        productsOstacoliCucchiaioPs_02,
        productsOstacoliCucchiaioPs_03,
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      price: 4.5,
    },
    {
      id: ProductId.SupportoSicurezza,
      name: t`Supporto di sicurezza`,
      description: t`Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri cavalli in maniera efficace ed economica.`,
      pictures: [
        productsOstacoliSupportoDiSicurezza_01,
        productsOstacoliSupportoDiSicurezza_03,
        productsOstacoliSupportoDiSicurezza_04,
      ],
      materials: [MATERIALS.PLASTICA],
      width: 37,
      weight: 0.05,
      price: 4,
    },
  ];

  const SEGNALETICA_MODELS = {
    PROFESSIONAL: "professional",
    LIGHT: "light",
  };

  const SEGNALETICA: ProductData[] = [
    {
      id: ProductId.Bandierine,
      name: t`Bandierine`,
      pictures: [productsOstacoliBandierine],
      materials: [MATERIALS.PLASTICA],
      price: 2.1,
    },
    {
      id: ProductId.NumeroCampoOstacoliProfessional,
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.PROFESSIONAL}`,
      pictures: [productsOstacoliNumeroProfessional],
      materials: [MATERIALS.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 26,
    },
    {
      id: ProductId.NumeroCampoOstacoliLight,
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.LIGHT}`,
      pictures: [productsOstacoliNumeroLight],
      materials: [MATERIALS.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ];

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
          <Typography paragraph>
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

      <Section id="barriere" color="warm1">
        <Barriere products={BARRIERE} />
      </Section>

      <Section id="fosso">
        <Fosso products={FOSSI} />
      </Section>

      <Section id="cavalletti" color="warm1">
        <Cavalletti products={CAVALLETTI} />
      </Section>

      <Section id="cubi">
        <Cubi products={CUBI} />
      </Section>

      <Section id="candelierilameforate" color="warm1">
        <CandelieriLameForate products={CANDELIERI_LAME_FORATE} />
      </Section>

      <Section id="cucchiai">
        <Cucchiai products={CUCCHIAI} />
      </Section>

      <Section id="segnaletica" color="warm1">
        <Segnaletica products={SEGNALETICA} />
      </Section>
    </>
  );
};

export default Ostacoli;
