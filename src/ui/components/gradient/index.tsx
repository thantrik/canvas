import React, { useState, useRef, useEffect } from "react";
import GradientStop from "./GradientStop";
import { IPixel, Position } from "./types";
// import styled from "styled-components";
// import { debounce } from "lodash";

const ColorBarPanel = (props: any) => {
  const canvasRef = useRef();

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
  const selectPixel = (e: MouseEvent, cb: Function) => {
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

      const stopW = canvas.clientWidth / 8;
      const stopPoint = stopW / canvas.clientWidth;
      grd.addColorStop(0, "violet");
      grd.addColorStop(1 * stopPoint, "indigo");
      grd.addColorStop(2 * stopPoint, "blue");
      grd.addColorStop(3 * stopPoint, "green");
      grd.addColorStop(4 * stopPoint, "yellow");
      grd.addColorStop(5 * stopPoint, "orange");
      grd.addColorStop(6 * stopPoint, "red");
      grd.addColorStop(7 * stopPoint, "purple");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
    }
  });

  return (
    <>
      <canvas
        {...props}
        onClick={(e: MouseEvent) => selectPixel(e, props.onClick)}
        onMouseMove={(e: MouseEvent) => selectPixel(e, props.onMouseMove)}
        ref={canvasRef}
        style={{
          width: "100%",
          height: "20px",
        }}
      ></canvas>
    </>
  );
};

export const ColorBar = (props: any) => {
  return <ColorBarPanel {...props}></ColorBarPanel>;
};

const GradientControl = (props: any) => {
  const defaultPixel = {
    x: 0,
    y: 0,
    data: new Uint8ClampedArray([0, 0, 0, 0]),
    hex: "#FFFFFF",
  };
  const [selectedPixel, setSelectedPixel] = useState(defaultPixel);
  const [movingPixel, selectedMovingPixel] = useState(defaultPixel);
  const colorRef = useRef<HTMLInputElement>(null);
  // const currStop = useRef<typeof GradientStop>(null);

  const selectColor = (pixel: IPixel) => {
    setSelectedPixel(pixel);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: 15,
        }}
      >
        <GradientStop
          pixel={movingPixel}
          position={Position.TOP}
        ></GradientStop>
      </div>
      <ColorBar
        onClick={selectColor}
        onMouseMove={selectedMovingPixel}
      ></ColorBar>
      <div
        style={{
          width: "100%",
          height: 15,
        }}
      >
        <GradientStop
          pixel={movingPixel}
          position={Position.BOTTOM}
        ></GradientStop>
      </div>
      <input
        style={{
          backgroundColor: selectedPixel.hex,
          border: "none",
          borderRadius: 25,
          width: 25,
          height: 25,
          cursor: "pointer",
        }}
        type="color"
        name="color"
        id="color"
        ref={colorRef}
        value={selectedPixel.hex}
      ></input>
    </div>
  );
};

export default GradientControl;
