import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/app";
import GradientControl from "./ui/components/gradient";
import { AngleSelectorControl } from "./ui/components/gradient/controls/angle";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GradientControl /> */}
    <AngleSelectorControl
      onChange={console.log}
      onSelect={console.log}
    ></AngleSelectorControl>
  </React.StrictMode>,
  document.getElementById("root")
);
