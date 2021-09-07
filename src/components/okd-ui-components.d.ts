declare module "@download/blockies" {
  type RenderIcon = (params: { seed: string }, canvas: HTMLCanvasElement | null) => {};
  export const renderIcon: RenderIcon;
}

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

declare module '*.png' {
  const content: StaticImageData

  export default content
}

declare module '*.jpg' {
  const content: StaticImageData

  export default content
}

declare module '*.jpeg' {
  const content: StaticImageData

  export default content
}

declare module '*.gif' {
  const content: StaticImageData

  export default content
}

declare module '*.webp' {
  const content: StaticImageData

  export default content
}

declare module '*.ico' {
  const content: StaticImageData

  export default content
}

declare module '*.bmp' {
  const content: StaticImageData

  export default content
}

/** for isMobile detector */
declare var opera: string;

type CommonWeb3InjectorObject = {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
  switchProvider?: (provider: string) => void;
}

type Web3InjectorObject = {
  isMetaMask?: boolean;
  isOneKey?: boolean;
} & CommonWeb3InjectorObject;

type OneKeyWeb3InjectorObject = CommonWeb3InjectorObject;

declare var ethereum: Web3InjectorObject | undefined;
declare var web3: Web3InjectorObject | undefined;
declare var onekey: OneKeyWeb3InjectorObject | undefined;