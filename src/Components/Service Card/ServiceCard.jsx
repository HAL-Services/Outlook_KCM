import "./ServiceCard.styles.css";
import { Card, Button } from "react-bootstrap";

export default function ServiceCard({ title }) {
  return (
    <Card className="text-center m-4 service_card" style={{ width: "18rem" }}>
      <Card.Header>
        <h1>{title}</h1>
      </Card.Header>
      <Card.Body className="m-3">
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
