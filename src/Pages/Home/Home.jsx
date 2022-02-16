import Cards from "../../Components/Cards/Cards";
import Coursel from "../../Components/Coursel/Coursel";
import home_img from "../../Assets/Vector 3.png";
import "./Home.styles.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home_img"
          src="https://images.unsplash.com/photo-1626995587693-c50c9a5544c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="home"
          srcset=""
        />
        <div className="content_body">
          <h1>KCM AUTOMOBILES(The German Car Experts)</h1>
          <p>Car Repair And Maintenance in Gurugram</p>
        </div>
      </div>
      <div className="coursel">
        <Coursel />
      </div>
      <div className="service">
        <Cards />
      </div>
    </>
  );
}
