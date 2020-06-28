import React from "react";
import { Menu } from "./tabs";
import { FileMenu } from "./groups/file";
import { EditMenu } from "./groups/edit";
import { EffectsMenu } from "./groups/effects";
import { FilterMenu } from "./groups/filter";
import { GradientMenu } from "./groups/gradient";
import { TransitionMenu } from "./groups/transition";
import { ToolsMenu } from "./groups/tools";
import { ViewMenu } from "./groups/view";

export default class extends React.Component {
  render() {
    return (
      <Menu>
        {FileMenu()}
        {EditMenu()}
        {ToolsMenu()}
        {EffectsMenu()}
        {FilterMenu()}
        {GradientMenu()}
        {TransitionMenu()}
        {ViewMenu()}
      </Menu>
    );
  }
}
