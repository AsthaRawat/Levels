import React from "react";

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
  children?: React.ReactNode;
}

export interface StepRendererProps {
  currentStep: number;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  isChecked: boolean;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
  setButtonClass: React.Dispatch<React.SetStateAction<string>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBoxChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isBoxChecked: boolean;
}

export interface ToasterProps {
  currentStep: number;
  isChecked: boolean;
}

export interface Step1Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
  setButtonClass: React.Dispatch<React.SetStateAction<string>>;
  isBoxChecked: boolean;
  setIsBoxChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CountryData {
  [country: string]: string[];
}

export interface Step2Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setButtonText?: React.Dispatch<React.SetStateAction<any>>;
}

export interface Step3Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setButtonText?: React.Dispatch<React.SetStateAction<string>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Step4Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setButtonText?: React.Dispatch<React.SetStateAction<any>>;
  setButtonClass: React.Dispatch<React.SetStateAction<any>>;
}
