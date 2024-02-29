import React from "react";

const BackArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    className="backarrow"
    width="37.5"
    height="37.5"
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 44.1799C35.3553 44.1799 43.75 35.7853 43.75 25.4299C43.75 15.0746 35.3553 6.67993 25 6.67993C14.6447 6.67993 6.25 15.0746 6.25 25.4299C6.25 35.7853 14.6447 44.1799 25 44.1799Z"
      stroke="#F9FD02"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M22.9166 19.1799L16.6666 25.4299M16.6666 25.4299L22.9166 31.6799M16.6666 25.4299L33.3333 25.4299"
      stroke="#F9FD02"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

export default BackArrow;
