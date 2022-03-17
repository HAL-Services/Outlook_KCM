import { useState } from "react";
import AddModal from "../../Components/Modals/ServicePageModal";
import SelectionCard from "../../Components/Cards/CarSelection";
import PlanCards from "../../Components/Cards/PlanCards";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activePlan, setActivePlan] = useState(-1);
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
          <SelectionCard
            model="I10"
            number="HR-16Y-1111"
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
          />
          <SelectionCard
            model="I20"
            number="UP-16Y-1238"
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
          />
          <SelectionCard
            model="Ferrari"
            number="DL-16Y-0007"
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
          />
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
          <PlanCards
            title="Basic Plan"
            isActive={activePlan === 0}
            onShow={() => setActivePlan(0)}
          />
          <PlanCards
            title="Regular Plan"
            badge="true"
            isActive={activePlan === 1}
            onShow={() => setActivePlan(1)}
          />
          <PlanCards
            title="Premium Plan"
            isActive={activePlan === 2}
            onShow={() => setActivePlan(2)}
          />
        </Card.Body>
        <Card.Footer>
          <AddModal title="BOOK SERVICE" address="true" />
        </Card.Footer>
      </Card>
    </>
  );
}
