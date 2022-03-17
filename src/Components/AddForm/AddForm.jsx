import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddModal from "../Modals/ServicePageModal";
export default function AddForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formModel">
        <Form.Label>Car Model</Form.Label>
        <Form.Control placeholder="I10" />
      </Form.Group>
      <>
        <Form.Group className="mb-3" controlId="formCarNumber">
          <Form.Label>Enter Car Registration Number</Form.Label>
          <Form.Control placeholder="HR-16Z-1111" />
        </Form.Group>
      </>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
