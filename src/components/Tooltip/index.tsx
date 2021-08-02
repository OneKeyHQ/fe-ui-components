import React, { FC, useState, useEffect } from 'react';

import BaseTooltip from 'react-tooltip';

type TooltipProps = {
  content?: string;
}

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
      <p data-for={flag} >
        {children}
      </p>
    </>
  );
}

export default Tooltip;