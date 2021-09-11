import React, { useEffect } from "react";
import { ComponentMeta } from "@storybook/react";

import { Link, Alert } from "../components";
import ConfigBar from "./Base";

export default {
  title: "VIEW/NFTPetAlert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default = () => {
  const [isAlertVisible, setIsAlertVisible] = React.useState(true);

  const handleCancel = () => {
    setIsAlertVisible(false);
  };

  useEffect(() => {
    const timeId = setTimeout(() => !isAlertVisible && setIsAlertVisible(true), 2000);
    return () => clearTimeout(timeId);
  }, [isAlertVisible]);

  return (
    <>
      <ConfigBar />
      {isAlertVisible && (
        <Alert
          title={
            <p className="okd-text-sm okd-font-medium okd-inline-flex okd-flex-col">
              Here are your NFT pets, who can increase your growth value every
              day, each different type of NFT addition is calculated only once.
              <Link href="//onekey.so" target="_blank" color underline icon>
                Learn More
              </Link>
            </p>
          }
          onClose={() => handleCancel()}
          closable
        />
      )}
    </>
  );
};

Default.args = {};

// const Template: ComponentStory<typeof CardComponent> = (args) => (
//   <CardComponent {...args} />
// );

// export const example = Template.bind({});
// example.args = {};
