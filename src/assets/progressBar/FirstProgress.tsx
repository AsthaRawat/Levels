import React from "react";

const FirstProgress: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
  {...props}
  className="rc-progress-line"
    viewBox="0 0 100 2"
    preserveAspectRatio="none"
    width="90%"
  >
    <path
      className="rc-progress-line-trail"
      d="M 1,1 L 99,1"
      strokeLinecap="round"
      stroke="#2f2727"
      strokeWidth="3"
      fillOpacity="0"
    ></path>
    <path
      className="rc-progress-line-path"
      d="M 1,1 L 99,1"
      strokeLinecap="round"
      stroke="#F9FD02"
      strokeWidth="2"
      fillOpacity="0"
      style={{
        strokeDasharray: "24.5px, 100px",
        strokeDashoffset: "0px",
        transition:
          "stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke linear 0s",
      }}
    ></path>
  </svg>
);

export default FirstProgress;
