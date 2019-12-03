import React from "react"
import { Section, Product, Columns, Header } from "../../components"
import { Row, Col, Figure } from "react-bootstrap"
import { Ratio } from "../../constants"

const PHOTOS = [
  { 
    image: require("../../images/product/giostre/ippowalker-giostra.jpg"),
    text: "Giostra Ippowalker con corridoio FLAT",
  },
  { 
    image: require("../../images/product/giostre/ippowalker-giostra-separazioni.jpg"),
    text: "Separazioni elettrificate",
  },
  { 
    image: require("../../images/product/giostre/ippowalker-giostra-corridoio-tecno-fence.jpg"),
    text: "Giostra con corridoio TECNCOFENCE",
  },
  { 
    image: require("../../images/product/giostre/ippowalker-giostra-copertura-pvc-2.jpg"),
    text: "Copertura in PVC verde",
  },
  { 
    image: require("../../images/product/giostre/ippowalker-giostra-con-corridoio-tecnofence.jpg"),
    text: "Giostra con corridoio TECNCOFENCE",
  },
  {
    image: require("../../images/product/giostre/ippowalker-giostra-motore.jpg"),
    text: "Motore giostra",
  },
]

const IppoWalker = () => (
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
      right={
        <>
          <Row>
            {PHOTOS.map(({ image, text }, index) => (
              <Col md={6} as={Figure} key={index}>
                <Figure.Image fluid src={image} />
                <Figure.Caption>{ text }</Figure.Caption>
              </Col> 
            ))}
          </Row>
        </>
      }
    />

    <Section>
      <Header>La gamma</Header>
      <p>E' possibile acquistare la giostra senza la recinzione o puoi scegliere tra due tipologie di recinzioni disponibili: FLAT o con corridoio TECNOFENCE (da 2 o 4 filagne).</p>

      <Row>
        <Col 
          as={Product}
          ratio={Ratio.HORIZONTAL}
          image={require("../../images/product/giostre/ippowalker-giostra-motore.jpg")}
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
          ratio={Ratio.HORIZONTAL}
          image={require("../../images/product/giostre/ippowalker-giostra-con-corridoio-tecnofence.jpg")}
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
          ratio={Ratio.HORIZONTAL}
          image={require("../../images/product/giostre/ippowalker-giostra-con-corridoio-flat.jpg")}
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
  </>
)

export default IppoWalker
