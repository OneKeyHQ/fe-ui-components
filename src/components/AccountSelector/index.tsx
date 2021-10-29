import React, { FC, Fragment } from 'react';
import cx, { Argument } from 'classnames';

import Popover from '../Popover';
import Trigger, { TriggerProps } from './Trigger';
import OptionGroup from './OptionGroup';
import Option from './Option';
import Action from './Action';

export type AccountSelectorProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Popover 的位置，分别对应左下、中下、右下
   */
  place?: 'bottom-start' | 'bottom-center' | 'bottom-end';
  /**
   * Trigger 的 props
   */
  trigger: TriggerProps;
  /**
   * 操作
   */
  actions: Array<any>;
};

const defaultProps = {} as const;

const AccountSelector: FC<AccountSelectorProps> & {
  OptionGroup;
  Option;
  Action;
} = ({ className, place, trigger, children, actions, ...rest }) => {
  const isTriggerElement = React.isValidElement(trigger);
  return (
    <>
      <Popover
        place={place}
        className={cx('okd-w-[320px]', !!className && className)}
        trigger={(status) =>
          isTriggerElement ? trigger : <Trigger active={status} {...trigger} />
        }
        {...rest}
      >
        <div className="okd-py-1 okd-px-3 okd-divide-y okd-divide-gray-200">
          {children}
          {!!actions && (
            <OptionGroup>
              {actions.map((action, key) => (
                <Fragment key={key}>
                  <Action iconName={action.iconName} onAction={action.onAction}>
                    {action.content}
                  </Action>
                </Fragment>
              ))}
            </OptionGroup>
          )}
        </div>
      </Popover>
    </>
  );
};

AccountSelector.defaultProps = defaultProps;
AccountSelector.OptionGroup = OptionGroup;
AccountSelector.Option = Option;
AccountSelector.Action = Action;

export default AccountSelector;
