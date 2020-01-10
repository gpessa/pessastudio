import React from "react"

import { Product, Header } from "../../components"
import { Ratio } from "../../constants"
import { Row, Col } from "react-bootstrap"
import { Colors } from "../../constants"
import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"

const Barriere = ({ className, intl: { formatMessage } }: { className?: string, intl: any }) => (
  <div className={className}>
    <Row>
      <Col md={7}>
        <Header>{formatMessage({ id: "BARRIERE_title" })}</Header>
        <FormattedHTMLMessage id="BARRIERE_description" />
      </Col>
      <Col
        as={Product}
        ratio={Ratio.HORIZONTAL}
        description={formatMessage({ id: "BARRIERE_product_description" })}
        image={require("../../images/barriere.jpg")}
        name={formatMessage({ id: "BARRIERE_product_title" })}
        price={35}
        weight={9.75}
        length={3000}
        diameter={95}
        colors={[Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW]}
      />
    </Row>
  </div>
)

export default injectIntl(Barriere)
