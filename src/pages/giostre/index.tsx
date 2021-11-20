import { t, Trans } from "@lingui/macro"
import { AccessibilityNew, Apps, DomainDisabled, RemoveRedEyeOutlined, VideogameAsset } from "@mui/icons-material"
import { Box, Button, Link, styled, Typography } from "@mui/material"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"
import { Benefits, Columns, Gallery, Hero, Section, TH, Video } from "src/components"
import { Picture } from "src/components/ModalGallery"
import { PAGES } from "src/constants"

const GammaSectionStyled = styled(Section)({
  textAlign: "center",
})

const GallerySectionStyled = styled(Section)(({ theme }) => ({
  "backgroundColor": theme.palette.primary.main,
  "& figcaption": {
    color: theme.palette.common.white,
  },
}))

const Giostre: React.FC = () => {
  const BENEFITS = [
    {
      icon: AccessibilityNew,
      title: <Trans id="3.000 giostre installate" />,
      description: <Trans id="Più' di 3.000 clienti europei hanno scelto Pessastudio per la loro giostra" />,
    },
    {
      icon: Apps,
      title: <Trans id="Ampia gamma" />,
      description: (
        <Trans id="È possibile acquistare le nostre giostre in diverse versioni adatte ad ogni budget ed esigenza" />
      ),
    },
    {
      icon: DomainDisabled,
      title: <Trans id="Nessuna concessione edilizia" />,
      description: (
        <Trans id="Le nostre giostre sono considerate strutture precarie. Non avrete bisogno di nessuna concessione edilizia" />
      ),
    },
    {
      icon: VideogameAsset,
      title: <Trans id="Facile da usare" />,
      description: (
        <Trans
          id={`Usa il nostro semplice pannello di controllo per scegliere uno dei nostri "training programs" o seleziona manualmente la velocità desiderata`}
        />
      ),
    },
  ]

  const IMAGES: Picture[] = [
    {
      src: require("src/assets/products/giostre/gallery/giostra.jpg").default,
      caption: t`Giostra tecnoexercize`,
    },
    {
      src: require("src/assets/products/giostre/gallery/giostra-con-alveolo.jpg").default,
      caption: t`Interno giostra con alveolo`,
    },
    {
      src: require("src/assets/products/giostre/gallery/porta.jpg").default,
      caption: t`Ingresso`,
    },
    {
      src: require("src/assets/products/giostre/gallery/quadro.jpg").default,
      caption: t`Quadro di comando`,
    },
  ]

  return (
    <>
      <Hero image={require("src/assets/pages/giostre/background.jpg").default} text={t`Giostre`} />

      <Benefits
        title={t`Perché una giostra Pessastudio`}
        subtitle={t`Giostre`}
        text={
          <Trans>
            <Typography paragraph>Le giostre rappresentano il punto di forza della nostra azienda.</Typography>
            <Typography paragraph>
              Sono state create dalla ricerca di <strong>Luciano Pessa</strong> con l'intenzione di realizzare un
              semplice ed affidabile strumento di lavoro che vi consentirè di allenare il vostro cavallo anche quando
              non avete la possibilità di montarlo.
            </Typography>
            <Typography paragraph>
              La giostra vi permetterè, non solo di raffreddare il vostro cavallo con una passeggiata post allenamento,
              ma anche di creare una vera sessione di lavoro passando da un'andatura all'altra e cambiando di mano.
            </Typography>
          </Trans>
        }
        benefits={BENEFITS}
      />

      <GammaSectionStyled maxWidth="md">
        <TH variant="h2">{t`Gamma`}</TH>

        <Trans>
          Due sono i modelli di giostra che proponiamo: il modello{" "}
          <Link component={LocalizedLink} to={PAGES.GIOSTRE_TECNOEXERCISER.url}>
            tecnoexerciser
          </Link>
          , prodotta da oltre 20 anni, e il modello{" "}
          <Link component={LocalizedLink} to={PAGES.GIOSTRE_IPPOWALKER.url}>
            ippowalker
          </Link>
          , pensata per rispondere alle esigenze di un mercato che richiede un prodotto affidabile e al tempo stesso
          economico.
        </Trans>
      </GammaSectionStyled>

      <Columns
        left={
          <Box textAlign="center">
            <TH variant="h3" sans>{t`Tecnoexerciser`}</TH>
            <Button
              component={LocalizedLink}
              to={PAGES.GIOSTRE_TECNOEXERCISER.url}
              color="warm2"
              size="large"
              startIcon={<RemoveRedEyeOutlined />}
            >
              {t`Scopri di piú`}
            </Button>
          </Box>
        }
        right={
          <Box textAlign="center">
            <TH variant="h3" sans>{t`Ippowalker`}</TH>
            <Button
              component={LocalizedLink}
              to={PAGES.GIOSTRE_IPPOWALKER.url}
              color="primary"
              size="large"
              endIcon={<RemoveRedEyeOutlined />}
            >
              {t`Scopri di piú`}
            </Button>
          </Box>
        }
      />

      <Video src={"https://www.youtube.com/embed/1C7R5u270QE"} title={t`Video giostra in movimento`} />

      <GallerySectionStyled>
        <Gallery images={IMAGES} md={3} />
      </GallerySectionStyled>
    </>
  )
}

export default Giostre
