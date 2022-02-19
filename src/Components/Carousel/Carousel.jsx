import { Carousel } from "react-bootstrap";
import ServiceCard from "../Service Card/ServiceCard";
import "./Carousel.styles.css";

export default function Carousels() {
  return (
    <Carousel
      style={{ backgroundColor: "#2a2726", width: "50%", marginLeft: "30px" }}
    >
      <Carousel.Item>
        <img
          className="d-block "
          src="https://images.unsplash.com/photo-1422422153408-a3298d6d542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <ServiceCard />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1422422153408-a3298d6d542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Harsh</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1422422153408-a3298d6d542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Luvjeet</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
