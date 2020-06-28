import React, { Children } from "react";

export interface IMenuTabTitle {
  title: string;
  target: string;
  isStatic?: boolean;
  active?: boolean;
}
export class MenuTabTitle extends React.Component<IMenuTabTitle, any> {
  render() {
    // @ts-ignore
    const { title, target, isStatic, active } = this.props;
    return (
      <li className={`${active ? "active" : ""} ${isStatic ? "static" : ""}`}>
        <a href={`#${target}`}>{title}</a>
      </li>
    );
  }
}

export class MenuTab extends React.Component<
  {
    title: IMenuTabTitle;
  },
  any
> {
  static defaultProps = {
    static: false,
  };
  render() {
    return null;
  }
}

export class Menu extends React.Component<any, any> {
  render() {
    const { children } = this.props;
    let childrens: MenuTab[] = children as MenuTab[];

    if (!Array.isArray(children)) childrens = [children] as MenuTab[];

    const tabsTitles: JSX.Element[] = childrens.map(
      (tab: MenuTab): JSX.Element => {
        return <MenuTabTitle {...tab.props.title}></MenuTabTitle>;
      }
    );
    const tabSections: React.ReactNode[] = childrens.map(
      (tab: MenuTab) => tab.props.children
    );

    console.log(tabsTitles, tabSections);

    return (
      <nav data-role="ribbonmenu">
        <ul className="tabs-holder">{tabsTitles}</ul>
        <div className="content-holder">{tabSections}</div>
      </nav>
    );
  }
}

export class MenuTabSection extends React.Component<any, { id: string }> {
  render() {
    const { id, children } = this.props;
    return (
      <div className="section" id={id}>
        {children}
      </div>
    );
  }
}

export class MenuTabSectionGroup extends React.Component<any, { id: string }> {
  render() {
    const { children } = this.props;
    return <div className="group">{children}</div>;
  }
}

export enum RibbonButtonType {
  default = "button",
  tool = "tool-button",
  split = "split-button",
}
export class MenuTabSectionGroupRibbonButton extends React.Component<
  {
    divider?: boolean;
    dropdown?: JSX.Element;
    caption?: string;
    type?: RibbonButtonType;
    main?: boolean;
  },
  any
> {
  static defaultProps = {
    divider: false,
    dropdown: null,
    type: RibbonButtonType.default,
    main: false,
  };
  render() {
    const { children, divider, dropdown, caption, type, main } = this.props;

    let contents = (
      <>
        <button
          className={`ribbon-${!main ? type : "main"} ${
            dropdown && !main ? "dropdown-toggle" : ""
          }`}
        >
          {children}
          {caption && !main ? <span className="caption">{caption}</span> : null}
        </button>
        {caption && main ? (
          <span
            className={`${
              main && RibbonButtonType.split ? "ribbon-split" : ""
            } ${main && dropdown ? "dropdown-toggle" : ""}`}
          >
            {caption}
          </span>
        ) : null}
        {this.props.dropdown}
      </>
    );
    if (main) {
      contents = (
        <div className={`${main ? "ribbon-" + type : ""}`}>{contents}</div>
      );
    }
    return [
      dropdown ? <div>{contents}</div> : contents,

      divider ? <div className="group-divider"></div> : null,
    ];
  }
}
