import React, { useState, useEffect } from "react";
import ErrorIcon from "../../assets/icons/errorIcon";
import { ToasterProps } from "../interface/interface";
import { Login_Constants, Signup } from "../enum/enums";

const Toaster: React.FC<ToasterProps> = ({
  currentStep,
  isChecked,
  validUser,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isChecked || validUser) {
      setIsVisible(true);
        const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
        return () => clearTimeout(timer);
    }
  }, [isChecked, validUser]);
  
  return (
    <div>
      {((currentStep === 3 && isVisible) || validUser) && (
        <div className="toaster">
          <div className="toast-message">
            <ErrorIcon />
            <span>{validUser ? Login_Constants.INVALID_USER :Signup.ERROR}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toaster;
