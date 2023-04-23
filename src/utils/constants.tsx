import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Ul } from "components";
import { Trans } from "next-i18next";
import { PRODUCT_GUTTER } from "theme";

export const NAME = "Pessastudio";

export const SOCIALS = {
  facebook_1: "https://www.facebook.com/PessastudioHorseTecnology",
  facebook_2:
    "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027",
  youtube: "https://www.youtube.com/channel/UC_eIQlt5-iLt2KEVTK5DOPg",
  instagram: "https://www.instagram.com/pessastudiohorsetecnology/",
};

export const MATERIALS = {
  ACCIAIO_ZINCATO: (
    <Trans i18nKey="General.materials.galvanizedSteel">Acciaio zincato</Trans>
  ),
  POLIPROPILENE: (
    <Trans i18nKey="General.materials.polypropylene">Polipropilene</Trans>
  ),
  POLIETILENE: (
    <Trans i18nKey="General.materials.polyethylene">Polietilene</Trans>
  ),
  PLASTICA: <Trans i18nKey="General.materials.plastic">Plastica</Trans>,
  TECNOPOLIMERO: (
    <Trans i18nKey="General.materials.technopolymer">Tecnopolimero</Trans>
  ),
  PVC: <Trans i18nKey="General.materials.pvc">PVC</Trans>,
};

export const SEDE_LEGALE = {
  name: "Pessastudio Horse Tecnology srl",
  addressCountry: "Italy",
  postalCode: "35043",
  streetAddress: "Via Garibaldi, 28",
  addressLocality: "Monselice",
  addressRegion: "Padova",
  id: "04743610281",
};

export const BANCA = {
  name: "Cassa di Risparmio del Veneto filiale di Monselice",
  iban: "IT97 M030 6962 6691 0000 0004 400",
  swift: "BCITITMM",
};

export const SEDE_OPERATIVA = {
  name: "Pessastudio Horse Tecnology srl",
  addressCountry: "Italy",
  postalCode: "35044",
  streetAddress: "Via Cà Megliadino, 35",
  addressLocality: "Montagnana",
  addressRegion: "Padova",
  telephone: "+39 0429 805613",
};

export const ITALIA = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098",
};

export const WEBSITE = process.env.NEXT_PUBLIC_WEBISTE_URL;

export const GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE = (
  <Trans i18nKey="General.addon.chiusuraATerraDescrizione">
    Impediscono alla sabbia di uscire dal tondino riducendo il materiale
    disperso.
  </Trans>
);

export const GIOSTRA_ALVEOLO_DESCRIZIONE = (
  <Trans i18nKey="General.addon.alveoloDescrizione">
    L'alveolo è la soluzione ottimale per mantenere un fondo sempre perfetto in
    ogni condizione, permette di evitare buche o avvallamenti riducendo i costi
    di manutenzione.
  </Trans>
);

export const GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE = (
  <Trans i18nKey="General.addon.reteAntiventoDescrizione">
    La rete antivento protegge l'interno della giostra da correnti d'aria e
    aiuta il cavallo a rimanere concentrato sul percorso rendendolo più
    tranquillo.
  </Trans>
);

export const GIOSTRE_DIAMETER_TECNOEXERCIZE = () => (
  <Trans i18nKey="Giostre.Diameter.tecnoexercize">
    <Typography>E' possibile ordinare una giostra nei diametri:</Typography>
    <Ul>
      <li>
        12,0 mt. <small>(3 cavalli)</small>
      </li>
      <li>
        14,4 mt. <small>(4 cavalli)</small>
      </li>
      <li>
        16,0 mt. <small>(5 cavalli)</small>
      </li>
      <li>
        17,6 mt. <small>(6 cavalli)</small>
      </li>
      <li>
        19,2 mt. <small>(8 cavalli)</small>
      </li>
    </Ul>
  </Trans>
);

export const GIOSTRE_DIAMETER_IPPOWALKER = () => (
  <Trans i18nKey="Giostre.Diameter.ippowalker">
    <Typography>È possibile ordinare una giostra nei diametri:</Typography>
    <Ul>
      <li>
        12,0 mt. <small>(4 cavalli)</small>
      </li>
      <li>
        14,2 mt. <small>(6 cavalli)</small>
      </li>
    </Ul>
  </Trans>
);

export const GIOSTRE_DOORS = (
  <Trans i18nKey="Giostre.doors">
    <Typography>Porte di separazione.</Typography>
    <small>(Elettrificatione 200-240 Volt monofase)</small>
  </Trans>
);

export const GIOSTRE_ENGINE_75 = (
  <Trans i18nKey="Giostre.engine">
    Potenza motore {0.75} kw e cadenza regolabile fra 60 e 220 metri al minuto
  </Trans>
);

export const GIOSTRE_ENGINE_37 = (
  <Trans i18nKey="Giostre.engine">
    Potenza motore {0.37} kw e cadenza regolabile fra 60 e 220 metri al minuto
  </Trans>
);

export const GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE = (
  <Trans i18nKey="Giostre.controlPanel.tecnoexercize">
    Quadro di comando con programma manuale, periodico o automatico
  </Trans>
);

export const GIOSTRE_CONTROL_PANEL_IPPOWALKER = (
  <Trans i18nKey="Giostre.controlPanel.ippowalker">
    Quadro di comando con programma manuale, periodico
  </Trans>
);

