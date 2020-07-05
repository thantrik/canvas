import React, { useEffect, useRef } from "react";
import "./clock.styles.css";

const MoveDials = (h: HTMLDivElement, m: HTMLDivElement, s: HTMLDivElement) => {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  h && (h.style.transform = `rotate(${hour}deg)`);
  m && (m.style.transform = `rotate(${minute}deg)`);
  s && (s.style.transform = `rotate(${second}deg)`);
};

const Clock = () => {
  const [hRef, mRef, sRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  useEffect(() => {
    var inc = 1000;
    const h = hRef.current,
      m = mRef.current,
      s = sRef.current;
    if (h && m && s) {
      MoveDials(h, m, s);
      setInterval(() => {
        MoveDials(h, m, s);
      }, inc);
    }
  });
  return (
    <div className="angle">
      <div className="clock">
        <div className="wrap">
          <span className="hour" ref={hRef}></span>
          <span className="minute" ref={mRef}></span>
          <span className="second" ref={sRef}></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
