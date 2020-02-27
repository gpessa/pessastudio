import React from "react"
import { Modal, Button, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useGallery } from "@hooks"

import * as styles from "./styles.module.scss"

interface WithModalGallery {
  images: Picture[];
}

export interface WithInjectedModalGalleryProps extends Pick<ReturnType<typeof useGallery>, 'open'> {
  images: Picture[];
} 

const withModalGallery = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithModalGallery & WithInjectedModalGalleryProps> => ({
  images,
  ...props
}: WithModalGallery) => {
  const { showPreviousEnabled, showNextEnabled, showPrevious, showNext, active, close, open } = useGallery(images)

  return (
    <>
      <Component {...props as P} images={images} open={open}/>

      <Modal show={!!active} onHide={close} className={styles.modal} size="lg" centered={true}>
        {active && (
          <>
            <Modal.Body>
              <Image className={styles.galleryModalImage} src={active.src} />

              {showPreviousEnabled &&
                <Button className={styles.galleryModalPrevious} onClick={showPrevious}>
                  <FontAwesomeIcon icon={faArrowLeft} fixedWidth={true} />
                </Button>
              }

              {showNextEnabled &&
                <Button className={styles.galleryModalNext} onClick={showNext}>
                  <FontAwesomeIcon icon={faArrowRight} fixedWidth={true} />
                </Button>
              }

            </Modal.Body>

            {active.caption && <Modal.Footer>{active.caption}</Modal.Footer>}
          </>
        )}
      </Modal>
    </>
  )
}

export default withModalGallery