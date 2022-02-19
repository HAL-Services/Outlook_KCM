import Carousels from "../../Components/Carousel/Carousel";
import ServiceCard from "../../Components/Service Card/ServiceCard";
import PhoneOtp from "../../Components/PhoneOtp/PhoneOtp";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./Home.styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home_img"
          src="https://images.unsplash.com/photo-1626995587693-c50c9a5544c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="home"
        />
        <div className="content_body">
          <h1>
            KCM AUTOMOBILES
            <br />
            <span className="hidden">(The German Car Experts)</span>{" "}
          </h1>
          <p>Car Repair And Maintenance in Gurugram</p>
        </div>
      </div>

      <div className="service_section">
        <div className="service_all_cards">
          <ServiceCard title="Basic" />
          <span className="hidden">
            <ServiceCard title="Standard" />
          </span>
        </div>
        <div className="service_link">
          <a href="service">Explore More</a>
        </div>
      </div>
      <Carousels />
      <div className="phone_section hidden">
        <PhoneOtp title="Quick Service" />
      </div>
      <Footer />
    </>
  );
}
