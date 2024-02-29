import React from "react";
import { ImageProps } from "../../../components/interface/interface";

const ImageWithClick: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  onClick,
}) => {
  return <img alt={alt} src={src} className={className} onClick={onClick} />;
};

export default ImageWithClick;
