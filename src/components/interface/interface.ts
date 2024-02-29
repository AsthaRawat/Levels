import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
}

export interface FormData {
  name: string;
  email: string;
  userName: string;
  country: string;
  city: string;
  avatar: string;
  tradingStyle: string;
  tradingExp?: string;
  token: string;
}

export interface Data {
  name: string;
  email: string;
  userName: string;
  country: string;
  city: string;
  avatar: string;
  tradingStyle: string;
  tradingExp: string;
  token: string;
}

export interface AuthLayoutProps {
  children?: ReactNode;
}

export interface StepRendererProps {
  currentStep: number;
  formData: any;
  setFormData: Dispatch<SetStateAction<Data>>;
  isChecked: boolean;
  setButtonText: Dispatch<SetStateAction<string>>;
  setButtonClass: Dispatch<SetStateAction<string>>;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  setIsBoxChecked: Dispatch<SetStateAction<boolean>>;
  isBoxChecked: boolean;
}

export interface ToasterProps {
  currentStep: number;
  isChecked: boolean;
}

export interface Step1Props {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  setButtonText: Dispatch<SetStateAction<string>>;
  setButtonClass: Dispatch<SetStateAction<string>>;
  isBoxChecked: boolean;
  setIsBoxChecked: Dispatch<SetStateAction<boolean>>;
}

export interface CountryData {
  [country: string]: string[];
}

export interface Step2Props {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  setButtonText?: Dispatch<SetStateAction<string>>;
}

export interface Step3Props {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  setButtonText?: Dispatch<SetStateAction<string>>;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export interface Step4Props {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  setButtonText?: Dispatch<SetStateAction<string>>;
  setButtonClass: Dispatch<SetStateAction<string>>;
}
