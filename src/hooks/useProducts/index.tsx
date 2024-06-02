import { Trans, t } from "@lingui/macro";
import { Description } from "@mui/icons-material";
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
import { formatSize } from "utils/format";

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
  TONDINO_15m0 = "TONDINO_1500",
  TONDINO_1660 = "TONDINO_1660",
  TONDINO_1830 = "TONDINO_1830",
  TONDINO_1990 = "TONDINO_1990",
  TONDINO_1500 = "TONDINO_1500",
}

const useUrlGenerator = () => ({
  getUrl: (fragments: string[]) => fragments.join("/"),
});

type ProductList = { [key in keyof typeof ProductId]: ProductData };

const useProducts = (): ProductList => {
  const { getUrl } = useUrlGenerator();
  const { PRODUCTS } = usePages();
  const { BLU, GREEN, RED, WHITE, YELLOW } = Colors;

  const SIZE_20x40 = { letters: 8, modules: 60, size: "20x40" };
  const SIZE_20x60 = { letters: 12, modules: 80, size: "20x60" };

  const DESCRIPTION_20x40 = (
    <Trans>
      <Typography paragraph>
        Un set per creare un circuito dressage standard da {SIZE_20x40.size} mt.
      </Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>{SIZE_20x40.modules} moduli</li>
        <li>{SIZE_20x40.letters} lettere</li>
      </Ul>
    </Trans>
  );

  const DESCRIPTION_20x60 = (
    <Trans>
      <Typography paragraph>
        Un set per creare un circuito dressage standard da {SIZE_20x60.size} mt.
      </Typography>
      <Typography paragraph>Il set contiene:</Typography>
      <Ul>
        <li>{SIZE_20x60.modules} moduli</li>
        <li>{SIZE_20x60.letters} lettere</li>
      </Ul>
    </Trans>
  );

  const PRODUCTS_LIST: ProductData[] = [
    // OSTACOLI
    ...[
      {
        colors: [BLU, GREEN, RED, WHITE, YELLOW],
        description: t`Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
        height: 95,
        id: ProductId.BARRIERA_3_MT,
        length: 2990,
        name: t`Barriera per campo ostacoli (3 mt.)`,
        pictures: [
          require("assets/products/ostacoli/barriere-01.png"),
          require("assets/products/ostacoli/barriere-02.png"),
          require("assets/products/ostacoli/barriere-03.png"),
        ],
        price: 50,
        weight: 9.75,
        width: 95,
      },
      {
        description: t`Fosso in PVC di alta qualità, progettato per allenamenti e competizioni equestri. Resistente agli agenti atmosferici, leggero e facile da spostare, questo ostacolo garantisce durabilità e sicurezza. Ideale per preparare i cavalli alle sfide di salto più impegnative.`,
        height: 80,
        id: ProductId.FOSSO,
        length: 1500,
        name: t`Fosso`,
        pictures: [require("assets/products/ostacoli/fosso.png")],
        price: 440,
        width: 2800,
      },
      {
        colors: [WHITE, BLU, YELLOW, RED, GREEN],
        description: t`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
        height: 500,
        id: ProductId.CAVALLETTI_CAPRILLI,
        length: 500,
        name: t`Cavalletti Caprilli`,
        pictures: [require("assets/products/ostacoli/cavalletto-01.png")],
        price: 34,
        weight: 2,
      },
      {
        description: t`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
        id: ProductId.CAVALLETTI_CAPRILLI_BARRIERA_KIT,
        length: 2000,
        name: t`Kit Cavalletti Caprilli + barriera`,
        pictures: [
          require("assets/products/ostacoli/cavalletto-barriera-01.png"),
        ],
        price: 92,
        weight: 5.3,
      },
      {
        colors: [WHITE, BLU, YELLOW, RED, GREEN],
        description: t`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
        height: 570,
        id: ProductId.CUBI_MINI,
        length: 370,
        name: t`Cubi ${CUBI_MODELS.MINI}`,
        pictures: [
          require("assets/products/ostacoli/cubi-mini-01.png"),
          require("assets/products/ostacoli/cubi-mini-02.png"),
          require("assets/products/ostacoli/cubi-mini-03.png"),
        ],
        price: 40,
        weight: 3,
        width: 350,
      },
      {
        colors: [WHITE, BLU, YELLOW, RED, GREEN],
        description: t`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
        height: 700,
        id: ProductId.CUBI_MAXI,
        length: 570,
        name: t`Cubi ${CUBI_MODELS.MAXI}`,
        pictures: [
          require("assets/products/ostacoli/cubi-maxi-01.png"),
          require("assets/products/ostacoli/cubi-maxi-02.png"),
          require("assets/products/ostacoli/cubi-maxi-03.png"),
        ],
        price: 70,
        weight: 5,
        width: 370,
      },
      {
        description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
        height: 1700,
        id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_170,
        length: 720,
        name: t`Candeliere da ${formatSize(1700)} con piede in PVC`,
        pictures: [require("assets/products/ostacoli/candeliere-pvc-02.png")],
        price: 89,
        weight: 7,
        width: 720,
      },
      {
        description: t`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
        height: 1900,
        id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_190,
        length: 720,
        name: t`Candeliere da ${formatSize(1900)} con piede in PVC`,
        pictures: [require("assets/products/ostacoli/candeliere-pvc-01.png")],
        price: 96,
        weight: 7,
        width: 720,
      },
      {
        description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
        height: 2,
        id: ProductId.LAMA_DE_50,
        length: 500,
        materials: [Material.ACCIAIO_ZINCATO],
        name: t`Lama DE da ${formatSize(500)}`,
        pictures: [require("assets/products/ostacoli/lama-de-150.png")],
        price: 8.5,
        width: 65,
      },
      {
        description: t`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
        height: 2,
        id: ProductId.LAMA_DE_150,
        length: 1500,
        materials: [Material.ACCIAIO_ZINCATO],
        name: t`Lama DE da ${formatSize(1500)}`,
        pictures: [require("assets/products/ostacoli/lama-de-50.png")],
        price: 17,
        width: 65,
      },
      {
        description: t`Il cucchiaio standard utilizzato al livello internazionale`,
        id: ProductId.CUCCHIAIO_DE,
        length: 20,
        materials: [Material.TECNOPOLIMERO],
        name: t`Cucchiaio ${CUCCHIAI_MODELS.DE}`,
        pictures: [
          require("assets/products/ostacoli/cucchiaio-ps-01.png"),
          require("assets/products/ostacoli/cucchiaio-ps-02.png"),
          require("assets/products/ostacoli/cucchiaio-ps-03.png"),
        ],
        price: 3.5,
        weight: 0.15,
      },
      {
        description: t`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
        id: ProductId.CUCCHIAIO_PS,
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
        id: ProductId.SUPPORTO_SICUREZZA,
        materials: [Material.PLASTICA],
        name: t`Supporto di sicurezza`,
        pictures: [
          require("assets/products/ostacoli/supporto-di-sicurezza-01.png"),
          require("assets/products/ostacoli/supporto-di-sicurezza-03.png"),
          require("assets/products/ostacoli/supporto-di-sicurezza-04.png"),
        ],
        price: 4,
        weight: 0.05,
        width: 37,
      },
      {
        description: t`Bandierine realizzate in plastica resistente agli urti. Ideali per allenamenti e competizioni, offrono una visibilità eccellente e una lunga durata nel tempo.`,
        id: ProductId.OSTACOLI_BANDIERINE,
        materials: [Material.PLASTICA],
        name: t`Bandierine`,
        pictures: [require("assets/products/ostacoli/bandierine.jpg")],
        price: 2.1,
      },
      {
        description: t`Numero per campo ostacoli costruito in materiali robusti e leggeri. La forma piramidale ne assicurano la stabilitá. Perfetto per essere utilizzato in percorsi di salto ostacoli per cavalli.`,
        height: 300,
        id: ProductId.NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
        materials: [Material.POLIETILENE],
        name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.PROFESSIONAL}`,
        pictures: [require("assets/products/ostacoli/numero-professional.png")],
        price: 26,
        weight: 2.3,
        width: 200,
      },
      {
        description: t`Numero per campo ostacoli costruito in materiali robusti e leggeri. La forma piramidale ne assicurano la stabilitá. Perfetto per essere utilizzato in percorsi di salto ostacoli per cavalli.`,
        height: 330,
        id: ProductId.NUMERO_CAMPO_OSTACOLI_LIGHT,
        materials: [Material.POLIPROPILENE],
        name: t`Numero per campo ostacoli ${SEGNALETICA_MODELS.LIGHT}`,
        pictures: [require("assets/products/ostacoli/numero-light.png")],
        price: 16,
        weight: 1.25,
        width: 330,
      },
    ].map((product) => ({
      ...product,
      link: getUrl([PRODUCTS.OSTACOLI.url, `#${product.id}`]),
    })),

    // RECINTI
    ...[
      {
        colors: [Colors.WHITE],
        description: t`La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa`,
        height: 1250,
        id: ProductId.RECINZIONE_1_FILAGNA,
        materials: [Material.POLIPROPILENE],
        name: t`Recinzione cavalli a ${1} filagna`,
        pictures: [require("assets/products/recinti/svg-1.webp")],
      },
      {
        colors: [Colors.WHITE],
        description: t`La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente`,
        height: 1400,
        id: ProductId.RECINZIONE_2_FILAGNE,
        materials: [Material.POLIPROPILENE],
        name: t`Recinzione cavalli a ${2} filagne`,
        pictures: [require("assets/products/recinti/svg-2.webp")],
      },
      {
        colors: [Colors.WHITE],
        description: t`La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è possibile installare un impianto d'elettrificazione sulle filagne`,
        height: 1650,
        id: ProductId.RECINZIONE_3_FILAGNE,
        materials: [Material.POLIPROPILENE],
        name: t`Recinzione cavalli a ${3} filagne`,
        pictures: [require("assets/products/recinti/svg-3.webp")],
      },
      {
        colors: [Colors.WHITE],
        description: t`Le recinzioni a quattro filagne sono utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in libertà`,
        height: 1950,
        id: ProductId.RECINZIONE_4_FILAGNE,
        materials: [Material.POLIPROPILENE],
        name: t`Recinzione cavalli a ${4} filagne`,
        pictures: [require("assets/products/recinti/svg-4.webp")],
      },
      {
        colors: [Colors.WHITE, Colors.GREEN],
        description: t`Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi consentirà di posizionarla e spostarla a seconda delle vostre esigenze`,
        height: 300,
        id: ProductId.RECINZIONE_PIEDE_MOBILE,
        name: t`Piede mobile`,
        pictures: [
          require("assets/products/recinti/piede-mobile-2.png"),
          require("assets/products/recinti/piede-mobile-3.png"),
          require("assets/products/recinti/piede-mobile-4.jpg"),
        ],
        price: 35,
      },
    ].map((product) => ({
      ...product,
      link: PRODUCTS.RECINTI.url,
    })),

    // DRESSAGE
    ...[
      {
        colors: [Colors.WHITE],
        height: 300,
        id: ProductId.DRESSAGE_TRAINING_LETTERA,
        materials: [Material.POLIETILENE],
        name: t`Lettera dressage (${DRESSAGE_MODELS.TRAINING})`,
        pictures: [require("assets/products/dressage/training-lettera.jpg")],
        price: 25.5,
        weight: 0.5,
        width: 200,
      },
      {
        colors: [Colors.WHITE],
        height: 285,
        id: ProductId.DRESSAGE_TRAINING_MODULO,
        name: t`Modulo dressage (${DRESSAGE_MODELS.TRAINING})`,
        pictures: [
          require("assets/products/dressage/training-modulo-dressage.jpg"),
        ],
        weight: 3,
        width: 2000,
      },
      {
        description: DESCRIPTION_20x40,
        id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X40,
        name: t`Rettangolo dressage ${SIZE_20x40.size} (${DRESSAGE_MODELS.TRAINING})`,
        pictures: [
          require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        ],
        price: 1400,
      },
      {
        description: DESCRIPTION_20x60,
        id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X60,
        name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.TRAINING})`,
        pictures: [
          require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        ],
        price: 1800,
      },
      {
        colors: [Colors.WHITE],
        height: 700,
        id: ProductId.DRESSAGE_OLYMPIC_LETTERA,
        name: t`Lettera dressage (${DRESSAGE_MODELS.OLYMPIC})`,
        pictures: [require("assets/products/dressage/olympic-lettera.jpg")],
        price: 62,
        weight: 2.5,
        width: 390,
      },
      {
        colors: [Colors.WHITE],
        height: 370,
        id: ProductId.DRESSAGE_OLYMPIC_MODULO,
        name: t`Modulo dressage (${DRESSAGE_MODELS.OLYMPIC})`,
        pictures: [
          require("assets/products/dressage/olympic-modulo-dressage.jpg"),
        ],
        weight: 5,
        width: 2000,
      },
      {
        description: DESCRIPTION_20x40,
        id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
        name: t`Rettangolo dressage ${SIZE_20x40.size} (${DRESSAGE_MODELS.OLYMPIC})`,
        pictures: [
          require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        ],
        price: 5940,
      },
      {
        description: DESCRIPTION_20x60,
        id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
        name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.OLYMPIC})`,
        pictures: [
          require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        ],
        price: 7920,
      },
      {
        description: DESCRIPTION_20x60,
        id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
        name: t`Rettangolo dressage ${SIZE_20x60.size} (${DRESSAGE_MODELS.OLYMPIC})`,
        pictures: [
          require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        ],
        price: 7920,
      },
    ].map((product) => ({
      ...product,
      link: PRODUCTS.DRESSAGE.url,
    })),

    // TONDINI
    ...[
      {
        id: ProductId.TONDINO_1320,
        price: 20000,
        sides: 16,
        size: 13.2,
      },
      {
        id: ProductId.TONDINO_1500,
        sides: 18,
        size: 15.0,
      },
      {
        id: ProductId.TONDINO_1660,
        sides: 20,
        size: 16.6,
      },
      {
        id: ProductId.TONDINO_1830,
        sides: 22,
        size: 18.3,
      },
      {
        id: ProductId.TONDINO_1990,
        sides: 24,
        size: 19.9,
      },
    ].map(({ sides, size, price, id }) => ({
      description: t`Tondino per cavalli coperto, ideale per allenamenti e addestramenti in ogni stagione. Realizzato con struttura robusta e materiali resistenti, offre protezione dagli agenti atmosferici. Facile da montare, garantisce sicurezza e comfort per cavalli e cavalieri, migliorando le prestazioni in un ambiente controllato.`,
      id,
      link: PRODUCTS.TONDINI.url,
      name: t`Tondino coperto ${sides} pannelli ${size} mt.`,
      pictures: [require("assets/products/tondini/gallery/tondino-1.jpg")],
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
