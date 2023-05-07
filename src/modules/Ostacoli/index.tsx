import { Trans, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Typography } from "@mui/material";
import ostacoliBandierine from "assets/products/ostacoli/bandierine.jpg";
import ostacoliBarriere_01 from "assets/products/ostacoli/barriere-01.png";
import ostacoliBarriere_02 from "assets/products/ostacoli/barriere-02.png";
import ostacoliBarriere_03 from "assets/products/ostacoli/barriere-03.png";
import ostacoliCandelierePvc_01 from "assets/products/ostacoli/candeliere-pvc-01.png";
import ostacoliCandelierePvc_02 from "assets/products/ostacoli/candeliere-pvc-02.png";
// import ostacoliCandelierePvc_03 from "assets/products/ostacoli/candeliere-pvc-03.png";
// import ostacoliCandelierePvc_04 from "assets/products/ostacoli/candeliere-pvc-04.jpg";
import ostacoliCavalletto_01 from "assets/products/ostacoli/cavalletto-01.png";
import ostacoliCavallettoBarriera_01 from "assets/products/ostacoli/cavalletto-barriera-01.png";
import ostacoliCubiMaxi_01 from "assets/products/ostacoli/cubi-maxi-01.png";
import ostacoliCubiMaxi_02 from "assets/products/ostacoli/cubi-maxi-02.png";
import ostacoliCubiMaxi_03 from "assets/products/ostacoli/cubi-maxi-03.png";
import ostacoliCubiMini_01 from "assets/products/ostacoli/cubi-mini-01.png";
import ostacoliCubiMini_02 from "assets/products/ostacoli/cubi-mini-02.png";
import ostacoliCubiMini_03 from "assets/products/ostacoli/cubi-mini-03.png";
import ostacoliCucchiaioDe_01 from "assets/products/ostacoli/cucchiaio-de-01.png";
import ostacoliCucchiaioDe_02 from "assets/products/ostacoli/cucchiaio-de-02.png";
import ostacoliCucchiaioDe_03 from "assets/products/ostacoli/cucchiaio-de-03.png";
import ostacoliCucchiaioPs_01 from "assets/products/ostacoli/cucchiaio-ps-01.png";
import ostacoliCucchiaioPs_02 from "assets/products/ostacoli/cucchiaio-ps-02.png";
import ostacoliCucchiaioPs_03 from "assets/products/ostacoli/cucchiaio-ps-03.png";
import ostacoliFosso from "assets/products/ostacoli/fosso.png";
// import ostacoliLamaDe_01 from "assets/products/ostacoli/lama-de-01.png";
import ostacoliLamaDe_50 from "assets/products/ostacoli/lama-de-50.png";
import ostacoliLamaDe_150 from "assets/products/ostacoli/lama-de-150.png";
import ostacoliNumeroLight from "assets/products/ostacoli/numero-light.png";
import ostacoliNumeroProfessional from "assets/products/ostacoli/numero-professional.png";
import ostacoliSupportoDiSicurezza_01 from "assets/products/ostacoli/supporto-di-sicurezza-01.png";
import ostacoliSupportoDiSicurezza_03 from "assets/products/ostacoli/supporto-di-sicurezza-03.png";
import ostacoliSupportoDiSicurezza_04 from "assets/products/ostacoli/supporto-di-sicurezza-04.png";
import { Section, Th } from "components";
import { ProductData } from "components/Product";
import { usePages } from "hooks";
import React from "react";
import { Colors } from "theme";
import { Material } from "utils/constants";
import Barriere from "./Barriere";
import CandelieriLameForate from "./CandelieriElameForate";
import Cavalletti from "./Cavalletti";
import Cubi from "./Cubi";
import Cucchiai from "./CucchiaiSegnaletica";
import Fosso from "./Fosso";
import Segnaletica from "./Segnaletica";
import { formatSize } from "utils/format";
import { ProductId } from "@prisma/client";
import { getServerSidePropsWithProducts } from "utils/getProps";

export const getServerSideProps = getServerSidePropsWithProducts([
  ProductId.OSTACOLI_BARRIERA_3_MT,
  ProductId.OSTACOLI_FOSSO,
  ProductId.OSTACOLI_CAVALLETTI_CAPRILLI,
  ProductId.OSTACOLI_CAVALLETTI_CAPRILLI_BARRIERA_KIT,
  ProductId.OSTACOLI_CUBI_MINI,
  ProductId.OSTACOLI_CUBI_MAXI,
  ProductId.OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_170,
  ProductId.OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_190,
  ProductId.OSTACOLI_LAMA_DE_50,
  ProductId.OSTACOLI_LAMA_DE_150,
  ProductId.OSTACOLI_CUCCHIAIO_DE,
  ProductId.OSTACOLI_CUCCHIAIO_PS,
  ProductId.OSTACOLI_SUPPORTO_SICUREZZA,
  ProductId.OSTACOLI_BANDIERINE,
  ProductId.OSTACOLI_NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
  ProductId.OSTACOLI_NUMERO_CAMPO_OSTACOLI_LIGHT,
]);

