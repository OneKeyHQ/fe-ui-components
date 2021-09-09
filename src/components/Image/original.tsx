import React from "react";
import toBase64 from "./to-base-64";
import useIntersection from "./use-intersection";

export const VALID_LOADERS = ["default", "quniu"] as const;

export type LoaderValue = typeof VALID_LOADERS[number];

export type ImageConfig = {
  deviceSizes: number[];
  imageSizes: number[];
  loader: LoaderValue;
  path: string;
  domains?: string[];
  disableStaticImages?: boolean;
  minimumCacheTTL?: number;
};

export const imageConfigDefault: ImageConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: "/public/image",
  loader: "default",
  domains: [],
  disableStaticImages: false,
  minimumCacheTTL: 60,
};

const loadedImageURLs = new Set<string>();

const VALID_LOADING_VALUES = ["lazy", "eager", undefined] as const;
type LoadingValue = typeof VALID_LOADING_VALUES[number];

export type ImageLoader = (resolverProps: ImageLoaderProps) => string;

export type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

type DefaultImageLoaderProps = ImageLoaderProps & { root: string };

const loaders = new Map<
  LoaderValue,
  (props: DefaultImageLoaderProps) => string
>([["default", defaultLoader]]);

const VALID_LAYOUT_VALUES = [
  "fill",
  "fixed",
  "intrinsic",
  "responsive",
  undefined,
] as const;
type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

type PlaceholderValue = "blur" | "empty";

type OnLoadingComplete = (result: {
  naturalWidth: number;
  naturalHeight: number;
}) => void;

type ImgElementStyle = NonNullable<JSX.IntrinsicElements["img"]["style"]>;

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;

function isStaticRequire(
  src: StaticRequire | StaticImageData
): src is StaticRequire {
  return (src as StaticRequire).default !== undefined;
}

function isStaticImageData(
  src: StaticRequire | StaticImageData
): src is StaticImageData {
  return (src as StaticImageData).src !== undefined;
}

function isStaticImport(src: string | StaticImport): src is StaticImport {
  return (
    typeof src === "object" &&
    (isStaticRequire(src as StaticImport) ||
      isStaticImageData(src as StaticImport))
  );
}

export type ImageProps = Omit<
  JSX.IntrinsicElements["img"],
  "src" | "srcSet" | "ref" | "width" | "height" | "loading" | "style"
> & {
  /**
   * 图片地址或是模块引入结果
   */
  src: string | StaticImport;
  /**
   * 图片宽度
   */
  width?: number | string;
  /**
   * 图片高度
   */
  height?: number | string;
  /**
   * 图片展示类型
   */
  layout?: LayoutValue;
  loader?: ImageLoader;
  quality?: number | string;
  loading?: LoadingValue;
  lazyBoundary?: string;
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  unoptimized?: boolean;
  objectFit?: ImgElementStyle["objectFit"];
  objectPosition?: ImgElementStyle["objectPosition"];
  onLoadingComplete?: OnLoadingComplete;
};

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
} = imageConfigDefault;
// sort smallest to largest
const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(
  width: number | undefined,
  layout: LayoutValue,
  sizes: string | undefined
): { widths: number[]; kind: "w" | "x" } {
  if (sizes && (layout === "fill" || layout === "responsive")) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];
    for (let match; (match = viewportWidthRe.exec(sizes)); match) {
      percentSizes.push(parseInt(match[2]));
    }
    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(
          (s) => s >= configDeviceSizes[0] * smallestRatio
        ),
        kind: "w",
      };
    }
    return { widths: allSizes, kind: "w" };
  }
  if (
    typeof width !== "number" ||
    layout === "fill" ||
    layout === "responsive"
  ) {
    return { widths: configDeviceSizes, kind: "w" };
  }

  const widths = Array.from(
    new Set(
      // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
      [width, width * 2 /*, width * 3*/].map(
        (w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1]
      )
    )
  );
  return { widths, kind: "x" };
}

type GenImgAttrsData = {
  src: string;
  unoptimized: boolean;
  layout: LayoutValue;
  loader: ImageLoader;
  width?: number;
  quality?: number;
  sizes?: string;
};

