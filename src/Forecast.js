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
        iconUrl={props.data.iconUrl}
        description={props.data.description}
      />
      <ForecastDays
        day="Thursday"
        unit="C"
        minValue={11}
        maxValue={19}
        description="Beautiful sunny day without too many clouds"
      />
      <ForecastDays
        day="Friday"
        unit="C"
        minValue={11}
        maxValue={19}
        description="Beautiful sunny day without too many clouds"
      />
      <ForecastDays
        day="Saturday"
        unit="C"
        minValue={11}
        maxValue={19}
        description="Beautiful sunny day without too many clouds"
      />
    </div>
  );
}
