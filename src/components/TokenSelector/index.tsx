import React, { FC, useRef } from "react";
import cx, { Argument } from "classnames";
import Modal from "../Modal";
import TokenList from "../TokenList";
import Input from "../Input";
import Icon from "../Icon";
import TokenSelectorTrigger from "./TokenSelectorTrigger";

type TokenSelectorProps = {
  /** 设置额外的 class */
  className?: Argument;
  /** 是否可见 */
  visible?: boolean;
  /** 点击模态框遮罩时或键盘按下 Esc 时的回调 */
  onClose: () => void;
  /** token 列表 */
  list?: Array<any>;
};

const defaultProps = {} as const;

const TokenSelector: FC<TokenSelectorProps> & { Trigger } = ({
  className,
  visible,
  onClose,
  list,
  ...rest
}) => {
  const initialFocusInput = useRef();

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      className={cx("okd-w-full sm:okd-max-w-md", !!className && className)}
      initialFocusRef={initialFocusInput}
      {...rest}
    >
      <Modal.Header title="Select Token" onClose={onClose} />
      <Modal.Body>
        <div className="okd--m-4 sm:okd--m-6">
          <div className="okd-px-4 sm:okd-px-6 okd-py-3 okd-border-b okd-border-gray-200">
            <Input
              type="search"
              innerRef={initialFocusInput}
              addonBefore={
                <Icon
                  className="okd-text-gray-400"
                  name="SearchSolid"
                  size={20}
                />
              }
              placeholder="Search name or paste address"
            />
          </div>
          <div className="okd-max-h-[460px] okd-overflow-y-auto">
            <TokenList list={list} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

TokenSelector.defaultProps = defaultProps;
TokenSelector.Trigger = TokenSelectorTrigger;

export default TokenSelector;
