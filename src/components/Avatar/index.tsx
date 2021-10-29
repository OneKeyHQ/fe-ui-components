import React, { FC } from 'react';
import cx, { Argument } from 'classnames';
import JazzIcon, { jsNumberForAddress } from 'react-jazzicon';
import ImageFallback from '../Image/react-image-fallback';
import { CDN_PREFIX } from '../utils/index';
import { add } from 'lodash';

type AvatarProps = {
  /**
   * should load remote image
   */
  isRemote?: boolean;
  /**
   * 字符串种子
   */
  address: string;
  /**
   * avatar img src
   */
  logoUrl?: string;
  /**
   * 图像尺寸大小
   */
  size?: number | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * className 样式
   */
  className?: Argument;
};

const defaultProps = {
  size: 'lg',
} as const;

const Avatar: FC<AvatarProps> = ({ address, size, logoUrl, className, isRemote }) => {
  if (!address.startsWith('0x') && !address.startsWith('0X')) {
    // CFX SOL address support, convert to ETH address like
    address = Buffer.from(address || '', 'utf8').toString('hex');
    address = `0x${address.slice(-40)}`;
  }
  const seed = jsNumberForAddress(address);
  const sizeNum =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 20
      : size === 'md'
      ? 24
      : size === 'lg'
      ? 32
      : size === 'xl'
      ? 40
      : size === '2xl'
      ? 48
      : size === '3xl'
      ? 56
      : null;
  const isRemoteImage = logoUrl || isRemote;
  const jazzIcon = (
    <JazzIcon
      paperStyles={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      }}
      diameter={sizeNum}
      seed={seed}
    />
  );
  return (
    <div
      key={(address || '') + (logoUrl || '')}
      className={cx('okd-inline-flex okd-overflow-hidden okd-bg-gray-200', className)}
      style={{ width: sizeNum, height: sizeNum, borderRadius: '50%' }}
    >
      {isRemoteImage ? (
        <ImageFallback
          src={logoUrl ?? `${CDN_PREFIX}onekey/avatar/${address}?timestamp=${Date.now()}`}
          fallbackImage={jazzIcon}
          alt="avatar"
        />
      ) : (
        jazzIcon
      )}
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