type GenImgAttrsResult = {
  src: string;
  srcSet: string | undefined;
  sizes: string | undefined;
};

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader,
}: GenImgAttrsData): GenImgAttrsResult {
  if (unoptimized) {
    return { src, srcSet: undefined, sizes: undefined };
  }

  const { widths, kind } = getWidths(width, layout, sizes);
  const last = widths.length - 1;

  return {
    sizes: !sizes && kind === "w" ? "100vw" : sizes,
    srcSet: widths
      .map(
        (w, i) =>
          `${loader({ src, quality, width: w })} ${
            kind === "w" ? w : i + 1
          }${kind}`
      )
      .join(", "),

    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({ src, quality, width: widths[last] }),
  };
}

function getInt(x: unknown): number | undefined {
  if (typeof x === "number") {
    return x;
  }
  if (typeof x === "string") {
    return parseInt(x, 10);
  }
  return undefined;
}

function defaultImageLoader(loaderProps: ImageLoaderProps) {
  const load = loaders.get(configLoader);
  if (load) {
    return load({ root: configPath, ...loaderProps });
  }
  throw new Error("unknown image loader");
}

// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(
  img: HTMLImageElement | null,
  src: string,
  layout: LayoutValue,
  placeholder: PlaceholderValue,
  onLoadingComplete?: OnLoadingComplete
) {
  if (!img) {
    return;
  }
  const handleLoad = () => {
    if (!img.src.startsWith("data:")) {
      const p = "decode" in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === "blur") {
          img.style.filter = "none";
          img.style.backgroundSize = "none";
          img.style.backgroundImage = "none";
        }
        loadedImageURLs.add(src);
        if (onLoadingComplete) {
          const { naturalWidth, naturalHeight } = img;
          // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.
          onLoadingComplete({ naturalWidth, naturalHeight });
        }
        if (process.env.NODE_ENV !== "production") {
          const parent = img.parentElement?.parentElement?.style;
          if (layout === "responsive" && parent?.display === "flex") {
            console.warn(
              `Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`
            );
          } else if (layout === "fill" && parent?.position !== "relative") {
            console.warn(
              `Image with src "${src}" may not render properly with a parent using position:"${parent?.position}". Consider changing the parent style to position:"relative" with a width and height.`
            );
          }
        }
      });
    }
  };
  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

