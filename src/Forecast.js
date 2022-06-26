import React from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ForecastDays
        day="Wednesday"
        unit="C"
        minValue={11}
        maxValue={19}
        description="Beautiful sunny day without too many clouds"
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
