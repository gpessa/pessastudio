import { t, Trans } from "@lingui/macro"
import { Typography } from "@mui/material"
import { Link } from "gatsby-material-ui-components"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"
import { Columns, TH, Video } from "src/components"
import { PAGES } from "src/constants"
import IppowalkerAccessori from "./_accessori"
import IppowalkerCompare from "./_compare"
import IppowalkerCopertura from "./_copertura"
import IppowalkerCorridoi from "./_corridoi"
import IppowalkerGallery from "./_gallery"
import IppowalkerServizioClienti from "./_servizio_clienti"

const Ippowalker: React.FC = () => {
  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{t`Ippowalker`}</TH>
            <Trans>
              <Typography paragraph>
                Ippowalker è una giostra di recente realizzazione, essa nasce dal sogno di poter fornire uno strumento
                di allenamento professionale anche a coloro che ne fanno un uso sporadico.
              </Typography>
              <Typography paragraph>
                La giostra è disponibile in due diametri 12 mt. (4 cavalli) e 14.2 mt. (6 cavalli).
              </Typography>
              <Typography paragraph>
                Costruita con la qualità e la robustezza che contraddistingue tutti i nostri prodotti essa rappresenta
                uno strumento semplice ed essenziale ma al contempo completo.
              </Typography>
              <Typography>
                Malgrado Ippowalker sia una giostra più economica abbiamo mantenuto tutte le opzioni base per allenare
                il tuo cavallo.
              </Typography>
              <Typography>
                <strong>Porte di separazione elettrificate</strong> ottenute grazie a tubi di plastica
                elettroconduttiva.
              </Typography>
              <Typography paragraph>
                Un <strong>pannello di controllo</strong> che ti permetterà di di scegliere tra un programma manuale e
                uno periodico.
              </Typography>
              <Typography>
                Al contrario del modello{" "}
                <Link component={LocalizedLink} to={PAGES.GIOSTRE_TECNOEXERCISER.url}>
                  Tecnoexercize
                </Link>
                , questo modello non dispone di irrigazione.
              </Typography>
            </Trans>
          </>
        }
        right={<IppowalkerGallery />}
      />

      <Video src={"https://www.youtube-nocookie.com/embed/slFfbd7kTzg"} title={t`Video giostra in movimento`} />

      <IppowalkerCorridoi />

      <IppowalkerCopertura />

      <IppowalkerAccessori />

      <IppowalkerCompare />

      <IppowalkerServizioClienti />
    </>
  )
}

export default Ippowalker
