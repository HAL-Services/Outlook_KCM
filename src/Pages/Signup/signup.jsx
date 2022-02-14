import "./signup.styles.css";
import SignUpImg from "../../Assets/signUpSvg.svg";
import topRightImg from "../../Assets/loginTop.svg";
export default function Signup() {
  return (
    <>
      <img
        className="topRightImg"
        style={{ display: "none" }}
        src={topRightImg}
        alt="topRightImg"
      />
      <div className="container">
        <div className="left">
          <img className="SignUpImg" src={SignUpImg} alt="" />
        </div>
        <div className="right">
          <div className="heading">Add Details</div>
          <div className="main">
            <form className="registerform">
              <div className="wrapper">
                <label>Name</label>
                <input
                  className="registerInput"
                  type="text"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="wrapper">
                <label>Mobile</label>
                <input
                  className="registerInput"
                  type="text"
                  placeholder="1234567890"
                ></input>
              </div>
              <div className="wrapper">
                <label>Email</label>
                <input
                  className="registerInput"
                  type="email"
                  placeholder="abc@.com"
                ></input>
              </div>
              <p className="termsAndCondition">
                Creating an account means you're okay with our Terms of Service
                and our Privacy Policy
              </p>
              <button className="registerButton" type="submit"><span>Continue</span></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
