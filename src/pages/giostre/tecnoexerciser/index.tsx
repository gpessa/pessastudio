import { injectIntl, Link } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"

import { Columns, ContentTable, Gallery, Header, PdfIcon, Product, Section, Seo } from "../../../components"

const Tecnoexerciser = ({ intl: { formatMessage } }) => {
  const IMAGES = [
    {
      src: require("../../../images/product/giostre/tecnoexerciser/galleria/giostra.jpg"),
      caption: "Giostra Tecnoexerciser",
    },
    {
      src: require("../../../images/product/giostre/tecnoexerciser/galleria/motore.jpg"),
      caption: "Motore Giostra Tecnoexerciser",
    },
    {
      src: require("../../../images/product/giostre/tecnoexerciser/galleria/separazione-1.jpg"),
      caption: "Giostra Tecnoexerciser separazioni",
    },
    {
      src: require("../../../images/product/giostre/tecnoexerciser/galleria/separazione-2.jpg"),
      caption: "Giostra Tecnoexerciser separazioni",
    },
  ]

  const DIMENSIONS = [15, 18, 20, 22, 24]

  return (
    <>
      <Columns
        variant="primary"
        left={
          <>
            <h1>Giostra Tecnoexerciser</h1>
            <p>Tecnoexerciser è il modello di giostra attualmente più richiesto.</p>
            <p>
              Oggi, alle già note caratteristiche tecniche e alla grande affidabilità, abbiamo aggiunto anche alcune
              specifiche funzioni che fanno della giostra Tecnoexcerciser una macchina "leader" nel settore.
            </p>
            <p>E' possibile infatti:</p>
            <ul>
              <li>scegliere la forza che la porta mobile esercita sugli animali per invitarli ad avanzare</li>
              <li>mantenere un controllo costante sull'elettrificazione delle porte mobili</li>
              <li>
                beneficiare dell'innovativo sistema "training program" che vi consentirà di allenare i vostri cavalli
                fino ad ottenere performance atletiche.
              </li>
            </ul>
            <p>
              La struttura di acciaio zincato sorregge la copertura inclinata in PVC e prevede un carico neve di 80 kg/
              mq e una forza vento pari a 110 Km/h.
            </p>
            <p>
              La struttura è fornita, a seconda delle esigenze, o con punte per l'ancoraggio al suolo o con tasselli nel
              caso in cui si desideri ancorarla ad un fondo di calcestruzzo.
            </p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>La gamma</Header>
        <p>
          E' possibile acquistare la giostra senza la recinzione o puoi scegliere tra due tipologie di recinzioni
          disponibili: FLAT o con corridoio TECNOFENCE (da 2 o 4 filagne).
        </p>

        <Row>
          <Col
            as={Product}
            image={require("../../../images/product/giostre/tecnoexerciser/gamma/solo-motore.jpg")}
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
            image={require("../../../images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg")}
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
            image={require("../../../images/product/giostre/tecnoexerciser/gamma/con-corridoio-flat.jpg")}
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
                label: formatMessage({ id: `GIOSTRA_tecnoexerciser-dimension_${dimension}` }),
                link: (
                  <a target="_blank" href={`/giostra-tecnoexerciser-${dimension}.pdf`}>
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
                    <a target="_blank" href={`/giostra-tecnoexerciser-manuale-quadro.pdf`}>
                      <PdfIcon />
                    </a>
                  ),
                },
                {
                  label: "Manuale collegamento elettrico",
                  link: (
                    <a target="_blank" href={`/giostra-tecnoexerciser-collegamento-elettrico.pdf`}>
                      <PdfIcon />
                    </a>
                  ),
                },
                {
                  label: "Istruzioni di montaggio",
                  link: <Link to="/giostre/tecnoexerciser/istruzioni-montaggio">Istruzioni</Link>,
                },
                {
                  label: "Procedura lubrificazione",
                  link: (
                    <a href="https://www.youtube.com/watch?v=QMA4wPxq_ow" target="_blanck">
                      Istruzioni
                    </a>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Tecnoexerciser)
