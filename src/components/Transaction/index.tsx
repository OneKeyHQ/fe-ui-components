import React, { FC } from "react";
import cx from "classnames";
import Icon from "../Icon/index";
import { shortenAddress } from "../utils";

export enum TransactionStatus {
  Success,
  Pending,
  Dropped,
  Failed,
}

export enum TransactionDirection {
  To,
  From,
}

const status2Color = {
  pending: "okd-text-yellow-500",
  failed: "okd-text-red-600",
  dropped: "okd-text-red-600",
  1: "okd-text-yellow-500",
  2: "okd-text-red-600",
  3: "okd-text-red-600",
};

const statusList = [
  TransactionStatus.Pending,
  TransactionStatus.Dropped,
  TransactionStatus.Failed,
];

const currency2Usd = (value: string) => {
  return `${value} USD`;
};

interface ListItem {
  /**
   * 是否为列表最后一项
   */
  isLast: boolean;
  /**
   * label props
   */
  label: string;
  /**
   * address 交易地址
   */
  address: string;
  /**
   * direction 交易方向，send:0 or receive:1
   */
  direction: 0 | 1;
  /**
   * status 交易状态 success-0、pending-1、dropped-2、failed-3
   */
  status: 0 | 1 | 2 | 3;
  /**
   * value 交易币值
   */
  value: string;
  /**
   * symbol 代币符号
   */
  symbol: string;
  /**
   * timestamp 交易完成的时间戳
   */
  timestamp: number;
  /**
   * render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
   */
  render?: (record: object) => React.ReactNode;
}

interface ListRow {
  label?: string;
  lists: ListItem[];
}

type TransactionListProps = {
  /**
   * list 列表list item 配置描述。
   */
  //   list: ListItem[];
  /**
   * dataSource 数据数组
   */
  dataSource: ListRow[];
  /**
   * 设置额外的 class
   */
  className?: string;
  /**
   * lsitPanelClass 用于覆盖每个label对应的list panel样式
   */
  listPanelClass?: string;
  /**
   * renderLabel 生成复杂数据的渲染函数
   */
  renderLabel?: (label: string, len: number) => React.ReactNode;
  /**
   * renderItem 生成复杂数据的渲染函数, label与renderLabel方法里的label参数相同
   */
  renderItem?: (
    record: object,
    idx: number,
    len: number,
    label: string
  ) => React.ReactNode;
};

interface LabelNodeProps {
  value: string;
  desc?: number | string;
}

const LabelNode: FC<LabelNodeProps> = ({ value, desc }) => {
  return (
    <div className="okd-px-4 okd-py-2 okd-text-xs  okd-text-gray-400">
      {value}
      {!!desc && ` (${desc})`}
    </div>
  );
};

const ListNode: FC<ListItem> = ({
  isLast,
  label,
  address,
  direction,
  status,
  timestamp,
  value,
}) => {
  return (
    <div
      className={cx(
        "okd-flex okd-items-start okd-justify-between okd-pr-4 okd-py-3",
        {
          "okd-border-b okd-border-gray-50 okd-border-solid": !isLast,
        }
      )}
    >
      <div className="okd-flex">
        <div className="okd-flex okd-items-center okd-justify-center okd-mr-2 okd-w-8 okd-h-8 okd-rounded-full okd-border okd-border-solid okd-border-gray-100">
          <Icon
            size={16}
            className="okd-text-gray-500"
            name="ArrowUpOutline"
          ></Icon>
        </div>
        <div>
          <p className="okd-text-base okd-leading-5 okd-font-medium okd-text-gray-900">
            {label}
          </p>
          {address && (
            <p className="okd-text-sm okd-font-medium okd-text-gray-400">
              {TransactionDirection[direction]}: {shortenAddress(address)}
            </p>
          )}
          {statusList.includes(status) ? (
            <p
              className={cx(
                "okd-text-sm okd-font-medium",
                status2Color[status]
              )}
            >
              {TransactionStatus[status]}
            </p>
          ) : (
            <p className="okd-text-sm okd-font-medium okd-text-gray-400">
              {timestamp}
            </p>
          )}
        </div>
      </div>
      <div className="okd-text-right">
        <p className="okd-text-base okd-leading-5 okd-font-medium okd-text-gray-900">
          {value}
        </p>
        <p className="okd-text-sm okd-font-medium okd-text-gray-400">
          {currency2Usd(value)}
        </p>
      </div>
    </div>
  );
};

const TransactionList: FC<TransactionListProps> = ({
  dataSource,
  className,
  listPanelClass,
  renderLabel,
  renderItem,
  ...restProps
}) => {
  return (
    <div className={cx("okd-bg-gray-50 okd-w-full", className)}>
      {dataSource.map((listRow, index) => {
        const { label, lists } = listRow as ListRow;
        let labelNode: React.ReactNode;
        let listNodes: React.ReactNode[];
        if (renderLabel) {
          labelNode = renderLabel(label, lists?.length);
        } else {
          labelNode = (
            <LabelNode
              key={`${label?.toUpperCase()}-${index}`}
              value={label?.toUpperCase()}
              desc={lists?.length}
            ></LabelNode>
          );
        }

        listNodes = lists.map((item, idx) => {
          if (renderItem) {
            return renderItem(item, idx, lists?.length, label);
          } else {
            return (
              <ListNode
                key={`item-${idx}`}
                isLast={lists?.length - 1 === idx}
                {...item}
              ></ListNode>
            );
          }
        });

        return (
          <div key={`${index}-${index}`}>
            {!!label && !!lists.length && labelNode}
            {!!lists.length && (
              <div
                className={cx(
                  {
                    "okd-pl-4 okd-bg-white okd-border-t okd-border-b okd-border-gray-100 okd-border-solid": !listPanelClass,
                  },
                  listPanelClass
                )}
              >
                {listNodes.map((itemNode) => itemNode)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
