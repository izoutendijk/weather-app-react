import React from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";

export default function Forecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.date.getDay()];

  return (
    <div className="Forecast">
      <ForecastDays
        day={day}
        unit="C"
        minValue={props.data.tempMin}
        maxValue={props.data.tempMax}
        icon={props.data.icon}
        description={props.data.description}
      />
      <ForecastDays
        day={day}
        unit="C"
        minValue={props.data.tempMin}
        maxValue={props.data.tempMax}
        icon={props.data.icon}
        description={props.data.description}
      />
      <ForecastDays
        day={day}
        unit="C"
        minValue={props.data.tempMin}
        maxValue={props.data.tempMax}
        icon={props.data.icon}
        description={props.data.description}
      />
      <ForecastDays
        day={day}
        unit="C"
        minValue={props.data.tempMin}
        maxValue={props.data.tempMax}
        icon={props.data.icon}
        description={props.data.description}
      />
    </div>
  );
}
