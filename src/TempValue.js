import React from "react";

export default function TempValue(props) {
  return (
    <div>
      <span className="tempValue">{props.currentTemp}</span>
      <span className="tempUnits">º{props.unit}</span>
    </div>
  );
}
