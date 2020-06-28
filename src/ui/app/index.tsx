import React from "react";
import Menu from "../components/ribbon/menu";
import "metro4/build/css/metro-all.min.css";
import "metro4/build/js/metro";

export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return <Menu></Menu>;
  }
}
