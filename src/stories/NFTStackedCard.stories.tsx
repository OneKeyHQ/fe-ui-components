import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, NFTStackedCard as NFTStackedCardComponent } from "../components";
import ConfigBar from "./Base";

export default {
  title: "CUSTOM/NFTStackedCard",
  component: NFTStackedCardComponent,
} as ComponentMeta<typeof NFTStackedCardComponent>;

const Paint = ({ children }) => {
  return (
    <div className="okd-pt-8 okd-pb-48 okd-flex okd-justify-center okd-w-full">
      {children}
    </div>
  );
};

const Template: ComponentStory<typeof NFTStackedCardComponent> = (args) => (
  <>
    <ConfigBar />
    <Paint>
      <NFTStackedCardComponent {...args} />
    </Paint>
  </>
);

export const NFTStackedCard = Template.bind({});
NFTStackedCard.args = {
  // className: 'okd-w-[520px]',
  title: (
    <div className="okd-flex okd-items-end">
      <p className="okd-text-gray-900 okd-text-4xl okd-font-semibold">75</p>
      <p className="okd-text-gray-700 okd-text-sm okd-font-medium okd-ml-2 okd-leading-7">
        XP / DAY
      </p>
    </div>
  ),
  subTitle: (
    <p className="okd-text-gray-500 okd-text-xs okd-font-normal">
      Cumulative: 675 XP
    </p>
  ),
  action: <Button size="xs">View New NFT Pets →</Button>,
  sources: [
    "https://images.unsplash.com/photo-1628620222388-6f607cd43878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MTczNA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://source.unsplash.com/random",
    "https://images.unsplash.com/photo-1629757107799-d350c82e1663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MTc2MA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629511617783-dc852a6e3768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MjU3MQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1628499139581-739194851413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MjU4NA&ixlib=rb-1.2.1&q=80&w=1080",
  ],
};

export const NFTStackedCardWithEmptySource = Template.bind({});
NFTStackedCardWithEmptySource.args = {
  title: (
    <div className="okd-flex okd-items-end">
      <p className="okd-text-gray-900 okd-text-4xl okd-font-semibold">75</p>
      <p className="okd-text-gray-700 okd-text-sm okd-font-medium okd-ml-2 okd-leading-7">
        XP / DAY
      </p>
    </div>
  ),
  subTitle: (
    <p className="okd-text-gray-500 okd-text-xs okd-font-normal">
      Cumulative: 675 XP
    </p>
  ),
  action: <Button size="xs">View New NFT Pets →</Button>,
};
