import React, { FC } from "react";
import cx, { Argument } from "classnames";
import SectionHeader, { SectionHeaderProps } from "../SectionHeader";

type SectionProps = {
  /**
   * 设置额外的 class
   */
  className?: Argument;
  /**
   * SectionHeader 的 props
   */
  sectionHeader?: SectionHeaderProps;
};

const defaultProps = {} as const;

const Section: FC<SectionProps> = ({
  className,
  children,
  sectionHeader,
  ...rest
}) => {
  return (
    <div className={cx("okd-mb-8 last:okd-mb-0", !!className && className)} {...rest}>
      {!!sectionHeader && <SectionHeader {...sectionHeader} />}
      {children}
    </div>
  );
};

Section.defaultProps = defaultProps;

export default Section;
