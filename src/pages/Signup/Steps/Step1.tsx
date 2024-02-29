import React, { useEffect, useState, useCallback } from "react";
import {
  validateEmail,
} from "../../../components/validation/Validation";
import { Step1Props } from "../../../components/interface/interface";



const Step1: React.FC<Step1Props> = ({
  formData,
  setFormData,
  setButtonText,
  isBoxChecked,
  setButtonClass,
  setIsBoxChecked
}) => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(validateEmail(formData.email));
  }, [formData.email]);

  const checkInput = useCallback(() => {
    return isEmailValid;
  }, [isEmailValid]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, email: value });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, name: value });
  };

  useEffect(() => {
    if (isBoxChecked && checkInput()) {
      setButtonText?.("Let's Start");
      setButtonClass("auth-button-updated");
    } else {
      setButtonText?.("Register with Email");
      setButtonClass("auth-button");
    }
  }, [isBoxChecked, checkInput, setButtonClass, setButtonText]);

  useEffect(() => {
    setIsBoxChecked(false);
  }, [setIsBoxChecked]);


  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className="input-field"
        value={formData.name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="E-mail"
        className={`input-field ${
          formData.email && !isEmailValid ? "invalid" : ""
        }`}
        value={formData.email}
        onChange={handleEmailChange}
      />
    </>
  );
};

export default Step1;
