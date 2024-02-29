import FirstProgress from "../../assets/progressBar/FirstProgress";
import SecondProgress from "../../assets/progressBar/SecondProgress";
import ThirdProgress from "../../assets/progressBar/ThirdProgress";
import Step1 from "../../pages/Signup/Steps/Step1";
import Step2 from "../../pages/Signup/Steps/Step2";
import Step3 from "../../pages/Signup/Steps/Step3";
import Step4 from "../../pages/Signup/Steps/Step4";
import { Data, FormData, StepRendererProps } from "../interface/interface";
import avatar1 from "../../assets/images/07d08aa1de33e2620c56095087cfab1f.png";
import avatar2 from "../../assets/images/59d767bf15b5af5621f159e8944ea58f.png";
import avatar3 from "../../assets/images/d70697c8f3f482b58185c99227fce832.png";
import avatar4 from "../../assets/images/6ef9d19f756a55f88231de4c921dd144.png";
import avatar5 from "../../assets/images/9199c1cbf1ffa4a9c42cc36580c0ab90.png";
import avatar6 from "../../assets/images/8130fa042fa7c3eea075ef20bd5fe530.png";
import avatar7 from "../../assets/images/342ac45a1f75a3fbe846d13addbac6b2.png";
import avatar8 from "../../assets/images/02f5f8f4ecae196fc0d7897fa1707ab3.png";
import avatar9 from "../../assets/images/eb345c3d1ef0fdb1633b510729ac83ac.png";
import avatar10 from "../../assets/images/004fd91d5473047d1461bbbea0458278.png";
import avatar11 from "../../assets/images/024847333f0553c2f91af6533d35ca53.png";
import avatar12 from "../../assets/images/1406a2f02c687b8169bb6b9525339cb6.png";

export const options = [
  { value: "Work this out for me", label: "Work this out for me" },
];

export const trading_experience = [
  {
    value: "None",
    label: "None",
  },
  {
    value: "I'm totally new",
    label: "I'm totally new",
  },
  {
    value: "Less than 1 year",
    label: "Less than 1 year",
  },
  {
    value: "1-3 years",
    label: "1-3 years",
  },
  {
    value: "3-5 years",
    label: "3-5 years",
  },
  {
    value: "+5 years",
    label: "+5 years",
  },
];

export function isButtonDisabled(
  currentStep: number,
  checkInput: boolean,
  formData: FormData,
  isChecked: boolean, 
  isBoxChecked: boolean
) {
  switch (currentStep) {
    case 1:
      return (
        !(isBoxChecked && checkInput)
      );
    case 2:
      return !(formData.country && formData.city);
    case 3:
      return !!(formData.userName && formData.tradingStyle && isChecked);
    case 4:
      return !formData.token;
    default:
      return true;
  }
}

export function getButtonClassName(
  currentStep: number,
  checkInput: boolean,
  formData: FormData,
  buttonClass: string,
  isChecked: boolean,
  isBoxChecked: boolean

) {
  if (
    (currentStep === 1 && checkInput && isBoxChecked) ||
    (currentStep === 2 && formData.country && formData.city) ||
    (currentStep === 3 &&
      formData.userName &&
      formData.tradingStyle &&
      !isChecked) ||
    (currentStep === 4 && formData.token)
  ) {
    return buttonClass;
  } else {
    return "auth-button";
  }
}

export function getProgressComponent(currentStep: number) {
  switch (currentStep) {
    case 2:
      return <FirstProgress />;
    case 3:
      return <SecondProgress />;
    case 4:
      return <ThirdProgress />;
    default:
      return null;
  }
}

export const StepRenderer: React.FC<StepRendererProps> = ({
  currentStep,
  formData,
  setFormData,
  setButtonText,
  setButtonClass,
  setIsChecked,
  isBoxChecked,
  setIsBoxChecked
  
}) => {
  switch (currentStep) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          setButtonText={setButtonText}
          setButtonClass={setButtonClass}
          isBoxChecked={isBoxChecked}
          setIsBoxChecked={setIsBoxChecked}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          setButtonText={setButtonText}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          setButtonText={setButtonText}
          setIsChecked={setIsChecked}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          setButtonText={setButtonText}
          setButtonClass={setButtonClass}
        />
      );
    default:
      return null;
  }
};

export const avatars = [
  [
    {
      src: avatar1,
      alt: "Avatar 1",
    },
    {
      src: avatar2,
      alt: "Avatar 2",
    },
    {
      src: avatar3,
      alt: "Avatar 3",
    },
  ],
  [
    {
      src: avatar4,
      alt: "Avatar 4",
    },
    {
      src: avatar5,
      alt: "Avatar 5",
    },
    {
      src: avatar6,
      alt: "Avatar 6",
    },
  ],
  [
    {
      src: avatar7,
      alt: "Avatar 7",
    },
    {
      src: avatar8,
      alt: "Avatar 8",
    },
    {
      src: avatar9,
      alt: "Avatar 9",
    },
  ],
  [
    {
      src: avatar10,
      alt: "Avatar 10",
    },
    {
      src: avatar11,
      alt: "Avatar 11",
    },
    {
      src: avatar12,
      alt: "Avatar 12",
    },
  ],
];

export const handleResetForm = (
  setFormData: React.Dispatch<React.SetStateAction<Data>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  setFormData({
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
  setCurrentStep(1);
};
