import { useState } from "react";
import AddModal from "../../Components/Modals/ServicePageModal";
import SelectionCard from "../../Components/Cards/CarSelection";
import PlanCards from "../../Components/Cards/PlanCards";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Services() {
  return (
    <>
      <Card
        style={{
          marginTop: "4.2rem",
          minHeight: "500px",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card.Header
          as="h3"
          style={{
            padding: "2%",
            backgroundColor: "#2a2726",
            color: "white",
          }}
        >
          <span style={{ padding: "10px" }}>SELECT CAR</span>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexFlow: "row wrap",
          }}
        >
          <SelectionCard model="I10" number="HR-16Y-1111" />
          <SelectionCard />
          <SelectionCard />
          <AddModal title="ADD NEW CAR" carModel="true" carNumber="true" />
        </Card.Body>
      </Card>
      <Card
        style={{
          minHeight: "500px",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
        }}
      >
        <Card.Header
          as="h3"
          style={{
            padding: "2%",

            backgroundColor: "#2a2726",
            color: "white",
          }}
        >
          <span style={{ marginTop: "10px", padding: "10px" }}>
            CHOOSE A PLAN
          </span>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <PlanCards title="Basic Plan" />
          <PlanCards title="Regular Plan" badge="true" />
          <PlanCards title="Premium Plan" />
        </Card.Body>
        <Card.Footer>
          <AddModal title="BOOK SERVICE" address="true" />
        </Card.Footer>
      </Card>
    </>
  );
}
