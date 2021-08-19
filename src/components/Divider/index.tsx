import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'
import './Divider.css'


/**
 * Border Style Props
 */
interface BorderStyleProps {
  dashed?: boolean
  solid?: boolean
  dotted?: boolean
  double?: boolean
  none?: boolean
}
/**
 * Divider Props
 */
export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>, BorderStyleProps {
  /**
   * Divider 类型，是垂直还是水平
   */
  type?: 'horizontal' | 'vertical';
}

const defaultProps = {
  type: 'horizontal',
  borderStyle: 'solid'
} as const

/**
 * Dividers are horizontal lines used to separate semantic blocks of
 * content or UI patterns.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const { dashed, solid, dotted, double, none, type, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,
    className: cx(
      'okd-divider',
      {
        'okd-divider--horizontal': type === 'horizontal',
      },
      {
        'okd-border-dashed': dashed,
        'okd-border-solid': solid,
        'okd-border-dotted': dotted,
        'okd-border-double': double,
        'okd-border-none': none,
      },
      props.className,
    )
  }

  return <div {...finalProps}></div>
}

Divider.displayName = 'Divider'
Divider.defaultProps = defaultProps

export default Divider