export const IRRIGATION = (
  <Trans i18nKey="Giostre.addon.irrigation.description">
    Irrigazione del percorso controllabile dal quadro di comando. Aiuta a tenere
    la polvere sotto controllo e un terreno sempre perfetto
  </Trans>
);

export const GIOSTRE_EXTRA_SMALL = () => (
  <Ul>
    <li>
      <Trans i18nKey={"General.addon.closedAtTheGround"}>
        Chiusura a terra
      </Trans>
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeOutlined />
      </IconButton>
    </li>
    <li>
      <Trans i18nKey={"General.addon.alveolo"}>Alveolo sulla pesta</Trans>
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeOutlined />
      </IconButton>
    </li>
  </Ul>
);

export const GIOSTRE_EXTRA_BIG = () => (
  <Ul>
    <li>
      <Trans i18nKey={"General.addon.closedAtTheGround"}>
        Chiusura a terra
      </Trans>
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeOutlined />
      </IconButton>
    </li>
    <li>
      <Trans i18nKey={"General.addon.alveolo"}>Alveolo sulla pesta</Trans>
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeOutlined />
      </IconButton>
    </li>
    <li>
      <Trans i18nKey={"General.addon.windscreen"}>Rete antivento</Trans>
      <IconButton href="#rete_antivento" size="small" color="primary">
        <RemoveRedEyeOutlined />
      </IconButton>
    </li>
  </Ul>
);

export const GIOSTRA_FENCE_TYPE_WOOD = (thickness: number, name: string) => (
  <Trans values={{ thickness, name }} i18nKey="Giostre.fence.wood.description">
    <Typography>
      Corridoio {name} composto da pannelli laterali in compensato marino
    </Typography>
    <small>(spessore {thickness} mm.)</small>
  </Trans>
);

export const GIOSTRA_FENCE_TYPE_TECNOFENCE = (
  <Trans i18nKey="Giostre.fence.tecnofence.description">
    <Typography>Corridoio composto da recinzione TECNOFENCE</Typography>
    <small>(corridoio interno 1,40 mt., esterno 1,60 mt.)</small>
  </Trans>
);

export const GIOSTRA_COPERTURA_PVC_DESCRIZIONE = (
  <Trans i18nKey="Giostre.roof.pvc">
    <Typography>
      La <strong>copertura in PVC</strong> è composta da una struttura in
      acciaio zincato la quale sorregge un telo in tessuto di poliestere
      spalmato di colore verde o crema e in base alle esigenze del cliente anche
      in altre colorazioni.
    </Typography>
    <Typography paragraph>
      Questa copertura è in grado di sorreggere un carico neve pari a 80 kg/mq *
      e una forza vento pari a 110 Km/h.
    </Typography>
  </Trans>
);

export const GIOSTRE_COPERTURA_NOTE = (
  <Typography variant="small" component="div" mt={PRODUCT_GUTTER}>
    <Trans i18nKey="Giostre.note">
      * In presenza di nevicate che superino la portata consentita, sarà
      opportuno intervenire rimuovendo l’eccesso di neve e cospargendo di sale
      la copertura prima di introdurre i cavalli.
    </Trans>
  </Typography>
);

export const GIOSTRE_COPERTURA_PVC = <Trans i18nKey="">Copertura in PVC</Trans>;

export const GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE = (
  <Trans i18nKey="Giostre.fence.teconofence">
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
    <Typography textAlign="justify" paragraph>
      Uno dei vantaggi è inoltre quello di poter installare la giostra in piena
      autonomia.
    </Typography>
  </Trans>
);

export const GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO = (
  thickness: number,
  name: string
) => (
  <Typography textAlign="justify">
    <Trans i18nKey="Giostre.fence.wood">
      Il corridoio <strong>{name}</strong> in compensato marino è realizzato con
      un multistrato <small>({thickness} mm. di spessore)</small> antigraffio,
      antiurto, resistente allo sporco e idrorepellente. L'obbiettivo di questa
      soluzione è quello di fornire un elevato grado di sicurezza forzando il
      cavallo a concentrarsi sul percorso durante l'allenamento.
    </Trans>
  </Typography>
);

export const GIOSTRE_ATTRIBUTES = {
  name: undefined,
  engine: <Trans i18nKey="General.Giostre.attributes.engine">Motore</Trans>,
  diameter: (
    <Trans i18nKey="General.Giostre.attributes.diameter">Diametro</Trans>
  ),
  control_panel: (
    <Trans i18nKey="General.Giostre.attributes.control_panel">
      Quadro di comando
    </Trans>
  ),
  irrigation: (
    <Trans i18nKey="General.Giostre.attributes.irrigation">Irrigazione</Trans>
  ),
  doors: <Trans i18nKey="General.Giostre.attributes.doors">Porte</Trans>,
  fence_type: (
    <Trans i18nKey="General.Giostre.attributes.fence_type">Recinzione</Trans>
  ),
  cover: <Trans i18nKey="General.Giostre.attributes.cover">Copertura</Trans>,
  extra: (
    <Trans i18nKey="General.Giostre.attributes.addOn">
      <Typography>Accessori</Typography>
      <small>(Ordinabili separatamente)</small>
    </Trans>
  ),
};
