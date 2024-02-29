import React, { useEffect } from "react";
import clsx from "clsx";
import { Step4Props } from "../../../components/interface/interface";


const Step4: React.FC<Step4Props> = ({
  formData,
  setFormData,
  setButtonText,
}) => {

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, token: value });
  };

  useEffect(() => {
    setButtonText?.("Next")
  }, [setButtonText]);
  
  return (
    <div className={clsx("step2-container", "step4-container")}>
    <center>
        <div>Your token has been emailed to:</div>
       <div className={clsx("link", "step4-container-email")}>
       <span>{formData.email}</span>
       </div>

    </center>
      <input
        type="text"
        placeholder="Token"
        className="input-field"
        value={formData.token}
        onChange={handleTokenChange}
      />
    </div>
  );
};

export default Step4;
