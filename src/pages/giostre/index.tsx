import { t, Trans } from "@lingui/macro"
import { AccessibilityNew, Apps, DomainDisabled, RemoveRedEyeOutlined, VideogameAsset } from "@mui/icons-material"
import { Box, Button, Link, styled, Typography } from "@mui/material"
import { Benefits, Columns, Gallery, Hero, Section, TH, Video } from "components"
import { Picture } from "components/ModalGallery"
import { LocalizedLink } from "gatsby-theme-i18n"
import { usePages } from "hooks"
import React from "react"

const GammaSectionStyled = styled(Section)({
  textAlign: "center",
})

const Giostre: React.FC = () => {
  const { PAGES } = usePages()

  const BENEFITS = [
    {
      icon: AccessibilityNew,
      title: <Trans>3.000 giostre installate</Trans>,
      description: <Trans>Più' di 3.000 clienti europei hanno scelto Pessastudio per la loro giostra</Trans>,
    },
    {
      icon: Apps,
      title: <Trans>Ampia gamma</Trans>,
      description: (
        <Trans>È possibile acquistare le nostre giostre in diverse versioni adatte ad ogni budget ed esigenz</Trans>
      ),
    },
    {
      icon: DomainDisabled,
      title: <Trans>Nessuna concessione edilizia</Trans>,
      description: (
        <Trans>
          Le nostre giostre sono considerate strutture precarie. Non avrete bisogno di nessuna concessione edilizia
        </Trans>
      ),
    },
    {
      icon: VideogameAsset,
      title: <Trans>Facile da usare</Trans>,
      description: (
        <Trans>
          Usa il nostro semplice pannello di controllo per scegliere uno dei nostri "training programs" o seleziona
          manualmente la velocità desiderata
        </Trans>
      ),
    },
  ]

  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/gallery/giostra.jpg").default,
      caption: t`Giostra per cavalli Tecnoexerciser`,
    },
    {
      src: require("assets/products/giostre/gallery/giostra-con-alveolo.jpg").default,
      caption: t`Interno giostra con alveolo`,
    },
    {
      src: require("assets/products/giostre/gallery/porta.jpg").default,
      caption: t`Ingresso`,
    },
    {
      src: require("assets/products/giostre/gallery/quadro.jpg").default,
      caption: t`Quadro di comando`,
    },
  ]

  return (
    <>
      <Hero image={require("assets/pages/giostre/background.jpg").default} text={<Trans>Giostre</Trans>} />

      <Benefits
        title={<Trans>Perché una giostra Pessastudio</Trans>}
        subtitle={<Trans>Giostre</Trans>}
        text={
          <Trans>
            <Typography paragraph>Le giostre rappresentano il punto di forza della nostra azienda.</Typography>
            <Typography paragraph>
              Sono state create dalla ricerca di <strong>Luciano Pessa</strong> con l'intenzione di realizzare un
              semplice ed affidabile strumento di lavoro che vi consentirà di allenare il vostro cavallo anche quando
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
        <TH variant="h2">
          <Trans>Gamma</Trans>
        </TH>

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
            <TH variant="h3" sans>
              <Trans>Tecnoexerciser</Trans>
            </TH>
            <Button
              component={LocalizedLink}
              to={PAGES.GIOSTRE_TECNOEXERCISER.url}
              color="warm2"
              size="large"
              startIcon={<RemoveRedEyeOutlined />}
            >
              <Trans>Scopri di piú</Trans>
            </Button>
          </Box>
        }
        right={
          <Box textAlign="center">
            <TH variant="h3" sans>
              <Trans>Ippowalker</Trans>
            </TH>
            <Button
              component={LocalizedLink}
              to={PAGES.GIOSTRE_IPPOWALKER.url}
              color="primary"
              size="large"
              endIcon={<RemoveRedEyeOutlined />}
            >
              <Trans>Scopri di piú</Trans>
            </Button>
          </Box>
        }
      />

      <Video src={"https://www.youtube.com/embed/1C7R5u270QE"} title={t`Giostra in movimento`} />

      <Section color="primary">
        <Gallery images={IMAGES} md={3} />
      </Section>
    </>
  )
}

export default Giostre
