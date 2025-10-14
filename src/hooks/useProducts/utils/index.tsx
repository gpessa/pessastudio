import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { useFormatter } from "hooks";
import { getPages } from "hooks/usePages";
import { Colors } from "theme";
import { WEBISTE_URL } from "utils/constants";

import {
  CubiModels,
  CucchiaiModels,
  DressageData,
  DressageModels,
  Material,
  ProductId,
  SegnaleticaModels,
} from "../constants";

export type Price = {
  price: undefined | number;
};

export type ProductData = {
  pictures: any[];
  price?: Price["price"];
  description?: MessageDescriptor;
  name: MessageDescriptor;
  id: ProductId;
  colors?: Colors[];
  materials?: Material[];
  link: string;
  dimensions: {
    height?: number;
    length?: number;
    weight?: number;
    width?: number;
  };
};

export type ProductDataList = {
  [key in keyof typeof ProductId]: ProductData;
};

export const getProducts = (locale: string): ProductDataList => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { formatSize, formatSizeMeter } = useFormatter();

  const {
    PRODUCTS: { OSTACOLI, RECINTI, DRESSAGE, GIOSTRE, TONDINI },
  } = getPages(locale);

  const { BLU, GREEN, RED, WHITE, YELLOW, ORANGE, LIGHT_BLUE, BROWN, BLACK } =
    Colors;

  // const DESCRIPTION_20x40 = (
  //   <Trans component={Box}>
  //     <p>
  //       Un set per creare un circuito dressage standard da{" "}
  //       {DressageData.SIZE_20x40.size} mt.
  //     </p>
  //     <p>Il set contiene:</p>
  //     <ul>
  //       <li>{DressageData.SIZE_20x40.modules} moduli</li>
  //     </ul>
  //   </Trans>
  // );

  // const DESCRIPTION_20x60 = (
  //   <Trans>
  //     <p>
  //       Un set per creare un circuito dressage standard da{" "}
  //       {DressageData.SIZE_20x60.size} mt.
  //     </p>
  //     <p>Il set contiene:</p>
  //     <ul>
  //       <li>{DressageData.SIZE_20x60.modules} moduli</li>
  //     </ul>
  //   </Trans>
  // );

  const DESCRIPTION_LETTERE = msg`Trasforma qualsiasi terreno in un'arena da dressage con questi coni da dressage. Facili da posizionare, leggeri e anche sicuri per il tuo cavallo. Le nostre lettere in PVC resistente ai raggi solari sono durevoli e leggibili in tutte le condizioni climatiche. Facili da posizionare, offrono un'ottima resistenza agli agenti atmosferici a un prezzo conveniente.`;

  const PRODUCTS_LIST: ProductData[] = [
    // OSTACOLI
    {
      colors: [
        BLU,
        GREEN,
        RED,
        WHITE,
        YELLOW,
        ORANGE,
        LIGHT_BLUE,
        BROWN,
        BLACK,
      ],
      description: msg`Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione`,
      dimensions: {
        height: 9.5,
        length: 299,
        weight: 9.75,
        width: 9.5,
      },
      id: ProductId.BARRIERA_3_MT,
      link: `${OSTACOLI.url}#${ProductId.BARRIERA_3_MT}`,
      name: msg`Barriera per campo ostacoli (3 mt.)`,
      pictures: [
        require("assets/products/ostacoli/barriere-01.png"),
        require("assets/products/ostacoli/barriere-02.png"),
        require("assets/products/ostacoli/barriere-03.png"),
      ],
      price: 55,
    },
    {
      description: msg`Fosso in PVC di alta qualità, progettato per allenamenti e competizioni equestri. Resistente agli agenti atmosferici, leggero e facile da spostare, questo ostacolo garantisce durabilità e sicurezza. Ideale per preparare i cavalli alle sfide di salto più impegnative.`,
      dimensions: {
        height: 8,
        length: 150,
        width: 280,
      },
      id: ProductId.FOSSO,
      link: `${OSTACOLI.url}#${ProductId.FOSSO}`,
      name: msg`Fosso`,
      pictures: [require("assets/products/ostacoli/fosso.png")],
      price: 440,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: msg`Singolo cavalletto abbinabile a barriere diametro 90, 95, 100, 105 mm.`,
      dimensions: {
        height: 50,
        length: 50,
        weight: 2,
        width: 200,
      },
      id: ProductId.CAVALLETTI_CAPRILLI,
      link: `${OSTACOLI.url}#${ProductId.CAVALLETTI_CAPRILLI}`,
      name: msg`Cavalletti Caprilli`,
      pictures: [require("assets/products/ostacoli/cavalletto-01.png")],
      price: 40,
    },
    {
      description: msg`Kit comprensivo di 2 cavalletti e una barriera in PPO di colore bianco, diametro 95, lunghezza 2 mt.`,
      dimensions: {
        height: 50,
        length: 50,
        weight: 5.3,
        width: 200,
      },
      id: ProductId.CAVALLETTI_CAPRILLI_BARRIERA_KIT,
      link: `${OSTACOLI.url}#${ProductId.CAVALLETTI_CAPRILLI_BARRIERA_KIT}`,
      name: msg`Kit Cavalletti Caprilli + barriera`,
      pictures: [
        require("assets/products/ostacoli/cavalletto-barriera-01.png"),
      ],
      price: 105,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: msg`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
      dimensions: {
        height: 57,
        length: 37,
        weight: 3,
        width: 35,
      },
      id: ProductId.CUBI_MINI,
      link: `${OSTACOLI.url}#${ProductId.CUBI_MINI}`,
      name: msg`Cubi ${CubiModels.MINI}`,
      pictures: [
        require("assets/products/ostacoli/cubi-mini-01.png"),
        require("assets/products/ostacoli/cubi-mini-02.png"),
        require("assets/products/ostacoli/cubi-mini-03.png"),
      ],
      price: 47.5,
    },
    {
      colors: [WHITE, BLU, YELLOW, RED, GREEN],
      description: msg`I cubi sono progettati in maniera da poterli incastrare tra di loro. Questo rende questi blocchi da salto più sicuri, stabili e versatili di qualsiasi cosa tu abbia usato prima. Impila i blocchi in una varietà quasi illimitata di posizioni e configurazioni. Raggiungi l'altezza desiderata con più coppie.`,
      dimensions: {
        height: 70,
        length: 57,
        weight: 5,
        width: 37,
      },

      id: ProductId.CUBI_MAXI,
      link: `${OSTACOLI.url}#${ProductId.CUBI_MAXI}`,
      name: msg`Cubi ${CubiModels.MAXI}`,
      pictures: [
        require("assets/products/ostacoli/cubi-maxi-01.png"),
        require("assets/products/ostacoli/cubi-maxi-02.png"),
        require("assets/products/ostacoli/cubi-maxi-03.png"),
      ],
      price: 70,
    },
    {
      description: msg`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      dimensions: {
        height: 170,
        length: 72,
        weight: 7,
        width: 72,
      },
      id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_170,
      link: `${OSTACOLI.url}#${ProductId.CANDELIERE_CON_PIEDE_IN_PVC_170}`,
      name: msg`Candeliere da ${formatSize(170)} con piede in PVC`,
      pictures: [require("assets/products/ostacoli/candeliere-pvc-02.png")],
      price: 99,
    },
    {
      description: msg`I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco e sono muniti di 4 piedi rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli.`,
      dimensions: {
        height: 190,
        length: 72,
        weight: 7,
        width: 72,
      },
      id: ProductId.CANDELIERE_CON_PIEDE_IN_PVC_190,
      link: `${OSTACOLI.url}#${ProductId.CANDELIERE_CON_PIEDE_IN_PVC_190}`,
      name: msg`Candeliere da ${formatSize(190)} con piede in PVC`,
      pictures: [require("assets/products/ostacoli/candeliere-pvc-01.png")],
      price: 108,
    },
    {
      description: msg`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      dimensions: {
        height: 2,
        length: 50,
        width: 6.5,
      },
      id: ProductId.LAMA_DE_50,
      link: `${OSTACOLI.url}#${ProductId.LAMA_DE_50}`,
      materials: [Material.ACCIAIO_ZINCATO],
      name: msg`Lama DE da ${formatSize(50)}`,
      pictures: [require("assets/products/ostacoli/lama-de-150.png")],
      price: 9.6,
    },
    {
      description: msg`Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze.`,
      dimensions: {
        height: 2,
        length: 150,
        width: 6.5,
      },
      id: ProductId.LAMA_DE_150,
      link: `${OSTACOLI.url}#${ProductId.LAMA_DE_150}`,
      materials: [Material.ACCIAIO_ZINCATO],
      name: msg`Lama DE da ${formatSize(1500)}`,
      pictures: [require("assets/products/ostacoli/lama-de-50.png")],
      price: 19.2,
    },
    {
      description: msg`Il cucchiaio standard utilizzato al livello internazionale`,
      dimensions: {
        height: 11,
        length: 11,
        weight: 0.15,
        width: 11,
      },
      id: ProductId.CUCCHIAIO_DE,
      link: `${OSTACOLI.url}#${ProductId.CUCCHIAIO_DE}`,
      materials: [Material.TECNOPOLIMERO],
      name: msg`Cucchiaio ${CucchiaiModels.DE}`,
      pictures: [
        require("assets/products/ostacoli/cucchiaio-de-01.png"),
        require("assets/products/ostacoli/cucchiaio-de-02.png"),
        require("assets/products/ostacoli/cucchiaio-de-03.png"),
      ],
      price: 4.3,
    },
    {
      description: msg`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
      dimensions: {
        height: 11,
        length: 11,
        weight: 0.15,
        width: 11,
      },
      id: ProductId.CUCCHIAIO_PS,
      link: `${OSTACOLI.url}#${ProductId.CUCCHIAIO_PS}`,
      materials: [Material.TECNOPOLIMERO],
      name: msg`Cucchiaio ${CucchiaiModels.PS}`,
      pictures: [
        require("assets/products/ostacoli/cucchiaio-ps-01.png"),
        require("assets/products/ostacoli/cucchiaio-ps-02.png"),
        require("assets/products/ostacoli/cucchiaio-ps-03.png"),
      ],
      price: 5.1,
    },
    {
      description: msg`Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri cavalli in maniera efficace ed economica.`,
      dimensions: {
        height: 10,
        length: 3,
        weight: 0.05,
        width: 7,
      },
      id: ProductId.SUPPORTO_SICUREZZA,
      link: `${OSTACOLI.url}#${ProductId.SUPPORTO_SICUREZZA}`,
      materials: [Material.PLASTICA],
      name: msg`Supporto di sicurezza`,
      pictures: [
        require("assets/products/ostacoli/supporto-di-sicurezza-01.png"),
        require("assets/products/ostacoli/supporto-di-sicurezza-03.png"),
        require("assets/products/ostacoli/supporto-di-sicurezza-04.png"),
      ],
      price: 6.5,
    },
    {
      description: msg`Bandierine realizzate in plastica resistente agli urti. Ideali per allenamenti e competizioni, offrono una visibilità eccellente e una lunga durata nel tempo.`,
      dimensions: {
        height: 25,
        length: 1.5,
        width: 20,
      },
      id: ProductId.OSTACOLI_BANDIERINE,
      link: `${OSTACOLI.url}#${ProductId.OSTACOLI_BANDIERINE}`,
      materials: [Material.PLASTICA],
      name: msg`Bandierine`,
      pictures: [require("assets/products/ostacoli/bandierine.jpg")],
      price: 2.5,
    },
    {
      description: msg`Numero per campo ostacoli costruito in materiali robusti e leggeri. La forma piramidale ne assicurano la stabilitá. Perfetto per essere utilizzato in percorsi di salto ostacoli per cavalli.`,
      dimensions: {
        height: 30,
        length: 30,
        weight: 2.3,
        width: 20,
      },
      id: ProductId.NUMERO_CAMPO_OSTACOLI_PROFESSIONAL,
      link: `${OSTACOLI.url}#${ProductId.NUMERO_CAMPO_OSTACOLI_PROFESSIONAL}`,
      materials: [Material.POLIETILENE],
      name: msg`Numero per campo ostacoli ${SegnaleticaModels.PROFESSIONAL}`,
      pictures: [require("assets/products/ostacoli/numero-professional.png")],
      price: 29.5,
    },

    // RECINTI
    {
      colors: [Colors.WHITE],
      description: msg`La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa`,
      dimensions: {
        height: 125,
      },
      id: ProductId.RECINZIONE_1_FILAGNA,
      link: RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: msg`Recinzione cavalli a ${1} filagna`,
      pictures: [require("assets/products/recinti/recinto-1-filagna.png")],
    },
    {
      colors: [Colors.WHITE],
      description: msg`La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente`,
      dimensions: {
        height: 140,
      },
      id: ProductId.RECINZIONE_2_FILAGNE,
      link: RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: msg`Recinzione cavalli a ${2} filagne`,
      pictures: [require("assets/products/recinti/recinto-2-filagna.png")],
    },
    {
      colors: [Colors.WHITE],
      description: msg`La recinzione a tre filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi oppure per delimitare confini di proprietà o aree. Per garantirne una maggiore sicurezza è possibile installare un impianto d'elettrificazione sulle filagne`,
      dimensions: {
        height: 165,
      },
      id: ProductId.RECINZIONE_3_FILAGNE,
      link: RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: msg`Recinzione cavalli a ${3} filagne`,
      pictures: [require("assets/products/recinti/recinto-3-filagna.png")],
    },
    {
      colors: [Colors.WHITE],
      description: msg`Le recinzioni a quattro filagne sono utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in libertà`,
      dimensions: {
        height: 195,
      },
      id: ProductId.RECINZIONE_4_FILAGNE,
      link: RECINTI.url,
      materials: [Material.POLIPROPILENE],
      name: msg`Recinzione cavalli a ${4} filagne`,
      pictures: [require("assets/products/recinti/recinto-4-filagna.png")],
    },
    {
      colors: [Colors.WHITE, Colors.GREEN],
      description: msg`Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi consentirà di posizionarla e spostarla a seconda delle vostre esigenze`,
      dimensions: {
        height: 30,
      },
      id: ProductId.RECINZIONE_PIEDE_MOBILE,
      link: RECINTI.url,
      name: msg`Piede mobile`,
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
      description: DESCRIPTION_LETTERE,
      dimensions: {
        height: 30,
        length: 20,
        weight: 0.5,
        width: 20,
      },
      id: ProductId.DRESSAGE_TRAINING_LETTERE_8_KIT,
      link: DRESSAGE.url,
      materials: [Material.POLIETILENE],
      name: msg`Kit ${8} Lettere Dressage (${DressageModels.TRAINING})`,
      pictures: [require("assets/products/dressage/training-lettera.jpg")],
      price: 236,
    },
    {
      colors: [Colors.WHITE],
      description: DESCRIPTION_LETTERE,
      dimensions: {
        height: 30,
        length: 20,
        weight: 0.5,
        width: 20,
      },
      id: ProductId.DRESSAGE_TRAINING_LETTERE_12_KIT,
      link: DRESSAGE.url,
      materials: [Material.POLIETILENE],
      name: msg`Kit ${12} Lettere Dressage (${DressageModels.TRAINING})`,
      pictures: [require("assets/products/dressage/training-lettera.jpg")],
      price: 354,
    },
    {
      colors: [Colors.WHITE],
      description: msg`I nostri moduli economici in PVC resistente ai raggi solari sono leggeri e facili da assemblare, offrendo una soluzione pratica e robusta per delimitare l'area di dressage.`,
      dimensions: {
        height: 29,
        length: 40,
        weight: 3,
        width: 200,
      },
      id: ProductId.DRESSAGE_TRAINING_MODULO,
      link: DRESSAGE.url,
      name: msg`Modulo dressage (${DressageModels.TRAINING})`,
      pictures: [
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
    },
    {
      // description: DESCRIPTION_20x40,
      dimensions: {
        height: 30,
        length: 200,
        width: 400,
      },
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X40,
      link: DRESSAGE.url,
      name: msg`Rettangolo dressage ${DressageData.SIZE_20x40.size} (${DressageModels.TRAINING})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        require("assets/products/dressage/training-lettera.jpg"),
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
      price: 1450,
    },
    {
      // description: DESCRIPTION_20x60,
      dimensions: {
        height: 30,
        length: 200,
        width: 600,
      },
      id: ProductId.DRESSAGE_TRAINING_RETTANGOLO_20X60,
      link: DRESSAGE.url,
      name: msg`Rettangolo dressage ${DressageData.SIZE_20x60.size} (${DressageModels.TRAINING})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        require("assets/products/dressage/training-lettera.jpg"),
        require("assets/products/dressage/training-modulo-dressage.jpg"),
      ],
      price: 1900,
    },
    {
      colors: [Colors.WHITE],
      description: msg`Le lettere premium in PVC, con una finitura di alta qualità e resistente ai raggi solari, garantiscono massima durabilità e un'estetica superiore. Perfette per chi cerca eccellenza e professionalità nell'arena.`,
      dimensions: {
        height: 70,
        length: 39,
        weight: 2.5,
        width: 39,
      },
      id: ProductId.DRESSAGE_OLYMPIC_LETTERA,
      link: DRESSAGE.url,
      name: msg`Lettera dressage (${DressageModels.OLYMPIC})`,
      pictures: [require("assets/products/dressage/olympic-lettera.jpg")],
      price: 62,
    },
    {
      colors: [Colors.WHITE],
      description: msg`I moduli premium in PVC, con una finitura superiore e resistente ai raggi solari, combinano leggerezza e facilità di assemblaggio con una robustezza e un'estetica senza pari, ideali per arene di alta qualità.`,
      dimensions: {
        height: 40,
        length: 40,
        weight: 5,
        width: 200,
      },
      id: ProductId.DRESSAGE_OLYMPIC_MODULO,
      link: DRESSAGE.url,
      name: msg`Modulo dressage (${DressageModels.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
    },
    {
      // description: DESCRIPTION_20x40,
      dimensions: {
        height: 70,
        length: 200,
        width: 400,
      },
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X40,
      link: DRESSAGE.url,
      name: msg`Rettangolo dressage ${DressageData.SIZE_20x40.size} (${DressageModels.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x40.jpg"),
        require("assets/products/dressage/olympic-lettera.jpg"),
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
      price: 5940,
    },
    {
      // description: DESCRIPTION_20x60,
      dimensions: {
        height: 70,
        length: 200,
        width: 600,
      },
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
      link: DRESSAGE.url,
      name: msg`Rettangolo dressage ${DressageData.SIZE_20x60.size} (${DressageModels.OLYMPIC})`,
      pictures: [
        require("assets/products/dressage/rettangolo-dressage-20x60.jpg"),
        require("assets/products/dressage/olympic-lettera.jpg"),
        require("assets/products/dressage/olympic-modulo-dressage.jpg"),
      ],
      price: 7920,
    },
    {
      // description: DESCRIPTION_20x60,
      dimensions: {
        height: 70,
        length: 200,
        width: 600,
      },
      id: ProductId.DRESSAGE_OLYMPIC_RETTANGOLO_20X60,
      link: DRESSAGE.url,
      name: msg`Rettangolo dressage ${DressageData.SIZE_20x60.size} (${DressageModels.OLYMPIC})`,
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
      /**
       * Commento perché vogliamo mostrare solo quello piu economico
       */
      // {
      //   dimensions: {
      //     height: 220,
      //     length: 1440,
      //     width: 1440,
      //   },
      //   horses: 6,
      //   id: ProductId.GIOSTRA_6_CAVALLI_1440_SOLO_MOTORE,
      //   price: 7300,
      // },
      // {
      //   dimensions: {
      //     height: 220,
      //     length: 1600,
      //     width: 1600,
      //   },
      //   horses: 6,
      //   id: ProductId.GIOSTRA_6_CAVALLI_1600_SOLO_MOTORE,
      //   price: 7800,
      // },
      // {
      //   dimensions: {
      //     height: 220,
      //     length: 1760,
      //     width: 1760,
      //   },
      //   horses: 6,
      //   id: ProductId.GIOSTRA_6_CAVALLI_1760_SOLO_MOTORE,
      //   price: 7900,
      // },
      // {
      //   dimensions: {
      //     height: 220,
      //     length: 1920,
      //     width: 1920,
      //   },
      //   horses: 8,
      //   id: ProductId.GIOSTRA_8_CAVALLI_1920_SOLO_MOTORE,
      //   price: 9100,
      // },
    ].map(({ id, price, horses, dimensions }) => ({
      description: GIOSTRE.description,
      dimensions,
      id,
      link: GIOSTRE.url,
      name: msg`Giostra per ${horses} cavalli, solo motore (${formatSizeMeter(
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
      /**
       * Commento perché vogliamo mostrare solo quello piu economico
       */
      // {
      //   dimensions: {
      //     height: 475.4,
      //     length: 1500,
      //     width: 1500,
      //   },
      //   id: ProductId.TONDINO_1500,
      //   sides: 18,
      // },
      // {
      //   dimensions: {
      //     height: 6500,
      //     length: 1660,
      //     width: 1660,
      //   },
      //   id: ProductId.TONDINO_1660,
      //   sides: 20,
      // },
      // {
      //   dimensions: {
      //     height: 6500,
      //     length: 1830,
      //     width: 1830,
      //   },
      //   id: ProductId.TONDINO_1830,
      //   sides: 22,
      // },
      // {
      //   dimensions: {
      //     height: 6567,
      //     length: 1990,
      //     width: 1990,
      //   },
      //   id: ProductId.TONDINO_1990,
      //   sides: 24,
      // },
    ].map(({ sides, dimensions, price, id }) => ({
      description: msg`Tondino per cavalli coperto, ideale per allenamenti e addestramenti in ogni stagione. Realizzato con struttura robusta e materiali resistenti, offre protezione dagli agenti atmosferici. Facile da montare, garantisce sicurezza e comfort per cavalli e cavalieri, migliorando le prestazioni in un ambiente controllato.`,
      dimensions,
      id,
      link: TONDINI.url,
      name: msg`Tondino coperto ${sides} pannelli ${formatSizeMeter(
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
    {} as ProductDataList
  );
};
