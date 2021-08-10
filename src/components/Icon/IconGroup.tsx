import React, { FC } from "react";
import classNames from "classnames";
import Icon, { IconProps } from "./index";

type IconGroupProps = {
  icons: IconProps[];
} & Omit<IconProps, "name">;

const IconGroup: FC<IconGroupProps> = ({ icons, ...rest }) => {
  return (
    <div className="flex -space-x-4">
      {icons.map((icon, index) => {
        const config = { ...rest, ...icon };
        return (
          <div
            key={config.name + index}
            className="okd-relative okd-justify-center okd-items-center okd-inline-flex okd-overflow-hidden okd-bg-white okd-border okd-border-gray-200 okd-rounded-full okd-shadow-sm dark:okd-border-gray-700"
          >
            <Icon
              className={classNames(
                "okd-p-2 okd-text-gray-300 dark:okd-text-gray-400",
                config.className
              )}
              {...config}
            />
          </div>
        );
      })}
    </div>
  );
};

export default IconGroup;
