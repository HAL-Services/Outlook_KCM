import "./signup.styles.css";
import SignUpImg from "../../Assets/signUpSvg.svg";
import topRightImg from "../../Assets/loginTop.svg";
export default function Signup() {
  return (
    <>
      <img
        className="SignuptopRightImg"
        style={{ display: "none" }}
        src={topRightImg}
        alt="topRightImg"
      />
      <div className="Signupcontainer">
        <div className="Signupleft">
          <img className="SignUpImg" src={SignUpImg} alt="" />
        </div>
        <div className="Signupright">
          <div className="Signupheading">Add Details</div>
          <div className="Signupmain">
            <form className="Signupregisterform">
              <div className="signUpwrapper">
                <label>Name</label>
                <input
                  className="SignupregisterInput"
                  type="text"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="signUpwrapper">
                <label>Mobile</label>
                <input
                  className="SignupregisterInput"
                  type="text"
                  placeholder="1234567890"
                ></input>
              </div>
              <div className="signUpwrapper">
                <label>Email</label>
                <input
                  className="SignupregisterInput"
                  type="email"
                  placeholder="abc@.com"
                ></input>
              </div>
              <p className="SignuptermsAndCondition">
                Creating an account means you're okay with our Terms of Service
                and our Privacy Policy
              </p>
              <button className="SignupregisterButton" type="submit">
                <span>Continue</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
