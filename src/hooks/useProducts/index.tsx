import { Trans, t } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Ul } from "components";
import { ProductData } from "components/Product";
import usePages from "hooks/usePages";
import { Colors } from "theme";
import {
  CUBI_MODELS,
  CUCCHIAI_MODELS,
  DRESSAGE_MODELS,
  Material,
  SEGNALETICA_MODELS,
} from "utils/constants";
import { formatSize, formatSizeMeter } from "utils/format";

export enum ProductId {
  DRESSAGE_OLYMPIC_LETTERA = "DRESSAGE_OLYMPIC_LETTERA",
  DRESSAGE_OLYMPIC_MODULO = "DRESSAGE_OLYMPIC_MODULO",
  DRESSAGE_OLYMPIC_RETTANGOLO_20X40 = "DRESSAGE_OLYMPIC_RETTANGOLO_20X40",
  DRESSAGE_OLYMPIC_RETTANGOLO_20X60 = "DRESSAGE_OLYMPIC_RETTANGOLO_20X60",
  DRESSAGE_TRAINING_LETTERA = "DRESSAGE_TRAINING_LETTERA",
  DRESSAGE_TRAINING_MODULO = "DRESSAGE_TRAINING_MODULO",
  DRESSAGE_TRAINING_RETTANGOLO_20X40 = "DRESSAGE_TRAINING_RETTANGOLO_20X40",
  DRESSAGE_TRAINING_RETTANGOLO_20X60 = "DRESSAGE_TRAINING_RETTANGOLO_20X60",
  OSTACOLI_BANDIERINE = "OSTACOLI_BANDIERINE",
  BARRIERA_3_MT = "BARRIERA_3_MT",
  CANDELIERE_CON_PIEDE_IN_PVC_170 = "CANDELIERE_CON_PIEDE_IN_PVC_170",
  CANDELIERE_CON_PIEDE_IN_PVC_190 = "CANDELIERE_CON_PIEDE_IN_PVC_190",
  CANDELIERE_CON_PIEDE_IN_PVC = "CANDELIERE_CON_PIEDE_IN_PVC",
  CAVALLETTI_CAPRILLI_BARRIERA_KIT = "CAVALLETTI_CAPRILLI_BARRIERA_KIT",
  CAVALLETTI_CAPRILLI = "CAVALLETTI_CAPRILLI",
  CUBI_MAXI = "CUBI_MAXI",
  CUBI_MINI = "CUBI_MINI",
  CUCCHIAIO_DE = "CUCCHIAIO_DE",
  CUCCHIAIO_PS = "CUCCHIAIO_PS",
  FOSSO = "FOSSO",
  LAMA_DE_150 = "LAMA_DE_150",
  LAMA_DE_50_150_CM = "LAMA_DE_50_150_CM",
  LAMA_DE_50 = "LAMA_DE_50",
  NUMERO_CAMPO_OSTACOLI_LIGHT = "NUMERO_CAMPO_OSTACOLI_LIGHT",
  NUMERO_CAMPO_OSTACOLI_PROFESSIONAL = "NUMERO_CAMPO_OSTACOLI_PROFESSIONAL",
  SUPPORTO_SICUREZZA = "SUPPORTO_SICUREZZA",
  RECINZIONE_1_FILAGNA = "RECINZIONE_1_FILAGNA",
  RECINZIONE_2_FILAGNE = "RECINZIONE_2_FILAGNE",
  RECINZIONE_3_FILAGNE = "RECINZIONE_3_FILAGNE",
  RECINZIONE_4_FILAGNE = "RECINZIONE_4_FILAGNE",
  RECINZIONE_PIEDE_MOBILE = "RECINZIONE_PIEDE_MOBILE",
  TONDINO_1320 = "TONDINO_1320",
  TONDINO_1500 = "TONDINO_1500",
  TONDINO_1660 = "TONDINO_1660",
  TONDINO_1830 = "TONDINO_1830",
  TONDINO_1990 = "TONDINO_1990",
  GIOSTRA_4_CAVALLI_1200_SOLO_MOTORE = "GIOSTRA_4_CAVALLI_1200_SOLO_MOTORE",
  GIOSTRA_6_CAVALLI_1440_SOLO_MOTORE = "GIOSTRA_6_CAVALLI_1440_SOLO_MOTORE",
  GIOSTRA_6_CAVALLI_1600_SOLO_MOTORE = "GIOSTRA_6_CAVALLI_1600_SOLO_MOTORE",
  GIOSTRA_6_CAVALLI_1760_SOLO_MOTORE = "GIOSTRA_6_CAVALLI_1760_SOLO_MOTORE",
  GIOSTRA_8_CAVALLI_1920_SOLO_MOTORE = "GIOSTRA_8_CAVALLI_1920_SOLO_MOTORE",
}

