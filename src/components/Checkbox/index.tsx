import React, {
  useState,
  FC,
  useCallback,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useRef,
  useEffect,
} from "react";
import cx, { Argument } from "classnames";
import Tooltip from "../Tooltip/index";
import Icon from "../Icon/index";

type CheckboxProps = {
  /**
   * id is unique for checkbox
   */
  id: string;
  /**
   * Label for checkbox
   */
  label?: string | React.ReactNode;
  /**
   * 是否禁用状态，默认为 false
   */
  disabled?: boolean;
  /**
   * 描述信息
   */
  description?: string | React.ReactNode;
  /**
   * 受控的表单控件的值，指定当前是否选中
   */
  checked?: boolean;
  /**
   * 初始是否选中
   */
  defaultChecked?: boolean;
  /**
   * indeterminate	设置 indeterminate 状态，只负责样式控制
   */
  indeterminate?: boolean;
  /**
   * 内容更改回调信息
   */
  onChange?: (
    e:
      | ChangeEvent<HTMLInputElement>
      | MouseEvent<HTMLElement>
      | KeyboardEvent<HTMLInputElement>
  ) => void;
  /**
   * 设置额外的 class
   */
  className?: Argument;
};

const defaultProps = {} as const;

const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  defaultChecked,
  indeterminate,
  description,
  disabled,
  onChange,
  label,
  className,
}) => {
  const inputRef = useRef(null);
  const [checkedValue, setCheckedValue] = useState(checked ?? false);
  const [indeterminateVal, setIndeterminate] = useState(indeterminate ?? false);
  const handleChange = useCallback(
    (e) => {
      // setCheckedValue(e?.target.checked);
      onChange(e?.target?.checked);
    },
    [onChange]
  );

  useEffect(() => {
    inputRef.current.indeterminate = indeterminateVal;
  }, [indeterminateVal]);

  useEffect(() => {
    setIndeterminate(indeterminate);
  }, [indeterminate]);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  return (
    <div
      className={cx(
        !!className && className,
        "okd-p-2 okd-inline-flex okd-items-start hover:okd-bg-gray-50 okd-rounded okd-border-solid okd-border okd-border-transparent",
        {
          "": !className,
        }
      )}
    >
      <div
        className={cx("okd-inline-flex okd-items-center okd-h-5 okd-bg-white", {
          "": indeterminateVal,
        })}
      >
        <input
          id={id}
          ref={inputRef}
          aria-describedby={`${id}-description`}
          name={id}
          type="checkbox"
          checked={checkedValue}
          className="okd-rounded focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-brand-500 focus:okd-ring-offset-2 focus:okd-ring-offset-white okd-h-4 okd-w-4 okd-text-brand-500 okd-border-gray-300"
          onChange={handleChange}
        />
      </div>
      {!!label && (
        <div className="okd-ml-2 okd-text-sm">
          <label htmlFor={id} className="okd-font-medium okd-text-gray-700">
            {label}
          </label>
          <p id={`${id}-description`} className="okd-text-gray-500">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
