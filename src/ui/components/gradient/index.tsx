import React, { useState, useRef } from "react";
import GradientStop from "./GradientStop";
import { IPixel, Position } from "./types";
import GradientBar from "./gradient-bar";
// import styled from "styled-components";
//import { debounce } from "lodash";

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
      <GradientBar
        onClick={selectColor}
        onMouseMove={selectedMovingPixel}
      ></GradientBar>
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
