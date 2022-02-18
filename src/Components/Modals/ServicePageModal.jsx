import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import { Badge, Card, Form, Row, Col, Modal, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AddModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        size="lg"
        style={{ height: "20%" }}
      >
        {props.title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm
            address={props.address}
            carModel={props.carModel}
            carNumber={props.carNumber}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
