import React from "react";

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="14"
    height="15"
    viewBox="0 0 14 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "5px", maxHeight: "100%" }} // Correct usage of style object
  >
    <rect width="14" height="27" fill="url(#pattern0)"></rect>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          href="#image0_1144_6154"
          transform="scale(0.00429185 0.00224719)"
        ></use>
      </pattern>
      <image
        id="image0_1144_6154"
        width="1451"
        height="445"
      ></image>
    </defs>
  </svg>
);

export default Icon;
