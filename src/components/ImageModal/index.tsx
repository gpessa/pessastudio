import React, { useState } from "react"
import { Image, Modal } from 'react-bootstrap';

const ImageModal = ({ children, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {React.cloneElement(children, { onClick: handleShow })}

      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Body>
          <Image src={image} fluid/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageModal