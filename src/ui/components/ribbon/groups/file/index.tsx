import React from "react";
import { MenuTab, MenuTabSection } from "../../tabs";

const strings = { id: "file-menu", title: "File" };
export const FileMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
      isStatic: true,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}></MenuTabSection>
  </MenuTab>
);
