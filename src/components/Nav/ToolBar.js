import React from "react";
import "./ToolBar.css";
import { NavLink } from "react-router-dom";
import { MenuIcon,Mail } from "../../Assets";

const Toolbar = props => {
  console.log("the value of props is ", props);
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className='col'>
          <button
            className="toolbar_logo_img_button"
            onClick={props.drawerToggle}
          >
            <img
              alt={"open Drawer"}
              src={MenuIcon}
              height={25}
              className="toolbar_logo_img"
            />
          </button>
        </div>
        <div className='col-6'>
          <NavLink className="toolbar_logo" exact to="/home">
            {props.title}
          </NavLink>
        </div>
        <div className='col'>
          <img src={props.title=='ホーム' ? Mail : ''}></img>
        </div>
      </nav>
    </header>
  );
};
export default Toolbar;