type OstacoliProps = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const Ostacoli: React.FC<OstacoliProps> = ({ products }) => {
  const { PAGES } = usePages();
  useLingui(); // Fix on locale change
  const { YELLOW, GREEN, WHITE, BLU, RED } = Colors;

  const BARRIERE: ProductData[] = [
    {
      ...products.OSTACOLI_BARRIERA_3_MT,
      name: t`Barriera 3 mt.`,
      description: t`Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
      pictures: [ostacoliBarriere_01, ostacoliBarriere_02, ostacoliBarriere_03],
      colors: [BLU, GREEN, RED, WHITE, YELLOW],
    },
  ];

  const FOSSI: ProductData[] = [
    {
      ...products.OSTACOLI_FOSSO,
      name: t`Fosso`,
      pictures: [ostacoliFosso],
    },
  ];

  const CAVALLETTI: ProductData[] = [
    {
      ...products.OSTACOLI_CAVALLETTI_CAPRILLI,
      name: t`Cavalletti Caprilli`,
      description: (
        <Trans>
          Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.{" "}
          <small>(il prezzo é per un singolo cavalletto)</small>
        </Trans>
      ),
      pictures: [ostacoliCavalletto_01],
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
    },
    {
      ...products.OSTACOLI_CAVALLETTI_CAPRILLI_BARRIERA_KIT,
      name: t`Kit Cavalletti Caprilli + barriera`,
      description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
      pictures: [ostacoliCavallettoBarriera_01],
    },
  ];

  const CUBI: ProductData[] = [
    {
      ...products.OSTACOLI_CUBI_MINI,
      name: t`Cubi mini`,
      pictures: [ostacoliCubiMini_01, ostacoliCubiMini_02, ostacoliCubiMini_03],
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
    },
    {
      ...products.OSTACOLI_CUBI_MAXI,
      name: t`Cubi maxi`,
      pictures: [ostacoliCubiMaxi_01, ostacoliCubiMaxi_02, ostacoliCubiMaxi_03],
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
    },
  ];

  const CANDELIERI_LAME_FORATE: ProductData[] = [
    {
      name: t`Candeliere da ${formatSize(1700)} con piede in PVC`,
      ...products.OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_170,
      description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      pictures: [ostacoliCandelierePvc_02],
    },
    {
      name: t`Candeliere da ${formatSize(1900)} con piede in PVC`,
      ...products.OSTACOLI_CANDELIERE_CON_PIEDE_IN_PVC_190,
      description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      pictures: [ostacoliCandelierePvc_01],
    },
    {
      ...products.OSTACOLI_LAMA_DE_50,
      name: t`Lama DE da ${formatSize(500)}`,
      materials: [Material.ACCIAIO_ZINCATO],
      description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      pictures: [ostacoliLamaDe_50],
    },
    {
      ...products.OSTACOLI_LAMA_DE_150,
      name: t`Lama DE da ${formatSize(1500)}`,
      materials: [Material.ACCIAIO_ZINCATO],
      description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      pictures: [ostacoliLamaDe_150],
    },
  ];

  const CUCCHIAI_MODELS = {
    DE: "DE",
    PS: "PS",
  };

  const CUCCHIAI: ProductData[] = [
    {
      ...products.OSTACOLI_CUCCHIAIO_DE,
      name: t`Cucchiaio ${CUCCHIAI_MODELS.DE}`,
      description: t`Il cucchiaio standard utilizzato al livello internazionale`,
      pictures: [
        ostacoliCucchiaioDe_01,
        ostacoliCucchiaioDe_02,
        ostacoliCucchiaioDe_03,
      ],
      materials: [Material.TECNOPOLIMERO],
    },
    {
      ...products.OSTACOLI_CUCCHIAIO_PS,
      name: t`Cucchiaio ${CUCCHIAI_MODELS.PS}`,
      description: t`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
      pictures: [
        ostacoliCucchiaioPs_01,
        ostacoliCucchiaioPs_02,
        ostacoliCucchiaioPs_03,
      ],
      materials: [Material.TECNOPOLIMERO],
    },
    {
      ...products.OSTACOLI_SUPPORTO_SICUREZZA,
      name: t`Supporto di sicurezza`,
      description: t`Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri cavalli in maniera efficace ed economica.`,
      pictures: [
        ostacoliSupportoDiSicurezza_01,
        ostacoliSupportoDiSicurezza_03,
        ostacoliSupportoDiSicurezza_04,
      ],
      materials: [Material.PLASTICA],
    },
  ];

  const SEGNALETICA_MODELS = {
    PROFESSIONAL: "professional",
    LIGHT: "light",
  };

  const SEGNALETICA: ProductData[] = [
    {
      ...products.OSTACOLI_BANDIERINE,
      name: t`Bandierine`,
      pictures: [ostacoliBandierine],
      materials: [Material.PLASTICA],
    },
    {
      ...products.OSTACOLI_NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.PROFESSIONAL}`,
      pictures: [ostacoliNumeroProfessional],
      materials: [Material.POLIETILENE],
    },
    {
      ...products.OSTACOLI_NUMERO_CAMPO_OSTACOLI_LIGHT,
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.LIGHT}`,
      pictures: [ostacoliNumeroLight],
      materials: [Material.POLIPROPILENE],
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
