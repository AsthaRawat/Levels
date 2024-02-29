import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import UploadImage from "../../../assets/icons/uploadImage";
import "../Signup.css";
import { selectStyles } from "../../../components/common/style";
import { options, trading_experience } from "../../../components/common/Common";
import DefaultAvatar from "./DefaultAvatar";
import CropImage from "./CropImage";
import { Step3Props } from "../../../components/interface/interface";

const Step3: React.FC<Step3Props> = ({
  formData,
  setFormData,
  setButtonText,
  setIsChecked,
}) => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [open, setOpen] = useState(false);
  const [showDefaultAvatarModal, setShowDefaultAvatarModal] = useState(false);
  const [showSelectedAvatar, setShowSelectedAvatar] = useState(false);
  const [avatarImg, setAvatarImg] = useState("");
  const [fileSelect, setFileSelect] = useState<File | null>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  useEffect(() => {
    setButtonText?.("Next");
  }, [setButtonText]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const storedData = sessionStorage.getItem("formData");
    setFormData({ ...formData, userName: value });
    if (storedData) {
      const userData = JSON.parse(storedData);
      const usernameExists = userData.some(
        (user: any) => user.userName === value
      );
      if (usernameExists) {
        setIsChecked(true);
        setIsNameValid(false);
      } else {
        setIsChecked(false);
        setIsNameValid(true);
      }
    } else {
      setIsChecked(false);
      setIsNameValid(true);
    }
  };

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setFormData({ ...formData, tradingStyle: selectedOption });
    setSelectedOption(selectedOption);
  };

  const handleTradingExpChange = (
    selectedExperience: { value: string; label: string } | null
  ) => {
    setFormData({ ...formData, tradingExp: selectedExperience });
    setSelectedExperience(selectedExperience);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpen = () => {
    setOpen(true);
    setFileSelect(null);
    setIsFileSelected(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFileSelect(file);
    }
  };

  const handleOpenDefaultAvatar = () => {
    setShowDefaultAvatarModal(true);
  };

  const handleCloseDefaultAvatar = () => {
    setShowDefaultAvatarModal(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      setIsFileSelected(true);
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {open && showDefaultAvatarModal && (
        <DefaultAvatar
          closeAvatarModal={handleCloseDefaultAvatar}
          setShowSelectedAvatar={setShowSelectedAvatar}
          SetAvatarImg={setAvatarImg}
          setOpen={setOpen}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <div className="step2-container">
        <div className={fileSelect ? "" : "upload-image"}>
          {!open && ((formData.avatar && !fileSelect) || showSelectedAvatar) ? (
            <div className="avatar-final-image">
              <img
                alt="img"
                src={formData.avatar ? formData.avatar : avatarImg}
                width="120"
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              />
            </div>
          ) : !open && formData.avatar && isFileSelected ? (
            <div className="avatar-final-image">
              <img
                alt="img"
                src={fileSelect ? URL.createObjectURL(fileSelect) : undefined}
                width="120"
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              />
            </div>
          ) : open ? (
            <>
              <div className="upload-container">
                <div className="upload">
                  <button
                    className="default-avatar"
                    onClick={handleOpenDefaultAvatar}
                  >
                    Default Avatars
                  </button>
                </div>
                <div className="file-upload">
                  <button onClick={handleClick}>Select file to upload</button>
                  <input
                    id="file-upload"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              {fileSelect && isFileSelected && (
                <CropImage
                  src={fileSelect}
                  formData={formData}
                  setFormData={setFormData}
                  setIsFileSelected={setIsFileSelected}
                  setFileSelect={setFileSelect}
                  setOpen={setOpen}
                />
              )}
            </>
          ) : (
            <UploadImage onClick={handleOpen} style={{ cursor: "pointer" }} />
          )}
        </div>
        <input
          type="text"
          placeholder="Choose A Username"
          className={`input-field ${
            formData.userName && (!isNameValid ? "invalid" : "")
          }`}
          value={formData.userName}
          onChange={handleNameChange}
        />
        <Select
          value={formData.tradingStyle ? formData.tradingStyle : selectedOption}
          onChange={handleSelectChange}
          options={options}
          placeholder="Trading Style"
          styles={selectStyles}
        />
        <Select
          value={formData.tradingExp ? formData.tradingExp : selectedExperience}
          onChange={handleTradingExpChange}
          options={trading_experience}
          placeholder="Trading Experience"
          styles={selectStyles}
        />
      </div>
    </div>
  );
};

export default Step3;
