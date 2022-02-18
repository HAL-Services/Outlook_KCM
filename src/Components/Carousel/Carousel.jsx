import { Carousel } from "react-bootstrap";
import "./Carousel.styles.css";

export default function Carousels() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/star-in-speech-bubble-quality-review-best-excellent-services-rating-picture-id1358711238?b=1&k=20&m=1358711238&s=170667a&w=0&h=tRhwUa3xuWWIYUWLMmSnzum4PyKPDV0RPy2-XJdRZLs="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 contain"
          src="https://media.istockphoto.com/photos/star-in-speech-bubble-quality-review-best-excellent-services-rating-picture-id1358711238?b=1&k=20&m=1358711238&s=170667a&w=0&h=tRhwUa3xuWWIYUWLMmSnzum4PyKPDV0RPy2-XJdRZLs="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/star-in-speech-bubble-quality-review-best-excellent-services-rating-picture-id1358711238?b=1&k=20&m=1358711238&s=170667a&w=0&h=tRhwUa3xuWWIYUWLMmSnzum4PyKPDV0RPy2-XJdRZLs="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
