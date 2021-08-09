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
            className="relative justify-center items-center inline-flex overflow-hidden bg-white border border-gray-200 rounded-full shadow-sm dark:border-gray-700"
          >
            <Icon
              className={classNames(
                "p-2 text-gray-300 dark:text-gray-400",
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
