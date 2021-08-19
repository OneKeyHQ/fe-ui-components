import cx from 'classnames/dedupe'
import React from 'react'
import Text, { TextProps, textSizes, textWeights } from './Text'

const defaultProps = {
  size: 'sm',
  weight: 'normal',
} as const
/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export const Paragraph: React.FC<TextProps> = (props: TextProps) => {
  const { size, weight, color, ...htmlProps } = props

  const finalProps = {
    ...htmlProps,

    className: cx(
      props.className,
      textSizes[size],
      textWeights[weight],
    )
  }

  return <Text as="p" {...finalProps}>{props.children}</Text>
}

Paragraph.displayName = "Paragraph"
Paragraph.defaultProps = defaultProps

export default Paragraph
