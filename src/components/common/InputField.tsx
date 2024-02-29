// InputField.tsx
import React, { useState } from "react";
import { validateEmail } from "../validation/Validation";

interface InputFieldProps {
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidityChange: (isValid: boolean) => void; // New prop for handling input validity
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  onValidityChange,
}) => {
  const [isValid, setIsValid] = useState(true); // State to track input validity

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (type === "email") {
      setIsValid(validateEmail(inputValue));
    }
    if (type === "name") {
      setIsValid(!!(inputValue));
    }
    onChange(e);
    onValidityChange(isValid); // Notify parent component about input validity
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} ${isValid ? "" : "invalid"}`}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputField;
