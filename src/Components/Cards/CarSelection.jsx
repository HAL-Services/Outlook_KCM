import { Badge, Card, Form, Row, Col, Modal, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SelectionCard(props) {
  return (
    <Card
      style={{
        width: "18rem",
        display: "flex",
        backgroundColor: "whitesmoke",
        padding: "1rem",
        marginBottom: "1rem",
        height: "100%",
        cursor:"pointer",
        flexWrap: "wrap",
      }}
    >
      <div className="cardBody">
        <Card.Title className="mb-2 mt-2">
          <Badge bg="secondary">MODEL:</Badge>{" "}
          <span style={{ fontWeight: "600", marginLeft: "27px" }}>
            {props.model}
          </span>
        </Card.Title>
        <Card.Title className="mb-2 mt-2 ">
          <Badge bg="secondary">NUMBER:</Badge>
          <span style={{ fontWeight: "600", marginLeft: "20px" }}>
            {props.number}
          </span>
        </Card.Title>
      </div>
    </Card>
  );
}

{
  /* <Form.Check
    type="radio"
    aria-label="radio 1"
    style={{ marginRight: "10px", borderRadius: "50%" }}
  /> */
}
