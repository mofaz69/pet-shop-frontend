import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalBox({
  show,
  setShow,
  header,
  children,
  showConfirm = true,
}) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {showConfirm ? (
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}
