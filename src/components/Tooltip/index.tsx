import React, { FC, useState, useEffect, ReactNode } from "react";

import BaseTooltip from "react-tooltip";

interface OffsetProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

type TooltipProps = {
  /**
   * 弹出内容
   */
  content: ReactNode;
  /**
   * className 样式
   */
  className?: string;
  /**
   * multiline 是否显示多行，使用<br>或<br/>分隔
   */
  multiline?: boolean;
  /**
   * place tooltip显示方向
   */
  place?: "top" | "right" | "left" | "bottom";
  /**
   * effect tooltip是否固定，默认float
   */
  effect?: "solid" | "float";
  /**
   * offset tooltip显示方向的偏移量
   */
  offset?: OffsetProps;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  className,
  ...rest
}) => {
  const [timestamp] = useState(new Date().getTime());
  const flag = `tooltip-${timestamp}`;

  useEffect(() => {
    BaseTooltip.rebuild();
  });

  return (
    <>
      <BaseTooltip id={flag} className={`tooltip ${className}`} {...rest}>
        {/* <span>{content}</span> */}
      </BaseTooltip>
      <div className="okd-inline-flex" data-tip={content} data-for={flag}>
        {children}
      </div>
    </>
  );
};

export default Tooltip;
