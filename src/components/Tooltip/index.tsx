import React, { FC, useState, useEffect, ReactNode } from "react";

import BaseTooltip from "react-tooltip";

type TooltipProps = {
  /**
   * 弹出内容
   */
  content?: ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  const [timestamp] = useState(new Date().getTime());
  const flag = `tooltip-${timestamp}`;
  useEffect(() => {
    BaseTooltip.rebuild();
  });
  return (
    <>
      <BaseTooltip id={flag}>
        <span>{content}</span>
      </BaseTooltip>
      <p data-for={flag}>{children}</p>
    </>
  );
};

export default Tooltip;
