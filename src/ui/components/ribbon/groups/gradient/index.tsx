import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "gradient-menu", title: "Gradient" };

export const GradientMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
