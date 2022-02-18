import "./Cards.styles.css";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Cards() {
  return (
    <Row>
      <Col className="pricing d-flex gap-2" lg={4} md={6} sm={6}>
        <Card style={{ width: "18rem" }} className="text-center pricing_col">
          <Card.Header className="card-heading">
            <h1>Basic</h1>
          </Card.Header>
          <Card.Body className="gap-2 mb-4 m-3 ">
            <Card.Title className="plan_head">$9</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <Card style={{ width: "18rem" }} className="text-center hidden">
          <Card.Header className="card-heading">
            <h1>Standard</h1>
          </Card.Header>
          <Card.Body className="gap-2 mb-4 m-3">
            <Card.Title className="plan_head">$9</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={12}>
        <Card style={{ width: "18rem" }} className="text-center hidden">
          <Card.Header className="card-heading">
            <h1>Premium</h1>
          </Card.Header>
          <Card.Body className="gap-2 mb-4 m-3">
            <Card.Title className="plan_head">$9</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
