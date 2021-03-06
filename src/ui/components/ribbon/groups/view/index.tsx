import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "view-menu", title: "View" };

export const ViewMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
