import React, { useState } from "react";
import "../Signup.css";
import ImageWithClick from "./ImageWithClick";
import ReactModal from "react-modal";
import { customStyles } from "./Modal";
import {avatars} from "../../../components/common/Common";
import { Signup } from "../../../components/enum/enums";

const DefaultAvatar: React.FC<{
  closeAvatarModal: () => void; 
  setShowSelectedAvatar: React.Dispatch<React.SetStateAction<boolean>>;
  SetAvatarImg: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: object;
}> = ({
  closeAvatarModal,
  setShowSelectedAvatar,
  SetAvatarImg,
  setOpen,
  formData,
  setFormData,
}) => {
  const [img, setImg] = useState("");

  const image = (image: string) => {
    setImg(image);
  };

  const closeAvatar = () => {
    setImg("");
  };

const onSaveImg = async (imgUrl: string) => {
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString();
      if (base64String) {
        setShowSelectedAvatar(true);
        SetAvatarImg(base64String);
        closeAvatarModal();
        setOpen(false);
        setFormData({ ...formData, avatar: base64String });
      } else {
        console.error(Signup.CANNOT_CONVERT_TO_BASE64);
      }
    };
    reader.readAsDataURL(blob);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <ReactModal isOpen={true} style={customStyles} contentLabel="Example Modal">
      <div className="modal">
        {img ? (
          <img src={img} alt="avatar" className="select-avatar" />
        ) : (
          <div className="avatar-container">
            {avatars.map((avatarRow, rowIndex) => (
              <div key={rowIndex}>
                {avatarRow.map((img, imgIndex) => (
                  <ImageWithClick
                    key={imgIndex}
                    src={img.src}
                    alt={img.alt}
                    className="img"
                    onClick={() => image(img.src)}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        <div className={img ? "select-avatar-button" : "button-container"}>
          <button
            onClick={closeAvatarModal}
            className={img ? "button" : "no-img-button"}
          >
            Cancel
          </button>
          <button
            onClick={img ? closeAvatar : closeAvatarModal}
            className={img ? "button" : "back-button"}
          >
            Back
          </button>
        </div>
        {img && (
          <button className="save-avatar" onClick={() => onSaveImg(img)}>
            Save
          </button>
        )}
      </div>
    </ReactModal>
  );
};

export default DefaultAvatar;
