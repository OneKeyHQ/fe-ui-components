/* eslint-disable react/style-prop-object */
import { FC, ComponentPropsWithoutRef } from "react";
import { isNil } from "lodash";
import { FormattedNumber } from "react-intl";
import BigNumber from "bignumber.js";

export type PriceCurrencyProps = {
  /**
   * 价格内容，如果为空或 NaN 则会展示占位 「-」 符号，后续会尝试转化为 bignumber 进行输出
   */
  value?: null | string | number;
  /**
   * 资产类型，USD 或 CNY
   */
  currency?: "USD" | "CNY";
  /**
   * 展示类型，百分比 / 科学计数法 / 金额等，金额会默认分割千分位
   */
  style?: "currency" | "unit" | "percent" | "decimal";
} & Partial<Omit<ComponentPropsWithoutRef<typeof FormattedNumber>, "value">>;

const defaultProps = {
  currency: "USD",
  style: "currency",
} as const;

const Numberic: FC<PriceCurrencyProps> = ({
  value,
  currency,
  style,
  ...rest
}) => {
  if (isNil(value) || Number.isNaN(value)) return <>-</>;

  return (
    <FormattedNumber
      value={new BigNumber(value).toNumber()}
      currency={currency}
      style={style}
      currencyDisplay="narrowSymbol"
      maximumFractionDigits={2}
      {...rest}
    />
  );
};

Numberic.defaultProps = defaultProps;

export default Numberic;
