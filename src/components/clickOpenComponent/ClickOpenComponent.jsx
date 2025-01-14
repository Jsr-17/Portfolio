import React from "react";
import "./ClickOpenComponent.css";

export const ClickOpenComponent = () => {
  return (
    <div
      id="land"
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <div className="d-flex flex-column align-items-center justify-content-center text-center w-100 h-100 bg-dark border border-4 rounded-3 text-white">
        <p className="mt-5 machineLetter">
          I'm José A. Román Moreno a FullStack Developer
        </p>
        <span className="arrow bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="48"
            height="48"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
