import React, { ComponentProps, HTMLAttributes, ReactNode } from "react";
import cx, { Argument } from "classnames";
import BaseSelect, { components } from "react-select";

import Tag from '../Tag';

type SelectProps<T> = {
  /**
   * 设置容器额外的 class
   */
  containerClassName?: Argument;
  /**
   * 容器其他相关属性
   */
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
  /**
   * 是否可以搜索
   */
  isSearchAble?: boolean;
  /**
   * 是否 disable, 禁止整体点击
   */
  isDisabled?: boolean;
  /**
   * 默认展示元素
   */
  defaultValue?: T | T[];
  /**
   * 下拉渲染的列表
   */
  options?: T[];
  /**
   * 是否允许清除
   */
  isClearable?: boolean;
  /**
   * 是否允许多选
   */
  multi?: boolean;
  /**
   * 变化回调函数
   */
  onChange?: (v: T | T[]) => void;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * 是否是加载中
   */
  isLoading?: boolean;
  /**
   * 前置组件
   */
  prefix?: ReactNode;
  /**
   * renderOption 渲染 Option 的结果
   */
  renderOption?: (p: T, props: ComponentProps<typeof BaseSelect>) => ReactNode;
};

const defaultProps = {} as const;

const MultiValue = props => {
  return (
    <Tag
      onRemove={props?.removeProps?.onClick}
      className={cx({
        'okd-ml-2': !!props.index
      })}
    >
      {props.children}
    </Tag>
  );
};

const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      {props.selectProps.prefix}
      {children}
    </components.Control>
  );
};

const Option = (props) => {
  return props?.selectProps?.renderOption?.(props.data, props) ?? (
    <components.Option {...props} />
  )
}

function Select<T>({ containerClassName, isSearchAble, containerProps, defaultValue, options, isDisabled, isClearable, multi, placeholder, isLoading, prefix, renderOption }: SelectProps<T>) {
  return (
    <div className={cx("", containerClassName)} {...containerProps}>
      <BaseSelect
        components={{ MultiValue, Control, Option }}
        className="select"
        classNamePrefix="select"
        options={options}
        isSearchAble={isSearchAble}
        isDisabled={isDisabled}
        defaultValue={defaultValue}
        isClearable={isClearable}
        isMulti={multi}
        placeholder={placeholder}
        isLoading={isLoading}
        prefix={prefix}
        renderOption={renderOption}
      />
    </div>
  );
};

Select.defaultProps = defaultProps;

export default Select;
