import React, { Fragment, useState, ReactNode, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { FormattedMessage, useIntl } from "react-intl";

import Badge, { BadgeProps } from "../Badge";
import Icon from "../Icon";
import type { ICON_NAMES } from "../Icon/Icons";

type ActionTab = {
  /**
   * 名称
   */
  name: string;
  /**
   * 标识符
   */
  id: string;
  /**
   * 链接 URL
   */
  href: string;
  /**
   * ICON 名称
   */
  icon?: ICON_NAMES;
  /**
   * 是否新页面打开
   */
  blank?: boolean;
  /**
   * badge 角标类型
   */
  badgeType?: BadgeProps["type"];
  /**
   * badge 角标内容
   */
  badgeContent?: ReactNode;
  /**
   * react-intl i18n id
   */
  translationId?: string;
};

const DEFAULT_SIDEBAR_WALLET_NAVIGATION: ActionTab[] = [];
const DEFAULT_TRADE_NAVIGATION: ActionTab[] = [
  {
    name: "Portfolio",
    id: "portfolio",
    translationId: "ui-components__sidebar_portfolio",
    href: "https://portfolio.onekey.so/",
    icon: "TRENDING-UP-OUTLINE",
    blank: false,
  },
  {
    name: "Swap",
    id: "swap",
    href: "https://swap.onekey.so/",
    translationId: "ui-components__sidebar_swap",
    icon: "SWITCH-HORIZONTAL-OUTLINE",
    blank: false,
  },
  {
    name: "Explore",
    id: "explore",
    href: "https://discover.onekey.so/",
    icon: "COMPASS-OUTLINE",
    translationId: "ui-components__sidebar_discover",
    badgeType: "added",
    badgeContent: "BETA",
    blank: false,
  },
];
const DEFAULT_SIDEBAR_EXTRA_ACTIONS: ActionTab[] = [];

const DEFAULT_SIDEBAR_CONFIG = {
  walletNavigation: DEFAULT_SIDEBAR_WALLET_NAVIGATION,
  tradeNavigation: DEFAULT_TRADE_NAVIGATION,
  extraActions: DEFAULT_SIDEBAR_EXTRA_ACTIONS,
} as const;

type SidebarProps = {
  walletNavigation?: ActionTab[];
  tradeNavigation?: ActionTab[];
  extraActions?: ActionTab[];
  active?: string;
};

const Sidebar: FC<SidebarProps> = ({
  walletNavigation,
  tradeNavigation,
  extraActions,
  active,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const intl = useIntl();
  return (
    <>
      {/* Mobile Header */}
      <div className="okd-flex okd-justify-between okd-py-1 okd-bg-white okd-border-b okd-border-gray-100 lg:okd-hidden okd-z-[1]">
        {/* Brand */}
        <div className="okd-flex okd-items-center okd-flex-shrink-0 okd-pl-4">
          <Icon
            className="okd-w-7 okd-h-7 okd-text-brand-500"
            name="BRAND-LOGO-SOLID"
            size={28}
            aria-label="The Brand Logo – OneKey"
          />
        </div>
        {/* Menu Button */}
        <button
          className="okd-p-4 okd-text-gray-500 focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-inset focus:okd-ring-brand lg:okd-hidden"
          onClick={() => setSidebarOpen(true)}
          type="button"
        >
          {/* TODO i18n */}
          <span className="okd-sr-only">Open sidebar</span>
          <span className="okd-w-6 okd-h-6" aria-hidden="true">
            <Icon
              onClick={() => setSidebarOpen(!sidebarOpen)}
              name="MENU-OUTLINE"
              className="okd-w-6 okd-h-6 okd-text-gray-500"
            />
          </span>
        </button>
      </div>
      {/* Mobile Header End */}
      {/* Mobile Sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="okd-fixed okd-inset-0 okd-z-40 okd-flex lg:okd-hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="okd-transition-opacity okd-ease-linear okd-duration-300"
            enterFrom="okd-opacity-0"
            enterTo="okd-opacity-100"
            leave="okd-transition-opacity okd-ease-linear okd-duration-300"
            leaveFrom="okd-opacity-100"
            leaveTo="okd-opacity-0"
          >
            <Dialog.Overlay className="okd-fixed okd-inset-0 okd-bg-gray-600 okd-bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="okd-transition okd-ease-in-out okd-duration-300 okd-transform"
            enterFrom="okd--translate-x-full"
            enterTo="okd-translate-x-0"
            leave="okd-transition okd-ease-in-out okd-duration-300 okd-transform"
            leaveFrom="okd-translate-x-0"
            leaveTo="okd--translate-x-full"
          >
            <div className="okd-relative okd-flex okd-flex-col okd-flex-1 okd-w-full okd-max-w-xs okd-py-5 okd-bg-gray-50">
              <Transition.Child
                as={Fragment}
                enter="okd-ease-in-out okd-duration-300"
                enterFrom="okd-opacity-0"
                enterTo="okd-opacity-100"
                leave="okd-ease-in-out okd-duration-300"
                leaveFrom="okd-opacity-100"
                leaveTo="okd-opacity-0"
              >
                {/* Close Button */}
                <div className="okd-absolute okd-top-0 okd-right-0 okd-pt-2 okd--mr-12">
                  <button
                    className="okd-flex okd-items-center okd-justify-center okd-w-10 okd-h-10 okd-ml-1 okd-rounded-full focus:okd-outline-none focus:okd-ring-2 focus:okd-ring-inset focus:okd-ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="okd-sr-only">Close sidebar</span>
                    <Icon
                      className="okd-w-6 okd-h-6 okd-text-white"
                      name="x-outline"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                {/* Close Button End */}
              </Transition.Child>
              {/* Brand */}
              <div className="okd-flex okd-items-center okd-flex-shrink-0 okd-pl-[22px]">
                <Icon
                  className="okd-w-7 okd-h-7 okd-text-brand-500 "
                  name="BRAND-LOGO-SOLID"
                  size={28}
                  aria-label="The Brand Logo – OneKey"
                />
              </div>
              <div className="okd-flex okd-flex-col okd-flex-1 okd-h-0 okd-px-4 okd-overflow-y-auto">
                {/* Navigation */}
                <nav className="okd-mt-6 okd-space-y-6">
                  {/* Wallet */}
                  {!!walletNavigation?.length && (
                    <div>
                      {/* Group Title */}
                      <div className="okd-pl-2 okd-mb-2 okd-text-xs okd-font-medium okd-tracking-wider okd-text-gray-500 okd-uppercase">
                        <FormattedMessage id="ui-components__sidebar_wallet" />
                      </div>
                      <div className="space-y-1">
                        {walletNavigation.map((item) => {
                          const isActive = item.id === active;
                          return (
                            <a
                              href={item.href}
                              key={item.name}
                              className={classNames(
                                isActive
                                  ? "okd-bg-gray-200 okd-text-gray-900"
                                  : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                                "okd-group okd-justify-between okd-flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              <div className="okd-flex okd-items-center">
                                {!!item.icon && (
                                  <Icon
                                    className={classNames(
                                      "okd-mr-3 okd-flex-shrink-0 okd-h-6 okd-w-6",
                                      isActive
                                        ? "okd-text-gray-500"
                                        : "okd-text-gray-400 group-hover:okd-text-gray-500"
                                    )}
                                    name={item.icon}
                                    aria-hidden="true"
                                  />
                                )}
                                {item.translationId
                                  ? intl.formatMessage({
                                      id: `${item.translationId}`,
                                    })
                                  : item.name}
                              </div>
                              {/* Show badge if badgeType exist. */}
                              {item.badgeType && (
                                <Badge type={item.badgeType}>
                                  {item.badgeContent}
                                </Badge>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {/* Wallet End */}
                  {/* Trade */}
                  <div>
                    {/* Group Title */}
                    <div className="okd-pl-2 okd-mb-2 okd-text-xs okd-font-medium okd-tracking-wider okd-text-gray-500 okd-uppercase">
                      <FormattedMessage id="ui-components__sidebar_trade" />
                    </div>
                    <div className="okd-space-y-1">
                      {tradeNavigation.map((item) => {
                        const isActive = item.id === active;
                        return (
                          <a
                            rel="noreferrer"
                            key={item.name}
                            href={item.href}
                            target={item.blank ? "_blank" : "_self"}
                            className={classNames(
                              isActive
                                ? "okd-bg-gray-200 okd-text-gray-900"
                                : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                              "group okd-justify-between okd-flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <div className="okd-flex okd-items-center">
                              {!!item.icon && (
                                <Icon
                                  className={classNames(
                                    "okd-mr-3 okd-flex-shrink-0 okd-h-6 okd-w-6",
                                    isActive
                                      ? "okd-text-gray-500"
                                      : "okd-text-gray-400 group-hover:okd-text-gray-500"
                                  )}
                                  name={item.icon}
                                  aria-hidden="true"
                                />
                              )}
                              {item.translationId
                                ? intl.formatMessage({
                                    id: `${item.translationId}`,
                                  })
                                : item.name}
                            </div>
                            {/* Show badge if badgeType exist. */}
                            {item.badgeType && (
                              <Badge type={item.badgeType}>
                                {item.badgeContent}
                              </Badge>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  {/* Trade End */}
                </nav>
                {/* Navigation End */}
                {/* Extra Actions */}
                <div className="okd-mt-auto">
                  <div className="okd-space-y-1">
                    {extraActions.map((item) => {
                      const isActive = item.id === active;
                      return (
                        <a
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            isActive
                              ? "okd-bg-gray-200 okd-text-gray-900"
                              : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                            "group justify-between flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <div className="flex okd-items-center">
                            {!!item.icon && (
                              <Icon
                                className={classNames(
                                  "okd-mr-3 okd-flex-shrink-0 okd-h-6 okd-w-6",
                                  isActive
                                    ? "okd-text-gray-500"
                                    : "okd-text-gray-400 group-hover:okd-text-gray-500"
                                )}
                                name={item.icon}
                                aria-hidden="true"
                              />
                            )}
                            {item.translationId
                              ? intl.formatMessage({
                                  id: `${item.translationId}`,
                                })
                              : item.name}
                          </div>
                          {/* Show badge if badgeType exist. */}
                          {item.badgeType && (
                            <Badge type={item.badgeType}>
                              {item.badgeContent}
                            </Badge>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
                {/* Extra Actions End */}
              </div>
            </div>
          </Transition.Child>
          <div className="okd-flex-shrink-0 okd-w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Mobile Sidebar End */}
      {/* Desktop Sidebar */}
      <div className="okd-relative lg:okd-inline-block okd-hidden okd-h-full okd-sidebar">
        <div
          className={classNames(
            "okd-flex okd-flex-col okd-py-5 okd-border-r okd-border-gray-100 okd-bg-gray-50 okd-h-full",
            isCollapsed ? "okd-w-auto" : "okd-w-64"
          )}
        >
          {/* Brand */}
          <div
            className="okd-flex okd-items-center okd-flex-shrink-0 okd-pl-[22px] okd-cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <Icon
              className="okd-w-7 okd-h-7 okd-text-brand-500 "
              name="BRAND-LOGO-SOLID"
              size={28}
              aria-label="The Brand Logo – OneKey"
            />
          </div>
          {/* Brand End */}
          <div className="okd-flex okd-flex-col okd-flex-1 okd-h-0 okd-px-4 okd-overflow-y-auto">
            {/* Device Selector */}
            {/* <DeviceSelector /> */}
            {/* Navigation */}
            <nav className="okd-mt-6 okd-space-y-6">
              {/* Wallet */}
              {!!walletNavigation?.length && (
                <div>
                  {/* Group Title */}
                  <div
                    className={classNames(
                      "okd-pl-2 okd-mb-2 okd-text-xs okd-font-medium okd-tracking-wider okd-text-gray-500 okd-uppercase",
                      { "okd-hidden": isCollapsed }
                    )}
                  >
                    <FormattedMessage id="ui-components__sidebar_wallet" />
                  </div>
                  <div className="okd-space-y-1">
                    {walletNavigation.map((item) => {
                      const isActive = item.id === active;
                      return (
                        <a
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            isActive
                              ? "okd-bg-gray-200 okd-text-gray-900"
                              : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                            "okd-group okd-justify-between okd-flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <div className="okd-flex okd-items-center">
                            {item.icon && (
                              <Icon
                                className={classNames(
                                  "okd-flex-shrink-0 okd-h-6 okd-w-6",
                                  isActive
                                    ? "okd-text-gray-500"
                                    : "okd-text-gray-400 group-hover:okd-text-gray-500"
                                )}
                                name={item.icon}
                                aria-hidden="true"
                              />
                            )}
                            {!isCollapsed && (
                              <span className="okd-ml-3">
                                {item.translationId
                                  ? intl.formatMessage({
                                      id: `${item.translationId}`,
                                    })
                                  : item.name}
                              </span>
                            )}
                          </div>
                          {/* Show badge if badgeType exist. */}
                          {item.badgeType && (
                            <Badge
                              className={classNames({
                                "okd-hidden": isCollapsed,
                              })}
                              type={item.badgeType}
                            >
                              {item.badgeContent}
                            </Badge>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Wallet End */}
              {/* Trade */}
              <div>
                {/* Group Title */}
                <div
                  className={classNames(
                    "okd-pl-2 okd-mb-2 okd-text-xs okd-font-medium okd-tracking-wider okd-text-gray-500 okd-uppercase",
                    { "okd-hidden": isCollapsed }
                  )}
                >
                  <FormattedMessage id="ui-components__sidebar_trade" />
                </div>
                <div className="okd-space-y-1">
                  {tradeNavigation.map((item) => {
                    const isActive = item.id === active;
                    return (
                      <a
                        rel="noreferrer"
                        key={item.name}
                        href={item.href}
                        target={item.blank ? "_blank" : "_self"}
                        className={classNames(
                          isActive
                            ? "okd-bg-gray-200 okd-text-gray-900"
                            : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                          "okd-group okd-justify-between okd-flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="okd-flex okd-items-center">
                          {!!item.icon && (
                            <Icon
                              className={classNames(
                                "okd-flex-shrink-0 okd-h-6 okd-w-6",
                                isActive
                                  ? "okd-text-gray-500"
                                  : "okd-text-gray-400 group-hover:okd-text-gray-500"
                              )}
                              name={item.icon}
                              aria-hidden="true"
                            />
                          )}

                          {!isCollapsed && (
                            <span className="okd-ml-3">
                              {item.translationId
                                ? intl.formatMessage({
                                    id: `${item.translationId}`,
                                  })
                                : item.name}
                            </span>
                          )}
                        </div>
                        {/* Show badge if badgeType exist. */}
                        {item.badgeType && (
                          <Badge
                            className={classNames({
                              "okd-hidden": isCollapsed,
                            })}
                            type={item.badgeType}
                          >
                            {item.badgeContent}
                          </Badge>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* Trade End */}
            </nav>
            {/* Navigation End */}
            {/* Extra Actions */}
            <div className="okd-mt-auto">
              <div className="okd-space-y-1">
                {extraActions.map((item) => {
                  const isActive = item.id === active;
                  return (
                    <a
                      href={item.href}
                      key={item.name}
                      className={classNames(
                        isActive
                          ? "okd-bg-gray-200 okd-text-gray-900"
                          : "okd-text-gray-600 hover:okd-text-gray-900 hover:okd-bg-gray-100",
                        "okd-group okd-justify-between okd-flex okd-items-center okd-px-2 okd-py-2 okd-text-sm okd-font-medium okd-rounded-md"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="okd-flex okd-items-center">
                        {!!item.icon && (
                          <Icon
                            className={classNames(
                              "okd-flex-shrink-0 okd-h-6 okd-w-6",
                              isActive
                                ? "okd-text-gray-500"
                                : "okd-text-gray-400 group-hover:okd-text-gray-500"
                            )}
                            name={item.icon}
                            aria-hidden="true"
                          />
                        )}

                        {!isCollapsed && (
                          <span className="okd-ml-3">
                            {item.translationId
                              ? intl.formatMessage({
                                  id: `${item.translationId}`,
                                })
                              : item.name}
                          </span>
                        )}
                      </div>
                      {/* Show badge if badgeType exist. */}
                      {item.badgeType && (
                        <Badge type={item.badgeType}>{item.badgeContent}</Badge>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Extra Actions End */}
          </div>
        </div>
        {/* Toggle Button */}
        <div className="okd-absolute okd-top-0 okd-bottom-0 okd-right-0 okd-z-10 okd-translate-x-1/2">
          <button
            className="okd-flex okd-justify-center okd-w-6 okd-h-full okd-group"
            type="button"
            onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
          >
            <div className="okd-w-0.5 okd-h-full okd-transition okd-bg-transparent group-hover:okd-bg-brand-500" />
            <div className="okd-absolute okd-p-1.5 okd-bg-white okd-border okd-border-gray-200 okd-rounded-full okd-top-4 okd-shadow-sm okd-transition okd-scale-75 okd-collapse-indicate okd-opacity-0">
              <Icon
                name="CHEVRON-LEFT-OUTLINE"
                size={16}
                className={classNames("okd-text-gray-400", {
                  "okd-rotate-180 okd-translate-x-px": isCollapsed,
                })}
              />
            </div>
          </button>
        </div>
      </div>
      {/* Desktop Sidebar End */}
    </>
  );
};

Sidebar.defaultProps = DEFAULT_SIDEBAR_CONFIG;

export default Sidebar;
