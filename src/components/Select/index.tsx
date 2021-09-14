import React, { FC } from "react";
import cx, { Argument } from "classnames";
import BaseSelect from "react-select";

type SelectProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Select: FC<SelectProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cx("", !!className && className)} {...rest}>
      <BaseSelect
        className="select"
        classNamePrefix="select"
        options={options}
      />
    </div>
  );
};

Select.defaultProps = defaultProps;

export default Select;
