import { graphql, withPrefix } from 'gatsby';
import { FormattedHTMLMessage, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Columns, ContentTable, Gallery, Section, TH } from '@components';
import { Typography } from '@material-ui/core';
import { COLORS } from '@theme';

import Accessori from './_accessori';
import Gamma from './_gamma';

export const query = graphql`
  query RecintiGallery {
    allFile(filter: {relativeDirectory: {in: "product/recinti/gallery"}}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

const Recinti: React.FC<{
  data: ImagesQuery
}> = ({ data }) => {
  const { formatMessage } = useIntl()

  const IMAGES = data.allFile.edges.map(({ node }, index) => ({
    caption: formatMessage({ id: `RECINTI__gallery__image-${index}` }),
    src: require(`@images/${node.relativePath}`),
  }))

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{formatMessage({ id: "NAVIGATION__recinti" })}</TH>
            <FormattedHTMLMessage id="RECINTI__text" tagName={Typography} />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Gamma />

      <Accessori />

      <Section color={COLORS.WARM2}>
        <TH variant="h2">{formatMessage({ id: "GENERAL__client-service" })}</TH>
        <ContentTable
          title={formatMessage({ id: "GENERAL__manuali" })}
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
