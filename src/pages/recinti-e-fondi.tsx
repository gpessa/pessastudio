import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';

import { Header, Product, Section, Seo, SubSection } from '../components';
import { Colors } from '../constants';

const PHOTOS = [
  require("../images/product/recinti/recinti-image-1.jpg"),
  require("../images/product/recinti/recinti-image-2.jpg"),
  require("../images/product/recinti/recinti-image-3.jpg"),
  require("../images/product/recinti/recinti-image-4.jpg"),
]

const RecintiFondi = ({ intl: { formatMessage } }) => (
  <>
    <Seo title={formatMessage({ id: "META_recinti-e-fondi_title" })} />

    <Section fluid>
      <Container>
        <h1>Recinti e fondi</h1>

        <p>Le recinzioni <strong>Tecno Fence</strong> sono realizzate con materiale particolarmente adatto a durare nel tempo anche in presenza delle più avverse condizioni meteorologiche.</p>
        <p>Sono in grado di sopportare senza rompersi i calci e le spinte dei cavalli. A differenza del legno o di altri prodotti utilizzati per il medesimo scopo, gli animali non mordono la recinzione. Tecno Fence, non presenta spigoli vivi e inoltre, essendo elastica, è in grado di assorbire gli urti senza rompersi evitando cosi di provocare infortuni a persone e animali.{" "}</p>
        <p>Il materiale impiegato è lo stesso che viene utilizzato per la produzione di serramenti dove l’inalterabilità del colore e delle caratteristiche tecniche sono condizioni indispensabili per garantire un prodotto di qualità. L’inclusione di inibitori dei raggi ultravioletti consente anche di prevenire crepe e rotture e di resistere alla corrosione e allo sfogliamento mantenendo, inalterate, le caratteristiche originali anche con temperature variabili da +70° C a -20°C.</p>
        <p>Principalmente prodotte nel colore bianco, possono essere fornite, a richiesta, anche nel colore verde. Variabili le altezze che vanno da 1,20 mt a 1,90 mt, misura quest’ultima utilizzata principalmente per tondini da lavoro o paddock per stalloni.</p>
        <p>In ogni recinzione inoltre si possono inserire uno o più cancelli scorrevoli in alluminio.</p>
        <p>Tutte le nostre recinzioni sono personalizzate in base alle esigenze di metratura e di figura del cliente.</p>

        <Row>
          {PHOTOS.map((src, index) => (
            <Col md={3} as={Figure} key={index}>
              <Figure.Image fluid src={src} />
              <Figure.Caption>{formatMessage({ id: `RECINTI_E_FONDI_image_${index}`})}</Figure.Caption>
            </Col>
          ))}
        </Row>
      </Container>

      <SubSection className="bg-light">
        <Header>La gamma</Header>

        <Row>
          <Col
            md={3}
            name="Recinzione 1 filagna"
            description="La recinzione ad una filagna viene utilizzata per delimitare campi da lavoro o gara poco adoperati e non è adatta per l'addestramento. Potete utilizzarla anche per delimitare un'area del vostro giardino di casa"
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/recinto-1-filagna.jpg")}
            as={Product}
            height={120}
          />

          <Col
            md={3}
            name="Recinzione 2 filagne"
            description="La recinzione a due filagne genericamente viene utilizzata per delimitare campi da lavoro o per realizzare paddock dove i cavalli sono comunque osservati dal personale presente"
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/recinto-2-filagna.jpg")}
            as={Product}
            height={135}
          />

          <Col
            md={3}
            name="Recinzione 3 filagne"
            description="La recinzione a 3 filagne viene utilizzata per delimitare paddok per animali che rimangono per molte ore al giorno incustoditi, meglio se con impianto d'elettrificazione sulle filagne, oppure per confini di proprietà o aree"
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/recinto-3-filagna.jpg")}
            as={Product}
            height={160}
          />

          <Col
            md={3}
            name="Recinzione 4 filagne"
            description="Le recinzione a 4 filagne utilizzate per delimitare paddock per stalloni, realizzare tondini per la doma e l'addestramento o per formare ovali per il salto in liberta'"
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/recinto-4-filagna.jpg")}
            as={Product}
            height={190}
          />

          <Col
            md={3}
            name="Recinzione bordo pista"
            description="La recinzione bordo pista viene utilizzata per delimitare campi da altezza 120"
            as={Product}
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/bordo-pista.jpg")}
          />

          <Col
            md={3}
            name="Tondini"
            description="Con le nostre recinzione potrete costruire i vostri tondini per lo sgambamento cavalli e per la doma puledri con il diametro che meglio preferite"
            as={Product}
            colors={[Colors.WHITE]}
            image={require("../images/product/recinti/tondini.jpg")}
          />

          <Col
            md={3}
            name="Piede mobile"
            description="Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi permetterà di posizionarla e spostarla dove e quando volete"
            as={Product}
            colors={[Colors.GREEN]}
            image={require("../images/product/recinti/piede-mobile.jpg")}
            height={30}
          />
        </Row>
      </SubSection>

      <SubSection>
        <Header>Fondi</Header>
        <ul>
          <li>Preparare la superficie spianandola a " SCHIENA D'ASINO " con il centro più alto dei bordi (2%) per far si che la pioggia defluisca. Mantenere i bordi dell'area alla stessa altezza del terreno circostante e riportare materiale nel centro dell'area per alzarlo.</li>
          <li>Stendere sull'area una "RETE DI SEPARAZIONE", ben tesa e trattenuta lungo i bordi in una canaletta scavata nel terreno impedendo così che la terra si mescoli alla sabbia.</li>
          <li>Distendere uniformemente sopra la rete uno strato di 7/8 centimetri di sabbia ( diametro 1 mm.)</li>
          <li>Distribuire sopra alla sabbia 3 kg di "straccetti di geotessuto" per mt. quadro di superficie in modo da mantenere il fondo stabile e morbido. Distribuire successivamente dopo un paio di ingressi a cavallo altri 2 kg.</li>
          <li>Tutti i giorni passare con una " ERPICE LIVELLATRICE " per eliminare le impronte lasciate dagli zoccoli.</li>
        </ul>
      </SubSection>
    </Section>
  </>
)

export default injectIntl(RecintiFondi)
