import React, { FC, ReactNode } from 'react';
import cx from 'classnames'

import CheckCircleSolid from '../Icon/react/CheckCircleSolid'
import ExclamationSolid from '../Icon/react/ExclamationSolid';
import InformationCircleSolid from '../Icon/react/InformationCircleSolid';
import XCircleSolid from '../Icon/react/XCircleSolid';
import XSolid from '../Icon/react/XSolid';


export const alertIcons = {
  info: <InformationCircleSolid className="okd-h-5 okd-w-5 okd-text-gray-400" okd-aria-hidden="true" />,
  warning: <ExclamationSolid className="okd-h-5 okd-w-5 okd-text-yellow-400" okd-aria-hidden="true" />,
  error: <XCircleSolid className="okd-h-5 okd-w-5 okd-text-red-400" okd-aria-hidden="true" />,
  success: <CheckCircleSolid className="okd-h-5 okd-w-5 okd-text-green-400" okd-aria-hidden="true" />,
}

export type AlertProps = {
  title: ReactNode;
  content?: ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
  closable?: boolean;
  onClose?: () => void;
  className?: string;
}

const defaultProps = {
  type: 'info',
  closable: false,
} as const

const Alert: FC<AlertProps> = ({ type, title, content, closable, onClose, children }) => {
  const alertIconNode = alertIcons[type]
  const textContent = content ?? children

  return (
    <div className={cx("okd-rounded okd-p-4", {
      'okd-bg-gray-50': type === 'info',
      'okd-bg-yellow-50': type === 'warning',
      'okd-bg-red-50': type === 'error',
      'okd-bg-green-50': type === 'success',
    })}>
      <div className="okd-flex">
        <div className="okd-flex-shrink-0">
          {alertIconNode}
        </div>

        <div className="okd-ml-3">
          <h3 className={cx("okd-text-sm okd-font-medium", {
            'okd-text-gray-700': type === 'info',
            'okd-text-yellow-800': type === 'warning',
            'okd-text-red-800': type === 'error',
            "okd-text-green-800": type === 'success',
          })}>
            {title}
          </h3>

          {textContent && (
            <div className={cx("okd-mt-2 okd-text-sm", {
              'okd-text-gray-500': type === 'info',
              'okd-text-yellow-700': type === 'warning',
              'okd-text-red-700': type === 'error',
              "okd-text-green-700": type === 'success'
            })}>
              {textContent}
            </div>
          )}
        </div>

        {closable && (
          <div className="okd-ml-auto okd-pl-3">
            <div className="okd--mx-1.5 okd--my-1.5">
              <button
                type="button"
                className={
                  cx("okd-inline-flex okd-justify-center okd-items-center okd-rounded okd-p-1.5 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-offset-1", {
                    "okd-text-gray-400 focus:okd-ring-offset-gray-50 focus:okd-ring-gray-600": type === 'info',
                    "okd-text-yellow-500 focus:okd-ring-offset-yellow-50 focus:okd-ring-yellow-600": type === 'warning',
                    "okd-text-red-500 focus:okd-ring-offset-red-50 focus:okd-ring-red-600": type === 'error',
                    "okd-text-green-500 focus:okd-ring-offset-green-50 focus:okd-ring-green-600": type === 'success',
                  })}
                onClick={onClose}
              >
                <span className="okd-sr-only">Dismiss</span>
                <XSolid className="okd-h-5 okd-w-5" okd-aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
