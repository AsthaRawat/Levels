import React, {  useRef, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface CropImageProps {
  src: File;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: object;
  setIsFileSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFileSelect: React.Dispatch<React.SetStateAction<File | null>>;
}

const CropImage: React.FC<CropImageProps> = ({
  src,
  formData,
  setFormData,
  setIsFileSelected,
  setFileSelect,
  setOpen,
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 0,
    y: 0,
    width: 103,
    height: 103,
  });
  const [croppedImage, setCroppedImage] = useState<string>("");
  const fileRef = useRef<File | null>(null);

  const onCropChange = (c: Crop) => {
    const centerX = c.x + c.width / 2;
    const centerY = c.y + c.height / 2;
    const radius = Math.min(c.width, c.height) / 2;
    setCrop({
      ...c,
      width: radius * 2,
      height: radius * 2,
      x: centerX - radius,
      y: centerY - radius
    });
  };
  
  const onUploadCrop = () => {
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = URL.createObjectURL(src);
    image.onload = () => {
      canvas.width = crop.width || 0;
      canvas.height = crop.height || 0;
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      const ctx = canvas.getContext("2d");
      if (ctx && crop.width && crop.height) {
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
        const croppedImageUrl = canvas.toDataURL("image/png");
        setCroppedImage(croppedImageUrl);
        fileRef.current = src;
      }
    };
  };


  const UploadCropImage = () => {
    setFormData({ ...formData, avatar: croppedImage });
    setOpen(false);
    setCrop({
      unit: "px",
      x: 0,
      y: 0,
      width: 103,
      height: 103,
    });
  };

  const onCancel = () => {
    setIsFileSelected(false);
    setFileSelect(null);
  };

  return (
    <div className="crop-img-container">
      {croppedImage && fileRef.current === src ? (
        <>
          <img src={croppedImage} alt="Crop Preview" width="250" height="250"/>
          <div className="upload-crop-button-container">
            <button
              className="upload-crop"
              onClick={UploadCropImage}
              style={{ maxWidth: "250px" }}
            >
              Finish
            </button>
          </div>
        </>
      ) : (
        <>
          <ReactCrop
            crop={crop}
            onChange={onCropChange}
            circularCrop
          >
            <img src={URL.createObjectURL(src)} alt="Crop Preview" />
          </ReactCrop>

          <div className="upload-crop-button-container">
            <button className="upload-crop" onClick={onUploadCrop}>
              Upload Crop
            </button>
            <button className="upload-crop-cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CropImage;
