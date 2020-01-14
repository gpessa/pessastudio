import { withPrefix } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import { IntlFormatters } from 'react-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Columns, ContentTable, Gallery, Header, Product, Section } from '../../../components';
import { Ratio } from '../../../constants';

const Tecnoexerciser: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
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

  const PRODUCTS = [
    {
      image: require("../../../images/product/giostre/tecnoexerciser/gamma/solo-motore.jpg"),
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
      image: require("../../../images/product/giostre/tecnoexerciser/gamma/con-corridoio-coperto.jpg"),
      name: "Giostra con corridoio Coperto",
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
      image: require("../../../images/product/giostre/tecnoexerciser/gamma/con-corridoio-tecnofence.jpg"),
      name: "Giostra con corridoio tecnofence",
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
            <h1>{formatMessage({ id: "NAVIGATION__tecnoexerciser" })}</h1>
            <p>Tecnoexerciser è il modello di giostra attualmente più richiesto.</p>
            <p>Oggi, alle già note caratteristiche tecniche e alla grande affidabilità, abbiamo aggiunto anche alcune specifiche funzioni che fanno della giostra Tecnoexcerciser una macchina "leader" nel settore.</p>
            <p>E' possibile infatti:</p>
            <ul>
              <li>scegliere la forza che la porta mobile esercita sugli animali per invitarli ad avanzare</li>
              <li>mantenere un controllo costante sull'elettrificazione delle porte mobili</li>
              <li>beneficiare dell'innovativo sistema "training program" che vi consentirà di allenare i vostri cavalli fino ad ottenere performance atletiche.</li>
            </ul>
            <p>La struttura di acciaio zincato sorregge la copertura inclinata in PVC e prevede un carico neve di 80 kg/ mq e una forza vento pari a 110 Km/h.</p>
            <p>La struttura è fornita, a seconda delle esigenze, o con punte per l'ancoraggio al suolo o con tasselli nel caso in cui si desideri ancorarla ad un fondo di calcestruzzo.</p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>{formatMessage({ id: "GENERAL__gamma" })}</Header>
        <p>E' possibile acquistare la giostra senza la recinzione o puoi scegliere tra due tipologie di recinzioni disponibili: FLAT o con corridoio TECNOFENCE (da 2 o 4 filagne).</p>

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
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `GIOSTRA__tecnoexerciser__dimensioni-${dimension}` }),
                file: withPrefix(`/giostra-tecnoexerciser-${dimension}.pdf`),
              }))}
            />
          </Col>

          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
                  file: withPrefix(`/giostra-tecnoexerciser-manuale-quadro.pdf`)
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
                  file: withPrefix(`/giostra-collegamento-elettrico.pdf`)
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
                  link: "/giostre/tecnoexerciser/istruzioni-montaggio",
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__procedura-lubrificazione" }),
                  link: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
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
