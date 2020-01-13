import { withPrefix } from 'gatsby';
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IntlFormatters } from 'react-intl';

import { Columns, ContentTable, Gallery, Header, Product, Section } from '../../components';
import { Colors } from '../../constants';

const Recinti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
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
    },
    {
      name: formatMessage({ id: "RECINTI_product-recinzione-erpice-livellatrice-name" }),
      description: formatMessage({ id: "RECINTI_product-recinzione-erpice-livellatrice-description" }),
      image: require("../../images/product/recinti/erpice-livellatrice.jpg")
    }
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION_recinti" })}</h1>
            <FormattedHTMLMessage id="RECINTI_text" />
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
          title={formatMessage({ id: "GENERAL_handbook" })}
          rows={[
            {
              label: formatMessage({ id: "RECINTI_handbook-prepare-the-ground" }),
              link: "/recinti/come-preparare-il-fondo"
            },
            {
              label: formatMessage({ id: "RECINTI_handbook-istruzioni-montaggio" }),
              file: withPrefix("/recinti-istruzioni-montaggio.pdf")
            }
          ]}
        />
      </Section>
    </>
  )
}

export default injectIntl(Recinti)
