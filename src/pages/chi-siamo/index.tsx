import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const ChiSiamoPage = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Image src="https://www.fillmurray.com/100/100" roundedCircle />
              <Card.Title>Anna Pessa</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Image src="https://www.fillmurray.com/100/100" roundedCircle />
              <Card.Title>Anna Pessa</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Image src="https://www.fillmurray.com/100/100" roundedCircle />
              <Card.Title>Anna Pessa</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  </>
)

export default ChiSiamoPage

