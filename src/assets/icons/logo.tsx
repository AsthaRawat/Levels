import React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={132}
    height={33}
    fill="none"
    filter="brightness(1)"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M27.931 0H5.554C2.483 0 0 2.447 0 5.473v22.054C0 30.553 2.483 33 5.554 33H27.93c3.06 0 5.554-2.447 5.554-5.473V5.473C33.485 2.447 31.002 0 27.931 0ZM10.565 24.693a1.15 1.15 0 0 1-1.155 1.138H5.946a1.15 1.15 0 0 1-1.154-1.138v-5.007c0-.626.52-1.138 1.154-1.138H9.41a1.15 1.15 0 0 1 1.155 1.138v5.007Zm8.798 0a1.15 1.15 0 0 1-1.154 1.138h-3.464a1.15 1.15 0 0 1-1.155-1.138v-9.559c0-.625.52-1.137 1.155-1.137h3.464a1.15 1.15 0 0 1 1.154 1.137v9.56Zm8.788 0a1.15 1.15 0 0 1-1.155 1.138h-3.464a1.15 1.15 0 0 1-1.155-1.138V8.307c0-.626.52-1.138 1.155-1.138h3.464a1.15 1.15 0 0 1 1.155 1.138v16.386Z"
    />
    <path
      fill="#fcfcfc"
      d="M47.826 21.962h5.323v2.526h-8.556V8.58h3.233v13.382ZM61.209 11.152v3.983h5.438v2.526h-5.438v4.21h6.13v2.595h-9.363V8.535h9.364v2.617h-6.131ZM87.546 8.58l-5.923 15.908h-3.926L71.773 8.58h3.464l4.434 12.643L84.082 8.58h3.464ZM95.501 11.152v3.983h5.439v2.526h-5.439v4.21h6.132v2.595h-9.376V8.535h9.364v2.617h-6.12ZM110.57 21.962h5.323v2.526h-8.556V8.58h3.233v13.382ZM120.304 19.902h3.464c.092 1.275.947 2.117 2.448 2.117 1.524 0 2.424-.796 2.424-1.934 0-3.437-8.325-1.366-8.302-7.135 0-2.868 2.356-4.597 5.693-4.597 3.302 0 5.577 1.66 5.785 4.529h-3.557c-.069-1.047-.923-1.867-2.309-1.89-1.27-.045-2.217.57-2.217 1.867 0 3.186 8.279 1.41 8.279 7.02 0 2.504-2.032 4.757-5.716 4.757-3.36.012-5.946-1.718-5.992-4.733Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5.152}
        x2={31.881}
        y1={-1.587}
        y2={4.07}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b3ff20" />
        <stop offset={1} stopColor="#f9fd02" />
      </linearGradient>
    </defs>
  </svg>
)

export default Logo;
