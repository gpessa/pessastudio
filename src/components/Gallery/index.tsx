import React from "react"
import { Row, Col, Figure } from "react-bootstrap"

interface Props {
  images: {
    src: string
    caption: string
  }[]
}

const Gallery = ({ images }: Props) => (
  <Row>
    {images.map(({ src, caption }, index) => (
      <Col as={Figure} md={6} key={index}>
        <Figure.Image src={src} />
        <Figure.Caption>{caption}</Figure.Caption>
      </Col>
    ))}
  </Row>
)

export default Gallery
