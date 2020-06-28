import React from "react";
export const AdvanceMenu = () => (
  <nav data-role="ribbonmenu">
    <ul class="tabs-holder">
      <li class="static">
        <a href="#">Static</a>
      </li>
      <li>
        <a href="#section-one">One</a>
      </li>
      <li>
        <a href="#section-two">Two</a>
      </li>
      <li>
        <a href="#section-three">Three</a>
      </li>
      <ul class="tabs-holder">
        <li>
          <a href="#section-group">Group</a>
        </li>
      </ul>
    </ul>

    <div class="content-holder">
      <div class="section" id="section-one">
        <div class="ribbon-split-button">
          <button class="ribbon-main">
            <span class="icon">
              <span class="mif-cogs"></span>
            </span>
          </button>
          <span class="ribbon-split dropdown-toggle">Options</span>
          <ul class="ribbon-dropdown" data-role="dropdown" data-duration="100">
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
      <div class="section" id="section-two">
        <p class="p-4">Section two</p>
      </div>
      <div class="section" id="section-three">
        <p class="p-4">Section three</p>
      </div>
      <div class="section" id="section-group">
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

        <div class="group">
          <div class="ribbon-toggle-group">
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

          <span class="title">Group class</span>
        </div>
      </div>
    </div>
  </nav>
);
