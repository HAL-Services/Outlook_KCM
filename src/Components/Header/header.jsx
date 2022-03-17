import "./header.styles.css";
import logo from "../../Assets/logo.jpg";
import { FaLocationArrow, FaPhoneAlt, FaWrench } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={navbar ? "HeadernavContainer active" : "HeadernavContainer"}
    >
      <div className="Headerhero">
        <img
          className={navbar ? "Headerlogo active" : "Headerlogo"}
          alt="Logo.png"
          src={logo}
        />
        <div className="HeadercompanyName">KCM Automobiles</div>
      </div>
      <div className="Headerutilitis">
        <ul className="Headernav">
          <div className="Headerwrapper HeaderExtra">
            <FaWrench
              className={navbar ? "Headericons active" : "Headericons"}
            />
            <li className="Headernav-items">Services</li>
          </div>
          <div className="Headerwrapper HeaderExtra">
            <FaLocationArrow
              className={navbar ? "Headericons active" : "Headericons"}
            />
            <li className="Headernav-items">Get Direction</li>
          </div>
          <div className="Headerwrapper HeaderExtra">
            <FaPhoneAlt
              className={navbar ? "Headericons active" : "Headericons"}
            />
            <li className="Headernav-items">Call</li>
          </div>
          <button className={navbar ? "btn_login" : "btn_login active"}>
            Login
          </button>
        </ul>
      </div>
    </div>
  );
}
