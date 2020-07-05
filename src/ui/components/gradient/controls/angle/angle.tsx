import React, { useEffect, useRef } from "react";
import "./angle.styles.css";

const AngleSelectorControl = (props: {
  onSelect?: (angle: number) => void;
  onChange?: (angle: number) => void;
}) => {
  const [baseRef, dialRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const log = useRef<HTMLSpanElement>(null);
  let value = 0;
  useEffect(() => {
    const base = baseRef.current,
      dial = dialRef.current;
    if (!dial || !base) return;
    let clicked = false;
    dial.onmousedown = (e: MouseEvent) => {
      dial.style.cursor = "grabbing";
      dial.classList.add("selected");
      clicked = true;
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    dial.onmouseup = (e: MouseEvent) => {
      clicked = false;
      dial.style.cursor = "pointer";
      e.preventDefault();
      e.stopImmediatePropagation();
      dial.classList.remove("selected");
      props.onSelect && props.onSelect(value);
    };

    base.onmousemove = (e) => {
      if (!clicked) return;
      const rect = base.getBoundingClientRect();
      const x0 = rect.width / 2,
        y0 = rect.height / 2;
      const x = e.clientX,
        y = e.clientY;

      const deltaX = x - x0,
        deltaY = y - y0;
      // console.log(deltaX, deltaY);
      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      dial && (dial.style.transform = `rotate(${angle + 90}deg)`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      value = angle + 180;
      props.onChange && props.onChange(value);
      log.current &&
        (log.current.innerText =
          `x:${deltaX} y: ${deltaY} deg:` + String(value));
    };
  });

  return (
    <>
      <div className="angle" ref={baseRef}>
        <div className="dialer">
          <div className="wrap">
            <span className="base"></span>
            <span className="dial" ref={dialRef}></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <span ref={log}></span>
    </>
  );
};

export default AngleSelectorControl;
