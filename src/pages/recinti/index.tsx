import { withPrefix } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Columns, ContentTable, Gallery, Header, Product, Section } from '../../components';
import { Colors } from '../../constants';

const Recinti = ({ intl: { formatMessage } }) => {
  const IMAGES = [
    { 
      caption: formatMessage({ id: `RECINTI_image_1` }), 
      src: require("../../images/product/recinti/recinti-image-1.jpg")
    },
    { 
      caption: formatMessage({ id: `RECINTI_image_2` }), 
      src: require("../../images/product/recinti/recinti-image-2.jpg")
    },
    { 
      caption: formatMessage({ id: `RECINTI_image_3` }), 
      src: require("../../images/product/recinti/recinti-image-3.jpg")
    },
    { 
      caption: formatMessage({ id: `RECINTI_image_4` }), 
      src: require("../../images/product/recinti/recinti-image-4.jpg")
    },
    { 
      caption: formatMessage({ id: `RECINTI_image_5` }), 
      src: require("../../images/product/recinti/recinti-image-5.jpg")
    }
  ]

  const PRODUCTS = [
    { 
      description: formatMessage({ id: `RECINTI_product-recinzione-1-filagna-description` }),
      name: formatMessage({ id: `RECINTI_product-recinzione-1-filagna-name` }),
      image: require("../../images/product/recinti/recinto-1-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 120
    },
    { 
      description: formatMessage({ id: `RECINTI_product-recinzione-2-filagne-description` }),
      name: formatMessage({ id: `RECINTI_product-recinzione-2-filagne-name` }),
      image: require("../../images/product/recinti/recinto-2-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 135
    },
    { 
      description: formatMessage({ id: `RECINTI_product-recinzione-3-filagne-description` }),
      name: formatMessage({ id: `RECINTI_product-recinzione-3-filagne-name` }),
      image: require("../../images/product/recinti/recinto-3-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 160
    },
    { 
      description: formatMessage({ id: `RECINTI_product-recinzione-4-filagne-description` }),
      name: formatMessage({ id: `RECINTI_product-recinzione-4-filagne-name` }),
      image: require("../../images/product/recinti/recinto-4-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 190
    },
    { 
      description: formatMessage({ id: `RECINTI_product-recinzione-bordo-pista-description` }),
      name: formatMessage({ id: `RECINTI_product-recinzione-bordo-pista-name` }),
      image: require("../../images/product/recinti/bordo-pista.jpg"),
      colors: [Colors.WHITE]
    },
    {
      description: formatMessage({ id: `RECINTI_product-piede-mobile-description` }),
      name: formatMessage({ id: `RECINTI_product-piede-mobile-name` }),
      image: require("../../images/product/recinti/piede-mobile.jpg"),
      colors: [Colors.GREEN],
      height: 30
    }
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION_recinti" })}</h1>
            <p>Le recinzioni <strong>Tecno Fence</strong> sono realizzate con materiale particolarmente adatto a durare nel tempo anche in presenza delle più avverse condizioni meteorologiche.</p>
            <p>Sono in grado di sopportare senza rompersi i calci e le spinte dei cavalli. A differenza del legno o di altri prodotti utilizzati per il medesimo scopo, gli animali non mordono la recinzione. Tecno Fence, non presenta spigoli vivi e inoltre, essendo elastica, è in grado di assorbire gli urti senza rompersi evitando cosi di provocare infortuni a persone e animali. </p>
            <p>Il materiale impiegato è lo stesso che viene utilizzato per la produzione di serramenti dove l’inalterabilità del colore e delle caratteristiche tecniche sono condizioni indispensabili per garantire un prodotto di qualità. L’inclusione di inibitori dei raggi ultravioletti consente anche di prevenire crepe e rotture e di resistere alla corrosione e allo sfogliamento mantenendo, inalterate, le caratteristiche originali anche con temperature variabili da +70° C a -20°C.</p>
            <p>Principalmente prodotte nel colore bianco, possono essere fornite, a richiesta, anche nel colore verde. Variabili le altezze che vanno da 1,20 mt a 1,90 mt, misura quest’ultima utilizzata principalmente per tondini da lavoro o paddock per stalloni.</p>
            <p>In ogni recinzione inoltre si possono inserire uno o più cancelli scorrevoli in alluminio.</p>
            <p>Tutte le nostre recinzioni sono personalizzate in base alle esigenze di metratura e di figura del cliente.</p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>{formatMessage({ id: "GENERAL_gamma" })}</Header>
        <Row>{PRODUCTS.map((product, index) => <Col as={Product} key={index} md={4} {...product} />)}</Row>
      </Section>
      
      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL_client-service" })}</Header>
        <ContentTable
          title="Manuali"
          headers={["Argomento", "Scarica"]}
          rows={[
            {
              label: "Come preparare il fondo",
              link: "/recinti/come-preparare-il-fondo"
            },
            {
              label: "Istruzioni di montaggio",
              file: withPrefix("/recinti-istruzioni-montaggio.pdf")
            }
          ]}
        />
      </Section>
    </>
  )
}

export default injectIntl(Recinti)
