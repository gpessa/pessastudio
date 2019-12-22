import { injectIntl, Link } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"

import { Columns, ContentTable, Gallery, Header, PdfIcon, Product, Section } from "../../../components"

const Ippowalker = ({ intl: { formatMessage } }) => {
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

  return (
    <>
      <Columns
        left={
          <>
            <h1>Giostra IppoWalker</h1>

            <p>Ippowalker è una giostra di recente realizzazione semplice, essenziale, di conseguenza più economica ma costruita con la qualità e la robustezza che contraddistingue tutti i nostri prodotti.</p>
            <p>Le braccia sono dotate di elettrificazione.</p>
            <p>Il motore produce una potenza di 0,37 kw e permette una cadenza compresa fra 60 e 210 metri al minuto.</p>
            <p>La giostra è disponibile in due diverse grandezze di diametro: 12 mt. (4 cavalli) e 14.20 mt (6 cavalli).</p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>La gamma</Header>
        <p>E' possibile acquistare la giostra senza la recinzione o puoi scegliere tra due tipologie di recinzioni disponibili: FLAT o con corridoio TECNOFENCE (da 2 o 4 filagne).</p>

        <Row>
          <Col
            as={Product}
            image={require("../../../images/product/giostre/ippowalker/gamma/solo-motore.jpg")}
            name="Giostra"
            description={
              <>
                <p>L'opzione semplice ed economica</p>
                <ul>
                  <li>Giostra da 4 o 6 cavalli</li>
                  <li>Diametro da 12 mt. o 14.2 mt.</li>
                  <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
                  <li>Potenza motore 0.37 kw</li>
                </ul>
              </>
            }
          />

          <Col
            as={Product}
            image={require("../../../images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg")}
            name="Giostra con corridoio Tecnofence"
            description={
              <>
                <ul>
                  <li>Giostra da 4 o 6 cavalli</li>
                  <li>Diametro da 12 mt. o 14.2 mt.</li>
                  <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
                  <li>Potenza motore 0.37 kw</li>
                </ul>
              </>
            }
          />

          <Col
            as={Product}
            image={require("../../../images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg")}
            name="Giostra con corridoio Flat"
            description={
              <>
                <ul>
                  <li>Giostra da 4 o 6 cavalli</li>
                  <li>Diametro da 12 mt. o 14.2 mt.</li>
                  <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
                  <li>Potenza motore 0.37 kw</li>
                </ul>
              </>
            }
          />
        </Row>
      </Section>

      <Section className="bg-light">
        <Header>Supporto clienti</Header>

        <Row>
          <Col md={6}>
            <ContentTable
              title="Dimensioni tondini"
              headers={["Dimensione", "Scarica"]}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `GIOSTRA_ippowalker-dimension_${dimension}` }),
                link: (
                  <a target="_blank" href={`/giostra-ippowalker-${dimension}.pdf`}>
                    <PdfIcon />
                  </a>
                ),
              }))}
            />
          </Col>

          <Col md={6}>
            <ContentTable
              title="Manuali"
              headers={["Argomento", "Scarica"]}
              rows={[
                {
                  label: "Manuale quadro di controllo",
                  link: (
                    <a target="_blank" href={`/giostra-ippowalker-manuale-quadro.pdf`}>
                      <PdfIcon />
                    </a>
                  ),
                },
                {
                  label: "Manuale collegamento elettrico",
                  link: (
                    <a target="_blank" href={`/giostra-ippowalker-collegamento-elettrico.pdf`}>
                      <PdfIcon />
                    </a>
                  ),
                },
                {
                  label: "Istruzioni di montaggio",
                  link: <Link to="/giostre/ippowalker/istruzioni-montaggio">Istruzioni</Link>,
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
