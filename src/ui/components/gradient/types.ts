export interface IPixel {
  x: number;
  y: number;
  data: Uint8ClampedArray;
  hex: string;
}

export enum Position {
  TOP = "top",
  BOTTOM = "bottom",
}

export interface StopPosition {
  position: number;
  color: string;
}
