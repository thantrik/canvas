import React from "react";
import {
  MenuTab,
  MenuTabSection,
  MenuTabSectionGroup,
  MenuTabSectionGroupRibbonButton,
  RibbonButtonType,
} from "../../tabs";
import share from "../../../../assets/share.svg";

const strings = { id: "edit-menu", title: "Edit" };

const SettingsOptions = (
  <ul className="ribbon-dropdown" data-role="dropdown" data-duration="100">
    <li className="checked">
      <a href="#">Modification</a>
    </li>
    <li className="checked">
      <a href="#">Type</a>
    </li>
    <li className="checked">
      <a href="#">Size</a>
    </li>
    <li>
      <a href="#">Creating</a>
    </li>
    <li>
      <a href="#">Authors</a>
    </li>
    <li className="checked-one">
      <a href="#">Tags</a>
    </li>
    <li>
      <a href="#">Names</a>
    </li>
    <li className="divider"></li>
    <li>
      <a href="#">Columns...</a>
    </li>
  </ul>
);
const Settings = (
  <MenuTabSectionGroupRibbonButton
    divider={false}
    caption="Options"
    dropdown={SettingsOptions}
    type={RibbonButtonType.split}
    main={true}
  >
    <span className="icon">
      <span className="mif-cogs"></span>
    </span>
  </MenuTabSectionGroupRibbonButton>
);

const FontEdit = (
  <div
    className="ribbon-toggle-group button-group"
    data-role-buttongroup="true"
    data-role="buttongroup"
    style={{ width: 188 }}
  >
    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-list"></span>
      </span>
      <span className="caption">List</span>
    </button>

    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-apps"></span>
      </span>
      <span className="caption">Content</span>
    </button>

    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-table"></span>
      </span>
      <span className="caption">Icons</span>
    </button>

    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-image"></span>
      </span>
      <span className="caption">Small icons</span>
    </button>

    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-images"></span>
      </span>
      <span className="caption">Large icons</span>
    </button>

    <button className="ribbon-icon-button">
      <span className="icon">
        <span className="mif-windows"></span>
      </span>
      <span className="caption">Tiles</span>
    </button>
  </div>
);

export const EditMenu = () => (
  <MenuTab
    title={{
      title: strings.title,
      target: strings.id,
    }}
  >
    <MenuTabSection key={strings.id} id={strings.id}>
      <MenuTabSectionGroup key={`${strings.id}-0`}>
        <MenuTabSectionGroupRibbonButton divider={true} caption="Share">
          <span className="icon">
            <img src={share} alt={""} />
          </span>
        </MenuTabSectionGroupRibbonButton>
        <MenuTabSectionGroupRibbonButton
          divider={false}
          caption="Compress"
          dropdown={
            <ul
              className="ribbon-dropdown"
              data-role="dropdown"
              data-duration="100"
            >
              <li className="checked">
                <a href="#">Modification</a>
              </li>
              <li className="checked">
                <a href="#">Type</a>
              </li>
              <li className="checked">
                <a href="#">Size</a>
              </li>
              <li>
                <a href="#">Creating</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
              <li className="checked-one">
                <a href="#">Tags</a>
              </li>
              <li>
                <a href="#">Names</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">Columns...</a>
              </li>
            </ul>
          }
        >
          <span className="icon">
            <span className="mif-file-zip fg-cyan"></span>
          </span>
        </MenuTabSectionGroupRibbonButton>
        <div className="pl-1 pr-1 d-flex flex-column">
          <div className="pl-1 pr-1 d-flex flex-row">
            <MenuTabSectionGroupRibbonButton type={RibbonButtonType.tool}>
              <span className="mif-undo fg-blue"></span>
            </MenuTabSectionGroupRibbonButton>
            <MenuTabSectionGroupRibbonButton type={RibbonButtonType.tool}>
              <span className="mif-redo fg-blue"></span>
            </MenuTabSectionGroupRibbonButton>
          </div>
          <div className="pl-1 pr-1 d-flex flex-row">
            <div>
              <MenuTabSectionGroupRibbonButton
                type={RibbonButtonType.tool}
                dropdown={
                  <ul
                    className="ribbon-dropdown"
                    data-role="dropdown"
                    data-duration="100"
                  >
                    <li className="checked">
                      <a href="#">Modification</a>
                    </li>
                    <li className="checked">
                      <a href="#">Type</a>
                    </li>
                    <li className="checked">
                      <a href="#">Size</a>
                    </li>
                    <li>
                      <a href="#">Creating</a>
                    </li>
                    <li>
                      <a href="#">Authors</a>
                    </li>
                    <li className="checked-one">
                      <a href="#">Tags</a>
                    </li>
                    <li>
                      <a href="#">Names</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">Columns...</a>
                    </li>
                  </ul>
                }
              >
                <span className="mif-alarm fg-red"></span>
              </MenuTabSectionGroupRibbonButton>
            </div>
            <MenuTabSectionGroupRibbonButton type={RibbonButtonType.tool}>
              <span className="mif-layers-clear fg-red"></span>
            </MenuTabSectionGroupRibbonButton>
          </div>
        </div>
        {Settings}
        {FontEdit}
        <span className="title">Edit controls</span>
      </MenuTabSectionGroup>
    </MenuTabSection>
  </MenuTab>
);
