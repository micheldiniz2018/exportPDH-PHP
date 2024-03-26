import React from "react";
import Burnes from "./burnes";
import Oven from "./oven";

/**
 * draw stove base component
 */
const Stove = ({ lighters }) => {
  return (
    <div className="stove">
      {lighters.map((value) => (
        <Burnes
          color_button = {value}
        />
      ))}
      <div className="lighter-oven">
        <div className="lighter-oven-small">
        </div>
      </div>
      <div className="oven-body">
        <Oven 
        />
      </div>
      <div className="right_foot">
      </div>
      <div className="left_foot">
      </div>
    </div>
    
  );
};

export default Stove;
