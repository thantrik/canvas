import React from "react";
import { AdvanceMenu } from "./AdvanceMenu";

const Menu = () => (
  <div>
    <nav data-role="ribbonmenu">
      <ul class="tabs-holder">
        <li class="static">
          <a href="#">File</a>
        </li>
        <li>
          <a href="#section_main">Main</a>
        </li>
        <li>
          <a href="#section_buttons">Buttons</a>
        </li>
        <li>
          <a href="#section_inputs">Inputs</a>
        </li>
      </ul>

      <div class="content-holder">
        <div class="section" id="section_main">
          <div class="group">
            <button class="ribbon-button">
              <span class="icon">
                <img src="images/share.svg" />
              </span>
              <span class="caption">Share</span>
            </button>
            <button class="ribbon-button">
              <span class="icon">
                <img src="images/email.svg" />
              </span>
              <span class="caption">Email</span>
            </button>

            <div>
              <button class="ribbon-button dropdown-toggle">
                <span class="icon">
                  <span class="mif-file-zip fg-cyan"></span>
                </span>
                <span class="caption">Compress</span>
              </button>
              <ul
                class="ribbon-dropdown"
                data-role="dropdown"
                data-duration="100"
              >
                <li class="checked">
                  <a href="#">Modification</a>
                </li>
                <li class="checked">
                  <a href="#">Type</a>
                </li>
                <li class="checked">
                  <a href="#">Size</a>
                </li>
                <li>
                  <a href="#">Creating</a>
                </li>
                <li>
                  <a href="#">Authors</a>
                </li>
                <li class="checked-one">
                  <a href="#">Tags</a>
                </li>
                <li>
                  <a href="#">Names</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Columns...</a>
                </li>
              </ul>
            </div>

            <div class="group-divider"></div>

            <div class="pl-1 pr-1 d-flex flex-column">
              <button class="ribbon-tool-button">
                <img src="images/location.png" />
              </button>
              <div>
                <button class="ribbon-tool-button dropdown-toggle">
                  <span class="mif-alarm fg-red"></span>
                </button>
                <ul
                  class="ribbon-dropdown"
                  data-role="dropdown"
                  data-duration="100"
                >
                  <li class="checked">
                    <a href="#">Modification</a>
                  </li>
                  <li class="checked">
                    <a href="#">Type</a>
                  </li>
                  <li class="checked">
                    <a href="#">Size</a>
                  </li>
                  <li>
                    <a href="#">Creating</a>
                  </li>
                  <li>
                    <a href="#">Authors</a>
                  </li>
                  <li class="checked-one">
                    <a href="#">Tags</a>
                  </li>
                  <li>
                    <a href="#">Names</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Columns...</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group-divider"></div>

            <div class="ribbon-split-button">
              <button class="ribbon-main">
                <span class="icon">
                  <span class="mif-cogs"></span>
                </span>
              </button>
              <span class="ribbon-split dropdown-toggle">Options</span>
              <ul
                class="ribbon-dropdown"
                data-role="dropdown"
                data-duration="100"
              >
                <li class="checked">
                  <a href="#">Modification</a>
                </li>
                <li class="checked">
                  <a href="#">Type</a>
                </li>
                <li class="checked">
                  <a href="#">Size</a>
                </li>
                <li>
                  <a href="#">Creating</a>
                </li>
                <li>
                  <a href="#">Authors</a>
                </li>
                <li class="checked-one">
                  <a href="#">Tags</a>
                </li>
                <li>
                  <a href="#">Names</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Columns...</a>
                </li>
              </ul>
            </div>

            <div class="group-divider"></div>

            <div class="d-flex flex-column">
              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-apple"></span>
                </span>
                <span class="caption">Apple</span>
              </button>

              <div>
                <button class="ribbon-icon-button dropdown-toggle">
                  <span class="icon">
                    <span class="mif-apps"></span>
                  </span>
                  <span class="caption">Apps</span>
                </button>
                <ul class="ribbon-dropdown" data-role="dropdown">
                  <li class="checked">
                    <a href="#">Modification</a>
                  </li>
                  <li class="checked">
                    <a href="#">Type</a>
                  </li>
                  <li class="checked">
                    <a href="#">Size</a>
                  </li>
                  <li>
                    <a href="#">Creating</a>
                  </li>
                  <li>
                    <a href="#">Authors</a>
                  </li>
                  <li class="checked-one">
                    <a href="#">Tags</a>
                  </li>
                  <li>
                    <a href="#">Names</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#" class="dropdown-toggle">
                      Columns...
                    </a>
                    <ul
                      class="ribbon-dropdown"
                      data-role="dropdown"
                      data-role-dropdown="true"
                      style={{ display: "none" }}
                    >
                      <li>
                        <a href="#">Creating</a>
                      </li>
                      <li>
                        <a href="#">Authors</a>
                      </li>
                      <li>
                        <a href="#">Names</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="ribbon-toggle-group button-group"
              data-role-buttongroup="true"
              data-role="buttongroup"
              style={{ width: 188 }}
            >
              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-list"></span>
                </span>
                <span class="caption">List</span>
              </button>

              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-apps"></span>
                </span>
                <span class="caption">Content</span>
              </button>

              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-table"></span>
                </span>
                <span class="caption">Icons</span>
              </button>

              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-image"></span>
                </span>
                <span class="caption">Small icons</span>
              </button>

              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-images"></span>
                </span>
                <span class="caption">Large icons</span>
              </button>

              <button class="ribbon-icon-button">
                <span class="icon">
                  <span class="mif-windows"></span>
                </span>
                <span class="caption">Tiles</span>
              </button>
            </div>

            <span class="title">ribbon controls</span>
          </div>
          <div class="group">
            <div data-role="buttonsGroup" data-cls-active="active">
              <button class="ribbon-button">
                <span class="icon">
                  <span class="mif-vertical-align-top"></span>
                </span>
                <span class="caption">Top</span>
              </button>
              <button class="ribbon-button">
                <span class="icon">
                  <span class="mif-vertical-align-center"></span>
                </span>
                <span class="caption">Center</span>
              </button>
              <button class="ribbon-button">
                <span class="icon">
                  <span class="mif-vertical-align-bottom"></span>
                </span>
                <span class="caption">Bottom</span>
              </button>
            </div>

            <span class="title">Role group</span>
          </div>
        </div>

        <div class="section" id="section_buttons">
          <div class="group flex-column">
            <button class="button">Button</button>
            <button class="button primary">Button</button>

            <span class="title">Buttons</span>
          </div>
          <div class="group flex-column">
            <div class="toolbar">
              <button class="tool-button">
                <span class="mif-floppy-disk"></span>
              </button>
              <button class="tool-button">
                <img src="images/checkmark.png" />
              </button>
              <button class="tool-button text-button">Open</button>
            </div>
            <div class="toolbar mt-1">
              <button class="tool-button primary">
                <span class="mif-floppy-disk"></span>
              </button>
              <button class="tool-button info">
                <span class="mif-printer"></span>
              </button>
              <button class="tool-button success text-button">Open</button>
            </div>

            <span class="title">Tool bars</span>
          </div>
          <div class="group">
            <button class="shortcut">
              <span class="caption">Rocket</span>
              <span class="mif-rocket icon"></span>
            </button>
            <button class="shortcut primary">
              <span class="tag">10</span>
              <span class="caption">Rocket</span>
              <span class="mif-rocket icon"></span>
            </button>
            <button class="shortcut secondary outline">
              <span class="tag">10</span>
              <span class="caption">Rocket</span>
              <span class="mif-rocket icon"></span>
            </button>

            <span class="title">Shortcuts</span>
          </div>
          <div class="group">
            <span class="title">All others...</span>
          </div>
        </div>

        <div class="section" id="section_inputs">
          <div class="group flex-column" style={{ width: 220 }}>
            <div class="input">
              <input
                data-role="input"
                data-prepend="<span class='mif-envelop'>"
                data-role-input="true"
                type="text"
                class=""
              ></input>
              <div class="button-group">
                <button
                  class="button input-clear-button"
                  tabindex="-1"
                  type="button"
                >
                  <span class="default-icon-cross"></span>
                </button>
              </div>
              <div class="prepend">
                <span class="mif-envelop"></span>
              </div>
            </div>
            <div class="input">
              <input
                data-role="input"
                data-prepend="<span class='mif-user'>"
                data-role-input="true"
                type="text"
                class=""
              ></input>
              <div class="button-group">
                <button
                  class="button input-clear-button"
                  tabindex="-1"
                  type="button"
                >
                  <span class="default-icon-cross"></span>
                </button>
              </div>
              <div class="prepend">
                <span class="mif-user"></span>
              </div>
            </div>
            <span class="title">Input</span>
          </div>
          <div class="group" style={{ width: 220 }}>
            <div class="textarea flex-self-stretch autosize no-scroll-vertical">
              <textarea
                data-role="textarea"
                class=""
                data-role-textarea="true"
                style={{ height: 0 }}
              ></textarea>
              <textarea class="fake-textarea" style={{ height: 0 }}></textarea>
              <button
                class="button input-clear-button"
                tabindex="-1"
                type="button"
              >
                <span class="default-icon-cross"></span>
              </button>
            </div>
            <span class="title">Textarea</span>
          </div>
          <div class="group flex-column" style={{ width: 220 }}>
            <label
              class="select input-normal"
              id="select-1593274239148224"
              for="select-focus-trigger-1593274239148192"
            >
              <span class="dropdown-toggle"></span>
              <select data-role="select" data-role-select="true">
                <option value="1">Value 1</option>
                <option value="2">Value 2</option>
                <option value="3">Value 3</option>
              </select>
              <div class="button-group d-none"></div>
              <input
                type="checkbox"
                class="select-focus-trigger"
                id="select-focus-trigger-1593274239148192"
              ></input>
              <div class="select-input" name="__select-1593274239148224__">
                Value 1
              </div>
              <div
                class="drop-container"
                data-role-dropdown="true"
                data-role="dropdown"
                style={{ display: "none" }}
              >
                <div>
                  <div class="input">
                    <input
                      type="text"
                      data-role="input"
                      placeholder=""
                      data-role-input="true"
                      class=""
                    ></input>
                    <div class="button-group">
                      <button
                        class="button input-clear-button"
                        tabindex="-1"
                        type="button"
                      >
                        <span class="default-icon-cross"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <ul class="option-list" style={{ maxHeight: 200 }}>
                  <li data-text="Value 1" data-value="1" class="active">
                    <a>Value 1</a>
                  </li>
                  <li data-text="Value 2" data-value="2">
                    <a>Value 2</a>
                  </li>
                  <li data-text="Value 3" data-value="3">
                    <a>Value 3</a>
                  </li>
                </ul>
              </div>
            </label>
            <span class="title">Select</span>
          </div>
          <div class="group flex-column" style={{ width: 220 }}>
            <div>
              <label
                class="checkbox transition-on"
                for="checkbox-1593274239160429"
              >
                <input
                  name="c1"
                  type="checkbox"
                  data-role="checkbox"
                  data-caption="check it"
                  data-role-checkbox="true"
                  id="checkbox-1593274239160429"
                  class=""
                ></input>
                <span class="check"></span>
                <span class="caption">check it</span>
              </label>
            </div>
            <div>
              <label class="radio transition-on">
                <input
                  name="r1"
                  type="radio"
                  data-role="radio"
                  data-caption="A"
                  data-role-radio="true"
                  class=""
                ></input>
                <span class="check"></span>
                <span class="caption">A</span>
              </label>
              <label class="radio transition-on">
                <input
                  name="r1"
                  type="radio"
                  data-role="radio"
                  data-caption="B"
                  data-role-radio="true"
                  class=""
                ></input>
                <span class="check"></span>
                <span class="caption">B</span>
              </label>
              <label class="radio transition-on">
                <input
                  name="r1"
                  type="radio"
                  data-role="radio"
                  data-caption="C"
                  data-role-radio="true"
                  class=""
                ></input>
                <span class="check"></span>
                <span class="caption">C</span>
              </label>
            </div>
            <div>
              <label class="switch transition-on">
                <input
                  name="c2"
                  type="checkbox"
                  data-role="switch"
                  data-caption="check it"
                  data-role-switch="true"
                  class=""
                ></input>
                <span class="check"></span>
                <span class="caption">check it</span>
              </label>
            </div>
            <span class="title">Switches</span>
          </div>
        </div>
      </div>
    </nav>

    <AdvanceMenu></AdvanceMenu>
  </div>
);

export { Menu };
