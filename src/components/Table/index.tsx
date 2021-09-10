import React from "react";
import Icon from "../Icon/index";
import Tooltip from "../Tooltip/index";
import Button from "../Button/index";
import { usePagination } from "./usePagination";

interface PaginationProps {
  from: number;
  to: number;
  total: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Pagination = (props: PaginationProps) => {
  const { from, to, total, onPrevClick, onNextClick } = props;
  const hasPrev = from !== 0;
  const hasNext = to !== total;
  const displayFrom = total !== 0 ? from + 1 : 0;

  return (
    <nav
      className="okd-bg-white okd-px-4 okd-py-3 okd-flex okd-items-center okd-justify-between sm:okd-px-6"
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
          className="okd-relative okd-inline-flex okd-items-center okd-px-4 okd-py-2 okd-border okd-border-gray-300 okd-text-sm okd-font-medium okd-rounded-md okd-text-gray-700 okd-bg-white hover:okd-bg-gray-50"
          disabled={!hasPrev}
          onClick={onPrevClick}
        >
          Previous
        </Button>
        <Button
          className="okd-ml-3 okd-relative okd-inline-flex okd-items-center okd-px-4 okd-py-2 okd-border okd-border-gray-300 okd-text-sm okd-font-medium okd-rounded-md okd-text-gray-700 okd-bg-white hover:okd-bg-gray-50"
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
   * sortOrder 排序的受控属性，外界可用此控制列的排序，可设置为 ascend descend false
   */
  sortOrder?: boolean | string;
  /**
   * toolTip 表头hover是否提示
   */
  toolTip?: boolean;
  /**
  /**
   * tipContent 表头hover提示内容
   */
  tipContent?: string;
  /**
   * title 列头显示文字
   */
  title: React.ReactNode;
  /**
   * dataIndex 列数据在数据项中对应的路径
   */
  dataIndex: string;
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
};

const defaultProps = {
  rowKey: "address",
} as const;

const Table = (props: tableProps) => {
  const { rowKey, columns, dataSource } = props;
  const { paginatedData, ...paginationProps } = usePagination(dataSource);

  return (
    <>
      <div className="okd-flex okd-flex-col">
        <div className="okd--my-2 okd-overflow-x-auto sm:okd--mx-6 lg:okd--mx-8">
          <div className="okd-py-2 okd-align-middle okd-inline-block okd-min-w-full sm:okd-px-6 lg:okd-px-8">
            <div className="okd-shadow okd-overflow-hidden okd-border-b okd-border-gray-200 sm:okd-rounded-lg">
              <table className="okd-min-w-full okd-divide-y okd-divide-gray-200">
                <thead className="okd-bg-gray-50">
                  <tr>
                    {columns.map((column) => {
                      if (column.toolTip && column.tipContent) {
                        return (
                          <Tooltip
                            content={column.tipContent}
                            place="right"
                            effect="solid"
                          >
                            <th
                              key={column.dataIndex}
                              scope="col"
                              className="okd-inline-flex okd-items-center okd-px-6 okd-py-3 okd-text-left okd-text-xs okd-font-medium okd-text-gray-500 okd-uppercase okd-tracking-wider"
                            >
                              {column.title}
                              <Icon
                                className="okd-w-4 okd-h-4"
                                name="InformationCircleOutline"
                              ></Icon>
                            </th>
                          </Tooltip>
                        );
                      }
                      return (
                        <th
                          key={column.dataIndex}
                          scope="col"
                          className="okd-px-6 okd-py-3 okd-text-left okd-text-xs okd-font-medium okd-text-gray-500 okd-uppercase okd-tracking-wider"
                        >
                          {column.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="okd-bg-white okd-divide-y okd-divide-gray-200">
                  {paginatedData.map((record, index) => {
                    return (
                      <tr key={record[rowKey]}>
                        {columns.map((column) => {
                          if (column.render) {
                            return (
                              <td
                                key={`${record[rowKey]}-${index}`}
                                className="okd-px-6 okd-py-4 okd-whitespace-nowrap okd-text-sm okd-font-medium okd-text-gray-900"
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
                                className="okd-px-6 okd-py-4 okd-whitespace-nowrap okd-text-sm okd-font-medium okd-text-gray-900"
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
          </div>
        </div>
      </div>
      <Pagination {...paginationProps}></Pagination>
    </>
  );
};

Table.defaultProps = defaultProps;

export default Table;
