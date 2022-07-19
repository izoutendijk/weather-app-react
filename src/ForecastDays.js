import React from "react";

export default function ForecastDays(props) {
  return (
    <div className="row align-items-center forecastEl">
      <div className="col-2 day">{props.day}</div>
      <div className="col-1 weather">
        <img src={props.iconUrl} id="icon" alt="" />
      </div>
      <div className="col-2 tempMinMax">
        <span id="min-value">
          Min: {props.minValue}º{props.unit}
        </span>
        <br />
        <span id="max-value">
          Max: {props.maxValue}º{props.unit}
        </span>
      </div>
      <div className="col-6 description">{props.description}</div>
    </div>
  );
}