export default function Image({
  src,
  sizes,
  unoptimized = false,
  loading,
  lazyBoundary = "200px",
  className,
  quality,
  width,
  height,
  objectFit,
  objectPosition,
  onLoadingComplete,
  loader = defaultImageLoader,
  placeholder = "empty",
  blurDataURL,
  ...all
}: ImageProps) {
  let rest: Partial<ImageProps> = all;
  let layout: NonNullable<LayoutValue> = sizes ? "responsive" : "intrinsic";
  if ("layout" in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout;

    // Remove property so it's not spread into image:
    delete rest["layout"];
  }

  let staticSrc = "";
  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(
        `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
          staticImageData
        )}`
      );
    }
    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;
    if (!layout || layout !== "fill") {
      height = height || staticImageData.height;
      width = width || staticImageData.width;
      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(
          `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
            staticImageData
          )}`
        );
      }
    }
  }
  src = typeof src === "string" ? src : staticSrc;

  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  let isLazy = loading === "lazy" || typeof loading === "undefined";
  if (src.startsWith("data:") || src.startsWith("blob:")) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }
  if (typeof window !== "undefined" && loadedImageURLs.has(src)) {
    isLazy = false;
  }

  if (process.env.NODE_ENV !== "production") {
    if (!src) {
      throw new Error(
        `Image is missing required "src" property. Make sure you pass "src" in props to the \`image\` component. Received: ${JSON.stringify(
          { width, height, quality }
        )}`
      );
    }
    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(
        `Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(
          String
        ).join(",")}.`
      );
    }
    if (
      (typeof widthInt !== "undefined" && isNaN(widthInt)) ||
      (typeof heightInt !== "undefined" && isNaN(heightInt))
    ) {
      throw new Error(
        `Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`
      );
    }
    if (layout === "fill" && (width || height)) {
      console.warn(
        `Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`
      );
    }
    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(
        `Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(
          String
        ).join(",")}.`
      );
    }

    if (placeholder === "blur") {
      if (layout !== "fill" && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(
          `Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`
        );
      }
      if (!blurDataURL) {
        const VALID_BLUR_EXT = ["jpeg", "png", "webp"];

        throw new Error(
          `Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(
              ","
            )}
            - Remove the "placeholder" property, effectively no blur effect
          `
        );
      }
    }
    if ("ref" in rest) {
      console.warn(
        `Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`
      );
    }
    if ("style" in rest) {
      console.warn(
        `Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`
      );
    }
    const rand = Math.floor(Math.random() * 1000) + 100;
    if (
      !unoptimized &&
      !loader({ src, width: rand, quality: 75 }).includes(rand.toString())
    ) {
      console.warn(
        `Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.`
      );
    }
  }

  const [setRef, isIntersected] = useIntersection<HTMLImageElement>({
    rootMargin: lazyBoundary,
    disabled: !isLazy,
  });
  const isVisible = !isLazy || isIntersected;

  let wrapperStyle: JSX.IntrinsicElements["div"]["style"] | undefined;
  let sizerStyle: JSX.IntrinsicElements["div"]["style"] | undefined;
  let sizerSvg: string | undefined;
  let imgStyle: ImgElementStyle | undefined = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    boxSizing: "border-box",
    padding: 0,
    border: "none",
    margin: "auto",

    display: "block",
    width: 0,
    height: 0,
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",

    objectFit,
    objectPosition,
  };
  const blurStyle =
    placeholder === "blur"
      ? {
          filter: "blur(20px)",
          backgroundSize: objectFit || "cover",
          backgroundImage: `url("${blurDataURL}")`,
          backgroundPosition: objectPosition || "0% 0%",
        }
      : {};
  if (layout === "fill") {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: "block",
      overflow: "hidden",

      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,

      boxSizing: "border-box",
      margin: 0,
    };
  } else if (
    typeof widthInt !== "undefined" &&
    typeof heightInt !== "undefined"
  ) {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? "100%" : `${quotient * 100}%`;
    if (layout === "responsive") {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: "block",
        overflow: "hidden",
        position: "relative",

        boxSizing: "border-box",
        margin: 0,
      };
      sizerStyle = { display: "block", boxSizing: "border-box", paddingTop };
    } else if (layout === "intrinsic") {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: "inline-block",
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
        margin: 0,
      };
      sizerStyle = {
        boxSizing: "border-box",
        display: "block",
        maxWidth: "100%",
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === "fixed") {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: "hidden",
        boxSizing: "border-box",
        display: "inline-block",
        position: "relative",
        width: widthInt,
        height: heightInt,
      };
    }
  } else {
    // <Image src="i.png" />
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        `Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`
      );
    }
  }

  let imgAttributes: GenImgAttrsResult = {
    src:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    srcSet: undefined,
    sizes: undefined,
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader,
    });
  }

  let srcString: string = src;

  return (
    <div style={wrapperStyle}>
      {sizerStyle ? (
        <div style={sizerStyle}>
          {sizerSvg ? (
            <img
              style={{
                maxWidth: "100%",
                display: "block",
                margin: 0,
                border: "none",
                padding: 0,
              }}
              alt=""
              aria-hidden={true}
              src={`data:image/svg+xml;base64,${toBase64(sizerSvg)}`}
            />
          ) : null}
        </div>
      ) : null}
      <img
        {...rest}
        {...imgAttributes}
        decoding="async"
        data-nimg={layout}
        className={className}
        ref={(img) => {
          setRef(img);
          handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
        }}
        style={{ ...imgStyle, ...blurStyle }}
      />
    </div>
  );
}

function defaultLoader({
  root,
  src,
  width,
  quality,
}: DefaultImageLoaderProps): string {
  if (process.env.NODE_ENV !== "production") {
    const missingValues = [];

    // these should always be provided but make sure they are
    if (!src) missingValues.push("src");
    if (!width) missingValues.push("width");

    if (missingValues.length > 0) {
      throw new Error(
        `Image Optimization requires ${missingValues.join(
          ", "
        )} to be provided. Make sure you pass them as props to the \`<Image />\` component. Received: ${JSON.stringify(
          { src, width, quality }
        )}`
      );
    }

    if (src.startsWith("//")) {
      throw new Error(
        `Failed to parse src "${src}" on \`<Image />\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`
      );
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
