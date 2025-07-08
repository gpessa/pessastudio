import { Trans } from "@lingui/react/macro";
import RemoveRedEyeRounded from "@mui/icons-material/RemoveRedEyeRounded";
import { IconButton, Typography } from "@mui/material";
import { PRODUCT_GUTTER } from "theme";

// TODO: Replace with your actual Google Analytics ID
export const GOOGLE_ANALYTICS = "G-XXXXXXXXXX";

export const IS_PRODUCTION = !!process && process.env.NODE_ENV === "production";

export const NAME_STRING = "Pessastudio";
export const NAME_LEGAL_STRING = `${NAME_STRING} Horse Tecnology srl`;
export const NAME = <strong>{NAME_STRING}</strong>;

export const LOCALES = {
  it: {
    code: "it",
    hrefLang: "it",
    name: "Italian",
    localName: "Italiano",
    langDir: "ltr",
    dateFormat: "DD.MM.YYYY",
  },
  fr: {
    code: "fr",
    hrefLang: "fr",
    name: "French",
    localName: "Français",
    langDir: "ltr",
    dateFormat: "DD.MM.YYYY",
  },
  en: {
    code: "en",
    hrefLang: "en",
    name: "English",
    localName: "English",
    langDir: "ltr",
    dateFormat: "DD.MM.YYYY",
  },
};

export const LOCALES_ARRAY = Object.values(LOCALES);

export const DRESSAGE_MODELS = {
  OLYMPIC: "Olympic",
  TRAINING: "Training",
};

export const CUBI_MODELS = {
  MAXI: "Maxi",
  MINI: "Mini",
};

export const CUCCHIAI_MODELS = {
  DE: "DE",
  PS: "PS",
};

export const SEGNALETICA_MODELS = {
  LIGHT: "Light",
  PROFESSIONAL: "Professional",
};

export const SOCIALS = {
  facebook_1: "https://www.facebook.com/PessastudioHorseTecnology",
  facebook_2:
    "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027",
  instagram: "https://www.instagram.com/pessastudiohorsetecnology/",
  youtube: "https://www.youtube.com/channel/UC_eIQlt5-iLt2KEVTK5DOPg",
};

export enum Material {
  ACCIAIO_ZINCATO,
  PLASTICA,
  POLIETILENE,
  POLIPROPILENE,
  PVC,
  TECNOPOLIMERO,
}

export const SEDE_LEGALE = {
  addressLocality: "Monselice",
  addressRegion: "Padova",
  country: "Italy",
  id: "04743610281",
  name: NAME_LEGAL_STRING,
  postalCode: "35043",
  streetAddress: "Via Garibaldi, 28",
};

export const BANCHE = [
  {
    iban: "IT97 M030 6962 6691 0000 0004 400",
    name: "Cassa di Risparmio del Veneto filiale di Monselice",
    swift: "BCITITMM",
  },
  {
    iban: "IT78O0890462562031000001730",
    name: "Banca Prealpi Sanbiagio (Filiale di Este)",
  },
];

export const CONTATTI_COMMERCIALI = [
  {
    data: {
      addressLocality: "Bürstadt",
      country: "Germany",
      email: "office@bacherproducts.de",
      name: "Bacher Products GmbH",
      postalCode: "68642",
      streetAddress: "Lorscher Straße 13",
      telephone: "+49 6206 13445",
      website: "https://bacherproducts.de",
      whatsapp: "+49 6206 13445",
    },
    name: <Trans>Contatto commerciale Germania</Trans>,
  },
  {
    data: {
      addressLocality: "Dillingen",
      country: "Germany",
      email: "mail@belindahitzler.de",
      mobile: "+49 (0) 171 3661394",
      name: "BEST Equine GmbH Training Facilities for Horses (Belinda Hitzler)",
      postalCode: "89407",
      streetAddress: "Priehlweg 7",
      telephone: "+49 (0) 9071 7700256",
    },
    name: <Trans>Contatto commerciale Germania &amp; Medio Oriente</Trans>,
  },
  {
    data: {
      email: "magiccavallo@hotmail.com",
      name: "Roberto Della Bella",
      telephone: "+32 475 96 5123",
    },
    name: <Trans>Contatto commerciale Belgio</Trans>,
  },
  {
    data: {
      email: "equi-bride@orange.fr",
      name: "Société Equi Bride (Sébastien Mugnier)",
      telephone: "+33 682369614",
    },
    name: <Trans>Contatto commerciale Francia</Trans>,
  },
  {
    data: {
      email: "aleshorses@gmail.com",
      name: "Marco Accardo",
      telephone: "+39 333 9481810",
    },
    name: <Trans>Contatto commerciale Roma</Trans>,
  },
];

export const SEDE_OPERATIVA = {
  addressLocality: "Montagnana",
  addressRegion: "Padova",
  country: "Italy",
  name: NAME_LEGAL_STRING,
  postalCode: "35044",
  streetAddress: "Via Cà Megliadino, 35",
  telephone: "+39 0429 805613",
};

export const ITALIA = {
  email: "annapessa@pessastudio.eu",
  name: "Anna Pessa",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098",
};

export const WEBSITE = process.env.NEXT_PUBLIC_WEBISTE_URL!;

export const GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE = (
  <Trans>
    Impediscono alla sabbia di uscire dal tondino riducendo il materiale
    disperso.
  </Trans>
);

