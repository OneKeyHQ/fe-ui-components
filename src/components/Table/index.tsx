import React from "react";
import Icon from "../Icon/index";
import Tooltip, { TooltipProps } from "../Tooltip/index";
import Button from "../Button/index";
import { usePagination } from "./usePagination";
import cx from "classnames";

interface PaginationProps {
  from: number;
  to: number;
  total: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  tableSize: "sm" | "lg";
}

const Pagination = (props: PaginationProps) => {
  const { from, to, total, tableSize, onPrevClick, onNextClick } = props;
  const hasPrev = from !== 0;
  const hasNext = to !== total;
  const displayFrom = total !== 0 ? from + 1 : 0;

  return (
    <nav
      className={cx(
        "okd-flex okd-items-center okd-justify-between okd-border-t okd-border-gray-200",
        tableSize === "lg" ? "okd-px-4 sm:okd-px-6 okd-py-3" : "",
        tableSize === "sm" ? "okd-px-4 okd-py-2" : ""
      )}
      aria-label="Pagination"
    >
      <div className="okd-hidden sm:okd-block">
        <p className="okd-text-sm okd-text-gray-700">
          Showing <span className="okd-font-medium">{displayFrom}</span> to{" "}
          <span className="okd-font-medium">{to}</span> of{" "}
          <span className="okd-font-medium">{total}</span> results
        </p>
      </div>
      <div className="okd-flex-1 okd-flex okd-justify-between sm:okd-justify-end">
        <Button
          size={tableSize === "sm" ? "xs" : "base"}
          disabled={!hasPrev}
          onClick={onPrevClick}
        >
          Previous
        </Button>
        <Button
          className={cx(tableSize === "sm" ? "okd-ml-2" : "okd-ml-3")}
          size={tableSize === "sm" ? "xs" : "base"}
          disabled={!hasNext}
          onClick={onNextClick}
        >
          Next
        </Button>
      </div>
    </nav>
  );
};

interface ColumnsType {
  /**
   * sortable 排序的受控属性，外界可用此控制列的排序，可设置为 ascend descend false
   */
  sortable?: boolean | string;
  /**
   * Tooltip props
   */
  tooltip: TooltipProps;
  /**
   * title 列头显示文字
   */
  title: React.ReactNode;
  /**
   * dataIndex 列数据在数据项中对应的路径
   */
  dataIndex: string;
  /**
   * 列表的数据类型，决定 column 内容的对齐方式
   */
  contentType: "text" | "numeric";
  /**
   * render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
   */
  render?: (text: string, record: object, index: number) => React.ReactNode;
}

type tableProps = {
  /**
   * columns 表格列的配置描述。
   */
  columns: ColumnsType[];
  /**
   * dataSource 数据数组
   */
  dataSource: object[];
  /**
   * rowKey 表格行key的取值，唯一性
   */
  rowKey: string;
  /**
   * 使表格行有 hover 状态，默认为 true
   */
  hoverable: boolean;
  /**
   * 表格尺寸，可选 lg 和 sm，默认 lg
   */
  size: "lg" | "sm";
};

const defaultProps = {
  rowKey: "address",
  hoverable: true,
  size: "lg",
} as const;

const Table = (props: tableProps) => {
  const { rowKey, columns, dataSource, hoverable, size } = props;
  const { paginatedData, ...paginationProps } = usePagination(dataSource);

  return (
    <>
      <div className="okd-overflow-x-auto">
        <table className="okd-min-w-full okd-divide-y okd-divide-gray-200">
          <thead className="okd-bg-gray-50">
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    key={column.dataIndex}
                    scope="col"
                    className={cx(
                      "okd-text-left okd-text-xs okd-font-medium okd-text-gray-500 okd-uppercase okd-tracking-wider",
                      size === "lg" ? "okd-px-4 sm:okd-px-6 okd-py-3" : "",
                      size === "sm" ? "okd-px-4 okd-py-2" : ""
                    )}
                  >
                    <div
                      className={cx(
                        "okd-flex okd-items-center okd-w-full",
                        column.contentType === "text" ? "okd-text-left" : "",
                        column.contentType === "numeric"
                          ? "okd-text-right okd-justify-end"
                          : ""
                      )}
                    >
                      <span className={cx(!!column.tooltip ? "okd-mr-1" : "")}>
                        {column.title}
                      </span>
                      {!!column.tooltip && (
                        <Tooltip place="top" {...column.tooltip}>
                          <div className="okd-inline-flex okd-items-center okd-justify-center okd-w-4 okd-h-4">
                            <Icon
                              className="okd-min-w-[18px] okd-h-[18px] okd-text-gray-300"
                              name="QuestionMarkCircleSolid"
                            />
                          </div>
                        </Tooltip>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="okd-divide-y okd-divide-gray-200">
            {paginatedData.map((record, index) => {
              return (
                <tr
                  className={cx(hoverable ? "okd-group" : "")}
                  key={record[rowKey]}
                >
                  {columns.map((column) => {
                    if (column.render) {
                      return (
                        <td
                          key={`${record[rowKey]}-${index}`}
                          className={cx(
                            "okd-whitespace-nowrap okd-text-sm okd-text-gray-500",
                            size === "lg"
                              ? "okd-px-4 sm:okd-px-6 okd-py-4"
                              : "",
                            size === "sm" ? "okd-px-4 okd-py-2" : "",
                            hoverable ? "group-hover:okd-bg-gray-50" : "",
                            column.contentType === "text"
                              ? "okd-text-left"
                              : "",
                            column.contentType === "numeric"
                              ? "okd-text-right"
                              : ""
                          )}
                        >
                          {column.render(
                            record[column.dataIndex],
                            record,
                            index
                          )}
                        </td>
                      );
                    } else {
                      return (
                        <td
                          key={`${record[rowKey]}-${index}`}
                          className={cx(
                            "okd-whitespace-nowrap okd-text-sm okd-text-gray-500",
                            size === "lg"
                              ? "okd-px-4 sm:okd-px-6 okd-py-4"
                              : "",
                            size === "sm" ? "okd-px-4 okd-py-2" : "",
                            hoverable ? "group-hover:okd-bg-gray-50" : "",
                            column.contentType === "text"
                              ? "okd-text-left"
                              : "",
                            column.contentType === "numeric"
                              ? "okd-text-right"
                              : ""
                          )}
                        >
                          {record[column.dataIndex]}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination tableSize={size} {...paginationProps}></Pagination>
    </>
  );
};

Table.defaultProps = defaultProps;

export default Table;
