import { Trans } from "@lingui/react/macro";
import RemoveRedEyeRounded from "@mui/icons-material/RemoveRedEyeRounded";
import { IconButton, Typography } from "@mui/material";
import { PRODUCT_GUTTER } from "theme";

export const WEBISTE_URL = process.env.NEXT_PUBLIC_WEBISTE_URL!;
export const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;
export const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
export const IS_PRODUCTION = !!process && process.env.NODE_ENV === "production";
export const NAME_STRING = "Pessastudio";
export const NAME_LEGAL_STRING = `${NAME_STRING} Horse Tecnology srl`;
export const NAME = <strong>{NAME_STRING}</strong>;

export const LOCALES = {
  en: {
    code: "en",
    dateFormat: "DD.MM.YYYY",
    hrefLang: "en",
    langDir: "ltr",
    localName: "English",
    name: "English",
  },
  fr: {
    code: "fr",
    dateFormat: "DD.MM.YYYY",
    hrefLang: "fr",
    langDir: "ltr",
    localName: "Français",
    name: "French",
  },
  it: {
    code: "it",
    dateFormat: "DD.MM.YYYY",
    hrefLang: "it",
    langDir: "ltr",
    localName: "Italiano",
    name: "Italian",
  },
};

export const LOCALES_ARRAY = Object.values(LOCALES);

export const SOCIALS = {
  facebook_1: "https://www.facebook.com/PessastudioHorseTecnology",
  facebook_2:
    "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027",
  instagram: "https://www.instagram.com/pessastudiohorsetecnology/",
  youtube: "https://www.youtube.com/channel/UC_eIQlt5-iLt2KEVTK5DOPg",
};

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
