import React, { useState, useEffect } from "react";
import Logo from "../../assets/icons/logo";
import { validateEmail, validateName } from "../validation/Validation";
import BackArrow from "../../assets/icons/backArrow";
import {
  StepRenderer,
  getButtonClassName,
  getProgressComponent,
  handleResetForm,
  isButtonDisabled,
} from "../common/Common";
import { AuthLayoutProps } from "../interface/interface";
import VideoBackground from "../common/BackgroundVideo";
import { useNavigate } from "react-router-dom";
import Toaster from "../common/Toaster";

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    country: "",
    city: "",
    avatar: "",
    tradingStyle: "",
    tradingExp: "",
    token: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [checkInput, setCheckInput] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [buttonText, setButtonText] = useState("Register with Email");
  const [buttonClass, setButtonClass] = useState("auth-button");
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep === 4) {
      const storedData = JSON.parse(sessionStorage.getItem("formData") || "[]");
      const updatedData = [...storedData, formData];
      sessionStorage.setItem("formData", JSON.stringify(updatedData));
      navigate("/dashboard", {
        state: {
          formData: formData,
        },
      });
    }
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsBoxChecked(checked);
  };

  useEffect(() => {
    setCheckInput(
      formData.name !== "" &&
        validateName(formData.name) &&
        formData.email !== "" &&
        validateEmail(formData.email)
    );
  }, [formData]);

  return (
    <div className="container">
      <Toaster currentStep={currentStep} isChecked={isChecked} />
      <div className="box-container">
        {currentStep === 1 && <VideoBackground />}
        <div className="box">
          <div className="heading">
            <Logo />
          </div>
          <div className="subheading">
            <label>
              {currentStep === 1
                ? "Signup to Levels"
                : currentStep === 2
                ? "Almost there   "
                : "Welcome to Levels"}
            </label>
          </div>
          <div className="input-box">
            <div className="form">
              <StepRenderer
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
                isChecked={isChecked}
                setButtonText={setButtonText}
                setButtonClass={setButtonClass}
                setIsChecked={setIsChecked}
                isBoxChecked={isBoxChecked}
                setIsBoxChecked= {setIsBoxChecked}
              />
            </div>
          </div>
          {currentStep === 1 && (
            <div className="terms-conditions">
              <span className="label-tc">
                <label>
                  <div>
                    Accept <span className="link"> {` `}T&C</span> and{" "}
                    <span className="link">Privacy Policy</span>
                  </div>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                  <span className="checkbox"></span>
                </label>
              </span>
            </div>
          )}
          {currentStep > 1 && currentStep < 4 && (
            <div className="previous-button" onClick={prevStep}>
              <BackArrow />
            </div>
          )}
          {currentStep < 5 && (
            <div className="auth-actions">
              <button
                type="button"
                className={getButtonClassName(
                  currentStep,
                  checkInput,
                  formData,
                  buttonClass,
                  isChecked,
                  isBoxChecked
                )}
                onClick={nextStep}
                disabled={isButtonDisabled(
                  currentStep,
                  checkInput,
                  formData,
                  isChecked,
                  isBoxChecked
                )}
              >
                <span>{buttonText}</span>
              </button>
            </div>
          )}
          <center>
            <div className="progress">{getProgressComponent(currentStep)}</div>
            {(currentStep === 1 || currentStep === 2 || currentStep === 3) && (
              <p className="auth-toggle-text">
                <span> Have an account? </span>
                <span className="link"> Login</span>
              </p>
            )}
            {currentStep === 4 && (
              <div>
                <p className="auth-toggle-text">
                  <span> Wrong Email? </span>
                </p>
                <p className="auth-toggle-text">
                  <span
                    className="link"
                    onClick={() => handleResetForm(setFormData, setCurrentStep)}
                  >
                    Click here
                  </span>
                </p>
              </div>
            )}
          </center>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
