import cx from 'classnames/dedupe'
import React, { HTMLAttributes, ReactElement } from 'react'

export const textSizes = {
  md: 'okd-text-base',
  lg: 'okd-text-lg',
  sm: 'okd-text-sm',
  xs: 'okd-text-xs'
}

export const textWeights = {
  normal: 'okd-font-normal',
  semibold: 'okd-font-semibold',
  bold: 'okd-font-bold'
}
export interface BlockProps {
  // decorations
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}

/** Text Props */
export interface TextProps
  extends HTMLAttributes<HTMLSpanElement>, BlockProps {
  /**
   * Controls the size of the text based on pre-configured OneKey UI sizes.
   */
  size?: keyof typeof textSizes

  /**
   * Controls the weight of the text.
   */
  weight?: keyof typeof textWeights

  /**
   * Controls the line height of a text.
   */
  // lineHeight?: keyof typeof lineHeights

  /**
   * Controls the color of the text
   */
  color?: string

  /** The HTML element to be used */
  as?: 'a' | 'span' | 'p'
}

function wrapperDecorations(
  { mark, code, underline, delete: del, strong, keyboard, italic }: BlockProps,
  content: React.ReactElement,
) {
  let currentContent = content;

  function wrap(needed: boolean | undefined, tag: string) {
    if (!needed) return;

    currentContent = React.createElement(tag, {}, currentContent);
  }

  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  wrap(italic, 'i');

  return currentContent;
}

const defaultProps = {
  as: 'span',
  size: 'sm',
  weight: 'normal'
} as const

/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns.
 */
export const Text = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    size, weight, as: Component, color,
    children,
    ...restProps
  } = props

  const finalProps = {
    className: cx(
      'okd-typography okd-text-gray-900',
      props.className,
      textSizes[size],
      textWeights[weight],
    ),
    ...restProps,
  }

  let textContent: ReactElement = (
    <>
      {children}
    </>
  )

  textContent = wrapperDecorations(finalProps, textContent)

  return <Component {...finalProps} ref={ref as any}>{textContent}</Component>
})

Text.displayName = 'Text'
Text.defaultProps = defaultProps

export default Text