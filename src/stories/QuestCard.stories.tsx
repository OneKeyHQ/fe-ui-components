import React from "react";

import {
  LevelBadge,
  Card,
  Avatar,
  Address,
  Button,
  Progress,
} from "../components";

export default {
  title: "Views/QuestCard",
  parameters: {},
};

export const Default = () => {
  const address = "0x8260d4AaC59452c54f350047dCb67827C5cE715a";

  return (
    // 自定义了宽度，使用的时候记得根据情况 turn off
    <Card className="okd-bg-brand-50 okd-border-none okd-w-[550px]">
      {/* Card 不支持自定义 padding，这里使用了负 margin 来减少 padding */}
      <div className="okd-space-y-2 okd--mt-2 okd--mb-3">
        <div className="okd-flex">
          <div className="okd-flex-shrink-0 okd-flex okd-items-center okd-space-x-2 okd-h-8">
            <Avatar address={address} />
            <Address
              className="okd-text-black okd-text-sm okd-font-normal"
              address={address}
              short
            />
            <LevelBadge level={1} />
          </div>
          <div className="okd-ml-auto okd-space-x-2">
            <Button leadingIcon="GiftSolid" size="sm">Rewards</Button>
            <Button leadingIcon="ClipboardListSolid" size="sm">Quests</Button>
          </div>
        </div>
        <Progress value={300} max={600} hint />
      </div>
    </Card>
  );
};
