import React from "react";
import cx from "classnames";
import Icon from "../Icon";

const LeadingIcon = ({
  iconName,
  circularButton,
  buttonSize,
  isDisabledButton,
  buttonType,
}) => {
  return (
    <Icon
      name={iconName}
      className={cx(
        // Size
        !circularButton
          ? {
              "okd-w-4 okd-h-4": buttonSize === "xs" || buttonSize === "sm",
              "okd-w-5 okd-h-5":
                buttonSize === "base" ||
                buttonSize === "lg" ||
                buttonSize === "xl",
            }
          : {
              "okd-w-5 okd-h-5":
                buttonSize === "xs" ||
                buttonSize === "sm" ||
                buttonSize === "base",
              "okd-w-6 okd-h-6": buttonSize === "lg" || buttonSize === "xl",
            },
        // Padding left
        { "okd--ml-0.5": !circularButton },
        // Padding right
        !circularButton && {
          "okd-mr-2":
            buttonSize === "xs" || buttonSize === "sm" || buttonSize === "base",
          "okd-mr-3": buttonSize === "lg" || buttonSize === "xl",
        },
        // Color
        !isDisabledButton
          ? {
              "okd-text-white": buttonType === "primary",
              "okd-text-gray-400":
                buttonType === "basic" || buttonType === "plain",
              "okd-text-red-400": buttonType === "destructive",
            }
          : {
              "okd-text-gray-300":
                buttonType === "primary" ||
                buttonType === "basic" ||
                buttonType === "plain",
              "okd-text-red-200": buttonType === "destructive",
            }
      )}
    />
  );
};

const TrailingIcon = ({
  iconName,
  circularButton,
  buttonSize,
  isDisabledButton,
  buttonType,
}) => {
  return (
    <Icon
      name={iconName}
      className={cx(
        // Size
        !circularButton
          ? {
              "okd-w-4 okd-h-4": buttonSize === "xs" || buttonSize === "sm",
              "okd-w-5 okd-h-5":
                buttonSize === "base" ||
                buttonSize === "lg" ||
                buttonSize === "xl",
            }
          : {
              "okd-w-5 okd-h-5":
                buttonSize === "xs" ||
                buttonSize === "sm" ||
                buttonSize === "base",
              "okd-w-6 okd-h-6": buttonSize === "lg" || buttonSize === "xl",
            },
        // Padding right
        { "okd--mr-0.5": !circularButton },
        // Padding Left
        !circularButton && {
          "okd-ml-2":
            buttonSize === "xs" || buttonSize === "sm" || buttonSize === "base",
          "okd-ml-3": buttonSize === "lg" || buttonSize === "xl",
        },
        // Color
        !isDisabledButton
          ? {
              "okd-text-white": buttonType === "primary",
              "okd-text-gray-400":
                buttonType === "basic" || buttonType === "plain",
              "okd-text-red-400": buttonType === "destructive",
            }
          : {
              "okd-text-gray-300":
                buttonType === "primary" ||
                buttonType === "basic" ||
                buttonType === "plain",
              "okd-text-red-200": buttonType === "destructive",
            }
      )}
    />
  );
};

export { LeadingIcon, TrailingIcon };
