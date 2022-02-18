import Cards from "../../Components/Cards/Cards";
import Carousels from "../../Components/Carousel/Carousel";
import "./Home.styles.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home_img"
          src="https://images.unsplash.com/photo-1626995587693-c50c9a5544c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="home"
        />
        <div className="content_body">
          <h1>
            KCM AUTOMOBILES
            <span className="hidden">(The German Car Experts)</span>{" "}
          </h1>
          <p>Car Repair And Maintenance in Gurugram</p>
        </div>
      </div>
      <div className="phone_card">
        <div className="phone_head">
          <label htmlFor="PHONE">
            <input type="text" name="" id="phone" placeholder="Phone Number" />
            <div className="underline"></div>
          </label>
        </div>

        <button className="btn_otp">SEND OTP</button>
      </div>
      <div className="plans_all">
        <div className="left_side">
          <Cards />
          <a href="services">Explore More</a>
        </div>
      </div>

      <div className="testimonial">
        <Carousels />
        <div className="testimonial_right">
          {/* <img
            src="https://www.google.com/maps/place/KCM+AUTOMOBILES/data=!3m1!4b1!4m2!3m1!1s0x390d183000000021:0x8d473674bdf87c83"
            alt="image"
          />*/}
        </div>
      </div>
    </>
  );
}