export const GIOSTRA_ALVEOLO_DESCRIZIONE = (
  <Trans>
    L'alveolo è la soluzione ottimale per mantenere un fondo sempre perfetto in
    ogni condizione, permette di evitare buche o avvallamenti riducendo i costi
    di manutenzione.
  </Trans>
);

export const GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE = (
  <Trans>
    La rete antivento protegge l'interno della giostra da correnti d'aria e
    aiuta il cavallo a rimanere concentrato sul percorso rendendolo più
    tranquillo.
  </Trans>
);

export const GIOSTRE_DOORS = (
  <Trans>
    <Typography>Porte di separazione.</Typography>
    <small>(Elettrificatione 200-240 Volt monofase)</small>
  </Trans>
);

export const IRRIGATION = (
  <Trans>
    Irrigazione del percorso controllabile dal quadro di comando. Aiuta a tenere
    la polvere sotto controllo e un terreno sempre perfetto
  </Trans>
);

export const GIOSTRE_EXTRA_SMALL = (
  <ul>
    <li>
      <Trans>Chiusura a terra</Trans>
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeRounded />
      </IconButton>
    </li>
    <li>
      <Trans>Alveolo sulla pesta</Trans>
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeRounded />
      </IconButton>
    </li>
  </ul>
);

export const GIOSTRE_EXTRA_BIG = (
  <ul>
    <li>
      <Trans>Chiusura a terra</Trans>
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeRounded />
      </IconButton>
    </li>
    <li>
      <Trans>Alveolo sulla pesta</Trans>
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeRounded />
      </IconButton>
    </li>
    <li>
      <Trans>Rete antivento</Trans>
      <IconButton href="#rete_antivento" size="small" color="primary">
        <RemoveRedEyeRounded />
      </IconButton>
    </li>
  </ul>
);

export const GIOSTRA_FENCE = (thickness: number, name: string) => (
  <Trans>
    <Typography>
      Corridoio {name} composto da pannelli laterali in compensato marino
    </Typography>
    <small>(spessore {thickness} mm.)</small>
  </Trans>
);

export const GIOSTRA_FENCE_TYPE_TECNOFENCE = (
  <Trans>
    <Typography>Corridoio composto da recinzione TECNOFENCE</Typography>
    <small>(corridoio interno 1,40 mt., esterno 1,60 mt.)</small>
  </Trans>
);

export const GIOSTRA_COPERTURA_PVC_DESCRIZIONE = (
  <Trans>
    <Typography>
      La <strong>copertura in PVC</strong> è composta da una struttura in
      acciaio zincato la quale sorregge un telo in tessuto di poliestere
      spalmato di colore verde o crema e in base alle esigenze del cliente anche
      in altre colorazioni.
    </Typography>
    <Typography mx={{ marginBottom: 15 }}>
      Questa copertura è in grado di sorreggere un carico neve pari a 80 kg/mq *
      e una forza vento pari a 110 Km/h.
    </Typography>
  </Trans>
);
export const GIOSTRE_COPERTURA_NOTE = (
  <Typography variant="small" component="div" mt={PRODUCT_GUTTER}>
    <Trans>
      * In presenza di nevicate che superino la portata consentita, sarà
      opportuno intervenire rimuovendo l’eccesso di neve e cospargendo di sale
      la copertura prima di introdurre i cavalli.
    </Trans>
  </Typography>
);

export const GIOSTRE_COPERTURA_PVC = <Trans>Copertura in PVC</Trans>;

export const GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE = (
  <Trans>
    <Typography textAlign="justify">
      Il corridoio{" "}
      <Typography component="strong" fontWeight="bold">
        TECNOFENCE
      </Typography>{" "}
      è una soluzione semplice ed economica che ti permetterà di avere una
      giostra completa, sicura e durevole ad un costo competitivo.
    </Typography>
    <Typography textAlign="justify">
      L'altezza della recinzione esterna è di 1,60 mt., a differenza del
      corridoio interno alto 1,40 mt.
    </Typography>
    <Typography textAlign="justify">
      L'innovativo materiale utilizzato per la sua costruzione (PPO) è durevole
      nel tempo e ti consentirà di abbattere i costi di manutenzione che
      affliggono le classiche recinzioni in legno.
    </Typography>
    <Typography textAlign="justify" mx={{ marginBottom: 15 }}>
      Uno dei vantaggi è inoltre quello di poter installare la giostra in piena
      autonomia.
    </Typography>
  </Trans>
);

export const GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO = (
  thickness: number,
  name: string
) => (
  <Trans>
    <Typography textAlign="justify">
      Il corridoio <strong>{name}</strong> in compensato marino è realizzato con
      un multistrato <small>({thickness} mm. di spessore)</small> antigraffio,
      antiurto, resistente allo sporco e idrorepellente. L'obbiettivo di questa
      soluzione è quello di fornire un elevato grado di sicurezza forzando il
      cavallo a concentrarsi sul percorso durante l'allenamento.
    </Typography>
  </Trans>
);

export const GIOSTRE_ATTRIBUTES = {
  control_panel: <Trans>Quadro di comando</Trans>,
  cover: <Trans>Copertura</Trans>,
  diameter: <Trans>Diametro</Trans>,
  doors: <Trans>Porte</Trans>,
  engine: <Trans>Motore</Trans>,
  extra: (
    <Trans>
      <Typography>Accessori</Typography>
      <small>(Ordinabili separatamente)</small>
    </Trans>
  ),
  fence_type: <Trans>Recinzione</Trans>,
  irrigation: <Trans>Irrigazione</Trans>,
  name: undefined,
};
