import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "filter-menu", title: "Filters" };

export const FilterMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
