import cx from 'classnames/dedupe'
import React from 'react'
import { shortenAddress } from '../utils'
import Text, { TextProps, } from './Text'

export interface AddressProps extends TextProps {
  address?: string
  short?: boolean
}

const defaultProps = {
  size: 'sm',
  weight: 'normal',
  color: 'gray',
} as const
/**
 * Paragraph is a semantic component used for blocks of text with
 * semantic meaning.
 *
 * Paragraph accepts all the same customization options as Text.
 */
export const Address: React.FC<AddressProps> = ({ address, short, children, ...restProps }) => {
  let textContent = address || children

  if (short) {
    textContent = shortenAddress(textContent)
  }

  const finalProps = {
    ...restProps,

    className: cx(
      'okd-font-mono',
      restProps.className,
    )
  }

  return <Text as="p" {...finalProps}>{textContent}</Text>
}

Address.displayName = "Paragraph"
Address.defaultProps = defaultProps

export default Address
