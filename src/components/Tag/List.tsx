import React, { FC, useState, ReactNode } from "react";
import { useCallback } from "react";
import { uniq, remove, isNil } from "lodash";
import Tag, { TagProps } from ".";

type TagListProps<T> = {
  /** 是否支持多选 */
  multi?: boolean;
  /** 激活状态的 index */
  value?: T;
  /** 改变激活状态后的回调函数 */
  onChange?: (active: T) => void;
  /** 改变激活状态后的回调函数 */
  onRemove?: (index: number, item: TagProps) => void;
  /** tag 配置数组 */
  tags: (TagProps & { children?: ReactNode })[];
} & Omit<TagProps, 'onChange' | 'onRemove'>;

const arraify = (v) => (Array.isArray(v) ? v : [v]);

function TagList<T = number | number[]>({ tags, value, onChange, multi, onRemove, ...rest }: TagListProps<T>) {
  const _valueList = arraify(value);
  const valueList = multi ? _valueList : _valueList.slice(0, 1);

  const [activeList, setActiveList] = useState([]);
  const activeItemIndexList = !isNil(value) ? valueList : activeList;

  const handleChange = useCallback(
    (index: number, isAdd: boolean) => {

      const sliceArr = activeItemIndexList.slice();
      let result;
      if (multi) {
        if (isAdd) {
          sliceArr.push(index);
          result = uniq(sliceArr);
        } else {
          result = sliceArr.filter(item => item !== index);
        }
      } else {
        // single
        if (isAdd) {
          result = [index];
        } else {
          result = [];
        }
      }

      onChange?.(multi ? result : result[0]);
      setActiveList(result);
    },
    [activeItemIndexList, onChange, multi]
  );

  return (
    <div className="okd-inline-flex okd-flex-wrap okd-m-[-5px]">
      {tags.map((tag, index) => {
        const isActive = activeItemIndexList.includes(index);
        return (
          <Tag
            className="okd-m-[5px]"
            key={index}
            {...rest}
            {...tag}
            active={isActive}
            onChange={(status) => handleChange(index, !!status)}
            onRemove={onRemove ? (item) => onRemove?.(index, item) : null}
          />
        );
      })}
    </div>
  );
};

export default TagList;
