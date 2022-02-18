import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AddForm(props) {
  console.log(props);
  return (
    <Form>
      {props.address && (
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Pick Up Address</Form.Label>
          <Form.Control placeholder="House No." />
        </Form.Group>
      )}
      {props.carModel && (
        <Form.Group className="mb-3" controlId="formModel">
          <Form.Label>Car Model</Form.Label>
          <Form.Control placeholder="I10" />
        </Form.Group>
      )}
      {props.carNumber && (
        <Form.Group className="mb-3" controlId="formCarNumber">
          <Form.Label>Enter Car Registration Number</Form.Label>
          <Form.Control placeholder="HR-16Z-1111" />
        </Form.Group>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
