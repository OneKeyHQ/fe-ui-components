import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { NFTCard as NFTCardComponent, Image, Token } from "../components";
import ConfigBar from "./Base";

export default {
  title: "Custom/NFTCard",
} as ComponentMeta<typeof NFTCardComponent>;

export const Default: ComponentStory<typeof NFTCardComponent> = (args) => {
  return (
    <>
      <ConfigBar />
      <div className="okd-space-y-2">
        <NFTCardComponent
          className="okd-max-w-[360px]"
          image="https://storage.opensea.io/static/promocards/reben-promocard.png"
          title="chafflike_agua_toad"
          description="Alexander Reben: Thought-Render Fractal Series"
          footer="Top Bids - 12 ETH"
          amount={2}
          {...args}
        />
      </div>
    </>
  );
};

export const Customize = () => {
  const catCover = (
    <Image
      src="https://lh3.googleusercontent.com/BBCWmkmfseCDAzWW_7Vj4xLP_XPAPDtUiCPvoqz1QDEXHpaSxJdNii2K6ajq6J7tlRXg82TFQMg4qkS-poyiSM6l2_yPUBeClgDU=w354"
      alt="Hooka Cha Cat"
    />
  );

  return (
    <>
      <NFTCardComponent
        className="okd-max-w-[360px]"
        image="https://lh3.googleusercontent.com/BXNSKw3Xhfb9x0U80S0sc7wS_Pynrv-5svkxYVixfvCeBDVJ5-5izBQs_tkfiae3afoElu0DfZjnYLr6bDTGSY8gmvJT22Ve3mnFig=w600"
        title={
          <h4 className="okd-text-base okd-font-medium okd-text-gray-900">
            Pudgy Penguin #5057
          </h4>
        }
        description={
          <div className="okd-inline-flex okd-items-center okd-space-x-1">
            <Token chain="eth" size="xs" />
            <p className="okd-text-gray-400 okd-text-sm okd-font-normal">
              1.92 ETH
            </p>
          </div>
        }
      />
      <NFTCardComponent
        className="okd-max-w-[360px]"
        image={catCover}
        title="Galaxy Hooka Cha Cat"
        description="Galaxy Hooka Cha Cat is from a the K'-1391 planet, who skip out from
  a apocalyptic catastrophe and accidentally jump into Ricks Teleport
  to the OpenSea World."
      />
    </>
  );
};

export const OneKeyNFT = (args) => {
  return (
    <NFTCardComponent
      className="okd-max-w-[360px]"
      title="Prof. Hedwig"
      description="Prof. Hedwig is from a mysterious country of magic, and she is shocked to see that the DeFi world has even more knowledge and magic to captivate her."
      footerClassName="okd-text-brand-500"
      footer="+3 XP / DAY"
      {...args}
    />
  );
};
