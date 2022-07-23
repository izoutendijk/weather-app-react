import React from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";
import axios from "axios";

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

  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "a68381d4faf2a13b11b7dc8945964fc7";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(handleResponse);

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
