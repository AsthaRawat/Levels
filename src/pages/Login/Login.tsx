import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../components/validation/Validation";
import Logo from "../../assets/icons/logo";
import { Login_Constants, Signup } from "../../components/enum/enums";
import Toaster from "../../components/common/Toaster";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate();
  const [notValidUser, setNotValidUser] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = () => {
    const storedData = JSON.parse(sessionStorage.getItem("formData") || "[]");
    const isValidEmail = storedData.some((user: any) => user.email === email);
    if (isValidEmail) {
      navigate("/dashboard", {
        state: {
          storedData: storedData,
        },
      });
    } else {
      setNotValidUser(true)
    }
  };

  return (
    <div className="container">
      {<Toaster validUser={notValidUser} />}
      <div className="box-container">
        <div className="box">
          <div className="heading">
            <Logo />
          </div>
          <div className="subheading">
            <label>{Signup.WELCOME}</label>
          </div>
          <div className="input-box">
            <div className="form">
              <input
                type="email"
                placeholder="E-mail"
                className={`input-field ${
                  email && !isValidEmail ? "invalid" : ""
                }`}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="terms-conditions">
            <span className="label-tc">
              <label>
                Keep me signed in
                <input type="checkbox" onChange={(e) => e.target.checked} />
                <span className="checkbox"></span>
              </label>
            </span>
          </div>
          <div className="auth-actions">
            <button
              type="button"
              className={
                email && isValidEmail ? "auth-button-updated" : "auth-button"
              }
              onClick={handleSubmit}
              disabled={!isValidEmail}
            >
              <span>Login</span>
            </button>
          </div>
          <div className="auth-toggle-text">
            <p>
              <span> Have an account? </span>
              <span>
                <a href="/" className="link">
                  Register
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
