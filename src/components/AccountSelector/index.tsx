import React, { FC } from "react";
import cx, { Argument } from "classnames";

import Popover from "../Popover";
import Trigger, { TriggerProps } from "./Trigger";
import OptionGroup from "./OptionGroup";
import Option from "./Option";
import Action from "./Action";

export type AccountSelectorProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Popover 的位置，分别对应左下、中下、右下
   */
  place?: "bottom-start" | "bottom-center" | "bottom-end";
  /**
   * Trigger 的 props
   */
  trigger: TriggerProps;
};

const defaultProps = {} as const;

const AccountSelector: FC<AccountSelectorProps> & { OptionGroup; Option; Action } = ({
  className,
  place,
  trigger,
  children,
  ...rest
}) => {
  return (
    <>
      <Popover
        place={place}
        className={cx("!okd-w-[343px]", !!className && className)}
        trigger={(status) => <Trigger active={status} {...trigger} />}
        {...rest}
      >
        <div className="okd-py-1 okd-px-3 okd-divide-y okd-divide-gray-200">{children}</div>
      </Popover>
    </>
  );
};

AccountSelector.defaultProps = defaultProps;
AccountSelector.OptionGroup = OptionGroup;
AccountSelector.Option = Option;
AccountSelector.Action = Action;

export default AccountSelector;
