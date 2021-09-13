import React from "react";

import { Badge, Card as CardComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "Views/NFTCards",
};

export const Default = () => {
  const defaultProps = {
    className: "okd-max-w-full okd-flex okd-flex-col",
    cover: (
      <img
        src="https://lh3.googleusercontent.com/BBCWmkmfseCDAzWW_7Vj4xLP_XPAPDtUiCPvoqz1QDEXHpaSxJdNii2K6ajq6J7tlRXg82TFQMg4qkS-poyiSM6l2_yPUBeClgDU=w354"
        alt="Hooka Cha Cat"
      />
    ),
    children: (
      <CardComponent.Body className="okd-flex-1 okd-flex okd-flex-col">
        <div className="okd-flex okd-flex-col okd-justify-between okd--m-2 okd-flex-1">
          <div className="okd-flex-1">
            <div className="okd-flex okd-items-center okd-justify-between">
              <h5 className="okd-text-base okd-font-medium okd-text-gray-900 okd-truncate">
                Galaxy Hooka Cha Cat
              </h5>
              <Badge className="okd-ml-2">X 2</Badge>
            </div>
            <p className="okd-mt-1 okd-text-sm okd-text-gray-500">
              Galaxy Hooka Cha Cat is from a the K'-1391 planet, who skip out from
              a apocalyptic catastrophe and accidentally jump into Ricks Teleport
              to the OpenSea World.
            </p>
          </div>
          <p className="okd-text-xs okd-font-medium okd-text-brand-500 okd-mt-2">
            +3 XP / DAY
          </p>
        </div>
      </CardComponent.Body>
    ),
  };

  return (
    <>
      <ConfigBar />
      <div className="okd-grid sm:okd-grid-cols-2 md:okd-grid-cols-3 lg:okd-grid-cols-4 okd-gap-5">
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
        <CardComponent {...defaultProps} />
      </div>
    </>
  );
};
