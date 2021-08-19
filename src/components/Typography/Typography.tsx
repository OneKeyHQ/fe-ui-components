import * as React from 'react';
import cx from 'classnames';
import './Typography.css'

export interface TypographyProps {
  id?: string;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ['aria-label']?: string;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

const Typography: React.ForwardRefRenderFunction<{}, InternalTypographyProps> = (
  {
    component = 'article',
    className,
    'aria-label': ariaLabel,
    children,
    ...restProps
  },
  ref,
) => {
  let mergedRef = ref;
  const Component = component as any;
  return (
    <Component
      className={cx('okd-typography', className)}
      aria-label={ariaLabel}
      ref={mergedRef}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const RefTypography = React.forwardRef(Typography);

RefTypography.displayName = 'Typography';

// es default export should use const instead of let
const ExportTypography = (RefTypography as unknown) as React.FC<TypographyProps>;

export default ExportTypography;
