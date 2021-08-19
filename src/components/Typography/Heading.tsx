import cx from 'classnames/dedupe'
import React, { HTMLAttributes } from 'react'


export enum LevelEnums {
  '2xl' = 1,
  xl,
  lg,
  md,
  sm,
  xs
}

export const headingSizes = {
  '2xl': 'okd-text-2xl',
  xl: 'okd-text-xl',
  lg: 'okd-text-lg',
  md: 'okd-text-base',
  sm: 'okd-text-sm',
  xs: 'okd-text-xs',
} as const

/** Heading Props */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The level and type of Heading to be used.
   * Denotes hierarchy.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6
  /** The HTML element to be used */
  as?: keyof HTMLElementTagNameMap
}
const defaultProps = {
  level: 2,
} as const
/**
 * Heading is used to display headlines and other forms of hierarchical Text.
 *
 * Headings are similar to the base Text component, but restricted to certain
 * sizes and font weight.
 */
export const Heading: React.FC<HeadingProps> = ({ level, as, className, children, ...htmlProps }) => {
  const sizeClass = headingSizes[LevelEnums[level]]

  const finalProps = {
    ...htmlProps,
    className: cx(
      'okd-typography',
      'okd-font-medium',
      'okd-text-gray-900',
      className,
      sizeClass
    )
  }

  return React.createElement(as ?? `h${level}`, finalProps, children)
}

Heading.defaultProps = defaultProps

export default Heading
