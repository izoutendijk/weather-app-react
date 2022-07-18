import React from "react";
import TempValue from "./TempValue";
import "./TempMinMax";
import "./TempCurrent.css";
import TempMinMax from "./TempMinMax";

export default function tempCurrent(props) {
  return (
    <div className="tempCurrent">
      <TempValue
        className="tempValue"
        currentTemp={props.data.temperature}
        unit="C"
      />
      <TempMinMax
        unit="C"
        valueMin={props.data.tempMin}
        valueMax={props.data.tempMax}
      />
    </div>
  );
}
