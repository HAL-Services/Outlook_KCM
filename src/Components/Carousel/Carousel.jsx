import { Carousel } from "react-bootstrap";
import rectangle from "../../Assets/Rectangle 4.png";
import "./Carousel.styles.css";

export default function Carousels() {
  return (
    <Carousel
      style={{ backgroundColor: "#2a2726", width: "50%", marginLeft: "30px" }}
    >
      <Carousel.Item>
        <img className="d-block w-70" src={rectangle} alt="First slide" />
        <Carousel.Caption>
          <h3>Aviral</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={rectangle} alt="First slide" />
        <Carousel.Caption>
          <h3>Harsh</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={rectangle} alt="First slide" />
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