type ProductList = { [key in keyof typeof ProductId]: ProductData };

const useProducts = (): ProductList => {
  const { PRODUCTS } = usePages();
  const { BLU, GREEN, RED, WHITE, YELLOW } = Colors;

  const SIZE_20x40 = { letters: 8, modules: 60, size: "20x40" };
  const SIZE_20x60 = { letters: 12, modules: 80, size: "20x60" };

  const DESCRIPTION_20x40 = (
    <Trans>
      <p>
        Un set per creare un circuito dressage standard da {SIZE_20x40.size} mt.
      </p>
      <p>Il set contiene:</p>
      <ul>
        <li>{SIZE_20x40.modules} moduli</li>
        <li>{SIZE_20x40.letters} lettere</li>
      </ul>
    </Trans>
  );

  const DESCRIPTION_20x60 = (
    <Trans>
      <p>
        Un set per creare un circuito dressage standard da {SIZE_20x60.size} mt.
      </p>
      <p>Il set contiene:</p>
      <ul>
        <li>{SIZE_20x60.modules} moduli</li>
        <li>{SIZE_20x60.letters} lettere</li>
      </ul>
    </Trans>
  );

  const PRODUCTS_LIST: ProductData[] = [
    // OSTACOLI

    {
      colors: [BLU, GREEN, RED, WHITE, YELLOW],
      description: t`Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
      dimensions: {
        height: 9.5,
        length: 299,
        weight: 9.75,
        width: 9.5,
      },
      id: ProductId.BARRIERA_3_MT,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.BARRIERA_3_MT}`,
      name: t`Barriera per campo ostacoli (3 mt.)`,
      pictures: [
        require("assets/products/ostacoli/barriere-01.png"),
        require("assets/products/ostacoli/barriere-02.png"),
        require("assets/products/ostacoli/barriere-03.png"),
      ],
      price: 50,
    },
    {
      description: t`Fosso in PVC di alta qualità, progettato per allenamenti e competizioni equestri. Resistente agli agenti atmosferici, leggero e facile da spostare, questo ostacolo garantisce durabilità e sicurezza. Ideale per preparare i cavalli alle sfide di salto più impegnative.`,
      dimensions: {
        height: 8,
        length: 150,
        width: 280,
      },
      id: ProductId.FOSSO,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.FOSSO}`,
      name: t`Fosso`,
      pictures: [require("assets/products/ostacoli/fosso.png")],
      price: 440,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: t`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
      dimensions: {
        height: 50,
        length: 50,
        weight: 2,
        width: 200,
      },
      id: ProductId.CAVALLETTI_CAPRILLI,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CAVALLETTI_CAPRILLI}`,
      name: t`Cavalletti Caprilli`,
      pictures: [require("assets/products/ostacoli/cavalletto-01.png")],
      price: 34,
    },
    {
      description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
      dimensions: {
        height: 50,
        length: 50,
        weight: 5.3,
        width: 200,
      },
      id: ProductId.CAVALLETTI_CAPRILLI_BARRIERA_KIT,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CAVALLETTI_CAPRILLI_BARRIERA_KIT}`,
      name: t`Kit Cavalletti Caprilli + barriera`,
      pictures: [
        require("assets/products/ostacoli/cavalletto-barriera-01.png"),
      ],
      price: 92,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: t`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
      dimensions: {
        height: 57,
        length: 37,
        weight: 3,
        width: 35,
      },
      id: ProductId.CUBI_MINI,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CUBI_MINI}`,
      name: t`Cubi ${CUBI_MODELS.MINI}`,
      pictures: [
        require("assets/products/ostacoli/cubi-mini-01.png"),
        require("assets/products/ostacoli/cubi-mini-02.png"),
        require("assets/products/ostacoli/cubi-mini-03.png"),
      ],
      price: 40,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: t`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
      dimensions: {
        height: 70,
        length: 57,
        weight: 5,
        width: 37,
      },

      id: ProductId.CUBI_MAXI,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CUBI_MAXI}`,
      name: t`Cubi ${CUBI_MODELS.MAXI}`,
      pictures: [
        require("assets/products/ostacoli/cubi-maxi-01.png"),
        require("assets/products/ostacoli/cubi-maxi-02.png"),
        require("assets/products/ostacoli/cubi-maxi-03.png"),
      ],
      price: 70,
    },
    {
      description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      dimensions: {
        height: 170,
        length: 72,
        weight: 7,
        width: 72,
      },
      id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_170,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CANDELIERE_CON_PIEDE_IN_PVC_170}`,
      name: t`Candeliere da ${formatSize(170)} con piede in PVC`,
      pictures: [require("assets/products/ostacoli/candeliere-pvc-02.png")],
      price: 89,
    },
    {
      description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      dimensions: {
        height: 190,
        length: 72,
        weight: 7,
        width: 72,
      },
      id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_190,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CANDELIERE_CON_PIEDE_IN_PVC_190}`,
      name: t`Candeliere da ${formatSize(190)} con piede in PVC`,
      pictures: [require("assets/products/ostacoli/candeliere-pvc-01.png")],
      price: 96,
    },
    {
      description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      dimensions: {
        height: 2,
        length: 50,
        width: 6.5,
      },
      id: ProductId.LAMA_DE_50,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.LAMA_DE_50}`,
      materials: [Material.ACCIAIO_ZINCATO],
      name: t`Lama DE da ${formatSize(50)}`,
      pictures: [require("assets/products/ostacoli/lama-de-150.png")],
      price: 8.5,
    },
    {
      description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      dimensions: {
        height: 2,
        length: 150,
        width: 6.5,
      },
      id: ProductId.LAMA_DE_150,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.LAMA_DE_150}`,
      materials: [Material.ACCIAIO_ZINCATO],
      name: t`Lama DE da ${formatSize(1500)}`,
      pictures: [require("assets/products/ostacoli/lama-de-50.png")],
      price: 17,
    },
    {
      description: t`Il cucchiaio standard utilizzato al livello internazionale`,
      dimensions: {
        height: 11,
        length: 11,
        weight: 0.15,
        width: 11,
      },
      id: ProductId.CUCCHIAIO_DE,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CUCCHIAIO_DE}`,
      materials: [Material.TECNOPOLIMERO],
      name: t`Cucchiaio ${CUCCHIAI_MODELS.DE}`,
      pictures: [
        require("assets/products/ostacoli/cucchiaio-de-01.png"),
        require("assets/products/ostacoli/cucchiaio-de-02.png"),
        require("assets/products/ostacoli/cucchiaio-de-03.png"),
      ],
      price: 3.5,
    },
    {
      description: t`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
      dimensions: {
        height: 11,
        length: 11,
        weight: 0.15,
        width: 11,
      },
      id: ProductId.CUCCHIAIO_PS,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.CUCCHIAIO_PS}`,
      materials: [Material.TECNOPOLIMERO],
      name: t`Cucchiaio ${CUCCHIAI_MODELS.PS}`,
      pictures: [
        require("assets/products/ostacoli/cucchiaio-ps-01.png"),
        require("assets/products/ostacoli/cucchiaio-ps-02.png"),
        require("assets/products/ostacoli/cucchiaio-ps-03.png"),
      ],
      price: 4.5,
    },
    {
      description: t`Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri cavalli in maniera efficace ed economica.`,
      dimensions: {
        height: 10,
        length: 3,
        weight: 0.05,
        width: 7,
      },
      id: ProductId.SUPPORTO_SICUREZZA,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.SUPPORTO_SICUREZZA}`,
      materials: [Material.PLASTICA],
      name: t`Supporto di sicurezza`,
      pictures: [
        require("assets/products/ostacoli/supporto-di-sicurezza-01.png"),
        require("assets/products/ostacoli/supporto-di-sicurezza-03.png"),
        require("assets/products/ostacoli/supporto-di-sicurezza-04.png"),
      ],
      price: 4,
    },
    {
      description: t`Bandierine realizzate in plastica resistente agli urti. Ideali per allenamenti e competizioni, offrono una visibilità eccellente e una lunga durata nel tempo.`,
      dimensions: {
        height: 25,
        length: 1.5,
        width: 20,
      },
      id: ProductId.OSTACOLI_BANDIERINE,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.OSTACOLI_BANDIERINE}`,
      materials: [Material.PLASTICA],
      name: t`Bandierine`,
      pictures: [require("assets/products/ostacoli/bandierine.jpg")],
      price: 2.1,
    },
    {
      description: t`Numero per campo ostacoli costruito in materiali robusti e leggeri. La forma piramidale ne assicurano la stabilitá. Perfetto per essere utilizzato in percorsi di salto ostacoli per cavalli.`,
      dimensions: {
        height: 30,
        length: 30,
        weight: 2.3,
        width: 20,
      },
      id: ProductId.NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.NUMERO_CAMPO_OSTACOLI_PROFESSIONAL}`,
      materials: [Material.POLIETILENE],
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.PROFESSIONAL}`,
      pictures: [require("assets/products/ostacoli/numero-professional.png")],
      price: 26,
    },
    {
      description: t`Numero per campo ostacoli costruito in materiali robusti e leggeri. La forma piramidale ne assicurano la stabilitá. Perfetto per essere utilizzato in percorsi di salto ostacoli per cavalli.`,
      dimensions: {
        height: 33,
        length: 30,
        weight: 1.25,
        width: 33,
      },
      id: ProductId.NUMERO_CAMPO_OSTACOLI_LIGHT,
      link: `${PRODUCTS.OSTACOLI.url}#${ProductId.NUMERO_CAMPO_OSTACOLI_LIGHT}`,
      materials: [Material.POLIPROPILENE],
      name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.LIGHT}`,
      pictures: [require("assets/products/ostacoli/numero-light.png")],
      price: 22,
    },

    // RECINTI
    {
      colors: [Colors.WHITE],
      description: t`La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa`,
      dimensions: {
        height: 125,
      },
      id: ProductId.RECINZIONE_1_FILAGNA,
      link: PRODUCTS.RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: t`Recinzione cavalli a ${1} filagna`,
      pictures: [require("assets/products/recinti/svg-1.webp")],
    },
    {
      colors: [Colors.WHITE],
      description: t`La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente`,
      dimensions: {
        height: 140,
      },
      id: ProductId.RECINZIONE_2_FILAGNE,
      link: PRODUCTS.RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: t`Recinzione cavalli a ${2} filagne`,
      pictures: [require("assets/products/recinti/svg-2.webp")],
    },
    {
      colors: [Colors.WHITE],
      description: t`La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è possibile installare un impianto d'elettrificazione sulle filagne`,
      dimensions: {
        height: 165,
      },
      id: ProductId.RECINZIONE_3_FILAGNE,
      link: PRODUCTS.RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: t`Recinzione cavalli a ${3} filagne`,
      pictures: [require("assets/products/recinti/svg-3.webp")],
    },
    {
      colors: [Colors.WHITE],
      description: t`Le recinzioni a quattro filagne sono utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in libertà`,
      dimensions: {
        height: 195,
      },
      id: ProductId.RECINZIONE_4_FILAGNE,
      link: PRODUCTS.RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: t`Recinzione cavalli a ${4} filagne`,
      pictures: [require("assets/products/recinti/svg-4.webp")],
    },
    {
      colors: [Colors.WHITE, Colors.GREEN],
      description: t`Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi consentirà di posizionarla e spostarla a seconda delle vostre esigenze`,
      dimensions: {
        height: 30,
      },
      id: ProductId.RECINZIONE_PIEDE_MOBILE,
      link: PRODUCTS.RECINTI.url,
      name: t`Piede mobile`,
      pictures: [
        require("assets/products/recinti/piede-mobile-2.png"),
        require("assets/products/recinti/piede-mobile-3.png"),
        require("assets/products/recinti/piede-mobile-4.jpg"),
      ],
      price: 35,
    },

    // DRESSAGE
    {
      colors: [Colors.WHITE],
      dimensions: {
        height: 30,
        length: 20,
        weight: 0.5,
        width: 20,
      },
      id: ProductId.DRESSAGE_TRAINING_LETTERA,
      link: PRODUCTS.DRESSAGE.url,
      materials: [Material.POLIETILENE],
      name: t`Lettera dressage (${DRESSAGE_MODELS.TRAINING})`,
      pictures: [require("assets/products/dressage/training-lettera.jpg")],
      price: 26,
    },
    {
      colors: [Colors.WHITE],
      dimensions: {
        height: 29,
        length: 40,
        weight: 3,
        width: 200,
      },
      id: ProductId.DRESSAGE_TRAINING_MODULO,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Modulo dressage (${DRESSAGE_MODELS.TRAINING})`,
      pictures: [
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
    },
    {
      description: DESCRIPTION_20x40,
      dimensions: {
        height: 30,
        length: 200,
        width: 400,
      },
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X40,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Rettangolo dressage ${SIZE_20x40.size} (${DRESSAGE_MODELS.TRAINING})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        require("assets/products/dressage/training-lettera.jpg"),
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
      price: 1400,
    },
    {
      description: DESCRIPTION_20x60,
      dimensions: {
        height: 30,
        length: 200,
        width: 600,
      },
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X60,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.TRAINING})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        require("assets/products/dressage/training-lettera.jpg"),
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
      price: 1800,
    },
    {
      colors: [Colors.WHITE],
      dimensions: {
        height: 70,
        length: 39,
        weight: 2.5,
        width: 39,
      },
      id: ProductId.DRESSAGE_OLYMPIC_LETTERA,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Lettera dressage (${DRESSAGE_MODELS.OLYMPIC})`,
      pictures: [require("assets/products/dressage/olympic-lettera.jpg")],
      price: 62,
    },
    {
      colors: [Colors.WHITE],
      dimensions: {
        height: 40,
        length: 40,
        weight: 5,
        width: 200,
      },
      id: ProductId.DRESSAGE_OLYMPIC_MODULO,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Modulo dressage (${DRESSAGE_MODELS.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
    },
    {
      description: DESCRIPTION_20x40,
      dimensions: {
        height: 70,
        length: 200,
        width: 400,
      },
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Rettangolo dressage ${SIZE_20x40.size} (${DRESSAGE_MODELS.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        require("assets/products/dressage/olympic-lettera.jpg"),
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
      price: 5940,
    },
    {
      description: DESCRIPTION_20x60,
      dimensions: {
        height: 70,
        length: 200,
        width: 600,
      },
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        require("assets/products/dressage/olympic-lettera.jpg"),
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
      price: 7920,
    },
    {
      description: DESCRIPTION_20x60,
      dimensions: {},
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
      link: PRODUCTS.DRESSAGE.url,
      name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
      ],
      price: 7920,
    },

    // GIOSTRE
    ...[
      {
        dimensions: {
          height: 220,
          length: 1200,
          width: 1200,
        },
        horses: 4,
        id: ProductId.GIOSTRA_4_CAVALLI_1200_SOLO_MOTORE,
        price: 5900,
      },
      {
        dimensions: {
          height: 220,
          length: 1440,
          width: 1440,
        },
        horses: 6,
        id: ProductId.GIOSTRA_6_CAVALLI_1440_SOLO_MOTORE,
        price: 7300,
      },
      {
        dimensions: {
          height: 220,
          length: 1600,
          width: 1600,
        },
        horses: 6,
        id: ProductId.GIOSTRA_6_CAVALLI_1600_SOLO_MOTORE,
        price: 7800,
      },
      {
        dimensions: {
          height: 220,
          length: 1760,
          width: 1760,
        },
        horses: 6,
        id: ProductId.GIOSTRA_6_CAVALLI_1760_SOLO_MOTORE,
        price: 7900,
      },
      {
        dimensions: {
          height: 220,
          length: 1920,
          width: 1920,
        },
        horses: 8,
        id: ProductId.GIOSTRA_8_CAVALLI_1920_SOLO_MOTORE,
        price: 9100,
      },
    ].map(({ id, price, horses, dimensions }) => ({
      description: (
        <Trans>
          <p>La parte meccanica per una giostra movimento cavalli.</p>
          <p>
            Il lotto comprende il motore centrale, le braccia, le porte mobili
            di separazione e la centralina elettrica.
          </p>
          <p>
            Porte mobili di separazioni comprensive di irrigazione e
            elettrificazione.
          </p>
          <p>
            Centralina elettrica con display, programma manuale, periodico e
            automatico.
          </p>
          <p>Ancoraggio a terra senza obbligo di plinto in cemento.</p>
        </Trans>
      ),
      dimensions,
      id,
      link: PRODUCTS.GIOSTRE.url,
      name: t`Giostra per ${horses} cavalli, solo motore (${formatSizeMeter(
        dimensions.width
      )})`,
      pictures: [
        require("assets/products/giostre/gallery/giostra-3.jpg"),
        require("assets/products/giostre/gallery/porta-mobile.jpg"),
      ],
      price,
    })),

    // TONDINI
    ...[
      {
        dimensions: {
          height: 475.4,
          length: 1320,
          width: 1320,
        },
        id: ProductId.TONDINO_1320,
        price: 20000,
        sides: 16,
      },
      {
        dimensions: {
          height: 475.4,
          length: 1500,
          width: 1500,
        },
        id: ProductId.TONDINO_1500,
        sides: 18,
      },
      {
        dimensions: {
          height: 6500,
          length: 1660,
          width: 1660,
        },
        id: ProductId.TONDINO_1660,
        sides: 20,
      },
      {
        dimensions: {
          height: 6500,
          length: 1830,
          width: 1830,
        },
        id: ProductId.TONDINO_1830,
        sides: 22,
      },
      {
        dimensions: {
          height: 6567,
          length: 1990,
          width: 1990,
        },
        id: ProductId.TONDINO_1990,
        sides: 24,
      },
    ].map(({ sides, dimensions, price, id }) => ({
      description: t`Tondino per cavalli coperto, ideale per allenamenti e addestramenti in ogni stagione. Realizzato con struttura robusta e materiali resistenti, offre protezione dagli agenti atmosferici. Facile da montare, garantisce sicurezza e comfort per cavalli e cavalieri, migliorando le prestazioni in un ambiente controllato.`,
      dimensions,
      id,
      link: PRODUCTS.TONDINI.url,
      name: t`Tondino coperto ${sides} pannelli ${formatSizeMeter(
        dimensions.width
      )}`,
      pictures: [
        require("assets/products/tondini/gallery/tondino-1.jpg"),
        require("assets/products/tondini/gallery/tondino-2.jpg"),
        require("assets/products/tondini/gallery/tondino-3.jpg"),
        require("assets/products/tondini/gallery/tondino-4.jpg"),
      ],
      price,
    })),
  ];

  return PRODUCTS_LIST.reduce(
    (products, product) => ({
      ...products,
      [product.id]: product,
    }),
    {} as ProductList
  );
};

export default useProducts;
