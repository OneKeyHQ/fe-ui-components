import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LevelBadge } from "../components";

export default {
  title: "Custom/LevelBadge",
  component: LevelBadge,
} as ComponentMeta<typeof LevelBadge>;

export const Default: ComponentStory<typeof LevelBadge> = () => (
  <div className="okd-space-y-2">
    <LevelBadge level={1} />
    <LevelBadge level={2} />
    <LevelBadge level={3} />
    <LevelBadge level={4} />
    <LevelBadge level={5} />
    <LevelBadge level={6} />
    <LevelBadge level={7} />
    <LevelBadge level={8} />
    <LevelBadge level={9} />
    <LevelBadge level={10} />
  </div>
);
