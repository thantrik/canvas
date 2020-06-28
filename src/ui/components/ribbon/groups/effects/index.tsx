import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "effects-menu", title: "Effects" };

export const EffectsMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
