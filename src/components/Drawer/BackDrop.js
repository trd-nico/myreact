import React from "react";
import "./BackDrop.css";

const BackDrop = props => {
  console.log("the back drop value is ", props);
  return <div className="backdrop" onClick={props.click} />;
};
export default BackDrop;
