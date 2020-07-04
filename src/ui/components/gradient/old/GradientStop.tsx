import React from "react";
import styled from "styled-components";
import { IPixel, Position } from "./types";

const TopStopper = styled.span`
  display: inline-block;
  width: 8px;
  content: "";
  height: 10px;
  border: none;
  bottom: 8px;
  position: relative;
  background-color: ${(props: any) => props.color};
  cursor: pointer;
  &::after {
        margin-top: 10px;
        width: 0px;
        height: 0px;
        content: "";
        position: absolute;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 7px solid ${(props: any) => props.color};
    }
  }
`;

const BottomStopper = styled(TopStopper)`
  transform: rotate(180deg);
  top: -4px;
`;

TopStopper.defaultProps = BottomStopper.defaultProps = {
  color: "#000000",
};

const GradientStop = (props: { pixel: IPixel; position: Position }) => {
  const { pixel, position = Position.TOP } = props;
  const childProps = {
    style: {
      left: pixel.x ?? 0,
      backgroundColor: pixel.hex,
    },
    color: pixel.hex,
  };
  return position === Position.TOP ? (
    <TopStopper {...childProps}></TopStopper>
  ) : (
    <BottomStopper {...childProps}></BottomStopper>
  );
};

export default GradientStop;
