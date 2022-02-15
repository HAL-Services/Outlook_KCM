import "./footer.styles.css";
import Logo from "../../Assets/logo.jpg";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaMailBulk,
  FaPhoneAlt,
  FaCalendarWeek,
  FaClock,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLogo">
        <div className="FooterImgContainer">
          <img className="FooterLogoImg" src={Logo} alt="logo" />
          
        </div>
        <div className="FooterAddress">
          Plot no. 3 , opposite AG industries Sector 18 Gurugram, Haryana 122001
          India
        </div>
        <div className="FooterSocials">
          <FaFacebookF className="FooterIcons" />
          <FaInstagram className="FooterIcons" />
          <FaTwitter className="FooterIcons" />
          <FaLinkedinIn className="FooterIcons" />
        </div>
      </div>
      <div className="FooterInfo">
        <div className="FooterWrapper">
          <div className="FooterIconsWrapper">
            <FaMailBulk />
            <div className="FooterText">Email</div>
          </div>
          <div className="FooterInfoValue">kcm@gmail.com</div>
        </div>

        <div className="FooterWrapper">
          <div className="FooterIconsWrapper">
            <FaPhoneAlt />
            <div className="FooterText">Phone Number</div>
          </div>
          <div className="FooterInfoValue">8076926336</div>
        </div>
        <div className="FooterWrapper">
          <div className="FooterIconsWrapper">
            <FaCalendarWeek />
            <div className="FooterText">Working Days</div>
          </div>
          <div className="FooterInfoValue">Monday-Sunday</div>
        </div>
        <div className="FooterWrapper">
          <div className="FooterIconsWrapper">
            <FaClock />
            <div className="FooterText">Timings</div>
          </div>
          <div className="FooterInfoValue">7:00AM-9:00PM(IST)</div>
        </div>
      </div>
    </div>
  );
}
