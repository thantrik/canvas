import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "transition-menu", title: "transition" };

export const TransitionMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
