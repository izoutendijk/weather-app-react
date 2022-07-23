import React, { useState } from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

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
    console.log(response.data.list);
    setForecast(response.data.list);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastDays
          day={day}
          unit="C"
          minValue={Math.round(forecast[0].main.temp_min)}
          maxValue={Math.round(forecast[0].main.temp_max)}
          icon={props.data.icon}
          description={props.data.description}
        />
      </div>
    );
  } else {
    let apiKey = "a68381d4faf2a13b11b7dc8945964fc7";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
