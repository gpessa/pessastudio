import React from "react"
import { Row, Col, Figure, Modal, Image, Button } from "react-bootstrap"
import { useGallery } from "@hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import * as styles from './styles.module.scss';

interface Props {
  images: Picture[]
}

const Gallery: React.FC<Props> = ({ images }: Props) => {
  const {
    showPreviousDisabled,
    showNextDisabled,
    showPrevious,
    showNext,
    active,
    close,
    open
  } = useGallery(images);

  return (
    <>
      <Row>
        {images.map((image, index) => (
          <Col md={6} key={index}>
            <Figure onClick={() => open(image)} className={styles.galleryItem}>
              <Figure.Image src={image.src} />
              <Figure.Caption>{image.caption}</Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>

      <Modal show={!!active} onHide={close} className={styles.modal} size="lg" centered={true}>
        <Modal.Body>
          {active && <Image className={styles.galleryModalImage} src={active.src} />}

          <Button className={styles.galleryModalPrevious} disabled={showPreviousDisabled} onClick={showPrevious}>
            <FontAwesomeIcon icon={faArrowLeft} fixedWidth={true} />
          </Button>

          <Button className={styles.galleryModalNext} disabled={showNextDisabled} onClick={showNext}>
            <FontAwesomeIcon icon={faArrowRight} fixedWidth={true}/>
          </Button>

        </Modal.Body>

        {active && <Modal.Footer>{active.caption}</Modal.Footer>}
      </Modal>
    </>
  )
}

export default Gallery
