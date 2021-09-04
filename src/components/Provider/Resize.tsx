import { useCallback, useEffect, useState, FC } from "react";
import { throttle, isNil } from "lodash";
import { screens } from "../utils/tailwind";
import { getNumberFromPxString } from "../utils";
import type { ScreenState } from "./hooks";

const getLayout = (screenWidth: number | null): ScreenState["layout"] => {
  if (isNil(screenWidth)) {
    return "lg";
  }
  // => @media (min-width: 640px) { ... }
  if (screenWidth <= getNumberFromPxString(screens.md)) {
    return "sm";
  }

  // => @media (min-width: 768px) { ... }
  if (screenWidth <= getNumberFromPxString(screens.lg)) {
    return "md";
  }

  // => @media (min-width: 1024px) { ... }
  if (screenWidth <= getNumberFromPxString(screens.xl)) {
    return "lg";
  }

  // => @media (min-width: 1536px) { ... }
  if (screenWidth <= getNumberFromPxString(screens["2xl"])) {
    return "xl";
  }

  if (screenWidth > getNumberFromPxString(screens["2xl"])) {
    return "2xl";
  }

  return "lg";
};

type ResizeProps = {
  setLayout?: (v: ScreenState) => void;
};

const Resize: FC<ResizeProps> = ({ setLayout }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttled = useCallback(
    throttle(
      (size) =>
        setLayout?.({
          screenWidth: size.width,
          screenHeight: size.height,
          layout: getLayout(size.width),
        }),
      300
    ),
    []
  );

  useEffect(() => {
    throttled(size);
  }, [size, throttled]);

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default Resize;
