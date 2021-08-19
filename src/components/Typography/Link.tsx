import cx from 'classnames/dedupe'
import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import Text, { TextProps } from './Text'


/** Anchor Props */
export interface LinkProps
  extends Omit<TextProps, keyof HTMLAttributes<HTMLSpanElement>>, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The path to link this anchor to.
   */
  href?: string

  /**
   * Controls the color of the link
   */
  color?: string

  /**
   * Controls the color of the link on hover
   */
  hoverColor?: string
}

/**
 * Anchor is an abstraction/style that can/is applied to HTML anchor elements.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of the Anchor.
 *
 * Use this component to create text or element based anchors around other HTML tags or React Components.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { size, weight, color, hoverColor, ...htmlProps } = props

    const finalProps = {
      ...htmlProps,
      className: cx(
        'okd-font-medium okd-text-brand-500 hover:okd-text-brand-600',
        props.className,
      )
    }

    return (
      <Text as="a" ref={ref} {...finalProps}>
        {props.children}
      </Text>
    )
  }
)

Link.displayName = 'Link'

export default Link