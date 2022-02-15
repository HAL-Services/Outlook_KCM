import Signup from "./Pages/Signup/signup";
import Header from "./Components/Header/header";
import "./App.css";
import axios from "axios";
import Footer from "./Components/Footer/footer";
export default function () {
  return (
    <div>
      <Header />
      <Signup />
      <Footer />
    </div>
  );
}
