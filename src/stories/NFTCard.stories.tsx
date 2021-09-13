import React from "react";

import { Badge, Card as CardComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "Views/NFTCards",
};

export const Default = () => {
  const defaultProps = {
    className: "okd-mx-auto okd-w-[280px]",
    cover: (
      <img
        className=""
        src="https://lh3.googleusercontent.com/BBCWmkmfseCDAzWW_7Vj4xLP_XPAPDtUiCPvoqz1QDEXHpaSxJdNii2K6ajq6J7tlRXg82TFQMg4qkS-poyiSM6l2_yPUBeClgDU=w354"
        alt="Random"
      />
    ),
    children: (
      <div className="okd-space-y-1">
        <div className="okd-flex okd-items-center okd-justify-between">
          <h5 className="okd-text-base okd-font-medium okd-text-gray-900">
            Galaxy Hooka Cat
          </h5>
          <Badge>X 2</Badge>
        </div>

        <p className="okd-text-sm okd-font-normal okd-text-gray-500">
          Galaxy Hooka Cat is from a the K'-1391 planet, who skip out from a
          apocalyptic catastrophe and accidentally jump into Ricks Teleport to
          the OpenSea World.
        </p>

        <p className="okd-text-sm okd-font-medium okd-text-brand-500">
          +3 XP / DAY
        </p>
      </div>
    ),
  };

  return (
    <>
      <ConfigBar />
      <div className="okd-grid okd-grid-cols-1 sm:okd-grid-cols-2 md:okd-grid-cols-3 lg:okd-grid-flow-col lg:okd-auto-cols-min okd-gap-2">
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
      </div>
    </>
  );
};
