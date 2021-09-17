import React, { useState, useCallback, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfigBar from "./Base";
import { Checkbox as CheckboxComponent } from "../components";
import { Icon as IconComponent } from "../components";

export default {
  title: "FORM/Checkbox",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const Default: ComponentStory<typeof CheckboxComponent> = (args) => (
  <>
    <ConfigBar />
    <CheckboxComponent {...args} />
  </>
);

Default.args = {
  id: "cook",
};

export const withLabel = Template.bind({});
withLabel.args = {
  id: "btc",
  label: "onekey",
  description: "Get notified when someones posts a comment on a posting.",
};

// export const indeterminate = Indeterminate.bind({});
// indeterminate.args = {
//   id: "btc",
//   indeterminate: true,
//   onChange: () =>
// };
const TOKENS = [
  {
    label: "eth",
    checked: false,
  },
  {
    label: "btc",
    checked: false,
  },
  {
    label: "bnb",
    checked: false,
  },
];

export const Indeterminate = () => {
  const [indeterminateVal, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [tokens, setTokens] = useState(TOKENS);

  const handleChange = useCallback(
    (token) => (checked) => {
      const curTokens = tokens.map((oldToken) => {
        if (token.label === oldToken.label) {
          oldToken.checked = checked;
          return oldToken;
        } else {
          return oldToken;
        }
      });
      setTokens(curTokens);
    },
    [tokens]
  );

  const selectAll = useCallback(
    (checked) => {
      const curTokens = tokens.map((token) => {
        return {
          ...token,
          checked,
        };
      });
      setTokens(curTokens);
      setCheckAll(checked);
      setIndeterminate(false);
    },
    [tokens]
  );

  useEffect(() => {
    const checkAll = tokens.every((token) => {
      return token.checked;
    });
    const indeterminate = tokens.some((token) => {
      return token.checked;
    });
    setCheckAll(checkAll);
    if (!checkAll) {
      setIndeterminate(indeterminate);
    } else {
      setIndeterminate(false);
    }
  }, [tokens]);

  return (
    <>
      <p>
        <CheckboxComponent
          id="all"
          label="select all"
          checked={checkAll}
          indeterminate={indeterminateVal}
          onChange={selectAll}
        />
      </p>
      {tokens.map((token) => {
        return (
          <CheckboxComponent
            id={token.label}
            label={token.label}
            checked={token.checked}
            onChange={handleChange(token)}
          />
        );
      })}
    </>
  );
};
