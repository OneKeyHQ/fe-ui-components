import React, { FC } from "react";
import cx, { Argument } from "classnames";
import Button, { ButtonProps } from "../Button";
import Token, { TokenProps } from "../Token";
import Icon from "../Icon";

type TradeFormProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * Token 的 props
   */
  token?: TokenProps;
  /**
   * Button 的 props
   */
  button?: ButtonProps;
};

const defaultProps = {} as const;

const TradeForm: FC<TradeFormProps> = ({
  className,
  token,
  button,
  ...rest
}) => {
  return (
    <>
      {!!token ? (
        <Button
          type="plain"
          className={cx(
            "okd-px-2 hover:okd-bg-gray-100",
            !!className && className
          )}
          {...button}
          {...rest}
        >
          <Token {...token} />
          <Icon
            name="ChevronDownSolid"
            className="okd-w-5 okd-h-5 okd-ml-1 okd-text-gray-400"
          />
        </Button>
      ) : (
        <Button
          type="primary"
          className={cx(!!className && className)}
          {...button}
          {...rest}
        >
          Select a token
        </Button>
      )}
    </>
  );
};

TradeForm.defaultProps = defaultProps;

export default TradeForm;
