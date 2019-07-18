import React from "react";
import "../Nav/ToolBar.css";
import { NavLink } from "react-router-dom";



export default function DrawerItems({
  logo,
  btn,
  title,
  onClick,
  onClick1,
  droplogo,
  route
}) {
  return (
    <div className="DrawerItems">
      <img alt={""} drawer items logo src={logo} />
      <button className={btn} onClick={onClick}>
        <NavLink to={route} className="navlinkbtn" onClick={onClick1}>
          {title}
        </NavLink>
      </button>
      <img alt={""} src={droplogo} className="img-droplogo" />
    </div>
  );
}
