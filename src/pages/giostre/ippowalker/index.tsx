import { withPrefix } from 'gatsby';
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IntlFormatters } from 'react-intl';

import { Columns, ContentTable, Gallery, Header, Product, Section } from '../../../components';
import { Ratio } from '../../../constants';

const Ippowalker: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const IMAGES = [
    {
      src: require("../../../images/product/giostre/ippowalker/galleria/giostra.jpg"),
      caption: "Giostra Ippowalker con corridoio FLAT",
    },
    {
      src: require("../../../images/product/giostre/ippowalker/galleria/giostra-separazioni.jpg"),
      caption: "Separazioni elettrificate",
    },
    {
      src: require("../../../images/product/giostre/ippowalker/galleria/giostra-corridoio-tecno-fence.jpg"),
      caption: "Giostra con corridoio TECNCOFENCE",
    },
    {
      src: require("../../../images/product/giostre/ippowalker/galleria/giostra-copertura-pvc-2.jpg"),
      caption: "Copertura in PVC verde",
    },
  ]

  const DIMENSIONS = [4, 6]

  const PRODUCTS = [
    {
      image: require("../../../images/product/giostre/ippowalker/gamma/solo-motore.jpg"),
      name: "Giostra",
      description:
        <>
          <p>L'opzione semplice ed economica</p>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
    },
    {
      image: require("../../../images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg"),
      name: "Giostra con corridoio Tecnofence",
      description:
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
    },
    {
      image: require("../../../images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg"),
      name: "Giostra con corridoio Flat",
      description:
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
    }
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION__ippowalker" })}</h1>
            <p>Ippowalker è una giostra di recente realizzazione semplice, essenziale, di conseguenza più economica ma costruita con la qualità e la robustezza che contraddistingue tutti i nostri prodotti.</p>
            <p>Le braccia sono dotate di elettrificazione.</p>
            <p>Il motore produce una potenza di 0,37 kw e permette una cadenza compresa fra 60 e 210 metri al minuto.</p>
            <p>La giostra è disponibile in due diverse grandezze di diametro: 12 mt. (4 cavalli) e 14.20 mt (6 cavalli).</p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>{formatMessage({ id: "GENERAL__gamma" })}</Header>
        <FormattedHTMLMessage id="GIOSTRA__ippowalker__gamma__text" />
        
        <Row>
          {PRODUCTS.map((product, index) => (
            <Col
              key={index}
              as={Product}
              ratio={Ratio.HORIZONTAL}
              {...product}
            />
          ))}
        </Row>
      </Section>

      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL__client-service" })}</Header>

        <Row>
          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => (
                {
                  label: formatMessage({ id: `GIOSTRA__ippowalker__dimensioni-${dimension}` }),
                  file: withPrefix(`/giostra-ippowalker-${dimension}.pdf`)
                }
              ))}
            />
          </Col>

          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
                  file: withPrefix(`/giostra-ippowalker-manuale-quadro.pdf`)
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
                  file: withPrefix(`/giostra-collegamento-elettrico.pdf`)
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
                  link: withPrefix(`/giostre/ippowalker/istruzioni-montaggio`)
                },
              ]}
            />
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Ippowalker)
