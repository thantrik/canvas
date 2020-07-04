import React, { useState, useRef, useEffect } from "react";
import { IPixel, StopPosition } from "./types";

const GradientBarPanel = (props: {
  onClick: (p: IPixel) => void;
  onMouseMove: (p: IPixel) => void;
  stops: StopPosition[];
  radial: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    onClick,
    onMouseMove,
    stops = [
      { position: 0.1, color: "black" },
      { position: 0.5, color: "white" },
      { position: 1, color: "yellow" },
    ] as StopPosition[],
    radial = 0,
  } = props;

  const [pixel, setPixel] = useState({
    x: 0,
    y: 0,
    data: new Uint8ClampedArray([0, 0, 0, 0]),
    hex: "#000000",
  });
  const toHex = (
    v: Uint8ClampedArray = new Uint8ClampedArray([0, 0, 0, 0])
  ) => {
    const toString = (n: number) =>
      n < 16 ? `0${n.toString(16)}` : n.toString(16);
    return `#${toString(v[0])}${toString(v[1])}${toString(v[2])}`;
  };
  const selectPixel = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    cb: Function
  ) => {
    var rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    const canvas = (canvasRef.current as unknown) as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    const data =
      ctx?.getImageData(x, y, 1, 1).data || new Uint8ClampedArray([0, 0, 0, 0]);
    if (ctx) {
      const pixel: IPixel = { x, y, data: data, hex: toHex(data) };
      setPixel(pixel);
      cb && cb(pixel);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = (canvasRef.current as unknown) as HTMLCanvasElement;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (!ctx) return;
      ctx.canvas.width = canvas.clientWidth;
      ctx.canvas.height = canvas.clientHeight;
      var grd = ctx.createLinearGradient(0, 0, canvas.width, 0);

      // const stopW = canvas.clientWidth / stops.length;
      // const stopPoint = stopW / canvas.clientWidth;
      stops.forEach((stop, index) =>
        grd.addColorStop(stop.position, stop.color)
      );
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      onClick={(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
        selectPixel(e, onClick)
      }
      onMouseMove={(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
        selectPixel(e, onMouseMove)
      }
      style={{
        width: "100%",
        height: "20px",
      }}
    ></canvas>
  );
};

export default GradientBarPanel;
