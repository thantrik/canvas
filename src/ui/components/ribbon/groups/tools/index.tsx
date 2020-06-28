import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "tools-menu", title: "Tools" };

export const ToolsMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
