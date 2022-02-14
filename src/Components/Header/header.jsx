import "./header.styles.css";
import logo from "../../Assets/logo.jpg";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { GiScrewdriver } from "react-icons/gi";
export default function Header() {
  return (
    <div className="HeadernavContainer">
      <div className="Headerhero">
        <img className="Headerlogo" src={logo} />
        <div className="HeadercompanyName">KCM Automobiles</div>
      </div>
      <div className="Headerutilitis">
        <ul className="Headernav">
          <div className="Headerwrapper">
            <GiScrewdriver className="Headericons" />
            <li className="Headernav-items">Services</li>
          </div>
          <div className="Headerwrapper">
            <FaLocationArrow className="Headericons" />
            <li className="Headernav-items">Get Direction</li>
          </div>
          <div className="Headerwrapper">
            <FaPhoneAlt className="Headericons" />
            <li className="Headernav-items">Call</li>
          </div>
          <div className="Headerwrapper">
            <li className="Headernav-items">Login</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
