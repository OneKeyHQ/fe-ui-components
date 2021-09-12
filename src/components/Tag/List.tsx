import React, { FC, useState } from "react";
import { useCallback } from "react";
import { uniq, remove } from "lodash";
import Tag, { TagProps } from ".";

type TagListProps = {
  /** 是否支持多选 */
  multi?: boolean;
  /** 激活状态的 index */
  value?: number | number[];
  /** 改变激活状态后的回调函数 */
  onChange?: (active: number | number[]) => void;
  /** tag 配置数组 */
  tags: TagProps[];
};

const arraify = (v) => (Array.isArray(v) ? v : [v]);

const TagList: FC<TagListProps> = ({ tags, value, onChange, multi }) => {
  const _valueList = arraify(value);
  const valueList = multi ? _valueList : _valueList[0];

  const [activeList, setActiveList] = useState([]);
  const activeItemIndexList = value ? valueList : activeList;

  const handleChange = useCallback(
    (index: number, isAdd: boolean) => {
      const sliceArr = activeItemIndexList.slice();
      let result;
      if (multi) {
        if (isAdd) {
          sliceArr.push(index);
          result = uniq(sliceArr);
        } else {
          result = remove(sliceArr, index);
        }
      } else {
        // single
        if (isAdd) {
          result = [index];
        } else {
          result = [];
        }
      }

      onChange?.(result);
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
            {...tag}
            active={isActive}
            onChange={(status) => handleChange(index, !!status)}
          />
        );
      })}
    </div>
  );
};

export default TagList;
