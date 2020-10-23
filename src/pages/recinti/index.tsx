import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Columns, ContentTable, Gallery, TH2, TH6, Section, TH1, TH4 } from "@components"
import { Colors } from "@constants"
import { Grid, Typography } from "@material-ui/core"
import { COLORS } from "@theme"
import Gamma from "./_gamma"
import Accessori from "./_accessori"

const Recinti: React.FC = () => {
  const { formatMessage } = useIntl()

  const IMAGES: Picture[] = [
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-0` }),
      src: require("@images/product/recinti/recinti-image-0.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-1` }),
      src: require("@images/product/recinti/recinti-image-1.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-2` }),
      src: require("@images/product/recinti/recinti-image-2.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-3` }),
      src: require("@images/product/recinti/recinti-image-3.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-4` }),
      src: require("@images/product/recinti/recinti-image-4.jpg"),
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH1>{formatMessage({ id: "NAVIGATION__recinti" })}</TH1>
            <FormattedHTMLMessage id="RECINTI__text" tagName={Typography} />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Gamma />

      {/* <Accessori /> */}

      <Section color={COLORS.WARM2}>
        <TH2>{formatMessage({ id: "GENERAL__client-service" })}</TH2>
        <ContentTable
          title={formatMessage({ id: "GENERAL__manauli" })}
          rows={[
            {
              label: formatMessage({ id: "RECINTI__manuali__preparare-il-fondo" }),
              link: "/recinti/come-preparare-il-fondo",
            },
            {
              label: formatMessage({ id: "RECINTI__manuali__istruzioni-montaggio" }),
              file: withPrefix("/recinti-istruzioni-montaggio.pdf"),
            },
          ]}
        />
      </Section>
    </>
  )
}

export default Recinti
