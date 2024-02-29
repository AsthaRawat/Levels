import React, { useState, useEffect } from "react";
import ErrorIcon from "../../assets/icons/errorIcon";
import { ToasterProps } from "../interface/interface";
import { Signup } from "../enum/enums";

const Toaster: React.FC<ToasterProps> = ({ currentStep, isChecked }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isChecked) {
      setIsVisible(true);
    }
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isChecked]);
  return (
    <div>
      {currentStep === 3 && isVisible && (
        <div className="toaster">
          <div className="toast-message">
            <ErrorIcon />
            <span>{Signup.ERROR}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toaster;
