import React from "react"
import { Row, Col, Figure } from "react-bootstrap"

import * as styles from "./styles.module.scss"
import { withModalGallery } from "@hoc"
import { WithInjectedModalGalleryProps } from "src/hoc/withModalGallery"


const Gallery = withModalGallery(({ images, open }: WithInjectedModalGalleryProps) => {
  return (
    <Row>
      {images.map((image, index) => (
        <Col md={6} key={index}>
          <Figure onClick={() => open(image)} className={styles.galleryItem}>
            <Figure.Image src={image.src} className={styles.galleryItemImage} />
            <Figure.Caption>{image.caption}</Figure.Caption>
          </Figure>
        </Col>
      ))}
    </Row>
  )
})

export default Gallery
