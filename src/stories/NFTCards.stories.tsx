import React from "react";

import { OneKeyNFT } from "./NFTCard.stories";
import ConfigBar from "./Base";

export default {
  title: "Views/NFTCards",
};

export const Default = () => {
  return (
    <>
      <ConfigBar />
      <div className="okd-grid sm:okd-grid-cols-2 md:okd-grid-cols-3 lg:okd-grid-cols-4 okd-gap-5">
        <OneKeyNFT amount={5} />
        <OneKeyNFT amount={4} />
        <OneKeyNFT amount={3} />
        <OneKeyNFT amount={2} />
        <OneKeyNFT />
        <OneKeyNFT />
        <OneKeyNFT />
        <OneKeyNFT />
        <OneKeyNFT />
      </div>
    </>
  );
};
