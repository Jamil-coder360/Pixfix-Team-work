import React from "react";

const Right = ({width = 16, height = 16, className=""}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
         className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#FF6600" />
      <g clip-path="url(#clip0_3897_824)">
        <path
          d="M11.8141 5.3079C11.5666 5.06005 11.1647 5.06021 10.9168 5.3079L6.8783 9.34657L5.08335 7.55164C4.8355 7.30379 4.43374 7.30379 4.18589 7.55164C3.93804 7.79949 3.93804 8.20125 4.18589 8.4491L6.42947 10.6927C6.55332 10.8165 6.71571 10.8786 6.87812 10.8786C7.04053 10.8786 7.20309 10.8167 7.32693 10.6927L11.8141 6.20535C12.062 5.95767 12.062 5.55574 11.8141 5.3079Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3897_824">
          <rect width="8" height="8" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Right;
