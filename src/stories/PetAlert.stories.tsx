import React from "react";

import { Alert, Button } from "../components";
import PegSvg from "../components/Icon/react/illus/NftPeg";

export default {
  title: "Views/PetAlert",
  parameters: {},
};

export const Default = () => {
  return (
    <Alert
      icon={<PegSvg />}
      action={<Button type="primary">Open it !</Button>}
      title="2 New NFT Pets !"
      content="You got 2 new NFT pets, open it up and see what it is"
      type="success"
    />
  );
};
