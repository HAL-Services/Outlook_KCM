import { Card, Button, InputGroup, Form, FloatingLabel } from "react-bootstrap";
import "./PhoneOpt.styles.css";

export default function PhoneOtp({ title }) {
  return (
    <Card
      border="light"
      className="phone_card"
      style={{ width: "18rem", height: "25rem" }}
    >
      <Card.Header
        className="mb-8 text-center"
        as="h3"
        style={{ fontSize: "2rem", backgroundColor: "#2a2726", color: "white" }}
      >
        {title}
      </Card.Header>
      <Card.Body
        className="text-center"
        style={{ display: "flex", alignItems: "center" }}
      >
        <InputGroup className="d-flex m-3">
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="name@example.com" />
            </FloatingLabel>
          </Form>
        </InputGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="primary m-3" style={{ fontSize: "1.2rem" }}>
          Send OTP
        </Button>{" "}
      </Card.Footer>
    </Card>
  );
}
