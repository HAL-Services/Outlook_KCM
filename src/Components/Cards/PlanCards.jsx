import { Badge, Card, Form, Row, Col, Modal, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default function PlanCards({ title, badge, isActive, onShow }) {
  return (
    <Card
      className="text-center"
      style={{
        minWidth: "20%",
        marginBottom: "1rem",
        backgroundColor: isActive ? "lightgreen" : "whitesmoke",
      }}
    >
      <Card.Header as="h5" style={{ display: "flex", flexDirection: "column" }}>
        {title}
        {badge && (
          <Badge pill bg="danger" style={{ marginTop: "2px" }}>
            RECOMMENDED
          </Badge>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>Washing</ListGroup.Item>
            <ListGroup.Item>Repair</ListGroup.Item>
            <ListGroup.Item>Colour</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="lg" onClick={onShow}>
          SELECT
        </Button>
      </Card.Footer>
    </Card>
  );
}
