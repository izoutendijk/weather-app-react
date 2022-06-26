import React from "react";
import TempValue from "./TempValue";
import "./TempMinMax";
import "./TempCurrent.css";
import TempMinMax from "./TempMinMax";

export default function tempCurrent() {
  return (
    <div className="tempCurrent">
      <TempValue className="tempValue" currentTemp={19} unit="C" />
      <TempMinMax unit="C" valueMin={11} valueMax={19} />
    </div>
  );
}
