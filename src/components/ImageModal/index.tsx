import React, { useState } from "react"
import { Image, Modal } from "react-bootstrap"

const ImageModal: React.FC<Props> = ({ children, image }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {React.cloneElement(children, { onClick: handleShow })}
      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Body>
          <Image src={image} fluid />
        </Modal.Body>
      </Modal>
    </>
  )
}

interface Props {
  children: any
  image: string
}

export default ImageModal
