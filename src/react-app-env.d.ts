/// <reference types="react-scripts" />

declare module "@download/blockies" {
  type RenderIcon = (params: { seed: string }, canvas: HTMLCanvasElement | null) => {};
  export const renderIcon: RenderIcon;
}