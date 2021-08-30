import React from "react";
import cx from "classnames";

export default function Spinner({ circularButton, buttonSize, buttonType }) {
  return (
    <svg
      className={cx(
        "okd-animate-spin",
        buttonSize === "xs" && {
          "okd-w-4 okd-h-4": !circularButton,
          "okd-w-5 okd-h-5": !!circularButton,
        },
        { "okd-w-5 okd-h-5": buttonSize === "sm" || buttonSize === "base" },
        { "okd-w-6 okd-h-6": buttonSize === "lg" || buttonSize === "xl" }
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className={
          buttonType === "destructive" ? "okd-text-red-200" : "okd-text-gray-400"
        }
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className={
          buttonType === "destructive" ? "okd-text-red-50" : "okd-text-gray-300"
        }
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
