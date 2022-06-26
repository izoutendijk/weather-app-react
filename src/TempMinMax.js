import React from "react";

export default function TempMinMax(props) {
  return (
    <div className="temp row">
      <div className="col-4 empty"></div>
      <div className=" col-2 tempTodayMin">
        <span id="min-value">
          Min: {props.valueMin}º{props.unit}
        </span>
      </div>
      <div className="col-2 tempTodayMax">
        <span id="max-value">
          Max:{props.valueMax}º{props.unit}
        </span>
      </div>
      <div className="col-4 empty"></div>
    </div>
  );
}
