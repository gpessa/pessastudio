import { FormattedHTMLMessage, injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Header, Product, Section } from '../../components';
import { Ratio, Material } from '../../constants';

const CandelieriLameForate = ({ className, intl: { formatMessage } }: { className?: string, intl: any }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-alluminio__name" }),
      image: require("../../images/product/ostacoli/candeliere-alluminio.jpg"),
      depth: 72,
      width: 72,
      height: 170,
      weight: 10
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-pvc__name" }),
      image: require("../../images/product/ostacoli/candeliere-pvc.jpg"),
      depth: 72,
      height: 170,
      weight: 7,
      width: 72
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de-piccola__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      image: require("../../images/product/ostacoli/lama-de-piccola.jpg"),
      ratio: Ratio.VERTICAL,
      thickness: 2,
      weight: 0.65,
      width: 6.5,
      lenght: 50,
      price: 6.6,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de-grande__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      image: require("../../images/product/ostacoli/lama-de-grande.jpg"),
      ratio: Ratio.VERTICAL,
      thickness: 2,
      weight: 0.65,
      width: 6.5,
      lenght: 50,
      price: 6.6,
    }
  ]

  return (
    <Section className={className}>
      <Header>{formatMessage({ id: "OSTACOLI__barriere__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__barriere__text" />
      <Row>
        {PRODUCTS.map((product, index) => (
          <Col
            key={index}
            as={Product}
            ratio={Ratio.VERTICAL}
            {...product}
          />
        ))}
      </Row>  
    
    </Section>
  )
}

export default injectIntl(CandelieriLameForate)

