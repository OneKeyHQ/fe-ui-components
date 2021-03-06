import React, { FC } from 'react';
import cx, { Argument } from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import Account, { AccountProps } from '../Account';
import Token, { TokenProps } from '../Token';
import Badge from '../Badge';
import { spawn } from 'child_process';

export type TriggerProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * 账户选择器是否被激活
   */
  active?: boolean;
  /**
   * 当前选择的地址
   */
  selectedAddress?: string;
  /**
   * 已捆绑地址的数量
   */
  bundledCount?: number;
  /**
   * 是否显示 Bundled Address
   */
  showBundled?: boolean;
  /**
   * 是否显示选择器指示图标 – arrow
   */
  selectIndicate?: boolean;
  /**
   * Account 组件的 props
   */
  account?: AccountProps;
  /**
   * Support Token props
   */
  token?: TokenProps;
};

const defaultProps = {
  selectIndicate: true,
} as const;

const Trigger: FC<TriggerProps> = ({
  className,
  active,
  selectedAddress,
  bundledCount,
  showBundled,
  selectIndicate,
  account,
  token,
  ...rest
}) => {
  let contentView = <span>Trigger</span>;
  if (!!showBundled) {
    contentView = (
      <div className="okd-inline-flex okd-items-center">
        <Badge theme={active ? 'ongray' : null} type="success">
          {bundledCount}
        </Badge>
        <span className="okd-ml-2 okd-text-sm okd-text-gray-900">Bundled Wallts</span>
      </div>
    );
  } else if (account) {
    contentView = <Account {...account} />;
  } else if (token) {
    contentView = <Token {...token} />;
  }

  return (
    <>
      <Button
        type="plain"
        className={cx(
          active ? 'okd-bg-gray-100' : '',
          'okd-px-2 okd-group',
          !!className && className,
        )}
        {...rest}
      >
        {contentView}
        {!!selectIndicate && (
          <Icon
            name="ChevronDownSolid"
            className={cx(
              active ? 'okd-text-gray-500' : 'okd-text-gray-400 group-hover:okd-text-gray-500',
              'okd-w-5 okd-h-5 okd-ml-1',
            )}
          />
        )}
      </Button>
    </>
  );
};

Trigger.defaultProps = defaultProps;

export default Trigger;
